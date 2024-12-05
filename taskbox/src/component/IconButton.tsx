interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: () => void;
}

export default function IconButton({alt, iconPath, onClick}: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img alt={alt} src={iconPath} />
    </button>)
}