import {Args, Command} from '@oclif/core'
import {albumInfo} from "mrtehran";

export default class AlbumInfo extends Command {
  static override args = {
    id: Args.string({description: 'album id', name: 'ID', required: true}),
  }

  static override description = 'get album info'

  static override examples = [
    '// https://mrtehran.app/album/BG8EKNqgARP1wlzv0QVjob',
    '<%= config.bin %> <%= command.id %> BG8EKNqgARP1wlzv0QVjob',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(AlbumInfo)

    console.log(await albumInfo(args.id))
  }
}
