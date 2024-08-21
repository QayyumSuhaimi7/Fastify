const fastify = require('fastify')({ logger: true })

// Registering Swagger
fastify.register(require('@fastify/swagger'), {
    swagger: {
        info: { title: 'fastify-api', version: '0.1.0' },
    },
})

// Registering Swagger UI
fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    exposeRoute: true,
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    transformSpecificationClone: true
})

fastify.register(require('./routes/items'))

const PORT = 5000

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()