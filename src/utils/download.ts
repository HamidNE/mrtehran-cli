import type {ITrack} from "mrtehran/dist/types/api.js";
import type {ReadableStream} from "node:stream/web";

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

export async function downloadSongs(res: ITrack[], destination: string) {
    await mkdir(destination, {recursive: true});

    for (const item of res) {
        await downloadFile(
            `https://cdnmrtehran.ir/media/${item.track_audio}`,
            join(destination, `${kebabCase(item.track_title)}.mp3`)
        )
        console.log('FINISH Download file =>', item.track_title);
    }
}
