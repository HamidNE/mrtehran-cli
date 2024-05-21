import {Args, Command, Flags} from '@oclif/core'

export default class AlbumDownload extends Command {
  static override args = {
    id: Args.string({description: 'album id'}),
  }

  static override description = 'describe the command here'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  public async run(): Promise<void> {
    const {args, flags: { force }} = await this.parse(AlbumDownload);

    if (!force) await this.validateInputs(args.id);

  }

  private async validateInputs (id: string | undefined) {
    if (!id) this.error('You must provide an album id')
  }
}
