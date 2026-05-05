import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020617 0%, #082f49 55%, #0e7490 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#67e8f9",
            marginBottom: 16,
            letterSpacing: 1.2,
          }}
        >
          BACKEND-FULLSTACK PORTFOLIO
        </div>
        <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1.08 }}>
          Nguyễn Văn Uy
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 24,
            color: "#e2e8f0",
            maxWidth: 920,
          }}
        >
          Intern PHP - Kiến trúc hệ thống, Microservices, AI RAG, Tối ưu MySQL
        </div>
      </div>
    ),
    size,
  );
}
