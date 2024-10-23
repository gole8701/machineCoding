import React from "react";
import "../App.css";

function ShimmerUI() {
  return (
    <div className="shimmerMain">
      {Array(15)
        .fill(0)
        .map((_, idx) => {
          return (
            <div className="shimmer" key={idx}>
              <img
                height={150}
                width={150}
                src="https://i.pinimg.com/736x/e7/ed/fe/e7edfe2f0604b1fc6ed64cb707814d55.jpg"
                alt="shimmer"
              />{" "}
              <p>This is dummy text</p>
            </div>
          );
        })}
    </div>
  );
}

export default ShimmerUI;
