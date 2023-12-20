export type ImageMimeType = `image/${"png" | "jpg" | "jpeg" | "gif" | "webp"}`;
export type Base64URI = `data:${ImageMimeType};base64,${string}`;