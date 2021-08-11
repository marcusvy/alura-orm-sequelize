const nivelRouter = require("./nivelRouter");
const pessoasRouter = require("./pessoasRouter");
const turmaRouter = require("./turmaRouter");

module.exports = (app) => {
  app.use(
    pessoasRouter,
    nivelRouter,
    turmaRouter
  );
}