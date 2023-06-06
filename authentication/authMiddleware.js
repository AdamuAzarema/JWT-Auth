
const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ error: 'A token is required for authorization!' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], config.AUTH_SECRET);
        req.claims = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token!' });
    }
};

module.exports = verifyToken;
