import express from 'express';
import * as userCtrl from './user.ctrl';

const user = express.Router();

user.post('/add', userCtrl.addUser);
user.post('/update', userCtrl.addUser);

export default user;
