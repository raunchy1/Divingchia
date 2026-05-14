"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import {
  CATEGORIES,
  PHOTOS,
  type GalleryCategory,
  type GalleryPhoto,
} from "@/lib/galleryPhotos";

type Filter = "all" | GalleryCategory;

interface GalleryClientProps {
  labels: {
    all: string;
    altPrefix: string;
    captionLabel: string;
    closeLabel: string;
    prevLabel: string;
    nextLabel: string;
    counter: (n: number, total: number) => string;
  };
  categoryLabels: Record<GalleryCategory, { label: string; tagline: string }>;
}

const SWIPE_THRESHOLD = 48; // px

export default function GalleryClient({ labels, categoryLabels }: GalleryClientProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible: GalleryPhoto[] = useMemo(
    () => (filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter]
  );

  useEffect(() => {
    setLightboxIndex(null);
  }, [filter]);

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length]
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + visible.length) % visible.length
      ),
    [visible.length]
  );

  // Keyboard + body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, close, next, prev]);

  // Touch swipe in lightbox
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) next();
      else prev();
    } else if (dy > SWIPE_THRESHOLD * 1.5 && Math.abs(dx) < SWIPE_THRESHOLD) {
      // swipe-down to close
      close();
    }
  };

  const active = lightboxIndex !== null ? visible[lightboxIndex] : null;

  return (
    <>
      {/* Category filter — horizontally scrollable on mobile */}
      <section
        className="sticky top-[156px] z-30 border-b md:top-[140px] lg:top-[156px]"
        style={{
          backgroundColor: "#0D1B2A",
          borderColor: "rgba(201, 168, 76, 0.15)",
        }}
      >
        <div
          className="scrollbar-none mx-auto w-full max-w-[1280px] overflow-x-auto px-4 md:px-12 lg:px-20"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex min-w-max gap-2 py-3 md:gap-3 md:py-4">
            <FilterChip
              active={filter === "all"}
              label={labels.all}
              count={PHOTOS.length}
              onClick={() => setFilter("all")}
            />
            {CATEGORIES.map((c) => {
              const count = PHOTOS.filter((p) => p.category === c.key).length;
              return (
                <FilterChip
                  key={c.key}
                  active={filter === c.key}
                  label={categoryLabels[c.key].label}
                  count={count}
                  onClick={() => setFilter(c.key)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Tagline of active category */}
      {filter !== "all" && (
        <section
          style={{ backgroundColor: "#0D1B2A" }}
          className="px-6 pb-10 pt-2 md:px-16 md:pb-12 lg:px-20"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <p
              className="font-cormorant text-xl font-light italic md:text-3xl"
              style={{ color: "#C9A84C" }}
            >
              {categoryLabels[filter].tagline}
            </p>
          </div>
        </section>
      )}

      {/* Masonry — 2 cols on phones, 3 on tablets, 4 on desktop */}
      <section
        className="px-2 py-10 sm:px-4 md:px-12 md:py-16 lg:px-20"
        style={{ backgroundColor: "#FAFAF8" }}
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="columns-2 gap-2 sm:columns-2 sm:gap-3 md:columns-3 md:gap-4 lg:columns-3 xl:columns-4">
            {visible.map((photo, i) => (
              <button
                key={photo.file}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="gallery-tile group relative mb-2 block w-full break-inside-avoid overflow-hidden rounded-sm sm:mb-3 md:mb-4"
                style={{
                  backgroundColor: "#0D1B2A",
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                }}
                aria-label={photo.caption}
              >
                <Image
                  src={`/images/gallery/thumb/${encodeURIComponent(photo.file)}`}
                  alt={`${labels.altPrefix}: ${photo.caption}`}
                  width={
                    photo.orientation === "portrait"
                      ? 600
                      : photo.orientation === "square"
                      ? 720
                      : 720
                  }
                  height={
                    photo.orientation === "portrait"
                      ? 900
                      : photo.orientation === "square"
                      ? 720
                      : 480
                  }
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding={i < 4 ? "sync" : "async"}
                  className="h-auto w-full select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{ imageOrientation: "from-image" } as React.CSSProperties}
                />
                {/* Category chip — always visible. Caption: hidden on mobile, shown on desktop hover. */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-2 sm:p-3 md:p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, rgba(13, 27, 42, 0.55) 60%, rgba(13, 27, 42, 0.92) 100%)",
                  }}
                >
                  <span
                    className="font-jost text-[9px] uppercase tracking-[0.18em] md:text-[10px]"
                    style={{ color: "#C9A84C" }}
                  >
                    {categoryLabels[photo.category].label}
                  </span>
                  <span
                    className="hidden font-cormorant text-base font-light leading-snug md:line-clamp-2 md:block md:text-lg"
                    style={{ color: "#FAFAF8" }}
                  >
                    {photo.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{
            backgroundColor: "rgba(13, 27, 42, 0.97)",
            height: "100dvh",
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Top bar: counter + close */}
          <div
            className="relative z-10 flex items-center justify-between px-4 py-3 md:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="font-jost text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "#C9A84C" }}
            >
              {categoryLabels[active.category].label}
              <span className="mx-2 opacity-40">/</span>
              <span style={{ color: "#FAFAF8", opacity: 0.7 }}>
                {labels.counter(lightboxIndex + 1, visible.length)}
              </span>
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={labels.closeLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 active:bg-white/20"
              style={{
                color: "#FAFAF8",
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Image area */}
          <div
            className="relative flex flex-1 items-center justify-center px-2 md:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={active.file}
              src={`/images/gallery/${encodeURIComponent(active.file)}`}
              alt={`${labels.altPrefix}: ${active.caption}`}
              width={1600}
              height={1200}
              sizes="(min-width: 1280px) 1200px, 95vw"
              priority
              className="h-auto max-h-full w-auto max-w-full object-contain"
              style={{
                maxHeight: "calc(100dvh - 200px)",
                imageOrientation: "from-image",
              } as React.CSSProperties}
            />

            {/* Prev / Next (desktop only — phones use swipe) */}
            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label={labels.prevLabel}
                  className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-white/10 md:flex md:left-6"
                  style={{ color: "#FAFAF8" }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M14 4l-7 7 7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label={labels.nextLabel}
                  className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-white/10 md:flex md:right-6"
                  style={{ color: "#FAFAF8" }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M8 4l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <div
            className="relative z-10 px-6 pb-6 pt-3 text-center md:pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="mx-auto max-w-[820px] font-cormorant text-lg font-light leading-snug md:text-2xl"
              style={{ color: "#FAFAF8" }}
            >
              {active.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function FilterChip({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-[40px] whitespace-nowrap rounded-full border px-4 py-2 font-jost text-[11px] uppercase tracking-[0.16em] transition-colors md:min-h-0 md:px-5"
      style={{
        backgroundColor: active ? "#C9A84C" : "transparent",
        borderColor: active ? "#C9A84C" : "rgba(250, 250, 248, 0.2)",
        color: active ? "#0D1B2A" : "#FAFAF8",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {label}
      <span
        className="ml-2 text-[10px] opacity-70"
        style={{ color: active ? "#0D1B2A" : "#C9A84C" }}
      >
        {count}
      </span>
    </button>
  );
}
