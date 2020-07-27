import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signin, isLoggedInUser } from '../../actions';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

/**
* @author
* @function LoginPage
**/
var x = 1;
const wrongPass = () => {
  x= 0;
  return x
}
const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);




  const userLogin = (e) => {
    e.preventDefault();

    if(email == ""){
      alert("Email is required");
      return;
    }
    if(password == ""){
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));
    




  }


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }



  return(
    <Layout className="layout">
      <div className="loginContainer">
        <Card>
          <div className= "LoginLabel">
          Login
          </div>
          <form onSubmit={userLogin} wrongPass className="inputs">
            
            <input 
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="textFields"
              
            />

            <input 
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="textFields"
              
              
            />


            <div>
              <button className="button">Login</button>
            </div>
            <div className="noAccount">
              Don't have an account? <NavLink to={'/signup'}>Sign up</NavLink>
            </div>
          </form>
          
        </Card>
      </div>
    </Layout>
   )

 }

export default LoginPage