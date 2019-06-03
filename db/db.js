// const { Pool, Client } = require('pg')


// const connectionString = 'postgres://postgres@localhost:5432/sportsbet';

// const pool = new Pool();


// function createPlayer(player)
// {
//   pool.connect();
//   let name = player.name
//   const insert_into_player = {
//     text: `INSERT INTO player (player_id, name)
//             VALUES (DEFAULT,$1); `,
//     values:[name]
//   }
//   pool.query(insert_into_player)
//   .then(res => console.log(res.rows[0]))
//   .catch(e => console.error(e.stack))

//   pool.end();
// }


// // function insertIntoSongMethod(name, plays_since_2016, plays_since_2018, score) {
// //     const insert_into_song = {
// //       text: 'INSERT INTO song (song_id, name, plays_since_2016, plays_since_2018, score) VALUES (DEFAULT, $1, $2, $3, $4);',
// //       values: [name, plays_since_2016, plays_since_2018, score] 
// //     }
   
// //     pool.query(insert_into_song)
// //     .then(res => console.log(res.rows[0]))
// //     .catch(e => console.error(e.stack))
  
// // };

// //insertIntoSongMethod('here', 23, 43, 2);


// export { insertIntoSongMethod }



