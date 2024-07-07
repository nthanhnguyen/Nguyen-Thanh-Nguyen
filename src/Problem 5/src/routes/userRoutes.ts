import { Router } from 'express';
const { getHomepage, handleCreateUser, getCreatePage,
    getUpdatePage, handleUpdateUser, getDeletePage, handleDeleteUser } = require('../controllers/userControler.ts');
const router = Router();

router.get('/', getHomepage)
router.get('/create', getCreatePage)
router.post('/create-user', handleCreateUser);

router.get('/update/:email', getUpdatePage)
router.post('/update-user', handleUpdateUser);

router.post('/delete-user/:email', getDeletePage);
router.post('/delete-user', handleDeleteUser);

module.exports = router;  