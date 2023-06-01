const { getHeroes } = require('../services/heroService');

const getHeroesController = async (req, res) => {
    try {
        let {
            page = 1,
            limit = 5,
        } = req.query;
        const skip = (page - 1) * limit;

        const heroes = await getHeroes(skip, limit);
        res.status(200).json({
            status: 'success',
            code: 200,
            data: heroes
        });
    } catch (err) {
        res.status(err.status).json(err.message);
    }
}

module.exports = {
    getHeroesController
}