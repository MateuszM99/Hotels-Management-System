import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header'
import Hotels_List from './components/Hotels_List/Hotels_List'
import Search from './components/Search/Search'
import Hotel_Details from './components/Hotel_Details/Hotel_Details'
import Hotel_Management from './components/Hotel_Management/Hotel_Management';
import Room_Reservation_Form from './components/Room_Reservation_Form/Room_Reservation_Form';
import Reservations from './components/Reservations/Reservations';
import PrivateRoute from './PrivateRoute';
import axios from 'axios';

function App() {

  if(localStorage.getItem('userData') != null){
    const userData = JSON.parse(localStorage.getItem('userData'));
  
      axios.interceptors.request.use(
        config => {
          config.headers.authorization = `Bearer ${userData.token} `;
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );
    }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signIn">
            <SignIn/>
          </Route>
          <Route path="/signUp">
            <SignUp/>
          </Route>
          <Route path="/hotel/:hotelName">
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <Header/>
              <Search/>
              <Hotel_Details/>
            </div>
          </Route>
          <Route path="/hotel/:hotelName/reserve/:roomId">
              <Header/>
              <Search/>
              <Room_Reservation_Form/>
          </Route>
          <PrivateRoute path="/management" component={Hotel_Management}/>
          <PrivateRoute path="/:username/reservations" component={Reservations}/>
          <Route path="/">
            <Header/>
            <Search/>
            <Hotels_List/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
