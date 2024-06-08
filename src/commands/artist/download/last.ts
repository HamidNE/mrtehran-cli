import {Args, Command, Flags} from '@oclif/core'
import {artistLatestSongs} from "mrtehran";
import {join} from "node:path";

import {downloadSongs} from "../../../utils/download.js";

export default class ArtistDownloadLast extends Command {
  static override args = {
    id: Args.string({description: 'album id', name: 'ID', required: true}),
  }

  static override description = 'get last songs of artist'

  static override examples = [
    '// https://mrtehran.app/artist/m8RWXp05rY1j2Be2N7jqGk ',
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk',
    '<%= config.bin %> <%= command.id %> m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/',
  ]

  static override flags = {
    path: Flags.string({char: 'p', default: process.cwd(), description: 'path to save songs'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ArtistDownloadLast)

    const res = await artistLatestSongs(args.id);
    await downloadSongs(res, join(flags.path, args.id));
  }
}
