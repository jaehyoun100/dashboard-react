import { useState } from "react";
import { ImgList } from "./component/ImgList.js";

function App() {
  const [page, setPage] = useState(1);

  const [subject, setSubject] = useState(1);

  const onClickSubjectHandler = (value) => {
    setSubject(value);
    console.log("주제" + value + "번 선택됨");
  };

  const onClickBackHandler = () => {
    var value = Math.max(page - 1, 1);
    // Math.max: 주어진 값중 더 큰 값을 반환한다
    // 1은 고정이고 1보다 page가 작아질 경우
    // 주어진 값중 더 큰 값을 반환하기에
    // value에는 1이 저장된다
    setPage(value);
    console.log("이전 클릭" + value);
  };

  const onClickNextHandler = () => {
    var value = Math.min(page + 1, 4);
    setPage(value);
    console.log("다음 클릭" + value);
  };

  return (
    <div>
      <div>
        <table
          style={{
            width: "600px",
            textAlign: "center",
            borderCollapse: "collapse",
          }}
        >
          <colgroup>
            <col span="6" style={{ width: "100px" }} />
          </colgroup>
          <thead>
            <tr>
              {/* onClickSubjectHandler함수가 실행되면 파라미터에 값을 줌 */}
              <td onClick={() => onClickSubjectHandler(1)}>뉴스스탠드</td>
              <td onClick={() => onClickSubjectHandler(2)}>언론사편집</td>
              <td onClick={() => onClickSubjectHandler(3)}>엔터</td>
              <td onClick={() => onClickSubjectHandler(4)}>스포츠</td>
              <td onClick={() => onClickSubjectHandler(5)}>경제</td>
              <td onClick={() => onClickSubjectHandler(6)}>쇼핑투데이</td>
            </tr>
          </thead>
          <tbody>
            {subject === 1 && (
              //이 방법은 조건부 랜더링을 하고있는데
              // 조건부 랜더링을 할 때 Component를 사용할 경우
              // <>(fragment)를사용하지 않으면 오류가 발생한다
              <>
                <ImgList page={page} />
                <tr>
                  <td colSpan="6">
                    <button onClick={onClickBackHandler}>{"<"}</button>
                    언론사 더보기 {page}
                    <button onClick={onClickNextHandler}>{">"}</button>
                  </td>
                </tr>
              </>
            )}
            {subject === 2 && (
              <>
                <tr>
                  <td colSpan="6">언론사편집 영역입니다</td>
                </tr>
              </>
            )}
            {subject === 3 && (
              <>
                <tr>
                  <td colSpan="6">엔터 영역입니다</td>
                </tr>
              </>
            )}
            {subject === 4 && (
              <>
                <tr>
                  <td colSpan="6">스포츠 영역입니다</td>
                </tr>
              </>
            )}
            {subject === 5 && (
              <>
                <tr>
                  <td colSpan="6">경제 영역입니다</td>
                </tr>
              </>
            )}
            {subject === 6 && (
              <>
                <tr>
                  <td colSpan="6">쇼핑투테이 영역입니다</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
