import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "@fontsource/noto-sans-kr/400.css"
import "@fontsource/noto-sans-kr/700.css"
import './App.css'
import Label from "../taskbox/src/component/Label.tsx";
import DefaultTextField from "../taskbox/src/component/DefaultTextField.tsx";

function App() {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div>
      <Label htmlFor={'email'}>이메일
        <DefaultTextField
          id="email"
          onChange={() => {}}
          errorMessage={'이메일을 확인하세요'}
          value={""}
          placeholder={"이메일을 입력하세요"}
          iconAlt={"delete"}
          iconPath={"https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"}
          onIconClick={() => {}}
          isError={isError}
        />
      </Label>
      <div className={"my-20"}/>
      <Label htmlFor={'address'}>주소
        <DefaultTextField
          id="address"
          onChange={() => {}}
          errorMessage={'주소를 확인하세요'}
          value={""}
          placeholder={"주소를 입력하세요"}
          iconAlt={"delete"}
          iconPath={"https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"}
          onIconClick={() => {}}
          isError={isError}
        />
      </Label>
      <div className={"text-center"}>
      <button onClick={() => {
        setIsError((prevState) => !prevState)
      }}>에러변환</button>
      </div>
    </div>

  )
}

export default App
