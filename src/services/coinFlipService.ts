type FlipRequest = {
  amount: number;
  isFront: boolean;
};

type FlipResult = {
  reward: number;
  isFront: boolean;
};

export default class CoinFlipService {
  doFlip = async ({ amount, isFront }: FlipRequest) =>
    new Promise<FlipResult>((_resolve) => {
      setTimeout(() => {
        const result = Math.random() >= 0.5;
        const reward = result === isFront ? amount * 2 : 0;

        _resolve({ reward, isFront: result });
      }, 1000);
    });
}
