"use client";

import Button from "@/components/Button";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goCoinFlip = () => router.push("/games/coin-flip");
  const goRoulette = () => router.push("/games/roulette");

  return (
    <div className={style.container}>
      <span className={style.title}>W-GAMBIT</span>
      <span className={style.description}>
        <p>Test your Luck</p>
        <p>당신의 운을 시험해보세요</p>
      </span>
      <Button onClick={goCoinFlip}>동전 던지기</Button>
      <Button onClick={goRoulette}>룰렛</Button>
      <Button variant="secondary">새 삶 살기</Button>
    </div>
  );
}
