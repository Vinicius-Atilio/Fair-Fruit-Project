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
import ErrorProvider from 'common/contexts/Error';
import OrderProvider from 'common/contexts/Order';
import Orders from 'pages/Order';

export default function Routes() {

    const {auth, loading} = useAuth();
    if (loading){
        <p>Loading...</p>
    }

    return (
        <Router>
            <Switch>
                <OrderProvider>
                    <PaymentProvider>
                        <ErrorProvider>
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
                                                <Route path="/product">
                                                    <FairFruit/>
                                                </Route>
                                                <Route path = "/org">
                                                    <Orgs/>
                                                </Route>
                                                <Route path="/cart"> 
                                                    <Cart/>
                                                </Route>
                                                <Route path="/order">
                                                    <Orders/>
                                                </Route>                          
                                            </FruitsProvider>
                                        </CartProvider>
                                </LoginProvider>
                            </RegisterProvider>
                        </ErrorProvider>
                    </PaymentProvider>
                </OrderProvider>
            </Switch>
        </Router>
    );
}
