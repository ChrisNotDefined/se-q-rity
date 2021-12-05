import axios from "axios";

const baseURl = process.env.REACT_APP_API_URL;

export const login = async (email, pass) => {
  try {
    const resp = await axios.post(`${baseURl}/login`, {
      email,
      pass,
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const searchPerson = async (keyword) => {
  try {
    const resp = await axios.get(`${baseURl}/arrendatario/search/${keyword}`);

    return resp.data;
  } catch (error) {
    console.log(error.response);
    console.log(error.message);
  }
};
