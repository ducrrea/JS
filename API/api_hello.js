const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if(req.url == '/hello'  && req.method == 'GET') {
        res.end(JSON.stringify({ message: 'Olá mundo!'}));
    } else{
        res.ststusCode = 404;
        res.end(JSON.stringify({ error: 'Roa não encontrada'}))
    }
};

const server = http.createServer(requestHandler);

server.listen(port, hostname, () =>{
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})

