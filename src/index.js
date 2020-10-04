const cors = require('cors');
const express = require('express');
const routes = require('./routes');

require('./database');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT);