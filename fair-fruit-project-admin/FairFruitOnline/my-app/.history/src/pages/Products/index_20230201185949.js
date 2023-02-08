import { Container, Header, List } from './styles';
import { useContext, useEffect } from 'react';
import { UserContext } from 'common/contexts/Client';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarFruits';
import feira from './products.json';
import Product from 'components/Product';
import { useState } from 'react';
import axios from 'axios';

// module.exports = async (req, res, next) => {
//     const getPosts = async() => {
//         try {
//             const response = await axios.get("http://localhost:8080/api/products",{
//                 headers: {

//                 }
//             })
//             .then( (res) => {
//                 console.log("Retorno da API:");
//                 console.log(res.data);
//                 console.next();
//             })
//             .catch( (error) => {
//                 return res.status(401).json({
//                     error: true,
//                     message: "Permissao negada!"
//                 });
//             });
//             console.log(response);
//         } catch (error){
//             console.log(error)
//         }
//     };
// }

function Products() {
    const { name, balance = 0 } = useContext(UserContext);
    const [fruits, setFruits] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/products",{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                
              });

            const data = response.data;
            console.log(data);
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <Container>
            <NavBarFruits />
            <NavBarCart />
            <Header>
                <div>
                    <h2> Hi {name}!</h2>
                    <h3> Balance: ${balance.toFixed(2)}</h3>
                </div>
                <p>Find the best products!</p>
            </Header>
            <List>
                <h2>Products:</h2>
                {feira.map((product) => (
                    <Product {...product} key={product.id} />
                ))}
            </List>
        </Container>
    );
}

export default Products;
