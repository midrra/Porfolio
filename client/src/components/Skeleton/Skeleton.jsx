import React from "react";
import "./Skeleton.scss";

const Skeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="skeleton skeleton-img"></div>
       <div className="skeleton skeleton-title"></div>
    </div>
  );
};

export default Skeleton;
