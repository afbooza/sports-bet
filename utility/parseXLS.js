var XLSX = require('xlsx');
const { Pool, Client } = require('pg');

var workbook = XLSX.readFile('Book1.xlsx');
var sheet_name_list = workbook.SheetNames;
let objects = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
const connectionString = 'postgres://postgres@localhost:5432/sportsbet';
const pool = new Pool({
    connectionString: connectionString,
});
const insertIntoSongMethod = (name, plays_since_2016, plays_since_2018, score) => {
    const insert_into_song = {
      text: 'INSERT INTO song (song_id, name, plays_since_2016, plays_since_2018, score) VALUES (DEFAULT, $1, $2, $3, $4);',
      values: [name, plays_since_2016, plays_since_2018, score] 
    }
   
    pool.query(insert_into_song)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))  
};

pool.connect();

for (let row of objects) {
    if (row) {
        insertIntoSongMethod(row["name"], row["plays_since_2016"], row["plays_since_2018"], row["score"]);
    }    
}

//pool.end();

//name, plays_since_2016, plays_since_2018, score

//insertIntoSongMethod('here', 23, 43, 2);