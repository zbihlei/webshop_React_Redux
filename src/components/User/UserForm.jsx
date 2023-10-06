import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import UserSignUpForm from './UserSignUpForm';
import { toggleForm } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css'

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm }= useSelector(({user})=>user);

  const closeForm =()=>{
    dispatch(toggleForm(false));
  }


  return (

      showForm ? 
      <div className={styles.overlay} onClick={closeForm}>
        <UserSignUpForm closeForm={closeForm}/>
      </div>  
      : <></>
    
  )
  
}

export default UserForm