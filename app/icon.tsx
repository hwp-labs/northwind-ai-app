import { ImageResponse } from "next/og";

const SIZE = true ? 42 : 512;
const DIM = true ? 24 : "60%";

export const size = {
  width: SIZE,
  height: SIZE,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        color: "white",
        backgroundColor: "black",
        borderRadius: 99,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={DIM}
        height={DIM}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-gpu-icon lucide-gpu"
      >
        <path d="M2 21V3" />
        <path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" />
        <path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
        <circle cx="16" cy="11" r="2" />
        <circle cx="8" cy="11" r="2" />
      </svg>
    </div>,
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
