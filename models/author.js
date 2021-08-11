import { Sequelize } from "sequelize"
import sequelize from "../utils/database.js"

const Author = sequelize.define("author", {
    // id: {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     allowNull: false,
    //     primaryKey: true
    // },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Author