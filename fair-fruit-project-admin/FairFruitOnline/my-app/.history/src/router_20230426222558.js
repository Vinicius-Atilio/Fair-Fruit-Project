import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingUp from 'pages/SingUp';
import FairFruit from 'pages/FairFruit';
import SingIn from 'pages/SingIn';
import FruitsProvider from 'common/contexts/Fruits';
import CartProvider from 'common/contexts/Cart';
import UserUpProvider from 'common/contexts/Auth';
import Cart from 'pages/Cart';
import Orgs from 'pages/Orgs';
import { PaymentProvider } from 'common/contexts/Payment';

export default function Routes() {
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
                                    <Route path="/products">
                                        <FairFruit />
                                    </Route>
                                    <Route path="/singup">
                                        <SingUp />
                                    </Route>
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
