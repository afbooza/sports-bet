const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres@localhost:5432/sportsbet'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT * FROM public."Leagues";', (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows)
  }
  pool.end()
})

// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })