// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//         username: DataTypes.STRING,
//         userLastname:DataTypes.STRING,
//         age: DataTypes.STRING,
//         password:DataTypes.STRING,
//         email: DataTypes.STRING,
//         role: {
//             type: DataTypes.ENUM('admin', 'client', 'seller'),
//             allowNull: false
//         },
//         // Other common attributes
//     }, {
//         freezeTableName: true
//     });

//     return User;
// };

const { User } = require('../models/user.js'); 
const ErrorResponse = require('../utils/errorResponse');

exports.signup = async (req, res, next) => {
  const { email } = req.body;

  try {
    // Check if the user with the provided email already exists
    const userExist = await User.findOne({ where: { email } });

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
    const user = await User.findOne({ where: { email } });

    if (!user) {
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