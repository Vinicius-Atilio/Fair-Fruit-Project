import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from 'pages/Client';
import FairFruit from 'pages/FairFruit';
import User from 'pages/SingUp';
import UserProvider from 'common/contexts/Client';
import FruitsProvider from 'common/contexts/Fruits';
import CartProvider from 'common/contexts/Cart';
import SignUpProvider from 'common/contexts/User';
import Cart from 'pages/Cart';
import Orgs from 'pages/Orgs';
import { PaymentProvider } from 'common/contexts/Payment';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <PaymentProvider>
                    <SignUpProvider>
                        <Route exact path="/">
                            <User />
                        </Route>
                        <UserProvider>
                            <CartProvider>
                                <FruitsProvider>
                                    <Route path="/products">
                                        <FairFruit />
                                    </Route>
                                    <Route path="/clients">
                                        <Client />
                                    </Route>
                                    <Route path="/orgs">
                                        <Orgs />
                                    </Route>                               
                                    <Route path="/orders">
                                        <Cart />
                                    </Route>
                                </FruitsProvider>
                            </CartProvider>
                        </UserProvider>
                    </SignUpProvider>
                </PaymentProvider>
            </Switch>
        </Router>
    );
}
