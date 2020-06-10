var mongoose = require('mongoose')
var bcryptjs = require("bcryptjs");

module.exports = {
    index: function(req, res) {
        res.json({success : true})
    },
}