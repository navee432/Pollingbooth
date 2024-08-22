const {Router} = require('express');

const router = Router();

const {create,getall,update,getbyid,remove, signup, login} = require('../Controller/usercontroller')


router.post('/create',create);
router.get('/getall',getall);
router.post('/update/:id',update);
router.get('/getbyid/:id',getbyid);
router.post('/delete/:id',remove);
router.post('/signup',signup);
router.post('/login',login);

module.exports = router;