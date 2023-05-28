const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const ErrorHandler = require("../utils/ErrorHandler")


exports.isAuthorizedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token)
        return next(
            new ErrorHandler("Please login to access the resource", 500)
        );
    const { id } = jwt.verify(token, process.env.JWTSECRET);
    req.id = id;
    next();
});