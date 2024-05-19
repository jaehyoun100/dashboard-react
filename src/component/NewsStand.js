import React from "react";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";

export default function NewsStand({ page }) {
  const cont3content = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 131.27px)",
  };

  const cont3contentDiv = {
    height: "20px",
    width: "131.27px",
    padding: "17px 0",
    border: "0.5px solid #ddd",
    textAlign: "center",
  };

  const imgList = [
    [
      [img1, img1, img1, img1, img1, img1],
      [img1, img1, img1, img1, img1, img1],
      [img1, img1, img1, img1, img1, img1],
      [img1, img1, img1, img1, img1, img1],
    ],
    [
      [img2, img2, img2, img2, img2, img2],
      [img2, img2, img2, img2, img2, img2],
      [img2, img2, img2, img2, img2, img2],
      [img2, img2, img2, img2, img2, img2],
    ],
    [
      [img3, img3, img3, img3, img3, img3],
      [img3, img3, img3, img3, img3, img3],
      [img3, img3, img3, img3, img3, img3],
      [img3, img3, img3, img3, img3, img3],
    ],
    [
      [img4, img4, img4, img4, img4, img4],
      [img4, img4, img4, img4, img4, img4],
      [img4, img4, img4, img4, img4, img4],
      [img4, img4, img4, img4, img4, img4],
    ],
  ];

  return (
    <>
      {imgList[page - 1].map((imgRow, rowIndex) => (
        <div key={rowIndex} style={cont3content}>
          {imgRow.map((img, imgIndex) => (
            <div key={imgIndex} style={cont3contentDiv}>
              <img src={img} alt="a" style={{ height: "100%" }} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
