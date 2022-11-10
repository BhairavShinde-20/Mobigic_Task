import React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaEmail } from 'react-icons/fa';

import { PersonFill } from "react-bootstrap-icons";
import { EmojiNeutral } from "react-bootstrap-icons";
import { LockFill } from "react-bootstrap-icons";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submithandler = (e) => {
    const dataObj = {
      username,
      email,
      password,
    };
    console.log(dataObj);
    axios.post("http://localhost:5000/registeruser", dataObj);
    setUserName("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <div className="con_2">
          <h3 className="heading">Welcome to Mobigic® Technologies</h3>
          <p className="about">
            We believe the beauty of an application is not only in the user
            interface but also in the code, performance and maintainability. We
            participate in the entire software development life cycle of
            solutions.
          </p>
        </div>
        <div className="inputs">
          <h3 className="heading">Register </h3>

          <form onSubmit={handleSubmit(Submithandler)}>
            <div className="icon">
              <PersonFill className="main_icon" />
              <input
                {...register("username", { required: true })}
                placeholder="Enter User Name"
                type="text"
                className="inputinfo"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {errors.username && !username && (
              <p className="err">*User Name is required.</p>
            )}

            <div className="icon">
              <EmojiNeutral className="main_icon" />
              <input
                {...register("email", { required: true })}
                placeholder="Enter Email"
                type="email"
                className="inputinfo"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && !email && (
              <p className="err">*Email is required.</p>
            )}

            <div className="icon">
              <LockFill className="main_icon" />
              <input
                {...register("password", { required: true })}
                placeholder="Enter Your Password"
                type="password"
                className="inputinfo"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {errors.password && !password && (
              <p className="err">*Password is required.</p>
            )}

            <input type="submit" value="Register" className="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
