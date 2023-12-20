export type ImageMimeType = `image/${"png" | "jpeg" | "gif" | "bmp" | "x-ms-bmp" | "tiff"}`;
export type Base64URI = `data:${ImageMimeType};base64,${string}`;