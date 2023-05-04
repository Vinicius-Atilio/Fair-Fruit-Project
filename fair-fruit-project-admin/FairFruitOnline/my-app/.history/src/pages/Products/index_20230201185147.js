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
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Controll-Allow-Methods':
                     'GET, POST, PUT, DELETE, Access, Content-Type, Authorization, Acept, Origin, X-Requested-With',
                }
            })
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
