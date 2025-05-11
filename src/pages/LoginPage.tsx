import useForm from "../hooks/useForm";
import { useMemo } from "react";
import { UserSigninInformation, validateSignin } from "../utils/validate";

const initialValue = {
  email: "",
  passwd: "",
};

const Loginpage = () => {
  const {values, touched, errors, getInputProps,   
  } = useForm<UserSigninInformation>({initialValue, validate: validateSignin});

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
  <div className="flex flex-col items-center justify-center h-full gap-4">
    <div className="flex flex-col gap-3">
      <input
        {...getInputProps("email")}
        className={`border w-[300px] p-[10px] focus:border-[#807bff] rounded-sm ${
          errors?.email && touched?.email
            ? "border-red-500 bg-red-200"
            : "border-gray-300"
        }`}
        type="email"
        placeholder="이메일"
      />
      {errors?.email && touched?.email && (
        <div className="text-red-500 text-sm">{errors.email}</div>
      )}

        <input
          {...getInputProps("passwd")}
          className={`border w-[300px] p-[10px] focus:border-[#807bff] rounded-sm ${
            errors?.passwd && touched?.passwd
              ? "border-red-500 bg-red-200"
              : "border-gray-300"
          }`}          
          type="password"
          placeholder="비밀번호"
        />
        {errors?.passwd && touched?.passwd && (
        <div className="text-red-500 text-sm">{errors.passwd}</div>
      )}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`w-full text-white py-3 rounded-md text-lg font-medium transition ${
            isDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Loginpage;