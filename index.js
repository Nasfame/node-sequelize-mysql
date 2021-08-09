const sequelize = require("./util/database")

const Author = require("./models/author")
const Blog = require("./models/blog")

Author.hasMany(Blog)

sequelize.sync({ force: true }).then(res => console.log(res)).catch(err => console.log(err))