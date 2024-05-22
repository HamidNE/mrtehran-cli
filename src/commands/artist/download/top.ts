import {Args, Command, Flags} from '@oclif/core'
import {downloadArtistTopSongs} from "mrtehran";
import {join} from "node:path";

export default class ArtistDownloadTop extends Command {
  static override args = {
    id: Args.string({description: 'album id', name: 'ID', required: true}),
  }

  static override description = 'get top songs of artist';

  static override examples = [
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk',
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/',
  ]

  static override flags = {
    path: Flags.string({char: 'p', default: process.cwd(), description: 'path to save songs'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ArtistDownloadTop)

    await downloadArtistTopSongs(args.id, join(flags.path, args.id));
  }
}
