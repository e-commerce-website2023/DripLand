

const db = require('../models/index.js'); 
const User = db.models.users;
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

// exports.signin = async (req, res, next) => {
//   const { email, password } = req.body;
//   console.log('Received login request:', req.body);

//   try {

//     // Validation
//     if (!email) {
//       return next(new ErrorResponse('Please add an email', 403));
//     }
//     if (!password) {
//       return next(new ErrorResponse('Please add a password', 403));
//     }

//     // Check user email
//     const user = await User.findOne({ email, password });
//   console.log('Received login request:', { email, password })

//     if (user == null) {
//       return next(new ErrorResponse('Invalid credentials', 400));
//     }

//     // Check password using the correct method in your User model
//     const isMatched = await user.comparePassword(password);

//     if (!isMatched) {
//       return next(new ErrorResponse('Invalid credentials', 400));
//     }
//     // sendTokenResponse(user, 200, res);
//     res.status(200).json({
//       success: true,
//       id: user.id,
//       role: user.role,
//     });
//   } catch (error) {
//     next(error);
//   }
// };


exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  const checkLogin = async (email, password) => {
    try {
      const user = await User.findOne({ email, password });
      return user;
    } catch (error) {
      throw error;
    }
  };

  try {
    const user = await checkLogin(email, password);

    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}




const sendTokenResponse = async (user, codeStatus, res) => {
  console.log("send token");
  try {
    const token = await user.getJwtToken();
    console.log("token =", token);
    const options = { maxAge: 60 * 60 * 1000, httpOnly: true };

    res
      .status(codeStatus)
      .cookie('token', token, options)
      .json({
        success: true,
        id: user.id,
        role: user.role,
      });
  } catch (error) {
    console.error("Error sending token response:", error);
    res.status(400).json({ error: 'Token response error' });
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