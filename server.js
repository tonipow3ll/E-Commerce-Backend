const express = require('express');
const routes = require('./Develop/routes');
// import sequelize connection
const sequelize = require('./Develop/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// ******** CURRENTLY SET TO true - RUNNING THIS FILE WILL CREATE A NEW DB WITH THESE MODELS, TO SEED, PLEASE CHANGE THIS TO FALSE, THEN RUN NPM RUN SEEDS IN TERMINAL********
sequelize.sync({ force: true }).then(() => {
  // sync sequelize models to the database, then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})  


