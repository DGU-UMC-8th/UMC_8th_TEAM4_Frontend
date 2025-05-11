import useForm from "../hooks/useForm";
import { useMemo } from "react";
import { UserSigninInformation, validateSignin } from "../utils/validate";
import { useNavigate } from "react-router-dom";

const initialValue = {
  email: "",
  passwd: "",
};

const Loginpage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const { values, touched, errors, getInputProps } =
    useForm<UserSigninInformation>({ initialValue, validate: validateSignin });

  const handleSubmit = () => {
    console.log("로그인 성공!", values);
  };

  // 오류가 하나라도 있거나, 입력값이 비어있으면 버튼을 비활성화
  const isDisabled = useMemo(() => {
    return (
      Object.values(errors || {}).some((error: string) => error.length > 0) ||
      Object.values(values).some((value: string) => value === "")
    );
  }, [errors, values]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
  
        {/* 상단 ← + 로그인 */}
        <div className="relative flex items-center justify-center mb-6">
          <button
            onClick={handleGoBack}
            className="absolute left-0 text-gray-700 text-2xl"
          >
            &lt;
          </button>
          <h1 className="text-xl font-bold text-gray-800">로그인</h1>
        </div>
  
        {/* 입력 폼 */}
        <div className="flex flex-col gap-3">
          <input
            {...getInputProps("email")}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors?.email && touched?.email
                ? "border-red-400 bg-red-50"
                : "border-gray-300"
            }`}
            type="email"
            placeholder="이메일을 입력해주세요!"
          />
          {errors?.email && touched?.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
  
          <input
            {...getInputProps("passwd")}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors?.passwd && touched?.passwd
                ? "border-red-400 bg-red-50"
                : "border-gray-300"
            }`}
            type="password"
            placeholder="비밀번호를 입력해주세요!"
          />
          {errors?.passwd && touched?.passwd && (
            <div className="text-red-500 text-sm">{errors.passwd}</div>
          )}
  
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isDisabled}
            className={`w-full mt-2 py-2 rounded-md text-white font-semibold transition ${
              isDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Loginpage;