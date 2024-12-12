/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
    borderRadius: {
      "primary-button": "5px"
    },
    fontFamily: {
      body: ["Noto Sans KR"]
    },
    fontSize: {
      xs: ["12px", {lineHeight: "18px", letterSpacing: "0", fontWeight: "400"}],
      sm: ["14px", {lineHeight: "21px", letterSpacing: "0", fontWeight: "400"}],
      xl: ["24px", {lineHeight: "36px", letterSpacing: "0", fontWeight: "700"}],
      // 이러면 xl 일때 fontWeight 가 고정되는게 아닌지 생각할 수 있는데
      // 사용하는 곳에서 font-light 이렇게 주면 다음껄로 오버라이드해서 적용됨 그니까 자주쓰는걸로 일단 넣어두면 좋음
    },
    colors: {
      primary: "#1d2745",
      secondary: "#1de5d4",
      tertiary: "#f52c50",
      white: "#ffffff",
      mono100: "#f1f1f1",
      mono200: "#bebebe",
      mono300: "#d6d7d9",
      error: "#d01e1e",
      social: "#395997"
    }
  },
  plugins: [],
}

