import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

export default function Router() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
}
