const winston = require('winston');
const { version } = require('../../package.json');

const severityLevel = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.printf(info => JSON.stringify({
            timestamp: info.timestamp,
            app_version: version,
            level: info.level,
            message: info.message
        }))
    ),
    transports: [new winston.transports.Console()],
});

module.exports = logger;