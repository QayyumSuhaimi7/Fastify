const {getItems, getItem} = require('../controllers/items')

// Item schema 
const Item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    },
}

// Option for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getItems,
}

const getItemOpts = {
    schema: {
        response: {
            200: Item,
        },
    },
    handler: getItem,
}

function itemRoutes(fastify, options, done) {

    // Get All Items
    fastify.get('/items', getItemsOpts)

    // Get Single Items
    fastify.get('/items/:id', getItemOpts)

    done()
}

module.exports = itemRoutes