import express from "express";
import routes from './routes';
import {authenticateToken} from './middleware/authToken'
import { login } from './controllers/login'

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', authenticateToken, routes)

app.post('/login', login)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
