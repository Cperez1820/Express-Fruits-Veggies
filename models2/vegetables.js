const mongoose = require("mongoose")

const vegetables = [
    {
        name:'Lettuce',
        color: 'green',
        readyToEat: true
    },
    {
        name:'Carrot',
        color: 'orange',
        readyToEat: false
    },
    {
        name:'yams',
        color: 'megenta',
        readyToEat: true
    },
    {
        name:'squash',
        color: 'yellow',
        readyToEat: true
    },
    {
        name:'potato',
        color: 'lightbrown',
        readyToEat: false
    }
];  

module.exports = vegetables