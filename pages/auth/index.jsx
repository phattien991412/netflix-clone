import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Input from "@/components/Input";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { NotificationToast } from "@/modules/Notification";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}

const Auth = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const [valueInput, setValueInput] = useState({
    email: "",
    name: "",
    password: ""
  });

  const [variant, setVariant] = useState("login");

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const checkPass = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.{8,})\S+$/;

  const handleOnchange = (value, type) => {
    setValueInput({
      ...valueInput,
      [type]: value
    });
  };

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(
    async (e) => {
      e?.preventDefault();
      if (
        !regexEmail.test(valueInput.email) ||
        !checkPass.test(valueInput.password)
      )
        return;
      setIsLogin(true);
      try {
        const res = await signIn("credentials", {
          email: valueInput.email,
          password: valueInput.password,
          redirect: false,
          callbackUrl: "/profile"
        });

        if (res.status === 200) {
          NotificationToast.fire({
            toast: true,
            position: "top-right",
            icon: "success",
            title: `Login success`
          });
          router.push("/profile");
        } else {
          NotificationToast.fire({
            toast: true,
            position: "top-right",
            icon: "error",
            title: `${res?.error}`
          });
        }
        setIsLogin(false);
      } catch (error) {
        console.log(error);
        setIsLogin(false);
        NotificationToast.fire({
          toast: true,
          position: "top-right",
          icon: "error",
          title: `${error?.response?.data.error}`
        });
      }
    },
    [valueInput.name, valueInput.email, valueInput.password, router]
  );

  const register = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLogin(true);
      try {
        const res = await axios.post("/api/register", {
          email: valueInput.email,
          name: valueInput.name,
          password: valueInput.password
        });

        if (res.status === 200) {
          NotificationToast.fire({
            toast: true,
            position: "top-right",
            icon: "success",
            title: `Welcome to Netflix`
          });
          login();
        } else {
          NotificationToast.fire({
            toast: true,
            position: "top-right",
            icon: "error",
            title: `${res?.error}`
          });
        }
        setIsLogin(false);
      } catch (error) {
        setIsLogin(false);
        NotificationToast.fire({
          toast: true,
          position: "top-right",
          icon: "error",
          title: `${error?.response?.data.error}`
        });
      }
    },
    [valueInput.name, valueInput.email, valueInput.password, login]
  );

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="absolute top-0 right-0 text-white bg-black/70 lg:block hidden h-auto w-[420px] ">
        <div className="p-10">
          <p>
            Hi, if you received a warning from your browser, don't worry. <br /><br />
            You can use a fake email/password to sign up, and your password will
            be completely hashed. <br /> <br /> Alternatively, you can use this account to log
            in:
          </p>
          <p>
            Email: admin@gmail.com <br />
            Password: Admin@123
          </p>
        </div>
      </div>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="w-28 h-14" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <form onSubmit={variant === "login" && login}>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    id="name"
                    type="text"
                    label="Username"
                    value={valueInput.name}
                    onChange={(e) => handleOnchange(e.target.value, "name")}
                  />
                )}
                <Input
                  id="email"
                  type="email"
                  label="Email address or phone number"
                  value={valueInput.email}
                  onChange={(e) => handleOnchange(e.target.value, "email")}
                />
                {!regexEmail.test(valueInput.email) && valueInput.email ? (
                  <span className="text-red-500">Wrong email format</span>
                ) : null}
                <Input
                  type="password"
                  id="password"
                  label="Password"
                  value={valueInput.password}
                  onChange={(e) => handleOnchange(e.target.value, "password")}
                />
                {valueInput.password &&
                  !checkPass.test(valueInput.password) && (
                    <span className="text-red-500">
                      Password must contains 1 capital, 1 special, 1 number, 8+
                      characters.{" "}
                    </span>
                  )}
              </div>
              <button
                onClick={variant === "login" ? login : register}
                type="submit"
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              >
                {isLogin ? (
                  <span className="grid place-items-center">
                    {" "}
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />{" "}
                  </span>
                ) : variant === "login" ? (
                  "Sign in"
                ) : (
                  "Register"
                )}
              </button>
            </form>

            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profile" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profile" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition text-black"
              >
                <FaGithub size={32} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
