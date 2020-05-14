require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(logger());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Testing');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(
        `\n\nListening on ${this.address().address}${this.address().port}\n\n`,
    );
});
