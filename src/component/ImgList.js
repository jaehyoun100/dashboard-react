import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";

export function ImgList({ page }) {
  const imgList = [
    [img1, img1, img1, img1, img1, img1],
    [img2, img2, img2, img2, img2, img2],
    [img3, img3, img3, img3, img3, img3],
    [img4, img4, img4, img4, img4, img4],
  ];

  return (
    <>
      <tr>
        {imgList[page - 1].slice(0, 3).map((img, index) => (
          <td colSpan="2">
            <img
              key={index}
              src={img}
              style={{height: "40px" }}
            />
          </td>
        ))}
      </tr>
      <tr>
        {imgList[page - 1].slice(3, 6).map((img, index) => (
          <td colSpan="2">
            <img
              key={index}
              src={img}
              style={{ height: "40px" }}
            />
          </td>
        ))}
      </tr>
    </>
  );
}
