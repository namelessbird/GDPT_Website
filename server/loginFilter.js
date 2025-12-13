module.exports = function loginFilter(req, res, next) {
    if (!req.session.loggedIn) {
        return res.status(401).json({ message: "Not authenticated" });
    }
    next();
};