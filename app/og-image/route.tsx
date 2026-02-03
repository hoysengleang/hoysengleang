import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "linear-gradient(to bottom right, #1a1a2e 0%, #0a0a0a 100%)",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "60px",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "white",
              marginBottom: 20,
              letterSpacing: "-0.05em",
            }}
          >
            {siteConfig.authorName}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 36,
              color: "#a78bfa",
              marginBottom: 40,
            }}
          >
            Backend Developer
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: "#9ca3af",
              maxWidth: 800,
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            Building high-performance APIs and scalable web architectures
          </div>

          {/* Skills Badge */}
          <div
            style={{
              display: "flex",
              gap: 15,
              marginTop: 40,
            }}
          >
            {["Laravel", "Python", "Next.js", "PostgreSQL"].map((skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: "rgba(167, 139, 250, 0.1)",
                  border: "2px solid rgba(167, 139, 250, 0.3)",
                  padding: "10px 20px",
                  borderRadius: 8,
                  color: "#a78bfa",
                  fontSize: 18,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#6b7280",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
