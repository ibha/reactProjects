const webSocketServer = require('websocket').server;

const http = require('http');

const server = http.createServer();
server.listen(8080)

const wsServer = new webSocketServer(
    { httpServer: server}
);

const clients = {};

const getUniqueId = () => {
    console.log("getUniqueId");
    const s4 = () => Math.floor(1 + Math.random()).toString(16).substring(1);
    return s4();
}

wsServer.on('request', function(request){
    console.log("Requested");
    var userId = getUniqueId();
    console.log(new Date()+' received new origin '+request.origin+'.')
    const connection = request.accept(null,request.origin);

    clients[userId] = connection;

    connection.on('message',(message)=>{
        console.log("Receiving message", message.type);
        if(message.type === 'utf8') {
            console.log('Received message ',message.utf8Data)

            //broadcasting message
            for(key in clients) {
                console.log('entered key ',key);
                clients[key].sendUTF(message.utf8Data);
                console.log('sent Message to: ',clients[key])
            }
        }

    })
})
