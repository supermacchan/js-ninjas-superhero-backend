const { Hero } = require('../db/heroSchema');
const { 
    ServerError,
    ValidationError,
    NotFoundError
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
        console.log(err);
        throw new ValidationError('Bad request: some required fields are not filled out.');
    }
}

const updateHero = async (heroId, data) => {
    try {
        const hero = await Hero.findOneAndUpdate(
            {_id: heroId},
            {$set: data},
            {
                returnDocument: 'after',
                returnNewDocument: true
            })
            .select({__v: 0});
    
        if (!hero) {
            throw new NotFoundError('Not found');
        }
    
        return hero;
    } catch (err) {
        throw new NotFoundError('Not found');
    }
}

const deleteHero = async (heroId) => {
    try {
        const hero = await Hero.findOneAndRemove({_id: heroId});

        if (!hero) {
            throw new NotFoundError('Not found');
        }
    } catch (err) {
        throw new NotFoundError('Not found');
    }
}

module.exports = {
    getHeroes,
    addHero,
    updateHero,
    deleteHero
}