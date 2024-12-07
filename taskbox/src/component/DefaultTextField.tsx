import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";
import {useState} from "react";

interface IDefaultTextFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage: string;
  value: string;
  placeholder: string;
  iconAlt: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  isError: boolean
  id: string
}

export default function DefaultTextField({id, isError, onChange, errorMessage, value, placeholder, iconAlt, iconPath, onIconClick} : IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const borderColor = isFocused ? 'border-secondary' : !value ? 'border-mono300' : 'border-primary'
  return (
    <div className={"relative text-field"}>
      <div className={`text-primary border-b ${borderColor}`}>
        <input
          id={id}
          className={"outline-none"}
          type={"text"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {!!value && <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick}/>}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
}