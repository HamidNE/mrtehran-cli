import {Args, Command, Flags} from '@oclif/core'
import {playlistSongs} from "mrtehran";
import {join} from "node:path";

import {downloadSongs} from "../../utils/download.js";

export default class PlaylistDownload extends Command {
  static override args = {
    id: Args.string({description: 'album id', name: 'ID', required: true}),
  }

  static override description = 'download playlist songs'

  static override examples = [
    '// https://mrtehran.app/playlist/N6rLGdYP8yM2mR8v3QKJo9',
    '<%= config.bin %> <%= command.id %> N6rLGdYP8yM2mR8v3QKJo9',
    '<%= config.bin %> <%= command.id %> N6rLGdYP8yM2mR8v3QKJo9 -p ~/Music/Albums/',
  ]

  static override flags = {
    path: Flags.string({char: 'p', default: process.cwd(), description: 'path to save songs'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(PlaylistDownload)

    const  res = await playlistSongs(args.id);
    await downloadSongs(res, join(flags.path, args.id));
  }
}
