/* =======================================
 * メニュー項目
 * URL: src/data/navMenuData.ts
 * Created: 2025-07-19
 * Last updated: 2025-07-19
 * ======================================= */

export type NavMenuItem = {
  href: string;
  label: string;
};

export const navMenu: NavMenuItem[] = [
  { href: '/concept/', label: '当店のこだわり&メニュー' },
  // { href: '/products/', label: 'オンラインショップ' },
  { href: '/takeout/', label: 'センターリバーのお弁当' },
  { href: '/company/', label: ' 店舗案内 / 会社概要' },
];
