import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import profileImg from "./assets/image (1).png";

// Generate circular favicon from profile image
const img = new Image();
img.crossOrigin = "anonymous";
img.onload = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  const minDim = Math.min(img.width, img.height);
  const sx = (img.width - minDim) / 2;
  const sy = (img.height - minDim) / 2;
  ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);

  const favicon = document.getElementById("favicon");
  if (favicon) {
    favicon.href = canvas.toDataURL("image/png");
  }
};
img.src = profileImg;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
