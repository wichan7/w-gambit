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

  const handleBetAmountChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = Number(ev.target.value);
    if (value > asset) {
      return alert("더 크게는 안됨");
    }

    setBetAmount(value);
  };

  const handleBet = async (isFront: boolean) => {
    if (asset === 0) {
      return alert("0원은 배팅 안됨");
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
      <Input type="number" value={betAmount} onChange={handleBetAmountChange} />
      <Button onClick={() => handleBet(false)}>앞</Button>
      <Button variant="secondary" onClick={() => handleBet(true)}>
        뒤
      </Button>
    </div>
  );
}
