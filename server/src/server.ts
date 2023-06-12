import fastify from 'fastify'
import cors from '@fastify/cors'
import { canvasRoutes } from './routes/canvas'
import { helloRoutes } from './routes/hello'

const app = fastify()

app.register(cors, {
  //   origin: ['http://localhost:3000'],
  origin: true, // while DEV
})

app.register(helloRoutes)
app.register(canvasRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
