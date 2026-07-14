import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — Websites built to earn trust and leads`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#07080D",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* gradient blob */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(123,97,255,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: 120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,182,121,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #7B61FF 0%, #F2B679 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            F
          </div>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#F5F4F1",
              letterSpacing: "-0.5px",
            }}
          >
            {site.name}
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#F5F4F1",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            maxWidth: 860,
          }}
        >
          Websites built to earn{" "}
          <span style={{ color: "#B7A6FF" }}>trust</span> and{" "}
          <span style={{ color: "#F2B679" }}>leads.</span>
        </div>

        {/* Sub */}
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#9BA0B4",
            maxWidth: 680,
            lineHeight: 1.5,
          }}
        >
          Pakistan &amp; International · Next.js · WordPress · SEO
        </div>
      </div>
    ),
    { ...size }
  );
}
