import Link from "next/link";
import style from "./layout.module.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="kr" className={style.html}>
      <body className={style.body}>
        <header>
          <nav className={style.nav}>
            <Link href="/">홈</Link>
            <Link href="/games/coin-flip">동전 던지기</Link>
            <Link href="/games/roulette">룰렛</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={style.footer}>
          <p>© 2024 My Website. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
