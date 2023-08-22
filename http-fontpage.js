
const http = require('http')

const server = http.createServer((req,res) =>{
console.log(req);
res.write('welcome to our new home page')
res.end()
})

server.listen(3000)