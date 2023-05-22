import { DOMAIN } from "@/util";
import Axios from "axios";

const useBaseService = () => {
  const post = async (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: model,
    //   headers: {
    //     token: `Bearer ${localStorage.getItem(TOKEN)}`,
    //   },
    });
  };

  const get = async (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  const put = async (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
    //   headers: {
    //     token: "Bearer " + localStorage.getItem(TOKEN),
    //   },
    });
  };

  const deleted = async (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: model,
    //   headers: {
    //     token: `Bearer ${localStorage.getItem(TOKEN)}`
    //   },
    });
  };


  return {
    post,
    get,
    put,
    deleted
  };
};

export default useBaseService;