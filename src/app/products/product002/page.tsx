/* =======================================
 * プレミアム和牛赤黒ハンバーグ
 * URL: src/app/products/product002/page.tsx
 * Referenced in: src/app/products/page.tsx
 * Created: 2025-08-05
 * Last updated: 2025-08-05
 * ======================================= */
import productData from '@/data/products/product002';
import productExtra from '@/data/products/product999';
import PageHead from '@/components/common/PageHead';
import styles from '@/styles/PageProductsItem.module.scss';
import BlockShopGuide from '@/components/products/BlockShopGuide';
import {
  ProductBreadCrumb,
  ProductTitle,
  ProductImage,
  ProductPurchase,
} from '@/components/products/ProductCommon';
import Image from 'next/image';

export default function Product002Page() {
  return (
    <>
      <PageHead title={productData.name} />
      <ProductBreadCrumb name={productData.name} />
      <section className={styles.containerContents}>
        <ProductTitle name={productData.name} />
        <article>
          <ProductImage name={productData.name} image={productData.image} />
          <div className={styles.wrapTextDetails}>
            <div className={styles.itemH4}>
              {productData.section01.title.split('\n').map((line, index) => (
                <h4 key={`section01-title-${index}`}>{line}</h4>
              ))}
            </div>
            <div className={styles.itemText}>
              {productData.section01.text
                .split('\n')
                .map((line, index) =>
                  line.trim() === '' ? (
                    <div key={`space-${index}`} style={{ height: '1.6em' }} />
                  ) : (
                    <p key={`line-${index}`}>{line}</p>
                  )
                )}
            </div>
          </div>
        </article>
        <article>
          <div className={styles.wrapTextSubDetails}>
            <h4>{productData.section02.title}</h4>
            <div className={styles.itemText}>
              {productData.section02.text.split('\n').map((line, i) => (
                <p key={`section02-${i}`}>{line}</p>
              ))}
            </div>
          </div>
          <ProductPurchase
            name={productData.name}
            code={productData.code}
            price={productData.price}
          />
        </article>
        <div className={styles.blockImage}>
          <Image
            src="/images/products/sr.008_(2).webp"
            alt="ハンバーグ"
            width={903}
            height={625}
          />
        </div>
        <hr className={styles.hr} />
        <article>
          <ProductImage name={productExtra.name} image={productExtra.image} />
          <div className={styles.blockInner}>
            <h4>{productExtra.section01.title}</h4>
            <ProductPurchase
              name={productExtra.name}
              code={productExtra.code}
              price={productExtra.price}
            />
          </div>
        </article>
        <BlockShopGuide />
      </section>
    </>
  );
}
