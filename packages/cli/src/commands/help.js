import consola from 'consola'
import getCommand from '../commands'
import listCommands from '../list'
import { common } from '../options'
import NuxtCommand from '../command'

export default {
  name: 'help',
  description: 'Shows help for <command>',
  usage: 'help <command>',
  options: {
    help: common.help,
    version: common.version
  },
  async run(cmd) {
    const name = cmd._argv[0]
    if (!name) {
      return listCommands()
    }
    const command = await getCommand(name)
    if (command) {
      NuxtCommand.from(command).showHelp()
    } else {
      consola.info(`Unknown command: ${name}`)
    }
  }
}
