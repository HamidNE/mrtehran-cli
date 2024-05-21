import {Args, Command, Flags} from '@oclif/core'
import {downloadAlbumSongs} from "mrtehran";
import {join} from "node:path";

export default class AlbumDownload extends Command {
  static aliases = ['album:download'];

  static override args = {
    id: Args.string({
      description: 'album id',
      name: 'id',
      required: true
    }),
  }

  static override description = 'describe the command here'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    force: Flags.boolean({char: 'f'}),
    path: Flags.string({char: 'p', default: process.cwd()}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(AlbumDownload);

    await downloadAlbumSongs(args.id, join(flags.path, args.id));
  }
}
