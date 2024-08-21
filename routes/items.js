const items = require('../Items')

function itemRoutes (fastify, options, done) {

    // Get All Items
    fastify.get('/items', (req, reply) => {
        reply.send({ items })
    })
    
    // Get Single Items
    fastify.get('/items/:id', (req, reply) => {
        const {id} = req.params
        
        const item = items.find(item => item.id === id)
    
        reply.send({ item })
    })

    done()
}

module.exports = itemRoutes