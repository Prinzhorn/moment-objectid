moment-objectid
===============

Format a `moment` instance as ObjectId-string for use in MongoDB queries.

As per spec an `ObjectId` contains a timestamp as the first eight bytes.
Think of it this way: the `_id` field in MongoDB already contains a `createdAt` timestamp. Yay. And it's already index. Double yay!

This module extends the `Moment` prototype and adds a new `toObjectId` methods (note that it returns a `string`, to an instance of `ObjectId` (because this depends on the driver you use)).

Installation
-----

First do a `npm install moment-objectid`. Then `require` and execute it (the module returns a function).

```js
//Patch the moment prototype.
require('moment-objectid')();
```

**Note: ** `moment-objectid` does **not** list `moment` as dependency, because then it would only patch its own dependency and not necessarily the `moment` you use in your code.

Usage
-----

Example using Mongoose (if you're not using Mongoose, you need to wrap the returned string in a `ObjectId`. Mongoose does that for us.).

```js
var moment = require('moment');

var BlogPost = /* Some Mongoose model definition */;

//All posts from October 2012.
var query = {
	_id: {
		$gte: moment('2012-10-01').toObjectId(),
		$lte: moment('2012-10-01').endOf('month').toObjectId()
	}
};

BlogPos.find(query).exec(function(err, posts) {
	//Do stuff with the posts. Or don't. I'm not telling you how to live your life.
});
```