const PROXY_CONFIG = [
    {
        context: ['/log','/base','/client','/home','/mapping'],
        target: 'http://localhost:8080/',
        secure: false,
        loglevel: 'debug'
    }
];

// module.exports = PROXY_CONFIG;