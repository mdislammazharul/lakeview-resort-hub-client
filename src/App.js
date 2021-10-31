import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import './App.css'
import Booking from './Pages/Booking/Booking/Booking';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddServices from './Pages/AddServices/AddServices';

function App() {
  return (
    <div className="App.css">
      <AuthProvider>
        <Router>
          <Header></Header>
          <div id="body">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute exact path="/booking/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute exact path="/addServices">
                <AddServices></AddServices>
              </PrivateRoute>
              <PrivateRoute exact path="/manageOrders">
                <ManageOrders></ManageOrders>
              </PrivateRoute>
              <PrivateRoute exact path="/manageAllOrders">
                <ManageAllOrders></ManageAllOrders>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
          <div id="footer">
            <Footer></Footer>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
