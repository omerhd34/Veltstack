import Image from "next/image";

interface BlogPreviewImageProps {
  src: string;
  alt: string;
}

export function BlogPreviewImage({ src, alt }: BlogPreviewImageProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0B0F0D]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}
