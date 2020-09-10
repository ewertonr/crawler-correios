const winston = require('winston');
const { version } = require('../package.json');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(info => JSON.stringify({
      timestamp: info.timestamp,
      app_version: version,
      level: info.level,
      message: info.message,
    })),
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
