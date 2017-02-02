const parking = require('../data/parking');

module.exports = (app) => {
  app.get('/api/parking', (req, res) => {
    res.status(200).send({ data: parking });
  });
};
