import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.post('/user', (c) => {

  console.log(c.req.header('auth'));
  console.log(c.req.header('prams'));
  
  
  return c.json({
     mes: 'hello user'
  })
})

export default app
