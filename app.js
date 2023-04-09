const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const AppError = require('./utils/app.Error');
const globalErrorHandler = require('./controllers/error.controller');

const routerAuth = require('./routes/auth.routes');
const routerTransfer = require('./routes/transfer.routes');

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', routerAuth);
app.use('/api/v1/transfers', routerTransfer);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`cannot find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
