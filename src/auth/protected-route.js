
import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () =>{
          return (
              <div className='flex justify-center items-center my-24'>
                <Loading/>
              </div>
            
          )
      } ,
    })}
    {...args}
  />
);

export default ProtectedRoute;