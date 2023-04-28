import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SingUp from 'pages/SingUp';
import FairFruit from 'pages/FairFruit';
import SingIn from 'pages/SingIn';
import FruitsProvider from 'common/contexts/Fruits';
import CartProvider from 'common/contexts/Cart';
import UserUpProvider from 'common/contexts/Auth';
import Cart from 'pages/Cart';
import Orgs from 'pages/Orgs';
import { PaymentProvider } from 'common/contexts/Payment';
import { useAuth } from 'hooks/useAuth';

export default function Routes() {

    const {auth, loading} = useAuth()

    console.log("loading");
    if (loading){
        <p>Loading...</p>
    }

    return (
        <Router>
            <Switch>
                <PaymentProvider>
                    <UserUpProvider>
                        <Route exact path="/">
                            <SingIn />
                        </Route>
                            <CartProvider>
                                <FruitsProvider>
                                    <Route path="/singup">
                                        <SingUp />
                                    </Route>
                                    <Route path="/products" element ={auth? <FairFruit /> : <Redirect to ="/"/>}/>
                                        

                                    <Route path="/orgs">
                                        <Orgs />
                                    </Route>                               
                                    <Route path="/orders">
                                        <Cart />
                                    </Route>
                                </FruitsProvider>
                            </CartProvider>
                    </UserUpProvider>
                </PaymentProvider>
            </Switch>
        </Router>
    );
}