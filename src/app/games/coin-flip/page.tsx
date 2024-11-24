"use client";

import style from "./page.module.css";
import Button from "@/components/Button";
import Input from "@/components/Input";
import CoinFlipService from "@/services/coinFlipService";
import { useContextStore } from "@/stores/useContextStore";
import { ChangeEvent, useState } from "react";
import { BET_MAXIMUM_AMOUNT } from "./constant";
import { Coin, FlippingCoin } from "@/components/Coin";

export default function CoinFlipPage() {
  const [betAmount, setBetAmount] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipResult, setFlipResult] = useState<boolean>(false);

  const { asset, addAsset } = useContextStore();

  const { doFlip } = new CoinFlipService();

  const handleBetAmountChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const changedValue = Math.min(
      Number(value.replaceAll(/[^0-9]/gi, "")),
      BET_MAXIMUM_AMOUNT
    );
    setBetAmount(changedValue);
  };

  const handleBet = async (isTail: boolean) => {
    const _betAmount = betAmount;

    if (_betAmount === 0) {
      return alert("0원은 배팅 안됨");
    }
    if (_betAmount > asset) {
      return alert("가진 돈보다 더 많이 배팅 못함");
    }

    addAsset(-_betAmount);

    setIsFlipping(true);
    const { reward, isTail: result } = await doFlip({
      amount: _betAmount,
      isTail,
    });
    setIsFlipping(false);
    setFlipResult(result);

    if (isTail === result) {
      addAsset(reward);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.coinWrapper}>
        {isFlipping ? <FlippingCoin /> : <Coin isTail={flipResult} />}
      </div>
      <Input value={betAmount} maxWidth onChange={handleBetAmountChange} />
      <div className={style.buttonContainer}>
        <Button disabled={isFlipping} maxWidth onClick={() => handleBet(false)}>
          앞
        </Button>
        <Button
          disabled={isFlipping}
          maxWidth
          variant="secondary"
          onClick={() => handleBet(true)}
        >
          뒤
        </Button>
      </div>
    </div>
  );
}
