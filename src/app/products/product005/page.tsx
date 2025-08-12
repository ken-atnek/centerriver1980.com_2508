/* =======================================
 * レフォールスパイス
 * URL:src/app/products/product005/page.tsx
 * Referenced in: src/app/products/page.tsx
 * Created: 2025-08-09
 * Last updated: 2025-08-09
 * ======================================= */
import productData from '@/data/products/product007';
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

export default function Product005Page() {
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
