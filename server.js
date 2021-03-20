const express = require('express');
const routes = require('./Develop/routes');
// import sequelize connection
const sequelize = require('./Develop/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// ******** CURRENTLY SET TO FALSE - IF YOU WANT THIS TO CLEAR OUT YOUR CURRENT DB, PLEASE CHANGE TO FALSE, THEN START YOUR SERVER********
sequelize.sync({ force: false }).then(() => {
  // sync sequelize models to the database, then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})  


