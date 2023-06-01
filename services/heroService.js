const { Hero } = require('../db/heroSchema');
const { ServerError } = require('../helpers/errors');

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

module.exports = {
    getHeroes
}