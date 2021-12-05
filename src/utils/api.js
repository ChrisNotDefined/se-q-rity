import axios from "axios";

const baseURl = process.env.REACT_APP_API_URL;

export const login = async (email, pass) => {
  const resp = await axios.post(`${baseURl}/login`, {
    email,
    pass,
  });

  return resp.data;
};
