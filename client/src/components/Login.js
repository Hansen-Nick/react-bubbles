import React, {useEffect} from "react";
import useForm from 'react-hook-form'
import Axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const {register, handleSubmit} = useForm();

  const onSubmit = (values) => {
    Axios.post('http://localhost:5000/api/login', {username: values.name, password: values.password})
      .then( res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Please log in!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='login-form pure-form pure-form-stacked'>
        <input className='pure-input-1' type="text" placeholder="Username" name='name' ref={register}/>
        <input type="text" placeholder="Password" className='pure-input-1' name='password' ref={register}/>
        <button className='pure-button'>Submit!</button>
      </form>
    </>
  );
};

export default Login;
