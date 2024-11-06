const jwt = require("jsonwebtoken");

const JWT_SECRET = require("./config");


function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(411).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        // Split the header and get the token
        const token = authHeader.split(' ')[1];
        
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        if (!decoded.userId) {
            return res.status(411).json({
                message: "Invalid user ID in token"
            });
        }

        // Add userId to request object
        req.userId = decoded.userId;
        next();
        
    } catch (err) {
        return res.status(411).json({
            message: "Invalid or expired token"
        });
    }
    
}

module.exports = {
    authMiddleware
}