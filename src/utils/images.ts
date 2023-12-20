import fs from "fs";
import mime from "mime-types";
import type { ImageMimeType, Base64URI } from "./images.types";

export function convertToBase64URI(filepath: string) : Base64URI {
	const buffer: Buffer = fs.readFileSync(filepath);
	const base64Str: string = Buffer.from(buffer).toString("base64");

	return `data:${mime.lookup(filepath) as ImageMimeType};base64,${base64Str}`;
}