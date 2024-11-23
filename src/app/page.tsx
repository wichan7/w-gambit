"use client";

import Button from "@/components/Button";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import { useContextStore } from "@/stores/useContextStore";

export default function Home() {
  const router = useRouter();
  const { clearAsset } = useContextStore();

  const goCoinFlip = () => router.push("/games/coin-flip");
  const goRoulette = () => router.push("/games/roulette");
  const handleReset = () => {
    const isConfirm = window.confirm("진짜 리셋해요?");
    if (isConfirm) {
      clearAsset();
    }
  };

  return (
    <div className={style.container}>
      <span className={style.title}>W-GAMBIT</span>
      <span className={style.description}>
        <p>Test your Luck</p>
        <p>당신의 운을 시험해보세요</p>
      </span>
      <Button onClick={goCoinFlip}>동전 던지기</Button>
      <Button onClick={goRoulette}>룰렛</Button>
      <Button variant="secondary" onClick={handleReset}>
        새 인생 살기
      </Button>
    </div>
  );
}
