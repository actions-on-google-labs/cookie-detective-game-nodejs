const datastore = require('./datastore');

module.exports = (req, res) => {
  const { entity, where } = req.body;

  return datastore
    .delete(entity, where)
    .then(() => {
      res.send('OK');
    })
    .catch(err => {
      if (typeof err === 'object') err = err.toString();
      res.status(500).send(err);
    });
};
