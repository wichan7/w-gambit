import style from "./index.module.css";

interface InputProps extends React.ComponentProps<"input"> {
  maxWidth?: boolean;
}

export default function Input({ maxWidth = false, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`${style.input} ${maxWidth && style.maxWidth}`}
    />
  );
}
