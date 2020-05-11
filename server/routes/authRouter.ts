import * as express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

router.post('/registration', authController.registration);
router.get('/login', authController.login)

export default router;