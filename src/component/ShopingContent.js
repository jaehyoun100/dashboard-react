import { useState } from "react";
import Shoping from "./Shoping";

export function ShopingContent() {
  const main = {
    width: "831px",
    height: "560px",
  };

  const mainSubject = {
    display: "flex",
    width: "790px",
    height: "23px",
    padding: "19px 20px 16px 20px",
    justifyContent: "space-between",
  };
  const subjectname = {
    display: "flex",
    gap: "10px",
  };
  const subjectbar = {
    display: "flex",
    alignItems: "center",
  };
  const content = {
    width: "790px",
    height: "375px",
    display: "flex",
    padding: "0 20px",
  };
  const coment = {
    display: "flex",
    width: "750px",
    height: "21px",
    padding: "15px 20px 14px 20px",
    gap: "10px",
    backgroundColor: "#f5f7f8",
    marginLeft: "20px",
  };

  const navigation = {
    width: "830px",
    height: "36px",
    padding: "10px 0 11px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid lightgray",
    gap: "10px",
    marginTop: "18px",
  };
  const button = {
    backgroundColor: "#fff",
    border: "1px solid lightgray",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
  };
  const subbutton = {
    backgroundColor: "#fff",
    border: "1px solid lightgray",
    borderRadius: "5px",
    width: "30px",
    height: "30px",
  }

  const [page, setPage] = useState(1);
  const [subject, setSubject] = useState(1);
  const subjectPages = {
    1: 13,
    2: 6,
    3: 11,
    4: 7,
  };

  const onClickSubjectHandler = (value) => {
    setSubject(value);
    setPage(1);
  };

  const onClickBackHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      const prevSubject = subject === 1 ? 4 : subject - 1;

      setSubject(prevSubject);
      setPage(subjectPages[prevSubject]);
    }
  };

  const onClickNextHandler = () => {
    if (page < subjectPages[subject]) {
      setPage(page + 1);
    } else {
      const nextSubject = subject === 4 ? 1 : subject + 1;
      setSubject(nextSubject);
      setPage(1);
    }
  };

  return (
    <div id="main" style={main}>
      <div id="mainSubject" style={mainSubject}>
        <div id="subjectname" style={subjectname}>
          <div onClick={() => onClickSubjectHandler(1)}>쇼핑</div>/
          <div onClick={() => onClickSubjectHandler(2)}>맨즈</div>/
          <div onClick={() => onClickSubjectHandler(3)}>원쁠딜</div>/
          <div onClick={() => onClickSubjectHandler(4)}>쇼핑라이브</div>
        </div>
        <div id="subjectbar" style={subjectbar}>
          {page} 페이지
          <button onClick={onClickBackHandler} style={subbutton}>{"<"}</button>
          <button onClick={onClickNextHandler} style={subbutton}>{">"}</button>
        </div>
      </div>
      <div id="content" style={content}>
        {subject === 1 ? (
          <Shoping page={page} />
        ) : (
          <div>
            {subject === 2 && <div>맨즈 영역입니다</div>}
            {subject === 3 && <div>원쁠딜 영역입니다</div>}
            {subject === 4 && <div>쇼핑라이브 영역입니다</div>}
          </div>
        )}
      </div>

      <div id="coment" style={coment}>
        <div>오늘의 혜택</div>᛫<div>(샵이름)이 추천하는 상품을 모아모아~</div>
      </div>

      <div id="navigation" style={navigation}>
        <button onClick={onClickBackHandler} style={button}>
          {"<"}
        </button>
        쇼핑아이템 더보기 더보기 {page}
        <button onClick={onClickNextHandler} style={button}>
          {">"}
        </button>
      </div>
    </div>
  );
}
