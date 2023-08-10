const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3333

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true)
  const name = urlInfo.query.name

  console.log('urlInfo ==>', urlInfo);
  console.log('name ==>', name);

  if (!name) {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    fs.writeFile('arquivo.txt', name, (err, data) => {
      res.writeHead(302, {
        Location: '/'
      })
      return res.end()
    })
  }
})

server.listen(port, () => {
  console.log('rodando na porta ==>', port);
})