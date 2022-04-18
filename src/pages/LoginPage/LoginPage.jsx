import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { JwtContext } from "../../contexts/JwtContext";
import { API } from "../../services/api";
import "./LoginPage.scss";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);

  const onSubmit = (formData) => {
    API.post("login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setJwt(true);
    });
  };

  return (
    <div className="log-form">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
          

          <div className="fadeIn first">
            <img
              src="https://images.vexels.com/media/users/3/144928/isolated/lists/ebbccaf76f41f7d83e45a42974cfcd87-ilustracion-de-perro.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="fadeIn second"
              placeholder="Email"
              id="email"
              defaultValue="test@test.com"
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
              defaultValue={"ABCedf123"}
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
            />
            <input type="submit" className="fadeIn fourth" value="Login" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="/register">
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
