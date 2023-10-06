import React, { useState } from 'react'


import styles from '../../styles/User.module.css'


const UserSignUpForm = ({closeForm}) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  }); 

  const handleChange =({target: {value, name}})=>{
    setValues({...values, [name]: value})
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>X</div>
        <div className={styles.title}>Sign UP</div>

        <form  className={styles.form}>
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
                type="email" 
                onChange={handleChange} 
                required/>

                   <input name='password'
                placeholder='your password'
                value={values.password} 
                autoComplete='off'
                type="email" 
                onChange={handleChange}
                required />

                   <input name='avatar'
                placeholder='your avatar'
                value={values.avatar} 
                autoComplete='off'
                type="email" 
                onChange={handleChange}
                required />
          </div>
          <div className={styles.link}>I already have an account</div>

          <button type='submit' className={styles.submit}>Create an account</button>
        </form>
    </div>
  )
}

export default UserSignUpForm