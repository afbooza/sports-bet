const { Pool } = require('pg')
// import createPlayer from '../db/player_db';

class PlayerController {
    createPlayer(req, res) {
        
        if (!req.body.name) {
            return res.status(400).send({
                success: 'false',
                message: 'name is required'
            });
        }

        let player = req.body;

        //console.log(req.body);
        //console.log(res);

        const connectionString = 'postgres://postgres@localhost:5432/sportsbet';
        const pool = new Pool({ connectionString: connectionString });
        pool.connect();
        let name = player.name;

        const insert_into_player = {
            text: `INSERT INTO player (player_id, name)
                VALUES (DEFAULT,$1)
                RETURNING player_id;`,
            values: [name]
        }
        pool.query(insert_into_player)
            .then(resp => {
                let userId = resp.rows[0].player_id;
                console.log(resp.rows[0].player_id);
                req.session.userId = userId;
                return res.status(201).send({
                    success: 'true',                    
                    message: resp.rowCount + ' player added successfully'
                })
            })
            .catch(e => {
                console.error(e.stack)
                return res.status(400).send({
                    success: 'false',
                    message: 'name is required'
                })
            });
       

        pool.end();

    }

}

const playerController = new PlayerController();
export default playerController;

