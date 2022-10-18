
const catchAsync = require('../utils/catchAsync');

exports.getAlllUsers = catchAsync(
  async (req, res, next) => {
    console.log('Router get Working');

    console.log(undefined.body);

    res.send({
      status: 200,
      message: 'Response from user route',
    });
  }
);

exports.getUser = (req, res) => {
  try {
    console.log(undefined.body);
  } catch (error) {
    return next(error);
  }
  console.log('Router get Working');
  res.send({
    status: 200,
    message: 'Response from user route',
  });
};

exports.deleteUser = function (req, res) {
  try {
    console.log(undefined.body);
  } catch (error) {
    return next(error);
  }
  console.log('Router get Working');
  res.send({
    status: 200,
    message: 'Response from user route',
  });
};

exports.updateUser = function (req, res) {
  console.log('Router get Working');
  res.send({
    status: 200,
    message: 'Response from user route',
  });
};

exports.addUser = function (req, res) {
  console.log('Router post Working');
  console.log('req.body', req.body);
  res.send();
};

