/* =======================================
 * 焦げ目付きオリジナルハンバーグ
 * URL: src/app/products/product001/page.tsx
 * Referenced in: src/app/products/page.tsx
 * Created: 2025-08-05
 * Last updated: 2025-08-05
 * ======================================= */
import productData from '@/data/products/product001';
import productExtra from '@/data/products/product999';
import PageHead from '@/components/common/PageHead';
import styles from '@/styles/PageProductsItem.module.scss';
import BlockChefMovie from '@/components/products/BlockChefMovie';
import BlockShopGuide from '@/components/products/BlockShopGuide';
import {
  ProductBreadCrumb,
  ProductTitle,
  ProductImage,
  ProductPurchase,
} from '@/components/products/ProductCommon';

export default function Product001Page() {
  return (
    <>
      <PageHead title={productData.name} />
      <ProductBreadCrumb name={productData.name} />
      <section className={styles.containerContents}>
        <ProductTitle name={productData.name} />
        <article>
          <ProductImage name={productData.name} image={productData.image} />
          <div className={styles.wrapTextDetails}>
            <h4>{productData.section01.title}</h4>
            <div className={styles.itemText}>
              {productData.section01.text.split('\n').map((line, i) => (
                <p key={`section01-${i}`}>{line}</p>
              ))}
            </div>
          </div>
        </article>
        <BlockChefMovie />
        <article>
          <div className={styles.wrapTextDetails}>
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
