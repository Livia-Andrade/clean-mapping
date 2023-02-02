const PROXY_CONFIG = [
    {
        context: ['/log', '/home-user', '/home', '/controller', '/context', '/client', '/mapping', '/base', '/equipment', '/environment', '/class', '/teacher'],
        target: 'http://localhost:8080/',
        secure: false,
        // logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;

// {
//     "/api": {
//       "target": "http://localhost:3000",
//       "secure": false
//     }
//   }