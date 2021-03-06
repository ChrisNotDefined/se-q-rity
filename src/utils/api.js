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
    return { error: err };
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
};

export const getResident = async (id) => {
  try {
    const resp = await axios.get(`${baseURl}/arrendatario/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};

export const getCompanion = async (id) => {
  try {
    const resp = await axios.get(`${baseURl}/acompanianante/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};

export const getWorker = async (id) => {
  try {
    const resp = await axios.get(`${baseURl}/personal-domestico/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};

export const getPet = async (id) => {
  try {
    const resp = await axios.get(`${baseURl}/mascota/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
    console.error(error.message);
    return { error };
  }
};

export const newPet = async (nombre, especie, edad, fotografia) => {
  try {
    let formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("especie", especie);
    formData.append("edad", edad);
    formData.append("fotografia", fotografia);
    const resp = await axios.post(`${baseURl}/mascota`, formData);
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newPersonnel = async (nombre, telefono, cargo, fotografia, diasTrabajo) => {
  try {
    let formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("telefono", telefono);
    formData.append("cargo", cargo);
    formData.append("fotografia", fotografia);
    formData.append("diasTrabajo", diasTrabajo);
    const resp = await axios.post(`${baseURl}/personal-domestico`, formData);
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newCompanions = async (nombre, telefono, fotografia, apellidos) => {
  try {
    var formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("telefono", telefono);
    formData.append("fotografia", fotografia);
    formData.append("apellidos", apellidos);
    const resp = await axios.post(`${baseURl}/acompanianante`, formData);
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
      numero,
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newResident = async (
  nombre,
  telefono,
  fotografia,
  apellidos,
  correo,
  mascotas,
  personal,
  acompa??antes
) => {
  try {
    var formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("telefono", telefono);
    formData.append("fotografia", fotografia);
    formData.append("apellidos", apellidos);
    formData.append("correo", correo);
    let personall = "";
    if (personal.length !== 0 && personal.length !== -1) {
      for (var a = 0; a < personal.length; a++) {
        if (a === personal.length - 1) {
          personall = personall + personal[a];
        } else {
          personall = personall + personal[a] + ";";
        }
      }
    }
    let mascotass = "";
    if (mascotas.length !== 0 && mascotas.length !== -1) {
      for (var b = 0; b < mascotas.length; b++) {
        if (b === mascotas.length - 1) {
          mascotass = mascotass + mascotas[b];
        } else {
          mascotass = mascotass + mascotas[b] + ";";
        }
      }
    }
    let acompa??antess = "";
    if (acompa??antes.length !== 0 && mascotas.length !== -1) {
      for (var c = 0; c < acompa??antes.length; c++) {
        if (c === acompa??antes.length - 1) {
          acompa??antess = acompa??antess + acompa??antes[c];
        } else {
          acompa??antess = acompa??antess + acompa??antes[c] + ";";
        }
      }
    }
    formData.append("mascotas", mascotass);
    formData.append("personal", personall);
    formData.append("acompa??antes", acompa??antess);
    formData.append("pagos", "");
    const resp = await axios.post(`${baseURl}/arrendatario`, formData);
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};

export const newHouse = async (arrendatario, ubicacion) => {
  try {
    const resp = await axios.post(`${baseURl}/residencia`, {
      arrendatario,
      //visitantes,
      ubicacion,
    });
    return resp.data;
  } catch (err) {
    console.log(err.response);
    console.log(err.message);
    return null;
  }
};
