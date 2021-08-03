
module.exports = function (req, res, next) {
	// Status code for 401 is Unauthorized
	console.log('req', req.formData)
	if (!req.user) return res.status(401).json('Unauthorized');
	next();
};
