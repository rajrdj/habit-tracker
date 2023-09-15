const http = require(`http`);

const server = http.createServer((req, res) => {
    res.end('welcome to nodejs ninja server ')
});

server.listen(8080, ()=> {
console.log("server is listenitn at port number ")
});

