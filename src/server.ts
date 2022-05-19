import { router } from './routes';

const express = require('express');

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, console.log('\x1b[32m%s\x1b[0m', '\n ✔ Server is running!\n'));
