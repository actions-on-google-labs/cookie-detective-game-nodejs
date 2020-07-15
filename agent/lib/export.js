const datastore = require('./datastore');

module.exports = (req, res) => {
  const { entity } = req.query;

  if (!entity) return res.status(400).send('Missing entity');

  return datastore
    .get(entity)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      if (typeof err === 'object') err = err.toString();
      res.status(500).send(err);
    });
};
