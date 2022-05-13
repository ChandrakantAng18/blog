import React from "react";
import { useLocation } from "react-router-dom";

export const BlogDetail = () => {
  const location = useLocation();
  return (
    <div style={{ margin: "20px" }}>
      <img
        style={{ hight: "700px", width: "1000px", marginLeft: "240px" }}
        src={location?.state?.blog?.full_img}
        alt="blog_image"
      />
      <h1>{location?.state?.blog?.title}</h1>
      <p>{location?.state?.blog?.detail}</p>
    </div>
  );
};
