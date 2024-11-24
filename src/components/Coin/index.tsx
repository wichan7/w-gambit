"use client";

import { motion } from "framer-motion";
import HeadSvg from "@/assets/svgs/coin-head.svg";
import TailSvg from "@/assets/svgs/coin-tail.svg";
import { useEffect, useState } from "react";

interface CoinProps {
  isTail?: boolean;
}

export function Coin({ isTail }: CoinProps) {
  return isTail ? <TailSvg /> : <HeadSvg />;
}

export function FlippingCoin() {
  const [isFlip, setIsFlip] = useState(false);
  const [isScaleUp, setIsScaleUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlip((prev) => !prev);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScaleUp((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{ rotateY: isFlip ? 0 : 180, scale: isScaleUp ? 1.1 : 1 }}
    >
      <Coin isTail={isFlip} />
    </motion.div>
  );
}
