import {Args, Command} from '@oclif/core'

export default class AlbumInfo extends Command {
  static override args = {
    id: Args.string({description: 'album id', name: 'ID', required: true}),
  }

  static override description = 'get album info'

  static override examples = [
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(AlbumInfo)

    console.log(args.id)
  }
}
