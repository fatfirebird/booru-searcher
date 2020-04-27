import * as express from 'express';
import searchController from '../controllers/searchController';

const router = express.Router();

router.get('/', searchController.render);
router.post('/', searchController.find)

export default router;