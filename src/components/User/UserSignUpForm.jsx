import React, { useState } from 'react'
import { createUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import styles from '../../styles/User.module.css'


const UserSignUpForm = ({closeForm, toggleCurrentFormType}) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  }); 

  const dispatch = useDispatch();

  const handleChange =({target: {value, name}})=>{
    setValues({...values, [name]: value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
   
    const isEmpty = Object.values(values).every((val) => val);

    if(!isEmpty) return;

    dispatch(createUser(values));
    closeForm();
    
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>X</div>
        <div className={styles.title}>Sign UP</div>

        <form onSubmit={handleSubmit}  className={styles.form}>
          <div className={styles.group}>
            
              <input name='email'
                placeholder='your email'
                value={values.email} 
                autoComplete='off'
                type="email" 
                onChange={handleChange} 
                required/>

                   <input name='name'
                placeholder='your name'
                value={values.name} 
                autoComplete='off'
                type="text" 
                onChange={handleChange} 
                required/>

                   <input name='password'
                placeholder='your password'
                value={values.password} 
                autoComplete='off'
                type="password" 
                onChange={handleChange}
                required />

                   <input name='avatar'
                placeholder='your avatar'
                value={values.avatar} 
                autoComplete='off'
                type="url" 
                onChange={handleChange}
                required />
          </div>
          <div className={styles.link} onClick={()=> toggleCurrentFormType('login')}>I already have an account</div>

          <button type='submit' className={styles.submit}>Create an account</button>
        </form>
    </div>
  )
}

export default UserSignUpForm