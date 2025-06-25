import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import AllSpots from './components/Spots/AllSpots';
import OneSpot from './components/OneSpot/OneSpot.js';
import SplashPage from "./components/SplashPage/SplashPage"
import { authenticate } from './store/session';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import UserSpots from './components/Spots/UserSpots';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>

      <NavBar />
      <Switch>
        {/* <Route>
          <Test path="/test"/>
        </Route> */}
        {/* <Route path='/login' exact={true}>
          <NavBar loaded={loaded}/>
        </Route> */}
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/spots/:spotId'>
          <OneSpot />
        </Route>
        <ProtectedRoute exact path='/:userId/spots'>
        <UserSpots />
        </ProtectedRoute>
        <Route exact path="/spots">
          <AllSpots />
        </Route>
        {/* <Route exact path="/not-found"> */}
        {/* </Route> */}


        <Route path='/' exact={true} >
          {/* <h1>My Home Page</h1> */}
          <SplashPage />
        </Route>
        <NotFound />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
