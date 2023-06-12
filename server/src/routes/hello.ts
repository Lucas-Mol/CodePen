import { FastifyInstance } from 'fastify'

export async function helloRoutes(app: FastifyInstance) {
  app.get('/', () => {
    return 'Hello World 🌎'
  })
}
