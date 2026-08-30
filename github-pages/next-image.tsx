/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ImgHTMLAttributes } from "react";

type StaticImageSource = string | { src: string };

type StaticImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "alt"
> & {
  src: StaticImageSource;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

export default function StaticImage({
  src,
  alt,
  fill = false,
  priority = false,
  unoptimized,
  width,
  height,
  style,
  loading,
  fetchPriority,
  ...imageProps
}: StaticImageProps) {
  const rawSource = typeof src === "string" ? src : src.src;
  const resolvedSource = rawSource.startsWith("/")
    ? `${import.meta.env.BASE_URL}${rawSource.slice(1)}`
    : rawSource;
  const imageStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }
    : style;

  void unoptimized;

  return (
    <img
      {...imageProps}
      alt={alt}
      src={resolvedSource}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      style={imageStyle}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : fetchPriority}
      decoding="async"
    />
  );
}
