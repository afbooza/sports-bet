import express from 'express';
import db from '../db/db';
import todoController from './../controllers/todoController';
import leagueController from '../controllers/leagueController';

const router = express.Router();



// GET ALL
router.get('/api/v1/todos', todoController.getAllTodos);

// GET ONE 
router.get('/api/v1/todos/:id', todoController.getTodo);

// CREATE
router.post('/api/v1/todos', todoController.createTodo);

// DELETE
router.delete('/api/v1/todos/:id', todoController.deleteTodo);

// UPDATE
router.put('/api/v1/todos/:id', todoController.updateTodo);


router.post('/api/v1/league', leagueController.createLeague);

export default router;
