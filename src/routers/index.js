const newsRoute = require('./news')
const siteRouter = require('./site')

function route(app) {
    app.use('/news', newsRoute)
    app.use('/', siteRouter)
}

module.exports = route;
