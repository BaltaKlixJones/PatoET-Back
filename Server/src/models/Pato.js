const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Pato', {
        id: {
            type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extra : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        otroextra : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://www.softzone.es/app/uploads/2018/04/guest.png"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password : {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    { timestamps: false }
    );
}