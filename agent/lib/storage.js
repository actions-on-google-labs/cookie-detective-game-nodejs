const { Storage } = require('@google-cloud/storage');
const config = require('../config/storage.json');

const projectId = config.project_id;
const storage = new Storage({
	projectId,
	credentials: config,
});
const UPLOAD_OPTIONS = { gzip: true };

module.exports = {
	store(name, data) {
		return new Promise((resolve, reject) => {
			storage
				.bucket(projectId)
				.file(name)
				.createWriteStream(UPLOAD_OPTIONS)
				.on('error', reject)
				.on('finish', resolve)
				.end(Buffer.from(data));
		});
	},

	get(name) {
		return new Promise((resolve, reject) => {
			const chunks = [];
			storage
				.bucket(projectId)
				.file(name)
				.createReadStream()
				.on('data', chunk => chunks.push(chunk))
				.on('error', reject)
				.on('end', () => resolve(Buffer.concat(chunks)));
		});
	},
};
