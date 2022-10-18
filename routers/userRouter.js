
const express = require('express');

const router = express.Router();
const userController = require('../controllers/usercontroler');


const adminMiddleware = (req, res, next) => {

    console.log('s')
  console.log('admin middleware', req.headers);
  if (req.headers.role === 'admin') {
    return next();
  }
  res
    .status(403)
    .send({ status: 403, message: 'Access not allowed' });
};

router.get(
  '/admin',
  adminMiddleware,
  function (req, res) {
    console.log('Router get Working');
    res.send({
      status: 200,
      message: 'Response from admin route',
    });
  }
);

const userMiddleware = (req, res, next) => {
  console.log('user middleware', req);
  if (req.headers.role === 'user') {
    return next();
  }
  res
    .status(403)
    .send({ status: 403, message: 'Access not allowed' });
};

router.get(
  '/',
  
  userMiddleware,
  userController.getAlllUsers
);


router.get(':id/', userMiddleware, userController.getUser);


router.delete(
  ':id/',
  userMiddleware,
  userController.deleteUser
);


router.patch(
  ':id/',
  userMiddleware,
  userController.updateUser
);

router.post('/', userController.addUser);

module.exports = router;































