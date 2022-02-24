import express, { Application } from 'express'
import morgan from 'morgan'
import expressions from './routes/expressions'
import general from './routes/general'
import schema from './routes/schema'
import stage from './routes/stage'
import { orm } from 'lambdaorm'

const app:Application = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('public'))

const host = process.env.HOST || 'http://0.0.0.0'
const port = process.env.PORT || '9289'
const workspace = process.env.WORKSPACE || '/workspace'

// add routes
general(app)
expressions(app)
schema(app)
stage(app)

const server = app.listen(port, async () => {
	await orm.init(workspace)
	console.log('Server running at: ' + host + ':' + port + '/docs')
})

// Graceful shutdown
process.on('SIGTERM', () => {
	server.close((err) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}
		process.exit(0)
	})
})

// const start = async () => {
// try {
// console.log(workspace)
// await orm.init(workspace)
// // app.use(router)
// routes(app)
// app.listen(port)
// console.log('Server running at: ' + host + ':' + port + '/docs')
// process.exitCode = 0
// return 0
// } catch (error) {
// await orm.end()
// console.error(error)
// process.exitCode = -1
// return -1
// }
// }
// start()
