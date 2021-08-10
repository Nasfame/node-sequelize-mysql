const Sequelize = require("sequelize")
const sequelize = require("../utils/database")


console.log(sequelize)

const Blog = sequelize.define("blog", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Blog