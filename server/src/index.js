const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    info: () => `React slider API`,
    slides: (root, args, context, info) => {
      return context.db.query.slides({}, info)
    }
  },
  Mutation: {
    slide: (root, args, context, info) => {
      return context.db.mutation.createSlide({
        data: {
          title: args.title,
          description: args.description,
          url: args.url
        },
      }, info)
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
      ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/neo/database/dev',
      secret: 'secret',
      debug: true
    })
  })
});

server.start(() => console.log('Server is running on http://localhost:4000'));