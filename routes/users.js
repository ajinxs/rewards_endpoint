import express from 'express';
import { getDate, getNewUser, getIdUser, patchUser, getUserFilter } from '../controllers/users.js';

const router = express.Router();

router.get('/users', getNewUser);
router.get('/users/:id/rewards?at=2020-03-19T12:00:00Z', getIdUser);
router.get('/:date', getDate);

router.patch('/users/1/rewards/:id/redeem', patchUser);
router.get('/users/:filter', getUserFilter);

//router.post('/', postUser); 

export default router;