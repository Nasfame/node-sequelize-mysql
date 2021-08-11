import { Sequelize } from "sequelize"

const sequelize = new Sequelize("sequelize", "root", "1234", {
    dialect: "mysql",
    host: "localhost" //is by default
})

export default sequelize


