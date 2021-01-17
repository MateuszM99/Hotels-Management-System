import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";

const AdminRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem('jwtToken');
        if(token != null){
            let tokenExpiration = jwt_decode(token).exp;
            let tokenRole = jwt_decode(token).role;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000 || tokenRole !== 'ADMIN'){
              setIsAuthenticated(false)
            } else {
              setIsAuthenticated(true);
              console.log(tokenRole)
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

export default AdminRoute;