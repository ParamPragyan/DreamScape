/* eslint-disable react/prop-types */
import { useState } from "react";
const SignUp = ({ showAuthHandler }) => {
  const [register, setRegister] = useState(true);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    
    if (register) {
      const userName = userNameRef.current.value;
      if (userName.length === 0) {
        toast.error("Username is missing", {
          className: "text-5xl",
        });
        return;
      } else if (email.length === 0) {
        toast.error("Email is wrong", {
          className: "text-5xl",
        });
      }
      userCtx.register({ userName, email, password }).then(() => {
        showAuthHandler();
      });
    } else {
      userCtx.login({ email, password }).then(() => {
        showAuthHandler();
      });
    }
  };
  const regStyle = register ? "text-bgl" : "text-slate-50";
  const loginStyle = !register ? "text-bgl" : "text-slate-50";
  return (
    <div className="h-[100vh] w-full flex items-center justify-center ">
      <div className="w-fit h-fit px-16 py-20 gap-12 bg-bgd border border-[#ec3737] flex flex-col items-center justify-center rounded-3xl">
      <div className="flex gap-2 pb-5 ">
        <div className={`${regStyle} text-4xl text-[#ec3737] border-r-2 px-2  border-r-[#ec3737]`}>
          SignUp
        </div>
        <div className={`${loginStyle} text-[#ec3737] text-4xl`}>Login</div>
      </div>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        {register && (
          <div className="flex flex-col">
            <input
              className="text-4xl text-[#ec3737] placeholder:pl-2 bg-transparent border-2 border-[#ec3737] rounded-full px-24 py-10"
              placeholder="Username"
              type="text"
            ></input>
          </div>
        )}

        <div className="flex flex-col">
          <input
            type="text"
            className="text-4xl text-[#ec3737] placeholder:pl-2 bg-transparent border-2 border-[#ec3737] rounded-full px-24 py-10"
            placeholder="Email"
          ></input>
        </div>
        <div className="flex flex-col">
          <input
            type="password"
            className="text-4xl text-[#ec3737] placeholder:pl-2 bg-transparent border-2 border-[#ec3737] rounded-full px-24 py-10"
            placeholder="Password"
          ></input>
        </div>
        <div className="w-full flex items-center justify-center pt-8">
          <button
            onClick={() => {}}
            text={register ? "SignUp" : "Login"}
          ></button>
        </div>
      </form>
      <p className="text-slate-50 text-3xl">
        Already a member?{" "}
        <button
          onClick={() => {
            setRegister((state) => {
              return !state;
            });
          }}
          className="text-[#ec3737] text-3xl"
        >
          {register ? "Login Now" : "SignUp Now"}
        </button>
      </p>
    </div>
    </div>
    
  );
};

export default SignUp;