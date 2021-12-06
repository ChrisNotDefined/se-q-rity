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

export const verifyToken = async () => {
  try {
    const resp = await axios.get(`${baseURl}/verifyToken`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
}

export const newPet = async (nombre, especie, edad, fotografia) => {
  try {
    const resp = await axios.post(`${baseURl}/mascota`, {
      nombre,
      especie,
      edad,
      fotografia
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};


export const newPersonnel = async (nombre, telefono, cargo, fotografia, diasTrabajo) => {
  try {
    const resp = await axios.post(`${baseURl}/personal-domestico`, {
      nombre,
      telefono,
      cargo,
      fotografia,
      diasTrabajo
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newCompanions = async (nombre, telefono, fotografia, apellidos) => {
  try {
    console.log(nombre)
    console.log(telefono)
    console.log(fotografia)
    console.log(apellidos)
    const resp = await axios.post(`${baseURl}/acompanianante`, {nombre,telefono, fotografia, apellidos});
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newUbicacion = async (calle, ciudad, colonia, latitud, longitud, numero) => {
  try {
    const resp = await axios.post(`${baseURl}/ubicacion`, {
      calle,
      ciudad,
      colonia,
      latitud,
      longitud,
      numero
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newResident = async (nombre, telefono, fotografia, apellidos, correo, mascotas, personal, acompañantes) => {
  try {
    const resp = await axios.post(`${baseURl}/arrendatario`, {
      nombre,
      apellidos,
      fotografia,
      telefono,
      correo,
      mascotas,
      personal,
      acompañantes
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newHouse = async (arrendatario, visitantes, ubicacion) => {
  try {
    const resp = await axios.post(`${baseURl}/ubicacion`, {
      arrendatario,
      visitantes,
      ubicacion
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};
