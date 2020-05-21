const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('build'));

app.get('/message', (request, response) => {
  console.log(`[${new Date().toLocaleString()}] "${request.method} ${request.path}"`);
  response.send('Hello from node/express server!');
});

const port = 3001;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`)
});