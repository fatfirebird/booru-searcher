import * as express from 'express';
import imagesController from '../controllers/imagesController';

const router = express.Router();

router.get('/', imagesController.render);

export default router;