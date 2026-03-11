"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import hoysengleangDark from "@/public/hoysengleang-bg-black.jpg";
import hoysengleangLight from "@/public/hoysengleang-bg-white-transparent.png";

type ThemedProfileImageProps = {
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function ThemedProfileImage({
  alt,
  priority = true,
  sizes = "(max-width: 1024px) 82vw, 440px",
  className,
}: ThemedProfileImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const src = isDark ? hoysengleangDark : hoysengleangLight;
  const themeClass = useMemo(
    () => (isDark ? "hero-photo-image-dark" : "hero-photo-image-light"),
    [isDark]
  );

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={cn("hero-photo-image", themeClass, className)}
      sizes={sizes}
    />
  );
}
