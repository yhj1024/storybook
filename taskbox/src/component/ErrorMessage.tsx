interface ILabelProps {
  children: string,
}

export default function Label({children}: ILabelProps) {
 return <p className={"text-sm text-error"}>{children}</p>
}