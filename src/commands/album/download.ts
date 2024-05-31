import {Args, Command, Flags} from '@oclif/core'
import {albumSongs} from "mrtehran";
import {join} from "node:path";

import {downloadSongs} from "../../utils/download.js";

export default class AlbumDownload extends Command {
  static override args = {
    id: Args.string({description: 'album id', name: 'ID', required: true}),
  }

  static override description = 'download album songs'

  static override examples = [
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk',
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/',
  ]

  static override flags = {
    path: Flags.string({
      char: 'p',
      default: process.cwd(),
      defaultHelp: 'current directory',
      description: 'path to save songs'
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(AlbumDownload);

    const res = await albumSongs(args.id);
    await downloadSongs(res, join(flags.path, args.id))
  }
}
