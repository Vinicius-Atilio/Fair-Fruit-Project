import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from 'pages/Client';
import Products from 'pages/Products';
import User from 'pages/User';
import UserProvider from 'common/contexts/Client';
import FruitsProvider from 'common/contexts/Fruits';
import CartProvider from 'common/contexts/Cart';
import SignUpProvider from 'common/contexts/User';
import Cart from 'pages/Cart';
import Fruits from 'pages/Fruits';
import { PaymentProvider } from 'common/contexts/Payment';

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
