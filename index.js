// const sequelize = require("./utils/database")

var sequelize

import("./utils/database")
    .then(orm => sequelize = orm)
    .catch(err => {
        console.log(err)
        process.exit(1)
    })


const Author = require("./models/author")
const Blog = require("./models/blog")

Author.hasMany(Blog)

sequelize.sync({ force: true }).then(res => console.log(res)).catch(err => console.log(err))