const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
const syncDatabase = require('./scripts/syncDatabase')
const testDatabase = require('./scripts/testDatabase')


const indexRouter = require('./routes/index');

const app = express();

// (async () => {
//   if (process.env.NODE_ENV !== 'production') { // Executa apenas fora de produção
//     console.log('Sincronizando banco e inserindo dados de teste...');
//     await syncDatabase(); // Sincroniza o banco
//     await testDatabase(); // Adiciona dados de teste
//     console.log('Banco configurado com sucesso!');
//   }
// })();

//Executar em ordem
syncDatabase();
(async () => {
  await testDatabase('teste', 'teste@teste.com');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
