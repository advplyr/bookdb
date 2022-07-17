const date = require('./libs/dateAndTime')
const { LogLevel } = require('./utils/constants')

class Logger {
  constructor() {
    this.logLevel = process.env.NODE_ENV === 'production' ? LogLevel.DEBUG : LogLevel.TRACE
  }

  get timestamp() {
    return date.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  }

  trace(...args) {
    if (this.logLevel > LogLevel.TRACE) return
    console.trace(`[${this.timestamp}] TRACE:`, ...args)
  }

  debug(...args) {
    if (this.logLevel > LogLevel.DEBUG) return
    console.debug(`[${this.timestamp}] DEBUG:`, ...args)
  }

  info(...args) {
    if (this.logLevel > LogLevel.INFO) return
    console.info(`[${this.timestamp}]  INFO:`, ...args)
  }

  warn(...args) {
    if (this.logLevel > LogLevel.WARN) return
    console.warn(`[${this.timestamp}]  WARN:`, ...args)
  }

  error(...args) {
    if (this.logLevel > LogLevel.ERROR) return
    console.error(`[${this.timestamp}] ERROR:`, ...args)
  }

  fatal(...args) {
    console.error(`[${this.timestamp}] FATAL:`, ...args)
  }

  note(...args) {
    console.log(`[${this.timestamp}] NOTE:`, ...args)
  }
}
module.exports = new Logger()