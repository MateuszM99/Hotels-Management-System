import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";

const EmployeeRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let user = localStorage.getItem('jwtToken');
        if(user != null){
            let token = user.token;
            let tokenExpiration = jwt_decode(token).exp;
            let tokenRole = jwt_decode(token).role;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000 && tokenRole != 'ADMIN' || tokenRole != 'EMPLOYEE'){
              setIsAuthenticated(false)
            } else {
              setIsAuthenticated(true);
            }
        } else {
          setIsAuthenticated(false)
        }
  },[isAuthenticated])

  if(isAuthenticated == null){
    return (
      <div>Waiting</div>
    )
  }
  return (
    <Route {...rest} render={props =>
      !isAuthenticated  ? (
        <Redirect to='/signIn'/>
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};

export default EmployeeRoute;