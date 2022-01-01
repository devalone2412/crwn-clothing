import './App.css';
import HomePage from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/Sign-In-And-Sign-Up";
import {Component} from "react";
import {auth} from "./firebase/firebase.utils";

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signIn' component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
