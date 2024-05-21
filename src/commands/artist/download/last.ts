import {Args, Command, Flags} from '@oclif/core'
import {downloadArtistLatestSongs} from "mrtehran";
import {join} from "node:path";

export default class ArtistDownloadLast extends Command {
  static override args = {
    id: Args.string({description: 'id to read', required: true}),
  }

  static override description = 'describe the command here'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    force: Flags.boolean({char: 'f'}),
    path: Flags.string({char: 'n', default: process.cwd(), description: 'path to print'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ArtistDownloadLast)

    await downloadArtistLatestSongs(args.id, join(flags.path, args.id));
  }
}
