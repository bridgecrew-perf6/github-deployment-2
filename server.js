const app = require('./app');

const PORT = 3000;

// eslint-disable-next-line
const server = app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Running on ${PORT}`);
});
