/**
 * Created by THINK on 2015-08-07.
 */
var sendevent = require('sendevent')('/eventstream'); //sse

// if needed you can also talk to individual clients
sendevent.on('connect', function(client) {
    console.log('sse client connected');
    client.send({ greeting: 'hello number ' + client.id });
});

// and get notified when they disconnect
sendevent.on('disconnect', function(client) {
    console.log('client %d disconnected', client.id);
});
// broadcast data to all connected clients every 5 seconds
setInterval(function() {
    sendevent.broadcast({ time: Date.now() });
}, 5000);
module.exports = sendevent;