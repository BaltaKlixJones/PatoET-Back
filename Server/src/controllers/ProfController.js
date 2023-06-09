const { Professional } = require("../db.js");

const getProfessionalController = async () => {
  const allProfessionals = await Professional.findAll();
  return allProfessionals;
};

const getIDProfessionalController = async (id) => {
  const professionalID = await Professional.findByPk(id);
  return professionalID;
};

const deleteProfessionalController = async (id) => {
  const professionalDelete = await Professional.findByPk(id);
  if (!professionalDelete) {
    return res.status(400).json({ error: "Professional not found" });
  }
  return professionalDelete.destroy();
};

const postProfessionalController = async (
    name,
    profession,
    description,
    image,
    extra, 
    otroextra,
) => {
  if ((!name || !profession, !description)) {
    throw Error("Missing data");
  }
  const professional = await Professional.create({
    name,
    profession,
    description,
    image,
    extra, 
    otroextra,
  });
  return professional;
};
const putProfessionalController = async (
  id,
  { name,
    profession,
    description,
    image,
    extra, 
    otroextra, }
) => {
  const professionalUpdate = await Professional.findByPk(id);
  !professionalUpdate
    ? res.status(400).json({ error: "Professional not found" })
    : professionalUpdate.update({
      name,
      profession,
      description,
      image,
      extra, 
      otroextra,
      });
  return professionalUpdate;
};

module.exports = {
  getProfessionalController,
  getIDProfessionalController,
  deleteProfessionalController,
  postProfessionalController,
  putProfessionalController
};