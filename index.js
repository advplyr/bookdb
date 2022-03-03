const { PrismaClient: PrismaMongoClient } = require('./prisma/generate/mongoclient')
const { PrismaClient: PrismaSqlClient } = require('./prisma/generate/sqlclient')

const mongoClient = new PrismaMongoClient()
const sqlClient = new PrismaSqlClient()

async function main() {
  await mongoClient.$connect()
  await sqlClient.$connect()

  const mongoUsers = await mongoClient.user.findMany()
  console.dir(mongoUsers)

  const allUsers = await sqlClient.user.findMany()
  console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await sqlClient.$disconnect()
    await mongoClient.$disconnect()
  })
