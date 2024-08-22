const {Router} = require('express');

const router = Router();

const {create,getall,update,getbyid,remove} = require('../Controller/pollcontroller')

router.post('/create',create);
router.get('/getall',getall);
router.post('/update/:id',update);
router.get('/getbyid/:id',getbyid);
router.post('/delete/:id',remove);
module.exports = router;