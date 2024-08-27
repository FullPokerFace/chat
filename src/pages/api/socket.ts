import { Server as ServerIO } from 'socket.io'
import { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from '@/types/next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const SocketHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log('New Socket.io server...')
    const httpServer: any = res.socket.server
    const io = new ServerIO(httpServer, {
      path: '/api/socket',
      addTrailingSlash: false,
    })
    res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('New client connected')

      socket.on('chat message', (msg: string) => {
        io.emit('chat message', msg)
      })

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }
  res.end()
}

export default SocketHandler