
import { NavItem, GalleryItem, DressageCard, NewsItem } from './types';

// Example local paths:
// './image/合照.JPG'
// './image/cover.jpg'

export const NAV_ITEMS: NavItem[] = [
  { label: '首頁', href: '#home' },
  { label: '關於選手', href: '#about' },
  { label: '亞錦賽介紹', href: '#championships' },
  { label: '馬術精神', href: '#dressage' },
  { label: '賽事集錦', href: '#gallery' },
  { label: '最新消息', href: '#news' },
];

export const DRESSAGE_INFO: DressageCard[] = [
  {
    icon: 'fas fa-history',
    title: '起源與歷史',
    description: '馬術運動源遠流長，起初是為了軍事訓練，讓馬匹在戰場上能靈活應對。隨著時代演變，它逐漸發展成為一項追求極致和諧的體育競技。馬場馬術（Dressage）一詞源自法語，意為「訓練」，被譽為「馬匹的芭蕾」。',
  },
  {
    icon: 'fas fa-chess-knight',
    title: '比賽形式',
    description: '在標準的 20x60 公尺場地內，選手需引導馬匹完成一系列指定動作，如慢步、快步、跑步以及高難度的原地踏步（Piaffe）或空中換腿。評審根據馬匹的動作準確性、服從度以及人馬合一的協調性進行評分。',
  },
  {
    icon: 'fas fa-heart',
    title: '騎士精神',
    description: '這是奧運項目中唯一不分性別、年齡同場競技的運動。其核心精神在於「尊重與溝通」。如陳怡如所言：「正確的騎乘對馬匹筋骨是很好的保養。」這是一項建立在信任基礎上的藝術。',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1629814596135-e514cb9f2a07?q=80&w=2071&auto=format&fit=crop',
    title: 'FEI 亞錦賽 - 團體賽精華',
    subtitle: '與愛馬 Chassot 的完美演繹',
    span: true,
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop',
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2121&auto=format&fit=crop',
  },
  {
    id: 4,
    type: 'quote',
    content: '除非我清楚知道身體極限已經到達了，不然我不會放棄。馬術是我一輩子沒辦法放棄的事。',
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1612022716766-4148b39f3c7e?q=80&w=2070&auto=format&fit=crop',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: '中華隊抵達泰國 Pattaya，備戰第二屆 FEI 亞洲盃',
    date: '2025.02.10',
    source: '體育新聞',
    imageUrl: 'https://images.unsplash.com/photo-1541854615901-93c3541b7d0f?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 2,
    title: '斜槓 CEO 陳怡如：從辦公室到馬背上的國手之路',
    date: '2025.02.05',
    source: '人物專訪',
    imageUrl: 'https://images.unsplash.com/photo-1574271143515-5cddf8da1600?q=80&w=2071&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 3,
    title: 'FEI 亞錦賽賽程公佈，馬場馬術團體賽 12/6 登場',
    date: '2025.01.28',
    source: '賽事公告',
    imageUrl: 'https://images.unsplash.com/photo-1629814596420-a6cb3a113d0c?q=80&w=2071&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 4,
    title: '認識馬場馬術 Dressage：欣賞人馬合一的優雅藝術',
    date: '2025.01.15',
    source: '馬術專欄',
    imageUrl: 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=2000&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 5,
    title: '漢諾威馬術俱樂部全力後援，打造頂尖訓練基地',
    date: '2025.01.02',
    source: '俱樂部動態',
    imageUrl: 'https://images.unsplash.com/photo-1599052662077-d65261d76461?q=80&w=1974&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 6,
    title: '與愛馬 Chassot 的對話：信任是唯一的語言',
    date: '2024.12.20',
    source: '選手日記',
    imageUrl: 'https://images.unsplash.com/photo-1551884831-bbf3ddd77535?q=80&w=2070&auto=format&fit=crop',
    link: '#',
  },
];