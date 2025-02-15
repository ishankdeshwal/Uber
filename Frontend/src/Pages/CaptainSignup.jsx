import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignup() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [captainData, setcaptainData] = useState({});
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({
      fullname:{
          firstname:firstname,
          lastname:lastname
      },
      email: email,
      pass: pass,
    });
    setEmail('');
    setPass('');
    setfirstname('')
    setlastname('') 
  };


  return (
    <div className="h-screen p-7 flex flex-col justify-between ">
      <div>
        <img
          className="w-16 mb-7"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's our captain's name</h3>
          <div className="flex space-x-3 mb-5">
            <input
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
              className="bg-[rgb(238,238,236)]  rounded px-4 border w-full placeholder:text-base text-lgpy-2 "
              type="text"
              placeholder="First Name"
              required
            />
            <input
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
              className="bg-[rgb(238,238,236)]  rounded px-4 border w-full placeholder:text-base text-lg py-2 "
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's our captain's email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[rgb(238,238,236)] mb-5 rounded px-4 border w-full placeholder:text-base text-lg py-2 "
            type="email"
            placeholder="email@example.com"
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="bg-[rgb(238,238,236)] mb-5 rounded px-4 border w-full placeholder:text-base text-lg  py-2 "
            placeholder="password"
          />
          <button className="bg-[#111] cursor-pointer text-white mb-7 rounded px-4 border w-full placeholder:text-sm text-base  py-2 ">
            Login
          </button>
        </form>
        <p className="text-center mb-5">
          Already have a account ?
          <Link to="/captain-login" className="text-blue-600 cursor-pointer">
            Login Here
          </Link>
        </p>
      </div>
      <div>
      <p className="text-[12px] font-sm leading-tight text-center">
        This site is protected by reCAPTCHA and the <span className="underline" >Google Privacy
        Policy</span> and <span className="underline">Terms of Service apply</span>.</p>
      </div>
    </div>
  );
}

export default CaptainSignup;
