import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function VerifyAdmin(){

  const navigate = useNavigate();

  const admin = {
    username: "ayanib",
    password: "rafidlikesminecraft"
  };

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setLogin(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const resetInput = () => {
    Array.from(document.querySelectorAll('input')).forEach(
        input => input.value = ""
    );
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(login.username === admin.username && login.password === login.password) navigate("/admin");
    else {
      resetInput();
      setLogin({
        username: "",
        password: ""
      });
      alert("Username or Password incorrect.");
    }
  }

  useEffect(() => {
    console.log(login);
  }, [login]);

  const inputStyle = "rounded-lg p-3";
  const inputContainerStyle = "flex flex-col w-1/4";

  return (
      <form className={"bg-red-400 h-full flex flex-col justify-evenly items-center"}>

        <div className={inputContainerStyle}>
          <label htmlFor={"username"}>
            Username
          </label>
          <input
              name={"username"}
              type={"text"}
              className={inputStyle}
              autoComplete={"off"}
              onChange={handleChange}
          />
        </div>

        <div className={inputContainerStyle}>
          <label htmlFor={"password"}>
            Password
          </label>
          <input
              name={"password"}
              type={"text"}
              className={inputStyle}
              autoComplete={"off"}
              onChange={handleChange}
          />
        </div>

        <input
            type={"submit"}
            value={"Login"}
            className={"bg-red-200 rounded-lg p-3 px-9 cursor-pointer select-none"}
            onClick={handleSubmit}
        />
      </form>
  )
}