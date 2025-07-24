/* =======================================
 *センターリバー 送料
 * URL:src/data/shippingData.ts
 * Created: 2025-07-24
 * Last updated: 2025-07-24
 * ======================================= */
export type ShippingAreaData = {
  areaName: string;
  prefectures: string[];
  shippingFee: string;
};

const shippingData: ShippingAreaData[] = [
  {
    areaName: '北海道',
    prefectures: ['北海道'],
    shippingFee: '2,442円',
  },
  {
    areaName: '東北',
    prefectures: ['青森県', '岩手県', '秋田県', '山形県', '宮城県', '福島県'],
    shippingFee: '1,540円',
  },
  {
    areaName: '関東',
    prefectures: [
      '茨城県',
      '栃木県',
      '群馬県',
      '埼玉県',
      '千葉県',
      '神奈川県',
      '山梨県',
    ],
    shippingFee: '1,430円',
  },
  {
    areaName: '信越',
    prefectures: ['新潟県', '長野県'],
    shippingFee: '1,430円',
  },
  {
    areaName: '北陸',
    prefectures: ['富山県', '石川県', '福井県'],
    shippingFee: '1,275円',
  },
  {
    areaName: '中部',
    prefectures: ['静岡県', '愛知県', '三重県', '岐阜県'],
    shippingFee: '1,275円',
  },
  {
    areaName: '関西',
    prefectures: ['滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
    shippingFee: '1,100円',
  },
  {
    areaName: '中国',
    prefectures: ['鳥取県', '岡山県', '島根県', '広島県', '山口県'],
    shippingFee: '855円',
  },
  {
    areaName: '四国',
    prefectures: ['香川県', '徳島県', '愛媛県', '高知県'],
    shippingFee: '1,100円',
  },
  {
    areaName: '九州',
    prefectures: [
      '福岡県',
      '佐賀県',
      '大分県',
      '熊本県',
      '長崎県',
      '宮崎県',
      '鹿児島県',
    ],
    shippingFee: '855円',
  },
  {
    areaName: '沖縄',
    prefectures: ['沖縄県'],
    shippingFee: '1,980円',
  },
];

export default shippingData;
