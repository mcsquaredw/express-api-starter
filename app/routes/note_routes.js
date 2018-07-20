var ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
  app.get('/notes/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const details = { '_id': new ObjectID(id) };
      const item = await db.collection('notes').findOne(details);
      res.send(item);
    } catch (err) {
      console.log(err);
      res.send({ 'error': 'An error has occurred' });
    }
  });

  app.post('/notes', async (req, res) => {
    const note = {
      title: req.body.title,
      body: req.body.body
    };

    try {
      const results = await db.collection('notes').insert(note);
      res.send(results.ops[0]);
    } catch (err) {
      res.send({ 'error': 'An error has occurred' });
    }
  });
}
