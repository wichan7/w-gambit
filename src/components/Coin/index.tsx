import HeadSvg from "@/assets/svgs/coin-head.svg";
import TailSvg from "@/assets/svgs/coin-tail.svg";

interface CoinProps {
  isTail?: boolean;
}

export function Coin({ isTail }: CoinProps) {
  return isTail ? <TailSvg /> : <HeadSvg />;
}

export function CoinWithAnim() {}
