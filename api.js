var cookieSession = require('cookie-session')
const express = require('express');


import bodyParser from 'body-parser';
import router from './routes';

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session',
    keys: ['key1','key2'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))


app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
    


// var workbook = XLSX.readFile('Book1.xlsx');
// //console.log(workbook);
// let first_sheet_name = workbook.SheetNames[0];
// var address_of_cell = 'A1';

// /* Get worksheet */
// var worksheet = workbook.Sheets[first_sheet_name];

// /* Find desired cell */
// var desired_cell = worksheet[address_of_cell];

// /* Get the value */
// var desired_value = (desired_cell ? desired_cell.v : undefined);
// console.log(desired_value);


// var worksheet = workbook.Sheets[workbook.SheetNames[0]];
// var container = document.getElementById('tableau');
// container.innerHTML = XLSX.utils.sheet_to_html(worksheet);
