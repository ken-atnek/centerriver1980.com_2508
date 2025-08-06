/* =======================================
 * オリジナルコーンポタージュスープ
 * URL:src/app/products/product003/page.tsx
 * Referenced in: src/app/products/page.tsx
 * Created: 2025-08-05
 * Last updated: 2025-08-05
 * ======================================= */
import productData from '@/data/products/product004';
import productData01 from '@/data/products/product005';
import productData02 from '@/data/products/product006';
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

export default function Product003Page() {
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
        <br />
        <ProductTitle name={productData01.name} />
        <article>
          <ProductImage name={productData01.name} image={productData01.image} />
          <div className={styles.wrapTextDetails}>
            <div className={styles.itemH4}>
              {productData01.section01.title.split('\n').map((line, index) => (
                <h4 key={`section01-title-${index}`}>{line}</h4>
              ))}
            </div>
            <div className={styles.itemText}>
              {productData01.section01.text
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
            <div className={styles.itemText}>
              {productData01.section02.text.split('\n').map((line, i) => (
                <p key={`section02-${i}`}>{line}</p>
              ))}
            </div>
          </div>
          <ProductPurchase
            name={productData01.name}
            code={productData01.code}
            price={productData01.price}
          />
        </article>
        <br />
        <ProductTitle name={productData02.name} />
        <article>
          <ProductImage name={productData02.name} image={productData02.image} />
          <div className={styles.wrapTextDetails}>
            <div className={styles.itemH4}>
              {productData02.section01.title.split('\n').map((line, index) => (
                <h4 key={`section01-title-${index}`}>{line}</h4>
              ))}
            </div>
            <div className={styles.itemText}>
              {productData02.section01.text
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
            <div className={styles.itemText}>
              {productData02.section02.text.split('\n').map((line, i) => (
                <p key={`section02-${i}`}>{line}</p>
              ))}
            </div>
          </div>
          <ProductPurchase
            name={productData02.name}
            code={productData02.code}
            price={productData02.price}
          />
        </article>
        <br />
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
