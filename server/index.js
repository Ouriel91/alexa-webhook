const service = require('./service');

const config = {
    logger: null,
		basicAuth: null
};

// Create an express app instance
var express_app = service.init(config);

const port = process.env.PORT || 3000;

//server listen to port
const server = express_app.listen(port, ()=> {
	console.log(`Server running at port ${port}`);
})

module.exports = server;
