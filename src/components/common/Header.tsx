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
const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header className={styles.containerHeader}>
      <article>
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
        <nav
          className={`${isOpen ? styles['is-open'] : ''} ${
            !isOpen ? styles.closing : ''
          }`}
        >
          <div className={styles.linkContainer} ref={containerRef}>
            {navMenu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${styles.itemLink} ${pathname === item.href ? styles['is-active'] : ''}`}
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
          <ExternalLink href="#" aria-label="オンラインショップカートを見る">
            <Image src={IconCart} alt="カート" />
          </ExternalLink>
          <ExternalLink href="#" aria-label="センターリバーのエックス">
            <Image src={IconX} alt="センターリバーのエックス" />
          </ExternalLink>
          <ExternalLink href="#" aria-label="センターリバーのインスタ">
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
