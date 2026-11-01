type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function SectionImage({ src, alt, className = "", priority = false }: SectionImageProps) {
  return <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} className={`h-full w-full object-cover ${className}`} />;
}
