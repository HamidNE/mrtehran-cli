import {expect, test} from '@oclif/test'

describe('artist:download:top', () => {
  test
  .stdout()
  .command(['artist:download:top'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['artist:download:top', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
