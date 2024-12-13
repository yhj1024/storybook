

interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function TagButton({children, onClick, isChecked} : ITagButtonProps) {
  const isCheckedStyle= isChecked ? "text-white bg-dark-opacity" : "bg-white text-primary";
  return <button
            onClick={onClick}
            className={`text-sm font-medium border border-white h-[33px] px-[10px] rounded-tag-button ${isCheckedStyle}`}>{children}</button>
}