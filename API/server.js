const app = require('./app');
const port = process.env.port || 5000;

 app.listen(port, () => console.log(`API rodando na porta: ${port}`));

module.exports = app;