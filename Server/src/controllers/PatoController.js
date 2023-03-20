const { Pato } = require("../db.js");

const getPatoController = async () => {
  const pato = await Pato.findAll();
  return pato;
};

const getIDPatoController = async (id) => {
  const patoID = await Pato.findByPk(id);
  return patoID;
};
const postPatoController = async (
  name,
  profession,
  description,
  image,
  extra,
  otroextra,
  email,
  phone,
  password
) => {
  if ((!name || !profession, !description || !password || !email )) {
    throw Error("Missing data");
  }
  const pato = await Pato.create({
    name,
    profession,
    description,
    image,
    extra,
    otroextra,
    email,
    phone,
    password,
  });

  return pato;
};

const putPatoController = async (
  id,
  {  name,
    profession,
    description,
    image,
    extra,
    otroextra,
    email,
    phone,
    password, },
  res
) => {
  const patoUpdate = await Pato.findByPk(id);
  !patoUpdate
    ? res.status(400).json({ error: "Pato not found" })
    : patoUpdate.update({
      name,
      profession,
      description,
      image,
      extra,
      otroextra,
      email,
      phone,
      password,
      });
  return patoUpdate;
};

module.exports = {
  getPatoController,
  getIDPatoController,
  postPatoController,
  putPatoController,
};