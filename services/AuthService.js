import Axios from "axios";
import * as yup from "yup";

// Validation form
export const signInUserSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Passwords must be at least 6 characters long.")
});

const useAuthService = () => {

  const signIn = (data) => {
    return Axios({
        url: `https://reqres.in/api/login`,
        method: 'POST',
        data: data,
      //   headers: {
      //     token: `Bearer ${localStorage.getItem(TOKEN)}`,
      //   },
      });     
  }

  const signUp = (data) => {
    return Axios({
        url: `https://reqres.in/api/register`,
        method: 'POST',
        data: data,
      //   headers: {
      //     token: `Bearer ${localStorage.getItem(TOKEN)}`,
      //   },
      });     
  }

  return {
    signIn,
    signUp
  }
}

export default useAuthService;