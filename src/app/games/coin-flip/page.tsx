"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import CoinFlipService from "@/services/coinFlipService";
import { useContextStore } from "@/stores/useContextStore";
import { ChangeEvent, useState } from "react";

export default function CoinFlipPage() {
  const { asset, addAsset } = useContextStore();
  const [betAmount, setBetAmount] = useState<number>(0);

  const { doFlip } = new CoinFlipService();

  const handleBetAmountChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const changedValue = Number(value.replace(/[^0-9]/, ""));
    setBetAmount(changedValue);
  };

  const handleBet = async (isFront: boolean) => {
    if (asset === 0) {
      return alert("0원은 배팅 안됨");
    }

    if (betAmount > asset) {
      return alert("가진 돈보다 더 많이 배팅 못함");
    }

    const _betAmount = betAmount;
    addAsset(-_betAmount);

    const { reward, isFront: resultIsFront } = await doFlip({
      amount: _betAmount,
      isFront,
    });
    console.log(reward, isFront, resultIsFront);

    if (isFront === resultIsFront) {
      addAsset(reward);
      alert("성공 야호");
    } else {
      alert("실패 ㅠㅠ");
    }
  };

  return (
    <div>
      <Input value={betAmount} onChange={handleBetAmountChange} />
      <Button onClick={() => handleBet(false)}>앞</Button>
      <Button variant="secondary" onClick={() => handleBet(true)}>
        뒤
      </Button>
    </div>
  );
}
