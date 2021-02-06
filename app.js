const express = require('express');
const app = express();
const methodOverride = require('method-override')
const path = require('path');
const calendarRouter = require ("./src/routers/calendar");
const indexRouter = require ("./src/routers/index");
const pdfRouter = require ("./src/routers/pdf")
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, './src/views'));


app.use("/", indexRouter);
app.use("/pdf", pdfRouter);
app.use("/calendar", calendarRouter);
//app.use('/detail', detailRouter);

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})
