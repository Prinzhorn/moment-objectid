var moment = require('moment');

module.exports = function() {
	moment.fn.toObjectId = function() {
		var timestamp = this.unix();
		var hexTimestamp = timestamp.toString(16);

		//It's a date before 01.01.1970, set the timestamp to the smallest possible value.
		if(timestamp < 0) {
			hexTimestamp = '00000000';
		}
		//The date exceed what can fit into eight hex chars. Set it to the largest possible value.
		else if(hexTimestamp.length > 8) {
			hexTimestamp = 'ffffffff';
		}
		//Simply left pad with zeros to always get eight chars.
		else {
			hexTimestamp = ('00000000' + hexTimestamp).substr(-8);
		}

		var objectId = hexTimestamp + '0000000000000000';

		return objectId;
	};
};