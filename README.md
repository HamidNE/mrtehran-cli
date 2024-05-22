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
mrtehran-cli/0.0.0 darwin-arm64 node-v20.12.2
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
* [`mrtehran plugins`](#mrtehran-plugins)
* [`mrtehran plugins add PLUGIN`](#mrtehran-plugins-add-plugin)
* [`mrtehran plugins:inspect PLUGIN...`](#mrtehran-pluginsinspect-plugin)
* [`mrtehran plugins install PLUGIN`](#mrtehran-plugins-install-plugin)
* [`mrtehran plugins link PATH`](#mrtehran-plugins-link-path)
* [`mrtehran plugins remove [PLUGIN]`](#mrtehran-plugins-remove-plugin)
* [`mrtehran plugins reset`](#mrtehran-plugins-reset)
* [`mrtehran plugins uninstall [PLUGIN]`](#mrtehran-plugins-uninstall-plugin)
* [`mrtehran plugins unlink [PLUGIN]`](#mrtehran-plugins-unlink-plugin)
* [`mrtehran plugins update`](#mrtehran-plugins-update)

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

_See code: [src/commands/album/download.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.0.0/src/commands/album/download.ts)_

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

_See code: [src/commands/album/info.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.0.0/src/commands/album/info.ts)_

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

_See code: [src/commands/artist/download/last.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.0.0/src/commands/artist/download/last.ts)_

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

_See code: [src/commands/artist/download/top.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.0.0/src/commands/artist/download/top.ts)_

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

_See code: [src/commands/playlist/download.ts](https://github.com/HamidNE/mrtehran-cli/blob/v0.0.0/src/commands/playlist/download.ts)_

## `mrtehran plugins`

List installed plugins.

```
USAGE
  $ mrtehran plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mrtehran plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.2/src/commands/plugins/index.ts)_

## `mrtehran plugins add PLUGIN`

Installs a plugin into mrtehran.

```
USAGE
  $ mrtehran plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into mrtehran.

  Uses bundled npm executable to install plugins into /Users/hamid/.local/share/mrtehran

  Installation of a user-installed plugin will override a core plugin.

  Use the MRTEHRAN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MRTEHRAN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ mrtehran plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ mrtehran plugins add myplugin

  Install a plugin from a github url.

    $ mrtehran plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ mrtehran plugins add someuser/someplugin
```

## `mrtehran plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mrtehran plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mrtehran plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.2/src/commands/plugins/inspect.ts)_

## `mrtehran plugins install PLUGIN`

Installs a plugin into mrtehran.

```
USAGE
  $ mrtehran plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into mrtehran.

  Uses bundled npm executable to install plugins into /Users/hamid/.local/share/mrtehran

  Installation of a user-installed plugin will override a core plugin.

  Use the MRTEHRAN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MRTEHRAN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ mrtehran plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ mrtehran plugins install myplugin

  Install a plugin from a github url.

    $ mrtehran plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ mrtehran plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.2/src/commands/plugins/install.ts)_

## `mrtehran plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ mrtehran plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ mrtehran plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.2/src/commands/plugins/link.ts)_

## `mrtehran plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ mrtehran plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mrtehran plugins unlink
  $ mrtehran plugins remove

EXAMPLES
  $ mrtehran plugins remove myplugin
```

## `mrtehran plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ mrtehran plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.2/src/commands/plugins/reset.ts)_

## `mrtehran plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ mrtehran plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mrtehran plugins unlink
  $ mrtehran plugins remove

EXAMPLES
  $ mrtehran plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.2/src/commands/plugins/uninstall.ts)_

## `mrtehran plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ mrtehran plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mrtehran plugins unlink
  $ mrtehran plugins remove

EXAMPLES
  $ mrtehran plugins unlink myplugin
```

## `mrtehran plugins update`

Update installed plugins.

```
USAGE
  $ mrtehran plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.1.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
