import { TEntity } from "./app.type";

export type TVideo = TEntity & {
  duration: number;
  height: number;
  width: number;
  playbackUrl: string;
  url: string;
  assetId: string;
  format: TVideoFormat;
  videoOwner: VideoOwner;
};

export type TVideoDto = TVideo & {
  trainerInstructionVideoId?: string;
  traineeFeedbackVideoId?: string;
};

export type TVideoFilter = {
  assetId?: string;
  format?: TVideoFormat;
  traineeId?: string;
};

export const VIDEO_FORMATS = [
  "MP4",
  "MOV",
  "AVI",
  "FLV",
  "WMV",
  "MKV",
  "WEBM",
] as const;
export type TVideoFormat = (typeof VIDEO_FORMATS)[number];

export const VIDEO_OWNERS = ["TRAINER", "USER"] as const;
export type VideoOwner = (typeof VIDEO_OWNERS)[number];