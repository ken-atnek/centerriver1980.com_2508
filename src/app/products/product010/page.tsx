/* =======================================
 * 焦げ目付きオリジナルハンバーグセット
 * URL:src/app/products/product010/page.tsx
 * Referenced in: src/app/products/page.tsx
 * Created: 2025-08-09
 * Last updated: 2025-08-09
 * ======================================= */
import productData from '@/data/products/product016';
import productData02 from '@/data/products/product017';
import productData03 from '@/data/products/product018';
import productData04 from '@/data/products/product019';
import productData05 from '@/data/products/product020';
import PageHead from '@/components/common/PageHead';
import BlockChefMovie from '@/components/products/BlockChefMovie';

import styles from '@/styles/PageProductsItem.module.scss';
import BlockShopGuide from '@/components/products/BlockShopGuide';
import {
  ProductBreadCrumb,
  ProductTitle,
  ProductImage,
  ProductPurchase,
} from '@/components/products/ProductCommon';

export default function Product10Page() {
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
        <BlockChefMovie />

        <article>
          <div className={styles.wrapTextSubDetails}>
            <h4>{productData02.section02.title}</h4>
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
        <article>
          <div className={styles.wrapTextSubDetails}>
            <h4>{productData03.section02.title}</h4>

            <div className={styles.itemText}>
              {productData03.section02.text.split('\n').map((line, i) => (
                <p key={`section02-${i}`}>{line}</p>
              ))}
            </div>
          </div>
          <ProductPurchase
            name={productData03.name}
            code={productData03.code}
            price={productData03.price}
          />
        </article>
        <article>
          <div className={styles.wrapTextSubDetails}>
            <h4>{productData04.section02.title}</h4>

            <div className={styles.itemText}>
              {productData04.section02.text.split('\n').map((line, i) => (
                <p key={`section02-${i}`}>{line}</p>
              ))}
            </div>
          </div>
          <ProductPurchase
            name={productData04.name}
            code={productData04.code}
            price={productData04.price}
          />
        </article>
        <article>
          <div className={styles.wrapTextSubDetails}>
            <h4>{productData05.section02.title}</h4>

            <div className={styles.itemText}>
              {productData05.section02.text.split('\n').map((line, i) => (
                <p key={`section02-${i}`}>{line}</p>
              ))}
            </div>
          </div>
          <ProductPurchase
            name={productData05.name}
            code={productData05.code}
            price={productData05.price}
          />
        </article>

        <BlockShopGuide />
      </section>
    </>
  );
}
