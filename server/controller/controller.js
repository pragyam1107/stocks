var dataModel = require('../dataModel/dataModel');

function getData(req, res, next) {

    var query = {};
    var skip = req.query.skip || 0;
    limit = 500;
    // var limit = req.query.limit || 20;

    dataModel.find(query).skip(skip).limit(limit).exec(function (err, data) {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });

}

function findSymbol(req, res, next) {

    var query = {"symbol": req.params.symbol};

    var skip = req.query.skip || 0;
    var limit = req.query.limit || 20;

    dataModel.find(query).skip(skip).limit(limit).exec(function (err, data) {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });

}

module.exports = {
    getData,
    findSymbol
};