import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem('jwtToken');
        if(token != null){
            let tokenExpiration
            try {
                console.log(jwt_decode(token))
                tokenExpiration = jwt_decode(token).exp;
            } catch (Err) {
                console.log('sadasd')
            }
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
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

export default PrivateRoute;