import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('playlist:info', () => {
  it('runs playlist:info cmd', async () => {
    const {stdout} = await runCommand('playlist:info')
    expect(stdout).to.contain('hello world')
  })

  it('runs playlist:info --name oclif', async () => {
    const {stdout} = await runCommand('playlist:info --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
