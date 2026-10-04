import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const PAPER = "#F4F1EA";
const INK = "#1F1D1A";
const MUTED = "#6B655C";
const ACCENT = "#B4532A";

// Optional ?title=&subtitle= make per-page previews (used by project pages).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "Houy Sengleang").slice(0, 80);
  const subtitle = (
    searchParams.get("subtitle") ??
    "Backend-focused full stack developer. Laravel, NestJS, and open-source tools for search, AI and API security."
  ).slice(0, 180);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PAPER,
          padding: "72px 80px",
          border: `24px solid ${PAPER}`,
          outline: `1px solid ${INK}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          <span>Houy Sengleang</span>
          <span>Phnom Penh</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: INK,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: MUTED,
              lineHeight: 1.4,
              maxWidth: 940,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${MUTED}`,
            paddingTop: 24,
            fontSize: 22,
            color: MUTED,
          }}
        >
          <span>{siteConfig.url.replace("https://", "")}</span>
          <span style={{ color: ACCENT }}>github.com/{siteConfig.username}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
