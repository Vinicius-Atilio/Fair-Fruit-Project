import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
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
    const history = useHistory();

    const {auth, loading} = useAuth();


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
                                    <Route path="/products" element ={auth ? <FairFruit/> : history.push('/')}/>
                                    <Route path="/orgs" element ={auth ? <Orgs/> : history.push('/')}/>
                                    <Route path="/orders" element ={auth ? <Cart/> : history.push('/')}/>                               
                                </FruitsProvider>
                            </CartProvider>
                    </UserUpProvider>
                </PaymentProvider>
            </Switch>
        </Router>
    );
}
