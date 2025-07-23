/* =======================================
 *センターリバー  TOP センターリバーのこだわり
 * URL:src/components/top/BlockCommitment.tsx
 * Created: 2025-07-19
 * Last updated: 2025-07-19
 * ======================================= */
import styles from '@/styles/components/BlockCommitment.module.scss';
import since1980 from '@/assets/images/since1980.webp';
import Image from 'next/image';
import { useMemo } from 'react';
import Link from 'next/link';

const BlockCommitment = () => {
  const ListData = useMemo(
    () => [
      {
        title: (
          <>
            食の
            <br />
            安全追求
          </>
        ),
        description: (
          <>
            私達は、安全な食材にこだわり、
            <br />
            安心な料理を追求します。
          </>
        ),
      },
      {
        title: (
          <>
            健康の
            <br />
            追求
          </>
        ),
        description: (
          <>
            私達は、自然の恵みに感謝し、
            <br />
            身体に良い料理を追求します。
          </>
        ),
      },
      {
        title: (
          <>
            味の
            <br />
            追求
          </>
        ),
        description: (
          <>
            私達は、食材本来の味を引き出し、
            <br />
            本当の旨み・食感を追求します。
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      <p className={styles.announce}>
        私達はお客様を大切に、お客様の気持ちになり、
        <br />
        お客様が満足するサービスを提供できるよう、
        <br /> 努めてまいります。
      </p>
      <div className={styles.boxTitle}>
        <Image src={since1980} alt="since1980" />
      </div>
      <ul className={styles.contentsList}>
        {ListData.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default BlockCommitment;
