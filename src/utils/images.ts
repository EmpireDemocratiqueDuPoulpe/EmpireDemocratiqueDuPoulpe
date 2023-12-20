import Jimp from "jimp";
import type { Base64URI } from "./images.types";

export async function convertToBase64URI(filepath: string, size: number = 32, quality: number = 50) : Promise<Base64URI> {
	const image: Jimp = await Jimp.read(filepath);
	return await image.resize(size, size).quality(quality).getBase64Async(Jimp.MIME_PNG) as Base64URI;
}