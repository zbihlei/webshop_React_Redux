import React, { useState } from 'react'
import { loginUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import styles from '../../styles/User.module.css'


const UserLoginForm = ({closeForm, toggleCurrentFormType}) => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  }); 

  const dispatch = useDispatch();

  const handleChange =({target: {value, name}})=>{
    setValues({...values, [name]: value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    const isEmpty = Object.values(values).every((val) => val);

    if(!isEmpty) return;

    dispatch(loginUser(values));
    closeForm();
    
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>X</div>
        <div className={styles.title}>Log in</div>

        <form onSubmit={handleSubmit}  className={styles.form}>
          <div className={styles.group}>
            
              <input name='email'
                placeholder='your email'
                value={values.email} 
                autoComplete='off'
                type="email" 
                onChange={handleChange} 
                required/>

                   <input name='password'
                placeholder='your password'
                value={values.password} 
                autoComplete='off'
                type="password" 
                onChange={handleChange}
                required />

            
          </div>
          <div className={styles.link} onClick={()=>toggleCurrentFormType('signup')}>Create an account</div>

          <button type='submit' className={styles.submit}>Login</button>
        </form>
    </div>
  )
}

export default UserLoginForm