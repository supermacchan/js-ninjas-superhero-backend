const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: [true, 'Nickname is required']
    },
    real_name: {
        type: String,
        default: 'Unknown',
    },
    origin_description: {
        type: String,
        default: 'Unknown',
    },
    superpowers: {
        type: String,
        default: 'Unknown',
    },
    catch_phrase: {
        type: String,
        default: 'Unknown',
    },
    images: {
        type: [{
            type: String
        }],
        default: []
    }
})

const Hero = mongoose.model('Hero', heroSchema, 'heroes');

module.exports = {
    Hero
}