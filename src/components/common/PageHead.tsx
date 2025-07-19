/* =======================================
 *センターリバー ページHEAD
 * URL: src/components/common/PageHead.tsx
 * Created: 2025-07-19
 * Last updated: 2025-07-19
 * ======================================= */
import React from 'react';
import styles from '@/styles/components/common/PageHead.module.scss';
import Header from '@/components/common/Header';
import Logo from '@/assets/images/logo.webp';
import Image from 'next/image';
type PageHeadProps = {
  title: string;
};
const PageHead = ({ title }: PageHeadProps) => {
  return (
    <>
      <section className={styles.containerPageHead}>
        <h1>
          <Image src={Logo} alt="センターリバー" width={250} height={36} />
        </h1>
        <h2>{title}</h2>
      </section>
      <Header />
    </>
  );
};
export default PageHead;
