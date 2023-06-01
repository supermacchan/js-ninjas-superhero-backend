const { Hero } = require('../db/heroSchema');
const { 
    ServerError,
    ValidationError
} = require('../helpers/errors');

const getHeroes = async (skip, limit) => {
    try {
        const heroes = await 
            Hero
                .find({})
                .skip(skip)
                .limit(limit);
        return heroes;
    } catch (err) {
        throw new ServerError('The server could not complete your query.');
    }
};

const addHero = async (data) => {
    try {
        const hero = new Hero(data);
        await Hero.create(hero);
        return hero;
    } catch (err) {
        throw new ValidationError('Bad request: some required fields are not filled out.');
    }
}

module.exports = {
    getHeroes,
    addHero
}