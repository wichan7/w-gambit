type FlipRequest = {
  amount: number;
  isTail: boolean;
};

type FlipResult = {
  reward: number;
  isTail: boolean;
};

export default class CoinFlipService {
  doFlip = async ({ amount, isTail }: FlipRequest) =>
    new Promise<FlipResult>((_resolve) => {
      setTimeout(() => {
        const result = Math.random() >= 0.5;
        const reward = result === isTail ? amount * 2 : 0;

        _resolve({ reward, isTail: result });
      }, 1000);
    });
}
