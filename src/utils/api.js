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
    console.error(err.response);
    console.error(err.message);
    return null;
  }
};

export const searchPerson = async (keyword) => {
  try {
    const resp = await axios.get(`${baseURl}/arrendatario/search/${keyword}`);

    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};

export const getLocations = async () => {
  try {
    const resp = await axios.get(`${baseURl}/ubicacion`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};

export const searchLocation = async (keyword) => {
  try {
    const resp = await axios.get(`${baseURl}/ubicacion/search/${keyword}`);

    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};

export const registerAdmin = async (email, pass) => {
  try {
    const resp = await axios.post(`${baseURl}/register`, {
      email,
      pass,
    });

    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};
