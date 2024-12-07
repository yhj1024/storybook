interface IErrorMessageProps {
  children: string,
}

export default function ErrorMessage({children}: IErrorMessageProps) {
 return <p className={"text-sm text-error"}>{children}</p>
}
