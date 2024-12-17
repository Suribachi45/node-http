const http = require('http');
const data = require('./data');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${data.title}</title>
        </head>
        <body>
            <h1>${data.title}</h1>
            <p>${data.subtitle}</p>
            <p>${data.description}</p>
            <p>Por ${data.autor} - ${data.fecha}</p>
        </body>
        </html>
    `);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});