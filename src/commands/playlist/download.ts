import {Args, Command, Flags} from '@oclif/core'
import {downloadPlaylistSongs} from "mrtehran";
import {join} from "node:path";

export default class PlaylistDownload extends Command {
  static aliases = ['playlist:download'];

  static override args = {
    id: Args.string({
      description: 'id to read',
      required: true,
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
    const {args, flags} = await this.parse(PlaylistDownload)

    await downloadPlaylistSongs(args.id, join(flags.path, args.id));
  }
}
