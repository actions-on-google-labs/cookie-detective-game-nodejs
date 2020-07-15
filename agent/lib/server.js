module.exports = ({ port = 80, ssl }, listener) => {
	const protocol = ssl ? 'https' : 'http';
	const server = require(protocol).createServer(ssl || {}, listener);

	// eslint-disable-next-line no-console
	server.listen(port, () => console.log(`Server listening on ${protocol}://localhost:${port}`));
};
