import { Sequelize } from "sequelize"
import sequelize from "../utils/database.js"

const Blog = sequelize.define("blog", {
    // id: { //by default
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

export default Blog