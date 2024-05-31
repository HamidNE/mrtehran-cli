mrtehran-cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mrtehran-cli.svg)](https://npmjs.org/package/mrtehran-cli)
[![Downloads/week](https://img.shields.io/npm/dw/mrtehran-cli.svg)](https://npmjs.org/package/mrtehran-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mrtehran-cli
$ mrtehran COMMAND
running command...
$ mrtehran (--version)
mrtehran-cli/0.1.0 darwin-arm64 node-v20.12.2
$ mrtehran --help [COMMAND]
USAGE
  $ mrtehran COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mrtehran album download ID`](#mrtehran-album-download-id)
* [`mrtehran album info ID`](#mrtehran-album-info-id)
* [`mrtehran artist download last ID`](#mrtehran-artist-download-last-id)
* [`mrtehran artist download top ID`](#mrtehran-artist-download-top-id)
* [`mrtehran help [COMMAND]`](#mrtehran-help-command)
* [`mrtehran playlist download ID`](#mrtehran-playlist-download-id)

## `mrtehran album download ID`

download album songs

```
USAGE
  $ mrtehran album download ID [-p <value>]

ARGUMENTS
  ID  album id

FLAGS
  -p, --path=<value>  [default: /Users/hamid/Code/Personal/mrtehran-cli] path to save songs

DESCRIPTION
  download album songs

EXAMPLES
  $ mrtehran album download m8RWXp05rY1j2Be2N7jqGk

  $ mrtehran album download m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/
```

_See code: [src/commands/album/download.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.1.0/src/commands/album/download.ts)_

## `mrtehran album info ID`

get album info

```
USAGE
  $ mrtehran album info ID

ARGUMENTS
  ID  album id

DESCRIPTION
  get album info

EXAMPLES
  $ mrtehran album info m8RWXp05rY1j2Be2N7jqGk
```

_See code: [src/commands/album/info.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.1.0/src/commands/album/info.ts)_

## `mrtehran artist download last ID`

get last songs of artist

```
USAGE
  $ mrtehran artist download last ID [-p <value>]

ARGUMENTS
  ID  album id

FLAGS
  -p, --path=<value>  [default: /Users/hamid/Code/Personal/mrtehran-cli] path to save songs

DESCRIPTION
  get last songs of artist

EXAMPLES
  $ mrtehran artist download last m8RWXp05rY1j2Be2N7jqGk

  $ mrtehran artist download last m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/
```

_See code: [src/commands/artist/download/last.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.1.0/src/commands/artist/download/last.ts)_

## `mrtehran artist download top ID`

get top songs of artist

```
USAGE
  $ mrtehran artist download top ID [-p <value>]

ARGUMENTS
  ID  album id

FLAGS
  -p, --path=<value>  [default: /Users/hamid/Code/Personal/mrtehran-cli] path to save songs

DESCRIPTION
  get top songs of artist

EXAMPLES
  $ mrtehran artist download top m8RWXp05rY1j2Be2N7jqGk

  $ mrtehran artist download top m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/
```

_See code: [src/commands/artist/download/top.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.1.0/src/commands/artist/download/top.ts)_

## `mrtehran help [COMMAND]`

Display help for mrtehran.

```
USAGE
  $ mrtehran help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mrtehran.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## `mrtehran playlist download ID`

download playlist songs

```
USAGE
  $ mrtehran playlist download ID [-p <value>]

ARGUMENTS
  ID  album id

FLAGS
  -p, --path=<value>  [default: /Users/hamid/Code/Personal/mrtehran-cli] path to save songs

DESCRIPTION
  download playlist songs

EXAMPLES
  $ mrtehran playlist download m8RWXp05rY1j2Be2N7jqGk

  $ mrtehran playlist download m8RWXp05rY1j2Be2N7jqGk -p ~/Music/Albums/
```

_See code: [src/commands/playlist/download.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.1.0/src/commands/playlist/download.ts)_
<!-- commandsstop -->
