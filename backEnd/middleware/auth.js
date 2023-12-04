// const ErrorResponse = require('../utils/errorResponse');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// // check is user is authenticated
// exports.isAuthenticated = async (req, res, next) => {
//     const { token } = req.cookies;
//     // Make sure token exists
//     if (!token) {
//         return next(new ErrorResponse('You must Log In...', 401));
//     }

//     try {
//         // Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = await User.findById(decoded.id);
//         next();

//     } catch (error) {
//         return next(new ErrorResponse('You must Log In', 401));
//     }
// }

// //middleware for admin
// exports.isAdmin = (req, res, next) => {
//     if (req.user.role === 'user') {
//         return next(new ErrorResponse('Access denied, you must an admin', 401));
//     }
//     next();
// }



// middleware/auth.js
exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    // Make sure token exists
    if (!token) {
        return next(new ErrorResponse('You must Log In...', 401));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log('Decoded token:', decoded);

        // Retrieve the user based on the decoded token's ID
        const user = await User.findByPk(decoded.id);

        console.log('Found user:', user);

        // Check if the user exists
        if (!user) {
            return next(new ErrorResponse('User not found', 404));
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in isAuthenticated middleware:', error);
        return next(new ErrorResponse('You must Log In', 401));
    }
};
