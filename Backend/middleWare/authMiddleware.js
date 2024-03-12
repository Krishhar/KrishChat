const asyncHandler = require('express-async-handler');
const User = require('../models/Usermodel');
const jwt = require('jsonwebtoken')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.SECRET)

            req.user = await User.findById(decoded.id).select("-password")
            next()
        }
        catch(err){
            res.send(401)
            throw new Error("No token No authorization")
        }
    }
    if(!token)
    {
        res.send(401)
        throw new Error("No token No authorization")
    }
})

module.exports = {protect}