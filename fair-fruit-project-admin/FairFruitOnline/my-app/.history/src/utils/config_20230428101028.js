import axios from 'axios';

function ConfigAxios() {

    var api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    });

    async function auth(endpoint, params = {}) {
        const response = await api.post(endpoint, { 
          params });
        if (response.data.token){
            const jwtToken = response.data.token;
            console.log(jwtToken);
            api = new axios.create({
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': jwtToken ? `Bearer ${jwtToken}` : '',
                }
                });
        }
        return response.data;
    }

    async function post(endpoint, params = {}) {
        const response = await api.post(endpoint, { 
          params });
        return response.data;
    }
  
    async function get(endpoint, params = {}) {
      const response = await api.get(endpoint, { 
        params });
      return response.data;
    }
  
    async function put(endpoint, data = {}) {
      const response = await api.put(endpoint, data);
      return response.data;
    }
  
    async function del(endpoint, params = {}) {
      const response = await api.delete(endpoint, { params });
      return response.data;
    }

    const configAxios = {
        auth,
        post,
        get,
        put,
        del
    }

}
