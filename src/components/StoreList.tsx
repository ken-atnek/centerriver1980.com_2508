/* =======================================
 *センターリバー  店舗情報
 * URL:src/components/StoreList.tsx
 * Created: 2025-07-19
 * Last updated: 2025-07-19
 * ======================================= */
'use client';
import { storeList } from '@/data/storeList';
import styles from '@/styles/PageCompany.module.scss';
import ExternalLink from '@/components/common/ExternalLink';
import Image from 'next/image';

const StoreList = () => {
  return (
    <>
      <ul className={styles.ListStoreName}>
        {storeList.map((group) => (
          <li key={group.prefecture}>
            <h4>{group.prefecture}</h4>
            {group.stores.map((store) => (
              <a
                key={store.id}
                href={`#${store.id}`}
                aria-label={store.name}
                className={styles.itemName}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(store.id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {store.name}
              </a>
            ))}
          </li>
        ))}
      </ul>
      <ul className={styles.storeListDetails}>
        {storeList.map((group) => (
          <li key={group.prefecture} className={styles.prefectureBlock}>
            <h4 className={styles.prefectureTitle}>{group.prefecture}</h4>
            {group.stores.map((store) => (
              <div key={store.id} className={styles.storeItem} id={store.id}>
                <div className={styles.wrapDetails}>
                  <h5>{store.name}</h5>
                  <dl>
                    <dt>住所</dt>
                    <dd>{store.address}</dd>
                    <dt>電話</dt>
                    <dd>{store.tel}</dd>
                    {store.hours && (
                      <div>
                        <dt>営業時間</dt>
                        <dd>
                          <span>{store.hours}</span>
                          {store.hours02 && <span>{store.hours02}</span>}
                        </dd>
                      </div>
                    )}
                    {store.holiday && (
                      <div>
                        <dt>定休日</dt>
                        <dd>{store.holiday}</dd>
                      </div>
                    )}
                  </dl>
                  {store.notice && (
                    <p className={styles.notice}>{store.notice}</p>
                  )}
                  {store.mapUrl && (
                    <ExternalLink
                      href={store.mapUrl}
                      aria-label={`${store.mapName}の地図`}
                      className={styles.itemMap}
                    >
                      <span>{store.mapName}MAP</span>
                    </ExternalLink>
                  )}
                </div>
                {store.image && (
                  <div className={styles.itemImage}>
                    <Image
                      src={store.image}
                      alt={store.name}
                      width={400}
                      height={300}
                    />
                  </div>
                )}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StoreList;
