import axios from 'axios';

const gpApi = axios.create({
    baseURL: 'http://localhost:8080/api/users',
});

export const getUser = async () => {
    const response = await gpApi.get('/products');
    return response.data;
};

export const addUser = async (user) => {
    return await gpApi.post('/users', user);
};

export const updateProduct = async (product) => {
    return await gpApi.patch(`/products/${product.id}`, product);
};

export const deleteProduct = async ({ id }) => {
    return await gpApi.delete(`/products/${id}`, id);
};

export default gpApi;
