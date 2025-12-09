
export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video' | 'quote';
  url?: string;
  thumbnail?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  span?: boolean;
}

export interface DressageCard {
  icon: string;
  title: string;
  description: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  imageUrl: string;
  link: string;
}
