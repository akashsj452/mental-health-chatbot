import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'

dotenv.config()

const app: Express = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  },
})

// ========== MIDDLEWARE ==========
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// ========== LOGGING MIDDLEWARE ==========
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

// ========== HEALTH CHECK ==========
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// ========== SOCKET.IO CONFIGURATION ==========
io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`)
  })

  // Chat events
  socket.on('chat:message', (data) => {
    console.log(`Message from ${socket.id}: ${data.content}`)
    io.emit('chat:message', {
      ...data,
      socketId: socket.id,
      timestamp: new Date(),
    })
  })
})

// ========== API ROUTES (To be implemented) ==========
// Import and use routes here
// app.use('/api/auth', authRoutes)
// app.use('/api/chat', chatRoutes)
// app.use('/api/mood', moodRoutes)
// app.use('/api/resources', resourceRoutes)

// ========== 404 HANDLER ==========
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path,
    method: req.method,
  })
})

// ========== ERROR HANDLER ==========
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    status: err.status || 500,
  })
})

// ========== SERVER STARTUP ==========
const PORT = process.env.PORT || 4000

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
})

export { app, io, httpServer }
