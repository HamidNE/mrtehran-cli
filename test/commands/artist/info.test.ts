import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('artist:info', () => {
  it('runs artist:info cmd', async () => {
    const {stdout} = await runCommand('artist:info')
    expect(stdout).to.contain('hello world')
  })

  it('runs artist:info --name oclif', async () => {
    const {stdout} = await runCommand('artist:info --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
