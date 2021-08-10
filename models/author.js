// const Sequelize = require("sequelize")
// const sequelize = require("../utils/database")
import { Sequelize } from "sequelize"
import * from "../index.s"
import sequelize from "../utils/database.js"


// import("./utils/database")
//     .then(orm => { var sequelize = orm })
//     .catch(err => {
//         console.log(err)
//         process.exit(1)
//     })


const Author = sequelize.define("author", {
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

module.exports = Author