import { useRef, useState } from "react";

export function Login() {
  const main = {
    display: "grid",

    width: "380px",
    height: "125px",
    padding: "21px 20px 18px 20px",
  };
  const flex = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const inputDiv = {
    display: "grid",
    gap: "5px",
  };
  const input = {
    width: "280px",
    height: "30px",
  };
  const login = {
    width: "80px",
    height: "70px",
    border: "1px solid #03c75a",
    borderRadius: "5px",
    backgroundColor: "#03c75a",
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "17px",
  };
  const userService = {
    height: "20px",
    display: "flex",
    marginTop: "16px",
    gap: "10px",
    justifyContent: "center",
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState();

  const onClickLoginHandler = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setUser(email);
  };
  const onClickLogoutHandler = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setUser("");
  };

  return (
    <>
      {localStorage.getItem("email") && (
        <>
        <div>
          {localStorage.getItem("email")} 님,
        </div>
        <div>
          안녕하세요!
        </div>
          <button onClick={onClickLogoutHandler}>로그아웃</button>
        </>
      )}
      {!localStorage.getItem("email") && (
        <>
          <div id="main" style={main}>
            <div style={flex}>
              <div style={inputDiv}>
                <input type="email" placeholder="이메일" style={input} ref={emailRef}/>
                <input type="password" placeholder="비밀번호" style={input} ref={passwordRef}/>
              </div>
              <div>
                <button style={login} onClick={onClickLoginHandler}>
                  NAVER 로그인
                </button>
              </div>
            </div>
            <div id="userService" style={userService}>
              <div>아이디 찾기</div>|<div>비밀번호 찾기</div>|
              <div>회원가입</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Login;
