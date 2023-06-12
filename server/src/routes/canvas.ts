import { FastifyInstance, FastifyRequest } from 'fastify'
import {
  create,
  findAll,
  findById,
  remove,
  update,
} from '../repositories/canvaRepository'
import { z } from 'zod'

export async function canvasRoutes(app: FastifyInstance) {
  app.post('/canvas', async (request) => {
    const { name, fileUrl } = getNameAndFileUrlFromRequestBody(request)

    const canva = await create(name, fileUrl)

    return canva.id
  })

  app.get('/canvas', async () => {
    const canvas = await findAll()

    return canvas
  })

  app.get('/canvas/:id', async (request) => {
    const id = getIdFromRequestParams(request)

    const canva = await findById(id)

    return canva
  })

  app.put('/canvas/:id', async (request) => {
    const id = getIdFromRequestParams(request)
    const { name, fileUrl } = getNameAndFileUrlFromRequestBody(request)

    const canva = await update(id, name, fileUrl)

    return canva.id
  })

  app.delete('/canvas/:id', async (request) => {
    const id = getIdFromRequestParams(request)

    remove(id)
  })
}

function getIdFromRequestParams(request: FastifyRequest) {
  const paramSchema = z.object({
    id: z.string().uuid(),
  })
  const { id } = paramSchema.parse(request.params)
  return id
}

function getNameAndFileUrlFromRequestBody(request: FastifyRequest) {
  const bodySchema = z.object({
    name: z.string(),
    fileUrl: z.string(),
  })

  const { name, fileUrl } = bodySchema.parse(request.body)
  return { name, fileUrl }
}
