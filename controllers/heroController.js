const { 
    getHeroes,
    addHero,
} = require('../services/heroService');

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
            status: 'success',
            code: 200,
            data: hero
        });
    } catch (err) {
        res.status(err.status).json(err.message);
    }
}


// const updateContactController = async (req, res) => {
//     if (Object.keys(req.body).length === 0) {
//         return res.status(400).json("missing fields");
//     }

//     const { contactId } = req.params;
//     const { _id: userId } = req.user;
//     const { name, email, phone } = req.body;

//     try {
//         const contact = await updateContact(
//             contactId,
//             {name, email, phone},
//             userId
//         )
//         return res.status(200).json(contact);

//     } catch (err) {
//       return res.status(err.status).json(err.message);
//     }
// }

// const removeContactController = async (req, res) => {
//     const { contactId } = req.params;
//     const { _id: userId } = req.user;

//     try {
//         await removeContact(contactId, userId);
//         res.status(200).json("contact deleted");
//     } catch (err) {
//         res.status(err.status).json(err.message);
//     }  
// }

module.exports = {
    getHeroesController,
    addHeroController
}