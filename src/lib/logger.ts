/* eslint-disable no-dupe-class-members */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable prefer-spread */

import * as bunyan from 'bunyan'
import {Writable} from 'stream'

class MyRawStream extends Writable {
  write(rec: any): boolean {
    console.log(
      rec.time.toISOString(),
      bunyan.nameFromLevel[rec.level],
      rec.msg
    )
    return true
  }
}

export class Logger {
  logger: bunyan
  constructor(name: string) {
    this.logger = bunyan.createLogger({
      name,
      streams: [{level: 'trace', type: 'raw', stream: new MyRawStream()}]
    })
  }
  warn(message: string): void
  warn(...args: any[]): void {
    this.logger.warn.apply(this.logger, args as any)
  }

  info(message: string): void
  info(...args: any[]): void {
    this.logger.info.apply(this.logger, args as any)
  }
  debug(message: string): void
  debug(...args: any[]): void {
    this.logger.debug.apply(this.logger, args as any)
  }
  error(message: string): void
  error(...args: any[]): void {
    this.logger.error.apply(this.logger, args as any)
  }
}
