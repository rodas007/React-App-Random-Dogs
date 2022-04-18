import React from 'react'
import { useForm } from "react-hook-form";
import { API } from '../../services/api';
import petImg from '../../assets/pet-register.png'

export default function RegisterPage () {
    const { register, handleSubmit } = useForm();

    // const user = {
    //     name: 'Abel',
    //     username: 'abelcabezaroman',
    //     email: 'contacto@abelcabezaroman.com',
    //     password: 'ABCedf123'
    // }

    const onSubmit = formData => {
        API.post('register', formData).then(res => {
            console.log('Register user',);
        })
    }


    return (
        <div className="log-form">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign UP </h2>
         

          <div className="fadeIn first">
            <img
              src= {petImg}
              id="icon"
              alt="User Icon"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
          <input
              type="text"
              className="fadeIn second"
              placeholder="Name"
              id="name"
              defaultValue=""
              {...register("name", {
                required: true,})}/>
            <input
              type="text"
              className="fadeIn second"
              placeholder="Email"
              id="email"
              defaultValue=""
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              defaultValue={""}
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
            />
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="/login">
              LOGIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
