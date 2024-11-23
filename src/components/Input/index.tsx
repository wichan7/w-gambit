import style from "./index.module.css";

interface InputProps extends React.ComponentProps<"input"> {
  isReverse?: boolean;
}

export default function Input({ ...props }: InputProps) {
  return <input {...props} className={style.input} />;
}
