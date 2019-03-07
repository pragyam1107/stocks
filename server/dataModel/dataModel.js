var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var defaultSchemaOption = {
	timestamps : {
		createdAt : 'createdon',
		updatedAt : 'modifiedon'
	}, 
	toObject: {
		virtuals: true
	},
	toJSON: {
		virtuals: true 
	},
	usePushEach: true
};

var model = new Schema ({

    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },

    date: Date,

    symbol: String,

    open: Number,

    close: Number,

    low: Number,

    high: Number,

    volume: Number

}, defaultSchemaOption);

module.exports = mongoose.model('prices', model);