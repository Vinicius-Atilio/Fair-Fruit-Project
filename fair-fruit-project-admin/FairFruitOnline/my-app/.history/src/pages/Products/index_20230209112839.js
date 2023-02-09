import { Container, Header, CustomCard, List } from './styles';
import { useContext, useEffect } from 'react';
import { UserContext } from 'common/contexts/Client';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarFruits';
import feira from './products.json';
import Product from 'components/Product';
import axios from 'axios';
import { useState } from 'react';
import { post } from 'react-ajax/src/request';
import { useCartContext } from 'common/contexts/Cart';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';


function Products({name, id}) {
    const { balance = 0 } = useContext(UserContext);
    const [product, setProduct] = useState([]);
    // const { cart, addProduct, removeProduct, totalValue } = useCartContext();
    // const hasItem = cart.find((item) => item.id === product.id);

    // const getPosts = async () => {
    //     try {
    //         const response = await axios.get("/api/products");
    //         const data = response.data;
    //         setProduct(data);
    //         console.log(data);
    //     }catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getPosts();
    // }, [])

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
                <div>
                    <h2>Products:</h2>
                </div>
            </Header>
                {/* {product.length === 0 ? <p>Loading...</p>: (
                    product.map((products) => (
                        <List>
                            <CustomCard className="get" key={products.id}>
                                <div>
                                <img
                                    src={`${products.image}`}
                                    alt={`${products.name}`}
                                    width="80" height="70"/>
                                <p>
                                    {products.name} - $ {products.price?.toFixed(2)} <span>Kg</span>
                                </p>
                                </div>
                                <div>
                                    <IconButton
                                        onClick={() => removeProduct(product.id)}
                                        disabled={!hasItem || hasItem.quantity === 0}
                                        color="secondary"
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    {hasItem?.quantity || 0}
                                    <IconButton
                                        // disabled={totalValue > balance}
                                        onClick={() =>
                                            addProduct({
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                quantity: product.quantity
                                            })}
                                        color="primary"
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </div>
                            </CustomCard>
                        </List>
                    ))
                )} */}
                <List>
                    
                        <Product
                        {...product}
                        key={product.id}
                        />

                </List>
        </Container>
    );
}

export default Products;
