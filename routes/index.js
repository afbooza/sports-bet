import express from 'express';

import playerController from '../controllers/playerController'
import leagueController from '../controllers/leagueController'

const router = express.Router();

// // GET ALL
// router.get('/api/v1/todos', todoController.getAllTodos);

// // GET ONE 
// router.get('/api/v1/todos/:id', todoController.getTodo);

// // CREATE
// router.post('/api/v1/todos', todoController.createTodo);

// // DELETE
// router.delete('/api/v1/todos/:id', todoController.deleteTodo);

// // UPDATE
// router.put('/api/v1/todos/:id', todoController.updateTodo);


// router.post('/api/v1/league', leagueController.createLeague);

// router.get('/api/v1/league', leagueController.getAllLeagues);

// router.delete('/api/v1/league/:id', leagueController.deleteLeague);
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
router.post('/api/v1/player', playerController.createPlayer)

router.post('/api/v1/league', leagueController.createLeague);

router.post('/api/v1/join-league', leagueController.joinLeague)

export default router;
