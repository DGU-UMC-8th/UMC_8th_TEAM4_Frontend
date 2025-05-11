export type UserSigninInformation = {
  email: string;
  passwd: string;
};

function validateUser(value: UserSigninInformation) {
  const errors = {
    email: "",
    passwd: "",
  };

  if (
    !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
    value.email,
  )
) {
  errors.email = "유효하지 않은 이메일";
}
if (!(value.passwd.length >= 8 && value.passwd.length < 20)){
  errors.passwd = "비밀번호 길이가 너무 짧거나 깁니다";
}
return errors;
}

// 로그인 유효성 검사
function validateSignin(values: UserSigninInformation) {
  return validateUser(values);
}

export {validateSignin};