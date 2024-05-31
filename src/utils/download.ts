import type {ITrack} from "mrtehran/dist/types/api.js";
import type {ReadableStream} from "node:stream/web";

import {Listr} from "listr2";
import {createWriteStream} from "node:fs";
import {mkdir} from "node:fs/promises";
import {join} from "node:path";
import {Readable} from "node:stream";
import {finished} from "node:stream/promises";

import {kebabCase} from "./string.js";

export async function downloadFile(url: string, path: string) {
  const {body} = await fetch(url);
  const stream = createWriteStream(path);
  return finished(Readable.fromWeb(body as ReadableStream).pipe(stream));
}

function downloadSong(item: ITrack, destination: string) {
  return downloadFile(
      `https://cdnmrtehran.ir/media/${item.track_audio}`,
      join(destination, `${kebabCase(item.track_title)}.mp3`)
  );
}

export async function downloadSongs(res: ITrack[], destination: string) {
  await mkdir(destination, {recursive: true});

  const tasks = new Listr(res.map(item => ({
    task: () => downloadSong(item, destination),
    title: item.track_title
  })));

  await tasks.run();
}
