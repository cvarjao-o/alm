import * as core from './core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = process.env.INPUT_MILLISECONDS || '500'
    core.debug(`Waiting ${ms} milliseconds ...`)

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    //core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.error(error)
  }
}

run()
