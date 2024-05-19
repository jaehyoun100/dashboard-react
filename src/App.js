import Login from "./component/Login.js";
import { NewsContent } from "./component/NewsContent.js";
import { ShopingContent } from "./component/ShopingContent.js";
import addimg from "./img/add.jpg";
import addimg2 from "./img/add2.jpg";
import openrun from "./img/openrun.png";

import React from "react";

function App() {
  const grid = {
    display: "grid",
    gridTemplateRows: "auto auto",
    justifyContent: "center",
  };
  const head = {
    width: "1280px",
    height: "215px",
  };
  const content = {
    width: "1280px",
    height: "2296px",
    display: "grid",
    gridTemplateColumns: "830px 430px", // 변경된 부분: 2개의 컬럼으로 나눔
    columnGap: "20px", // 변경된 부분: 컬럼 사이의 간격 추가
    justifyContent: "space-between",
    paddingBottom: "60px",
  };
  const content1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const content2 = {
    height: "1938px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const con1Content1 = {
    height: "130px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con1Content2 = {
    height: "426px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con1Content3 = {
    height: "560px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con1Content4 = {
    height: "1132px",
    padding: "0 20px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con2Content1 = {
    height: "164px",

    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con2Content2 = {
    height: "240px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con2Content3 = {
    height: "236px",
    padding: "0 18px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con2Content4 = {
    height: "236px",
    padding: "0 18px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con2Content5 = {
    height: "80px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con2Content6 = {
    height: "771px",
    padding: "15px 18px 20px 18px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const con2Content7 = {
    height: "80px",
    border: "1px solid lightgray",
    borderRadius: "10px",
  };
  const footer = {
    width: "101%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f5f6f7",
    borderTop: "1px solid lightgrey",
  };
  const footContent = {
    width: "1280px",
    height: "352px",
    paddingBottom: "78px",
  };

  return (
    <div>
      <div id="grid" style={grid}>
        <div className="head" style={head}>
          head
        </div>
        <div className="content" style={content}>
          <div id="content1" style={content1}>
            <div id="con1-content1" style={con1Content1}>
              <a href="https://www.unicef.or.kr/event/unicef-team-ring1-1/?trackcode=displayad_naver_time_23teamring1-1&utm_source=naver&utm_medium=display&utm_content=20240510_%ED%83%80%EC%9E%84%EB%B3%B4%EB%93%9CCPC_23TEAM_%EB%8B%A8%EC%B2%B4%EC%9B%90%EA%B8%B0%EB%91%A5%EB%B3%B4%EB%9D%BCCTA&utm_campaign=23teamring1-1&epe_vid=221&epe_tcd=437957191">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={addimg}
                  alt="유니세프 팀 반지 광고"
                />
              </a>
            </div>
            <div id="con1-content2" style={con1Content2}>
              <NewsContent />
            </div>
            <div id="con1-content3" style={con1Content3}>
              <ShopingContent/>
            </div>
            <div id="con1-content4" style={con1Content4}>
              content1-4
            </div>
          </div>
          <div id="content2" style={content2}>
            <div id="con2-content1" style={con2Content1}>
              <Login />
            </div>
            <div id="con2-content2" style={con2Content2}>
              <a href="https://www.i-park.com/seodaemun">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={addimg2}
                  alt="센트럴 아이파크 광고"
                />
              </a>
            </div>
            <div id="con2-content3" style={con2Content3}>
              content2-3
            </div>
            <div id="con2-content4" style={con2Content4}>
              content2-4
            </div>
            <div id="con2-content5" style={con2Content5}>
              <a href="https://mkt.naver.com/openrun?dtm_detail=branding_a&dtm_source=naver_pcstockbottom&dtm_medium=mktatrb&dtm_campaign=2404-shopping-012&pcode=naver_pcstockbottom_branding_a&campaign_id=2404-shopping-012&channel_id=naver_pcstockbottom&material=branding_a">
                <img
                  src={openrun}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  alt="오픈런 이미지"
                />
              </a>
            </div>
            <div id="con2-content6" style={con2Content6}>
              content2-6
            </div>
            <div id="con2-content7" style={con2Content7}>
              content2-7
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={footer}>
        <div id="foot-content" style={footContent}>
          footcontent
        </div>
      </div>
    </div>
  );
}

export default App;
