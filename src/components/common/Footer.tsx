/* =======================================
 *センターリバー FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-07-15
 * Last updated: 2025-07-15
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <nav>
        <Link href="#">ご利用規約</Link>
        <Link href="#">特定商取引法に基づく表示</Link>
        <Link href="#">プライバシーポリシー</Link>
      </nav>
      <div className={styles.copyright}>
        Copyright Center River. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
