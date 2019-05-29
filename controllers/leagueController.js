import models from '../models';

class LeagueController {
    createLeague(req, res) {
        if (!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'title is required'
            });
        }

        const league = {
            title: req.body.title,

        }

        models.League.create(league).then((league) => {
            return res.status(201).send({
                success: 'true',
                message: 'league added successfully',
                league
            })
        })

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

