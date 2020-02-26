const server = require('./server.js');

const PORT = process.env.PORT || 4000;

const apiRoutes = require('./api/apiRoutes');

server.use('/api', apiRoutes)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});