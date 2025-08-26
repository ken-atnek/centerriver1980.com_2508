/* =======================================
 * 焦げ目付きオリジナルハンバーグ
 * URL: src/app/products/product008/page.tsx
 * Referenced in: src/app/products/page.tsx
 * Created: 2025-08-11
 * Last updated: 2025-08-11
 * ======================================= */
import productData from '@/data/products/product014';
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

export default function Product008Page() {
  return (
    <>
      <PageHead title={productData.name} />
      <ProductBreadCrumb name={productData.name} />
      <section className={styles.containerContents}>
        <ProductTitle name={productData.name} subName={productData.subName} />
        <article>
          <ProductImage name={productData.name} image={productData.image} />
          <div className={styles.wrapTextDetails}>
            <h4>{productData.section01.title}</h4>
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
        <BlockChefMovie />
        <article>
          <div className={styles.wrapTextSubDetails}>
            <h4>{productData.section02.title}</h4>
            <div className={styles.itemText}>
              {productData.section02.text
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
          <ProductPurchase
            name={productData.name}
            subName={productData.subName}
            ecId={productData.ecId}
            ecClassId={productData.ecClassId}
            code={productData.code}
            price={productData.price}
          />
        </article>
        <BlockShopGuide />
      </section>
    </>
  );
}
