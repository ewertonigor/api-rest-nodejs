import { app } from './app'

app
  .listen({
    port: 5432,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
