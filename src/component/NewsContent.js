import { useEffect, useState } from "react";
import NewsStand from "./NewsStand";
import MediaCompany from "./MediaCompany";

export function NewsContent() {
  const main = {
    display: "grid",
  };
  const cont1 = {
    width: "790px",
    height: "23px",
    padding: "18px 20px 17px 20px",
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
  };
  const cont2 = {
    width: "750px",
    height: "26px",
    padding: "12px 20px",
    margin: "0 20px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5f7f8",
    justifyContent: "space-between",
  };

  const cont3 = {
    height: "224px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "18px 20px",
  };

  const cont4 = {
    width: "830px",
    height: "36px",
    padding: "10px 0 11px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid lightgray",
    gap: "10px",
  };
  const button = {
    backgroundColor: "#fff",
    border: "1px solid lightgray",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
  };

  const [page, setPage] = useState(1);
  const [subject, setSubject] = useState(1);
  const subjectPages = {
    1: 4,
    2: 21,
    3: 3,
    4: 3,
    5: 4,
    6: 10,
  };

  const onClickSubjectHandler = (value) => {
    setSubject(value);
    setPage(1);
  };

  const onClickBackHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      const prevSubject = (subject === 1 ? 6 : subject - 1);
      
      setSubject(prevSubject);
      setPage(subjectPages[prevSubject]);
    }
  };

  const onClickNextHandler = () => {
    if (page < subjectPages[subject]) {
      setPage(page + 1);
    } else {//마지막페이지보다 큰 숫자일 경우
      const nextSubject = (subject === 6 ? 1 : subject + 1);
      //쇼핑투데이에서 뉴스스탠드로 넘거가거나 다음 주제로 이동하게 해줌
      setSubject(nextSubject);
      setPage(1);
    }
  };

  //10초 지날때마다 다음을 동작하는 코드
  //솔직히 이해 못함
  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prevPage => {
        if (prevPage === subjectPages[subject]) {
          const nextSubject = subject === 6 ? 1 : subject + 1;
          setSubject(nextSubject); 
          return 1; 
        } else {
          return prevPage + 1; 
        }
      });
    }, 10000);
  
    return () => clearInterval(interval);
  }, [subject, subjectPages]);

  return (
    <div id="main" style={main}>
      <div id="cont1" style={cont1}>
        <div onClick={() => onClickSubjectHandler(1)}>뉴스스탠드</div>᛫
        <div onClick={() => onClickSubjectHandler(2)}>언론사편집</div>/
        <div onClick={() => onClickSubjectHandler(3)}>엔터</div>/
        <div onClick={() => onClickSubjectHandler(4)}>스포츠</div>/
        <div onClick={() => onClickSubjectHandler(5)}>경제</div>/
        <div onClick={() => onClickSubjectHandler(6)}>쇼핑투데이</div>
      </div>
      <div id="cont2" style={cont2}>
        <div>
          전체언론사 ▾ | 파이낸셜뉴스30대 부부 "대출만
          3.4억···출산·이사·노후대비 '막막'"...
        </div>
        <div>뉴스홈</div>
      </div>
      <div id="cont3" style={cont3}>
        {subject === 1 ? (
          <NewsStand page={page} />
        ) : (
          <div>
            {subject === 2 && <><MediaCompany page={page}/></>}
            {subject === 3 && <div>엔터 영역입니다</div>}
            {subject === 4 && <div>스포츠 영역입니다</div>}
            {subject === 5 && <div>경제 영역입니다</div>}
            {subject === 6 && <div>쇼핑투데이 영역입니다</div>}
          </div>
        )}
      </div>
      <div id="cont4" style={cont4}>
        <button onClick={onClickBackHandler} style={button}>
          {"<"}
        </button>
        {subject === 1 && <>언론사 </>}
        {subject === 2 && <>언론사 </>}
        {subject === 3 && <>엔터 </>}
        {subject === 4 && <>스포츠 </>}
        {subject === 5 && <>경제 </>}
        {subject === 6 && <>쇼핑투데이 </>}
        더보기 {page}
        <button onClick={onClickNextHandler} style={button}>
          {">"}
        </button>
      </div>
    </div>
  );
}
