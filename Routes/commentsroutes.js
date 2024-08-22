const {Router} = require('express');

const router = Router();

const {create,getall,update,getbyid,remove} = require('../Controller/commentscontroller')

router.post('/create',create);
router.get('/getall',getall);
router.post('/update/:id',update);
router.get('/getbyid',getbyid);
router.post('/remove',remove);

module.exports = router;