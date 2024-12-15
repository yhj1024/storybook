import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "@fontsource/noto-sans-kr/400.css"
import "@fontsource/noto-sans-kr/700.css"
import './App.css'
import Label from "../taskbox/src/component/Label.tsx";
import DefaultTextField from "../taskbox/src/component/DefaultTextField.tsx";
import TagList from "../taskbox/src/component/TagList.tsx";

function App() {
  return (
    <div className={"bg-primary w-screen h-screen"}>
      <TagList tags={["ALL", "React", "Typescript"]} onTagClick={console.log}/>
    </div>
  )

}

export default App
