const { 
    getHeroes,
    addHero,
    updateHero,
    deleteHero
} = require('../services/heroService');
const { ValidationError } = require('../helpers/errors');

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

const addHeroController = async (req, res) => {
    const data = req.body;
    try {
        const hero = await addHero(data);
        res.status(201).json({
            status: 'created',
            code: 201,
            data: hero
        });
    } catch (err) {
        res.status(err.status).json(err.message);
    }
}

const updateHeroController = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        throw new ValidationError('Bad request: some required fields are not filled out.')
    }

    const { id: heroId } = req.params;
    const data = req.body;

    try {
        const hero = await updateHero(heroId, data);
        res.status(200).json({
            status: 'success',
            code: 200,
            data: hero
        });
    } catch (err) {
        res.status(err.status).json(err.message);
    }
}

const deleteHeroController = async (req, res) => {
    const { id: heroId } = req.params;

    try {
        await deleteHero(heroId);
        res.status(200).json({
            status: 'success: item deleted',
            code: 200,
        });
    } catch (err) {
        res.status(err.status).json(err.message);
    }
}

module.exports = {
    getHeroesController,
    addHeroController,
    updateHeroController,
    deleteHeroController
}