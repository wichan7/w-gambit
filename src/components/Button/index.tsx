import style from "./index.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button {...props} className={`${style.button} ${style[variant]}`} />;
}
