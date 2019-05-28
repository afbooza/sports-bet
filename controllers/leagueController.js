import models from '../models';

class LeagueController {
    createLeague(req, res) {
        if(!req.body.title) {
            return res.status(400).send({
                success:'false',
                message:'title is required'
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

}

const leagueController = new LeagueController();
export default leagueController;

