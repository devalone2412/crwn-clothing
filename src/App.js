import './App.css';
import HomePage from "./pages/homepage/HomePage";
import {Redirect, Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/Sign-In-And-Sign-Up";
import {useEffect} from "react";
import {connect} from "react-redux";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import {checkUserSession} from "./redux/user/user.action";

const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route exact path='/signIn'
                       render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
