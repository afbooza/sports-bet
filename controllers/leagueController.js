const { Pool } = require('pg')

class LeagueController {
    createLeague(req, res) {
        if (!req.body.name) {
            return res.status(400).send({
                success: 'false',
                message: 'name is required'
            });
        }

        let session = req.session;

        const league = req.body;

        const connectionString = 'postgres://postgres@localhost:5432/sportsbet';
        const pool = new Pool({ connectionString: connectionString });
        pool.connect();

        let name = league.name;

        const insert_into_league = {
            text: `INSERT INTO league (league_id, name, player_id, league_owner)
                VALUES (DEFAULT,$1, $2, $3); `,
            values: [name, session.userId, session.userId]
        }
        pool.query(insert_into_league)
            .then(resp => {
                return res.status(201).send({
                    success: 'true',
                    message: resp.rowCount + ' league added successfully'
                })
            })
            .catch(e => {
                console.error(e.stack)
                return res.status(400).send({
                    success: 'false',
                    message: e.stack
                })
            })

        pool.end();


    }

    joinLeague(req, res){
        const league = req.body;

        const connectionString = 'postgres://postgres@localhost:5432/sportsbet';
        const pool = new Pool({ connectionString: connectionString });
        pool.connect();

        let name = league.name;
        console.log(name);

        let player_id = req.session.userId;

        const insert_into_league = {
            text: `  
            INSERT INTO league (name, player_id, league_owner)
                            VALUES ($1, $2, owner_id);
            `,
            values: [name, player_id]
        }
        pool.query(insert_into_league)
            .then(resp => {
                return res.status(201).send({
                    success: 'true',
                    message: 'Joined league successfully'
                })
            })
            .catch(e => {
                console.error(e.stack)
                return res.status(400).send({
                    success: 'false',
                    message: e.stack
                })
            })

        pool.end();
    }

    getAllLeagues(req, res) {
        models.League.findAll()
            .then(leagues => res.status(200).send({
                success: 'true',
                message: 'leagues retrieved successfully',
                leagues
            }));
    }

    deleteLeague(req, res) {
        const id = parseInt(req.params.id, 10);
        let todoFound;
        let itemIndex;
        // models.League.findByPk(id)
        // .then((league) => {
        //     console.log(league);
        //     if(league) {
        models.League.destroy({
            where: {
                id: id
            }
        }).then((affectedRows) => {
            if (affectedRows > 0) {
                return res.status(200).send({
                    success: 'true',
                    message: affectedRows + ' record(s) deleted'
                });
            }
            return res.status(404).send({
                success: 'false',
                message: 'league does not exist',
                affectedRows
            });
        })
        //     }
        // })
    }
}

const leagueController = new LeagueController();
export default leagueController;

