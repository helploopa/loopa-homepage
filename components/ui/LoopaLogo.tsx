import Image from "next/image";

export function LoopaLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/Loopa_logo_final.webp"
      alt="Loopa"
      width={120}
      height={40}
      className={className}
      style={{ width: "auto" }}
    />
  );
}
