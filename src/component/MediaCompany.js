import React from "react";
import news1 from "../img/news1.jpg";
import news2 from "../img/news2.jpg";
import news3 from "../img/news3.jpg";
import news4 from "../img/news4.jpg";

export default function MediaCompany({ page }) {
  const main = {
    display: "grid",
    width: "750px",
    height: "188px",
    margin: "8px 20px 18px 20px",
    gridTemplateColumns: "1fr 1fr",
  };
  const cont = {
    display: "flex",
    alignItems: "center",
    marginBottom: "18px",
  };
  const pic = {
    width: "156px",
    height: "104px",
    marginRight: "16px",
  };
  const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  };
  const content = {
    width: "213px",
    height: "100px",
  };
  const contentTitle = {
    width: "213px",
    height: "26px",
    marginTop: "3px",
    fontWeight: "bold",
  };
  const contentMain = {
    width: "213px",
    height: "42px",
    marginTop: "5px",
    fontSize: "15px",
  };
  const contentDate = {
    width: "213px",
    height: "17px",
    marginTop: "7px",
    fontSize: "15px",
    color: "gray",
  };

  return (
    <div id="main" style={main}>
      {page === 1 && (
        <>
          <div id="cont" style={cont}>
            <div id="pic" style={pic}>
              <img src={news1} style={img} alt="a" />
            </div>
            <div id="content" style={content}>
              <div id="contentTitle" style={contentTitle}>
                연합뉴스
              </div>
              <div id="contentMain" style={contentMain}>
                '뺑소니' 김호중, 유흥주점서 집까지 차로 2분거리
              </div>
              <div id="contentDate" style={contentDate}>
                05원 19일 19:31
              </div>
            </div>
          </div>
          <div id="cont" style={cont}>
            <div id="pic" style={pic}>
              <img src={news2} style={img} alt="a" />
            </div>
            <div id="content" style={content}>
              <div id="contentTitle" style={contentTitle}>
                국민일보
              </div>
              <div id="contentMain" style={contentMain}>
                때릴수록 힘 받는 ‘한동훈 출마론’…국힘 내 “확실한 흥행 카드”
              </div>
              <div id="contentDate" style={contentDate}>
                05원 19일 19:31
              </div>
            </div>
          </div>
          <div id="cont" style={cont}>
            <div id="pic" style={pic}>
              <img src={news3} style={img} alt="a" />
            </div>
            <div id="content" style={content}>
              <div id="contentTitle" style={contentTitle}>
                서울신문
              </div>
              <div id="contentMain" style={contentMain}>
                민희진 “네이버·두나무 만남은 사적 자리…카톡 내용도 짜집기”
              </div>
              <div id="contentDate" style={contentDate}>
                05원 19일 19:31
              </div>
            </div>
          </div>
          <div id="cont" style={cont}>
            <div id="pic" style={pic}>
              <img src={news4} style={img} alt="a" />
            </div>
            <div id="content" style={content}>
              <div id="contentTitle" style={contentTitle}>
                SBS
              </div>
              <div id="contentMain" style={contentMain}>
                "물의 빚어 죄송"하다던 배우들, 속속 '넷플릭스'로 복귀
              </div>
              <div id="contentMain" style={contentMain}>
                05원 19일 19:31
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
