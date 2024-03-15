module.exports = (app) => {
    require('./User')(app)
    require('./Todo')(app)
    require('./auth')(app)
}