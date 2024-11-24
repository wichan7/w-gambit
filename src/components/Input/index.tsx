import style from "./index.module.css";

type InputProps = React.ComponentProps<"input">;

export default function Input({ ...props }: InputProps) {
  return <input {...props} className={style.input} />;
}
