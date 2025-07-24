/* =======================================
 *センターリバー 料理長動画
 * URL:src/components/products/BlockChefMovie.tsx
 * Created: 2025-07-24
 * Last updated: 2025-07-24
 * ======================================= */

import styles from '@/styles/components/BlockChefMovie.module.scss';

const BlockChefMovie = () => {
  return (
    <article className={styles.blockChefMovie}>
      <h3>
        料理長が教える！
        <br />
        自宅用がおいしくなる調理術
      </h3>
      <div className={styles.itemMovie}>
        <iframe
          title="料理長が教える！センターリバー“オリジナルハンバーグ”の美味しい調理方法"
          src="https://www.youtube.com/embed/IpaIJvGHxFM?si=ot1j4PFmxNmzdxZX"
          allowFullScreen
        ></iframe>
      </div>
    </article>
  );
};
export default BlockChefMovie;
