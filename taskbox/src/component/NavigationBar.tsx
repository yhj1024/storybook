import IconButton from "./IconButton.tsx";

interface INavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title: string;
  onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({isDark, showBackButton, showTitle, showCloseButton, title, onBackButtonClick, onCloseButtonClick}: INavigationBarProps) {
  return (
    <div className={"flex justify-between"}>
      <div className={"navigation-title-wrapper flex"}>
      {/*뒤로가기*/}
      {showBackButton && <IconButton alt="back-arrow" iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${isDark ? '-white' : ''}.svg`} onClick={onBackButtonClick}/>}
      {/*타이틀*/}
      {showTitle && <h1 className={`text-xl ${isDark ? 'text-white' : 'text-primary'}`}>{title}</h1>}
      </div>
      {/*닫기 버튼*/}
      {showCloseButton && <IconButton alt="close" iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${isDark ? '-white' : ''}.svg`} onClick={onCloseButtonClick}/>}
    </div>
  )
}