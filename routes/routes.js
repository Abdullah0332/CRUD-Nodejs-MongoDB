const express=require('express');

const router = express.Router();

const Controller = require('../controller/main');

router.get('/',Controller.gethome);

router.post('/',Controller.posthome);

router.get('/add',Controller.getadd);

router.post('/add',Controller.postadd);

router.get('/edit/:userId',Controller.getedit);

router.post('/edit',Controller.postedit);

router.post('/delete/:userId',Controller.deleteUser);

module.exports = router;