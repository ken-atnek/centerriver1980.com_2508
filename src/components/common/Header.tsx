/* =======================================
 *センターリバー HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */
'use client';
import { navMenu } from '@/data/navMenuData';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';
import IconCart from '@/assets/images/icon/cart.webp';
import IconInsta from '@/assets/images/icon/insta.webp';
import IconX from '@/assets/images/icon/x.webp';
import ExternalLink from '@/components/common/ExternalLink';
import { isRealProduction } from '@/lib/env';

//カートURLの切替 (本番用 or テスト用)
const setCartUrl = isRealProduction ? 'https://centerriver1980.com' : 'https://demo-centerriver1980.tuna-pic.co.jp';


const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen]);
  // Helper function to determine if the item is the current page
  const isCurrent = (href: string): boolean => {
    if (pathname === '/') return false;
    return pathname === href;
  };
  // Fixed header state and ref
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  // Store the original Y-offset of the header
  const headerOffsetRef = useRef(0);
  useEffect(() => {
    // Set the original offsetTop of the header on mount
    headerOffsetRef.current = headerRef.current?.offsetTop ?? 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setIsFixed(y >= headerOffsetRef.current);
    };
    window.addEventListener('scroll', handleScroll);
    // Run once to set state if already scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // カート数をAPIから取得する関数
  const fetchCartCount = async () => {
    try {
      const res = await fetch('/online-shop/custom-api/cart/count', {
        method: 'GET',
        credentials: 'same-origin',
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.ok && typeof data.count === 'number') {
          setCartCount(data.count >= 0 ? data.count : 0);
        } else {
          console.warn('カート数APIの応答形式が不正です:', data);
        }
      } else if (res.status === 404) {
        console.info('カート数API未実装 (404) - 開発中のため正常です');
        // API未実装時は現在の値を維持
      } else {
        console.warn('カート数API呼び出しエラー:', res.status);
      }
    } catch (error) {
      console.warn('カート数の取得に失敗しました:', error);
      // ネットワークエラー等は現在の値を維持
    }
  };
  // カート数の初期化とCustomEvent受信
  useEffect(() => {
    // 初回読み込み時にAPIからカート数を取得
    fetchCartCount();
    // CustomEventリスナーを設定（カート変更通知を受信）
    const handleCartChange = () => {
      fetchCartCount(); // APIから最新のカート数を取得
    };
    window.addEventListener('cartCountChanged', handleCartChange);
    // 5秒ごとに定期的にカート数を同期（EC-CUBE側での変更を検知）
    const interval = setInterval(fetchCartCount, 5000);
    return () => {
      window.removeEventListener('cartCountChanged', handleCartChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className={`${styles.containerHeader} ${isFixed ? styles['is-fixed'] : ''}`}
      ref={headerRef}
    >
      <article
        className={`${isOpen ? styles['is-open'] : ''} ${
          !isOpen ? styles.closing : ''
        }`}
      >
        <div className={styles.boxTitle}>
          <Link href="/" className={styles.linkTop}>
            <Image
              src={Logo}
              alt="センターリバーのロゴ"
              width={250}
              height={36}
            />
          </Link>
        </div>
        <nav>
          <div className={styles.linkContainer} ref={containerRef}>
            {navMenu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${styles.itemLink} ${isCurrent(item.href) ? styles['is-active'] : ''}`}
                ref={(el) => {
                  if (el) linkRefs.current[index] = el;
                }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className={styles.boxSns}>
          <Link href={`${setCartUrl}/online-shop/cart`} aria-label="オンラインショップカートを見る" className={styles.linkCart}>
            {cartCount > 0 && <span>{cartCount}</span>}
            <Image src={IconCart} alt="カート" />
          </Link>
          <ExternalLink
            href="https://x.com/centerriver01"
            aria-label="センターリバーのエックス"
          >
            <Image src={IconX} alt="センターリバーのエックス" />
          </ExternalLink>
          <ExternalLink
            href="https://www.instagram.com/center.river01/"
            aria-label="センターリバーのインスタ"
          >
            <Image src={IconInsta} alt="センターリバーのインスタ" />
          </ExternalLink>
        </div>
      </article>
      <button
        type="button"
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
