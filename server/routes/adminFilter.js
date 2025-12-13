const express = require('express');
const router = express.Router();
const requireAdmin = require('../loginFilter');

router.get('/admin-dashboard', requireAdmin, (req, res) => {
    res.json({
        message: "Welcome admin",
    });
});

module.exports = router;
