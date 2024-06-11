import {Args, Command} from '@oclif/core'
import { playlistInfo} from "mrtehran";

export default class PlaylistInfo extends Command {
  static override args = {
    id: Args.string({description: 'playlist id', name: 'ID', required: true}),
  }

  static override description = 'get playlist info'

  static override examples = [
    '// https://mrtehran.app/playlist/N6rLGdYP8yM2mR8v3QKJo9',
    '<%= config.bin %> <%= command.id %> N6rLGdYP8yM2mR8v3QKJo9',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(PlaylistInfo)

    console.table(await playlistInfo(args.id))
  }
}
