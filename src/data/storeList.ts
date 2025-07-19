/* =======================================
 *センターリバー  店舗情報
 * URL:src/data/storeList.ts
 * Created: 2025-07-19
 * Last updated: 2025-07-19
 * ======================================= */
import type { StaticImageData } from 'next/image';
import imgKumamoto01 from '@/assets/images/company/hamasen.webp';
import imgKumamoto02 from '@/assets/images/company/isihara.webp';
import imgKumamoto03 from '@/assets/images/company/shimizu.webp';
import imgKumamoto04 from '@/assets/images/company/simotori.webp';
import imgKumamoto05 from '@/assets/images/company/jr.webp';
import imgKumamoto06 from '@/assets/images/company/obentou.webp';
import imgFukuoka01 from '@/assets/images/company/solaria.webp';
import imgFukuoka02 from '@/assets/images/company/itatuki.webp';
import imgKagoshima01 from '@/assets/images/company/opsia.webp';
export type Store = {
  id: string;
  name: string;
  mapName: string;
  address: string;
  tel: string;
  hours: string;
  hours02?: string;
  holiday?: string;
  mapUrl: string;
  notice?: string;
  image?: StaticImageData;
};

export type StoreGroup = {
  prefecture: string;
  stores: Store[];
};

export const storeList: StoreGroup[] = [
  {
    prefecture: '熊本県',
    stores: [
      {
        id: 'kumamoto01',
        name: 'センターリバー 浜線店',
        mapName: '浜線店',
        address: '熊本市中央区八王寺町34番16号',
        tel: '096-378-9191（センターリバー 浜線店）',
        hours: '11:00～22:00（L.O.21:30）',
        holiday: '毎週水曜日',
        mapUrl: 'https://goo.gl/maps/ca84YXSPLdA1jMaL7',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgKumamoto01,
      },
      {
        id: 'kumamoto02',
        name: 'センターリバー 石原店',
        mapName: '石原店',
        address: '熊本市東区石原2丁目3番1号',
        tel: '096-389-0515',
        hours: '11:00～21:00（オーダーストップ）',
        holiday: '毎週水曜日',
        mapUrl: 'https://goo.gl/maps/6125zkrUNFVkRy3SA7',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgKumamoto02,
      },
      {
        id: 'kumamoto03',
        name: 'センターリバー 清水店',
        mapName: '清水店',
        address: '熊本市北区高平2-26-24',
        tel: '096-345-4692',
        hours: '11:00～21:00（オーダーストップ）',
        holiday: '毎週水曜日',
        mapUrl: 'https://goo.gl/maps/uBfYAcBAaJxRStTJA',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgKumamoto03,
      },
      {
        id: 'kumamoto04',
        name: 'センターリバー 下通り店',
        mapName: '下通り店',
        address: '熊本市中央区下通1丁目5₋12下通パワービル1階',
        tel: '096-212-5255',
        hours: '11:00～21:30（オーダーストップ）',
        holiday: '毎週水曜日',
        mapUrl: 'https://goo.gl/maps/gmXvgwag3SAHTziK8',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgKumamoto04,
      },
      {
        id: 'kumamoto05',
        name: 'センターリバー Jr. 熊本駅店',
        mapName: '熊本駅店',
        address: '熊本市西区春日3丁目 15-30 肥後よかモン市場内',
        tel: '096-278-7050',
        hours: '11:00～21:30（オーダーストップ）',
        mapUrl: 'https://goo.gl/maps/6CGqon8SYyt2bSMPA',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgKumamoto05,
      },
      {
        id: 'kumamoto06',
        name: 'お弁当の店　センターリバーなんデリッ！',
        mapName: 'なんデリッ！',
        address: '熊本市中央区世安町73-1',
        tel: '096-372-0533',
        hours: '10:00～18:30（平日）',
        hours02: '10:00～18:30（土曜）',
        holiday: '日曜・祝日',
        mapUrl: 'https://goo.gl/maps/6sm5E5k8RyDtQarX9',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgKumamoto06,
      },
    ],
  },
  {
    prefecture: '福岡県',
    stores: [
      {
        id: 'fukuoka01',
        name: 'センターリバー ソラリアステージ店',
        mapName: 'ソラリアステージ店',
        address: '福岡市中央区天神2-11-3 B2F',
        tel: '092-713-5505',
        hours: '11:00～21:00（オーダーストップ）',
        holiday: '不定休（ソラリアステージの営業時間に準ずる）',
        mapUrl: 'https://goo.gl/maps/Dj3iLNU14qW6pigY7',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgFukuoka01,
      },
      {
        id: 'fukuoka02',
        name: 'センターリバー 南バイパス板付店',
        mapName: '南バイパス板付店',
        address: '福岡市博多区金の隈2-22-17',
        tel: '092-504-7080',
        hours: '11:00～21:00（オーダーストップ）',
        holiday: '毎週水曜日',
        mapUrl: 'https://goo.gl/maps/KiazDjnYayZUwEpz9',
        notice:
          '※急遽お休みをいただく場合がございます。事前にお電話でご確認ください',
        image: imgFukuoka02,
      },
    ],
  },
  {
    prefecture: '鹿児島県',
    stores: [
      {
        id: 'kagoshima01',
        name: 'センターリバー オプシアミスミ店',
        mapName: 'オプシアミスミ店',
        address: '鹿児島市宇宿2丁目3-5',
        tel: '099-812-7655',
        hours: '11:00～21:00（オーダーストップ）',
        holiday: '火曜日',
        mapUrl: 'https://goo.gl/maps/Dj3iLNU14qW6pigY7',
        image: imgKagoshima01,
      },
    ],
  },
];
