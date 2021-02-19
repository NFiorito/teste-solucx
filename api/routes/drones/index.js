const router = require('express').Router();
const TabelaDrone = require('./TabelaDrone');
const Drone = require('./Drone');
const { response } = require('express');

router.get('/', async (request, response) => {
    console.log('/')
})

router.get('/:id', async (request, response) => {
    console.log('/id')
})

router.post('/', async (request, response) => {
    console.log('/post')
})

router.put('/:id', async (request, response) => {
    console.log('/put')
})

router.delete('/:id', async (request, response) => {
    console.log('/delete')
})

module.exports = router;