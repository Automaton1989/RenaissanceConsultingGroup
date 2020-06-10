var mongoose = require('mongoose')

var myriathon = require('../controllers/users.js')
const path = require('path')
module.exports = function(app) {
    app.get('/myriathon/home', function(req, res) 
    {
        myriathon.index(req, res)
    })
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}