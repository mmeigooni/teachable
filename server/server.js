const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const hooks = require('./api/hooks');
//const sequelize = require('sequelize');
const db = require('./api/db.config');
//const routes = require('./api/routes.main');

app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '../client')));

//app.use('/api', routes);
app.post('/api/login', hooks.userLogin);
app.post('/api/signup', hooks.userPost);
app.get('/api/teachable-hook', hooks.teachGet);
app.post('/api/teachable-hook', hooks.teachPost);
app.get('/api/delete', hooks.teachDelete);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
