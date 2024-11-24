import style from "./index.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  maxWidth?: boolean;
}

export default function Button({
  variant = "primary",
  maxWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${style.button} ${style[variant]} ${maxWidth && style.maxWidth}`}
    />
  );
}
