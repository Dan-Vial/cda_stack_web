import express from 'express'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'
import usersRouter from './routes/users'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/**
 * orders important: API BackEnd, static file public, REACT route imdex.html
 */
app.use('/users', usersRouter)
app.use(express.static(path.join(dirname(fileURLToPath(import.meta.url)), 'public')))
app.use('*', indexRouter)

export default app