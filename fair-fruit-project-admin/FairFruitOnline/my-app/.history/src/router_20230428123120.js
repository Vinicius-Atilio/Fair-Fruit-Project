import { BrowserRouter as Router, Route, Switch, Redirect, Navigate } from 'react-router-dom';
import SingUp from 'pages/SingUp';
import FairFruit from 'pages/FairFruit';
import SingIn from 'pages/SingIn';
import FruitsProvider from 'common/contexts/Fruits';
import CartProvider from 'common/contexts/Cart';
import LoginProvider from 'common/contexts/Login';
import Cart from 'pages/Cart';
import Orgs from 'pages/Orgs';
import { PaymentProvider } from 'common/contexts/Payment';
import { useAuth } from 'hooks/useAuth';
import RegisterProvider from 'common/contexts/Register';

export default function Routes() {

    const {loading} = useAuth();

    const auth = true;

    console.log("loading");
    if (loading){
        <p>Loading...</p>
    }

    console.log(auth);

    return (
        <Router>
            <Switch>
                <PaymentProvider>
                    <RegisterProvider>
                        <LoginProvider>
                            <Route exact path="/">
                                <SingIn />
                            </Route>
                                <CartProvider>
                                    <FruitsProvider>
                                        <Route path="/singup">
                                            <SingUp />
                                        </Route>
                                        <Route path="/products">
                                            <FairFruit/>
                                        </Route>
                                        <Route path = "/orgs">
                                            <Orgs/>
                                        </Route>
                                        <Route path="/orders"> 
                                            <Cart/>
                                        </Route>                            
                                    </FruitsProvider>
                                </CartProvider>
                        </LoginProvider>
                    </RegisterProvider>
                </PaymentProvider>
            </Switch>
        </Router>
    );
}
