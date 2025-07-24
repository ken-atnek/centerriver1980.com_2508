/* =======================================
 *センターリバー ニュース記事DATA
 * URL:src/data/newsData.ts
 * Created: 2025-07-22
 * Last updated: 2025-07-22
 * ======================================= */
import { ReactNode } from 'react';
import { body001 } from './newsBody/newsBody001';
import { body002 } from './newsBody/newsBody002';
import { body003 } from './newsBody/newsBody003';

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  body: {
    content: ReactNode;
  };
};

export const newsData: NewsItem[] = [
  {
    id: 'news003',
    date: '2023-12-19',
    title: '年末年始のご予約について',
    body: body003,
  },
  {
    id: 'news002',
    date: '2023-09-28',
    title: 'レストランでのお弁当販売中止について',
    body: body002,
  },
  {
    id: 'news001',
    date: '2022-10-06',
    title: 'ホームページ、リニューアルのお知らせ',
    body: body001,
  },
];
