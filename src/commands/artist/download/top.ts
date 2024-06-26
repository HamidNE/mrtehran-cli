import {Args, Command, Flags} from '@oclif/core'
import {artistTopSongs} from "mrtehran";
import {join} from "node:path";

import {downloadSongs} from "../../../utils/download.js";

export default class ArtistDownloadTop extends Command {
  static override args = {
    id: Args.string({description: 'album id', name: 'ID', required: true}),
  }

  static override description = 'get top songs of artist';

  static override examples = [
    '// https://mrtehran.app/artist/m8RWXp05rY1j2Be2N7jqGk ',
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk',
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/',
  ]

  static override flags = {
    path: Flags.string({
      char: 'p',
      default: process.cwd(),
      defaultHelp: 'defaultHelp',
      description: 'path to save songs'
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ArtistDownloadTop)

    const res = await artistTopSongs(args.id);
    await downloadSongs(res, join(flags.path, args.id));
  }
}
