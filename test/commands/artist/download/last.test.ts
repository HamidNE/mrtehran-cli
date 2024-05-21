import {expect, test} from '@oclif/test'

describe('artist:download:last', () => {
  test
  .stdout()
  .command(['artist:download:last'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['artist:download:last', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
