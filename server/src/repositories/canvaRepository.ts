import { prisma } from '../lib/prisma'

export async function create(name: string, fileUrl: string) {
  return await prisma.canva.create({
    data: {
      name,
      fileUrl,
    },
  })
}

export async function findAll() {
  return await prisma.canva.findMany({
    orderBy: {
      latestDate: 'desc',
    },
  })
}

export async function findById(id: string) {
  return await prisma.canva.findUniqueOrThrow({
    where: {
      id,
    },
  })
}

export async function update(id: string, name: string, fileUrl: string) {
  return await prisma.canva.update({
    where: {
      id,
    },
    data: {
      name,
      fileUrl,
    },
  })
}

export async function remove(id: string) {
  return await prisma.canva.delete({
    where: {
      id,
    },
  })
}
