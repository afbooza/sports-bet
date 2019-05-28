import models from '../models';

class PlayerController {
    createPlayer(req, res) {
        if(!req.body.title) {
            return res.status(400).send({
                success:'false',
                message:'title is required'
            });
        }

        const Player = {
            title: req.body.title,

        }

        models.Player.create(Player).then((Player) => {
            return res.status(201).send({
                success: 'true',
                message: 'Player added successfully',
                Player
            })
        })
        
    }

}

const playerController = new PlayerController();
export default playerController;

