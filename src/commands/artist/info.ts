import {Args, Command} from '@oclif/core'
import {artistInfo} from "mrtehran";

export default class ArtistInfo extends Command {
  static override args = {
    id: Args.string({description: 'artist id', name: 'ID', required: true}),
  }

  static override description = 'get artist info'

  static override examples = [
    '// https://mrtehran.app/artist/m8RWXp05rY1j2Be2N7jqGk ',
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(ArtistInfo)

    console.table(await artistInfo(args.id))
  }
}
