const Router = require('express').Router;

const router = Router();

router.post('/door/console', (req, res) => {
    try {
        console.log(req.body.name);

        return res.status(202).json({
            message: "Success."
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "See the console."
        })
    }
});

module.exports = router;