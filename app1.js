
const http = require('http')

const server = http.createServer((req,res) =>{
if( req.url === '/'){
    res.end('welcome to our home page')
}
if(req.url === '/about'){
    res.end('here is our short history')
}
res.end(`
    <h1>Oops1</h1>
 <p> We can't seem to find the page you looking for</p>
 <a href ="/">back home</a>   
`)
})

server.listen(3000)