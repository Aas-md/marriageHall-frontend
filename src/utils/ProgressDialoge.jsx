// ProgressDialog.jsx
import React from "react";

export default function ProgressDialog({ open = false, message = "Loading..." }) {
  if (!open) return null; // nothing if not open

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px 30px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          fontSize: "18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* simple spinner */}
        <div
          style={{
            width: "30px",
            height: "30px",
            border: "4px solid #ddd",
            borderTopColor: "#3498db",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <span>{message}</span>
      </div>
      <style>
        {`
          @keyframes spin {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
}
