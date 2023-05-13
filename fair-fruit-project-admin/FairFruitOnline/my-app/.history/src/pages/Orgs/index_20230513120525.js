import { Voltar, Container, CustomCard, ProductsContainer,
    StyledForm, InputForm, InputContainer, ImageContainer, Image } from './styles';
import { useHistory } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import configAxios from "utils/config";
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { useForm } from 'react-hook-form';
import { useFruitsContext } from 'common/contexts/Fruits';

function Orgs() {
    const {fruit, updatedFruitList, addFruit, deleteFruit, products} = useFruitsContext();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const history = useHistory();

    const getProducts = async () => {
        await products();
      };

    const deleteProduct = async (productId) => {
        setIsLoading(true);
        await deleteFruit(productId);
        setIsLoading(false);
    };

    const onSubmit = async (data) => {
        setIsLoading(true);

        await addFruit({
            name: data.name,
            price: data.price,
            image: data.image
        });
        
        setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [updatedFruitList]);
  

    return (
        <Container>
            <Voltar onClick={history.goBack} />
            <h2>Fruits</h2>
            <CustomCard>
                <InputContainer>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <InputForm>
                            <TextField
                                id="outlined-name"
                                name="name"
                                label="Name"
                                type="text"
                                {...register("name", { required: "Name is required." })}
                                error={Boolean(errors.name)}
                                helperText={errors.name?.message}/>
                        </InputForm>
                        <InputForm>
                            <TextField
                                id="outlined-price"
                                name="price"
                                label="Price KG"
                                {...register("price", { required: "Price is required." })}
                                error={Boolean(errors.price)}
                                helperText={errors.price?.message}/>
                        </InputForm>
                        <InputForm>
                            <TextField
                                id="outlined-image"
                                name="image"
                                label="Image URL"
                                {...register("image", { required: "Image URL is required." })}
                                error={Boolean(errors.image)}
                                helperText={errors.image?.message}/>
                        </InputForm>
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            color="primary"
                        >
                            Add
                        </Button>
                        {/* <ImageContainer>
                            <Image
                                className="image-container"
                                src={productImage}
                                alt="Preview of the product"
                            />
                        </ImageContainer> */}
                    </StyledForm>
                </InputContainer>
            </CustomCard>
            <>
                {fruit.length === 0 ? ( isLoading ) : 
                ( isLoading ? <CircularProgress color="success"/> :
                fruit.map((product) => (
                    <ProductsContainer className="get" key={product.id}>
                    <div>
                        <img
                        src={`${product.image}`}
                        alt={`${product.name}`}
                        width="80"
                        height="70"
                        />
                        <p>
                        {product.name} - $ {product.price?.toFixed(2)} <span>Kg</span>
                        </p>
                    </div>
                    <div>
                        <IconButton onClick={() => deleteProduct(product.id)} color="primary">
                        <DeleteForeverIcon />
                        </IconButton>
                    </div>
                    </ProductsContainer>
                ))
                )}
            </>
        </Container>
    );
}

export default Orgs;
