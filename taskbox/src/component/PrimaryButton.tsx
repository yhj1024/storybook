// 다양한 버튼 대응을 위해 테마를 props 로 받아서 처리
type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-mono100 disabled:text-mono200"

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
}

export default function PrimaryButton({children, onClick, theme, disabled}: IPrimaryButtonProps) {
  return (
    <button onClick={onClick}
            className={`
              w-full h-[59px] 
              rounded-primary-button 
              ${disabledStyle}
              ${color[theme]}`}
            disabled={disabled}
    >{children}
    </button>
  )
}