import sequelize from "./utils/database.js"
import Author from "./models/author.js"
import Blog from "./models/blog.js"

Author.hasMany(Blog)

sequelize.sync({ force: false })
    .then(res => {
        console.log(res)
        return Author.create({ name: "Hamada" })
    })
    .then(author => {
        console.log(`Author Created ${author}`)
        return author.createBlog({ name: "Days of My Life" }), author.id
    })
    .then((blog, authorId) => {
        console.log("Blog Created" + JSON.stringify(blog))
        return Author.findAll({ where: authorId })
    })
    .then(blogs => console.log(blogs))
    .catch(err => console.log(err))
