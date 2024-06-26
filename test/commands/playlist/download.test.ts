import {expect, test} from '@oclif/test'

describe('playlist:download', () => {
  test
  .stdout()
  .command(['playlist:download'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['playlist:download', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
