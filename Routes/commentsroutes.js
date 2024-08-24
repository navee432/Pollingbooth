const {Router} = require('express');

const router = Router();

const {create,getall,update,getbyid,remove} = require('../Controller/commentscontroller')

router.post('/create',create);
router.get('/getall',getall);
router.post('/update/:id',update);
router.get('/getby/:id',getbyid);
router.post('/remove/:id',remove);

module.exports = router;