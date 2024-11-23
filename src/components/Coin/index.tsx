import style from "./index.module.css";

interface CoinProps {
  isReverse?: boolean;
}

export default function Coin({ isReverse = false }: CoinProps) {
  return (
    <span className={`${style.coin} ${isReverse && style.isReverse}`}>
      {!isReverse ? "앞" : "뒤"}
    </span>
  );
}
