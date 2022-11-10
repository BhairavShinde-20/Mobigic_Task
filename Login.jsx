import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons";
import { LockFill } from "react-bootstrap-icons";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/loginuser")
      .then((res) => {
        const rawData = res.data;
        setUserData(rawData);
      })
      .catch((err) => console.log(err));
  });
  // console.log(userdata)

  const Submithandler = (e) => {
    const dataObj = {
      username,
      password,
    };
setUserName("");
setPassword("");

    console.log(dataObj);
    axios.post("http://localhost:5000/loginuser", dataObj);
    const filteredData = userdata.filter((row) => {
      if (row.username === username && row.password === password) {
        alert("Login Successfully");
        return { row };
      }
      //  else if(row.username !== username && row.password !== password){
      //   alert("Wrong username or password");

      //  }


    });
    // console.log(filteredData);
    const filteredId = filteredData[0]._id;
    //    console.log(filteredId)

    navigate(`/profile/${filteredId}`);
  };

  return (
    <>
      <div className="container">
        <div className="con_2">
          <h3 className="heading">
            Welcome to Mobigic® Technologies 
          </h3>
          <p className="about">
            We believe the beauty of an application is not only in the user
            interface but also in the code, performance and maintainability. We
            participate in the entire software development life cycle of
            solutions.
          </p>
        </div>
        <div className="inputs">
          <h3 className="heading">Login </h3>

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

            <input type="submit" value="Login" className="submit" />
          </form>
          <p>
            Don't have Account then
            <button>
              <a href="http://localhost:3000/register">Register</a>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
