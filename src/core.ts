import * as os from 'os'
import {Logger} from './lib/logger'

/**
 * The code to exit an action
 */
export enum ExitCode {
  /**
   * A code indicating that the action was successful
   */
  Success = 0,

  /**
   * A code indicating that the action was a failure
   */
  Failure = 1
}
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------

const LOG: Logger = new Logger('main')

/**
 * Writes debug message to user log
 * @param message debug message
 */
export function debug(message: string): void {
  LOG.debug(message)
}

/**
 * Adds an error issue
 * @param message error issue message
 */
export function error(message: string): void {
  LOG.error(message)
}

/**
 * Adds an warning issue
 * @param message warning issue message
 */
export function warning(message: string): void {
  LOG.warn(message)
}

/**
 * Writes info to log with console.log.
 * @param message info message
 */
export function info(message: string): void {
  LOG.info(message)
}
