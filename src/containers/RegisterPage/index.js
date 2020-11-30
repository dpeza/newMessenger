import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signup, signupWithCreateTeam, signupWithJoinTeam } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.css';
import { NavLink, Link } from 'react-router-dom';
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [stage, setStage] = useState('accountCreation')
  const [accountCreationVisible, setAccountCreationVisible] = useState('block')
  const [optionButtonsVisible, setOptionButtonsVisible] = useState('none')
  const [groupCreationVisible, setGroupCreationVisible] = useState('none')
  const [groupJoiningVisible, setGroupJoiningVisible] = useState('none')
  const [groupCreationName, setGroupCreationName] = useState('')
  const [groupId, setGroupId] = useState('')
  useState(() => {
    if(stage === 'accountCreation') {
      setAccountCreationVisible('block')
      setOptionButtonsVisible('none')
    }
    else if(stage === 'optionButtons') {
      setAccountCreationVisible('none')
      setOptionButtonsVisible('block')
      setGroupCreationVisible('none')
      setGroupJoiningVisible('none')
    }
    else if(stage === 'groupCreation') {
      setOptionButtonsVisible('none')
      setGroupCreationVisible('block')
    }
    else if(stage === 'groupJoin') {
      setOptionButtonsVisible('none')
      setGroupJoiningVisible('block')
    }
  }, [stage])
  const registerJoiningUser = (e) => {
    
    e.preventDefault();

    const user = {
      firstName, lastName, email, password, groupId
    }
    
    dispatch(signupWithJoinTeam(user))
  }

  const registerCreatingUser = (e) => {
    e.preventDefault();

    const user = {
      firstName, lastName, email, password, groupCreationName
    }
    dispatch(signupWithCreateTeam(user))
  }
  if(auth.authenticated){
    return <Redirect to={`/home`} />
  }

  return(
    <Layout>
      <div className="registerContainer">
        <Card>
        <div className='SignUpHeader'>Sign up</div>

          <form onSubmit={registerUser} className="inputs">

          
          <input 
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="textFields"
            />

            <input 
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="textFields"
            />

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
              <button className='button'>Sign up</button>
            </div>
            <div className="haveAccount">
              Already Made An Account? <NavLink to={'/signin'}>Sign in</NavLink>
            </div>


          </form>
        </Card>
      </div>
      <div id = 'optionButtons'>
        <Card>
          <button onClick = {() => {setStage("groupJoin")}}>Join Group</button>
          <button onClick = {() => {setStage('groupCreation')}}>Create Group</button>
        </Card>
      </div>
      <div id = 'createGroup'>
        <Card>
          <form>
          <input 
              name="groupCreationName"
              type="text"
              value={groupCreationName}
              onChange={(e) => setGroupCreationName(e.target.value)}
              placeholder="Group Name"
              className="textFields"
            />
          </form>
          <button onClick = {() => {registerCreatingUser()}}>Create Group</button>
        </Card>
      </div>
    </Layout>
  )

}

export default RegisterPage