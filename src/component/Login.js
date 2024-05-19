export function Login() {
  const main = {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    width: "380px",
    height: "125px",
    padding: "21px 20px 18px 20px",
  };
  const coment = {
    height: "20px",
  };
  const login = {
    width: "380px",
    height: "20px",
    border: "1px solid #03c75a",
    borderRadius: "5px",
    backgroundColor: "#03c75a",
    padding: "17px 0",
    marginTop: "13px",
    color: "#fff",
    fontWeight: "bolder",
    textAlign: "center",
  };
  const a = {
    textDecorationLine: "none",
    color: "#fff",
  };
  const userService = {
    height: "20px",
    display: "flex",
    marginTop: "16px",
    gap: "10px",
  };

  return (
    <div id="main" style={main}>
      <div id="coment" style={coment}>네이버를 더 안전하고 편리하게 이용하세요</div>
      <div id="login" style={login}>
        <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/" style={a}>
          NAVER 로그인
        </a>
      </div>
      <div id="userService" style={userService}>
        <div>아이디 찾기</div>|<div>비밀번호 찾기</div>|<div>회원가입</div>
      </div>
    </div>
  );
}
export default Login;
