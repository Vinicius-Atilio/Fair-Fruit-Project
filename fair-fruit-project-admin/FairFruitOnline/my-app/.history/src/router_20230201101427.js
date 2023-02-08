import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from 'pages/Client';
import Products from 'pages/Products';
import User from 'pages/User';
import UserProvider from 'app/assets/contexts/Client';
import FruitsProvider from 'app/assets/contexts/Fruits';
import CartProvider from 'app/assets/contexts/Cart';
import SignUpProvider from 'app/assets/contexts/User';
import Cart from 'pages/Cart';
import Fruits from 'pages/Fruits';
import { PaymentProvider } from 'app/assets/contexts/Payment';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <PaymentProvider>
                    <UserProvider>
                        <SignUpProvider>
                            <Route exact path="/">
                                <User />
                            </Route>

                            <Route path="/clients">
                                <Client />
                            </Route>

                            <CartProvider>
                                <FruitsProvider>
                                    <Route path="/products">
                                        <Products />
                                    </Route>

                                    <Route path="/fruits">
                                        <Fruits />
                                    </Route>
                                </FruitsProvider>

                                <Route path="/orders">
                                    <Cart />
                                </Route>
                            </CartProvider>
                        </SignUpProvider>
                    </UserProvider>
                </PaymentProvider>
            </Switch>
        </Router>
    );
}
