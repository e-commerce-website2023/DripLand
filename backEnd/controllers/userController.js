// const db = require('../models')

// // creat main model
// const User = db.users






// module.exports = {
// //add user to data base
//     create: async (req, res) => {
//         if (req.body.username && req.body.password) {
//             const { username, password } = req.body;

//             await User.create({
//                 username,
//                 password
//             });
// // from input(views)
//             res.render('profile', { username });
//         } else {
//             res.send('Not added to the database!');
//         }
//     }

// }

const User = require('../models/user.js'); 
const ErrorResponse = require('../utils/errorResponse');


exports.signup
 = async (req, res, next) => {
  const { email } = req.body;

  try {
    // Check if the user with the provided email already exists
    const userExist = await User.findOne({ where: { email : email } });

    if (userExist) {
      return next(new ErrorResponse('E-mail already registered', 400));
    }

    // Create a new user
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email) {
      return next(new ErrorResponse('Please add an email', 403));
    }
    if (!password) {
      return next(new ErrorResponse('Please add a password', 403));
    }

    // Check user email
    const user = await User.findOne({ where: { email:email } });
  

    if (user == null) {
      return next(new ErrorResponse('Invalid credentials', 400));
    }

    // Check password using the correct method in your User model
    const isMatched = await user.comparePassword(password);

    if (!isMatched) {
      return next(new ErrorResponse('Invalid credentials', 400));
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = async (user, codeStatus, res) => {
  try {
    const token = await user.getJwtToken();

    const options = { maxAge: 60 * 60 * 1000, httpOnly: true };

    if (process.env.NODE_ENV === 'production') {
      options.secure = true;
    }

    res
      .status(codeStatus)
      .cookie('token', token, options)
      .json({
        success: true,
        id: user.id,
        role: user.role,
      });
  } catch (error) {
    next(error);
  }
};

// Log out
exports.logout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: 'Logged out',
  });
};

// User profile
exports.userProfile = async (req, res, next) => {
  try {
    // Use Sequelize to find the user by ID and exclude the password field
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};