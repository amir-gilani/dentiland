import { DentilandImages } from '../assets/images';

export interface CategoryItem {
  id: string;
  title: string;
  image: string;
  linkText: string;
  itemCount?: string;
  slug: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceFormatted: string;
  rating: number;
  ratingFormatted: string;
  image: string;
  inStock: boolean;
  isPopular?: boolean;
  description: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tagColor: string;
  date: string;
  readTime: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  avatarBg: string;
  rating: number;
  text: string;
  date: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'shield' | 'zap' | 'chat' | 'return';
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'tools',
    title: 'ابزار و تجهیزات',
    image: DentilandImages.categories.tools,
    linkText: 'مشاهده همه',
    itemCount: '۴۲ محصول',
    slug: 'tools',
  },
  {
    id: 'kids',
    title: 'محصولات کودکان',
    image: DentilandImages.categories.kidsProducts,
    linkText: 'مشاهده همه',
    itemCount: '۶۸ محصول',
    slug: 'kids',
  },
  {
    id: 'ortho',
    title: 'ارتودنسی',
    image: DentilandImages.categories.ortho,
    linkText: 'مشاهده همه',
    itemCount: '۲۹ محصول',
    slug: 'orthodontics',
  },
  {
    id: 'oralcare',
    title: 'مراقبت دهان و دندان',
    image: DentilandImages.categories.oralCare,
    linkText: 'مشاهده همه',
    itemCount: '۸۵ محصول',
    slug: 'oral-care',
  },
  {
    id: 'brush-paste',
    title: 'مسواک و خمیردندان',
    image: DentilandImages.categories.brushAndPaste,
    linkText: 'مشاهده همه',
    itemCount: '۱۲۰ محصول',
    slug: 'toothbrush-paste',
  },
];

export const POPULAR_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-5',
    name: 'نخ دندان ویژه',
    category: 'مراقبت دهان و دندان',
    price: 149000,
    priceFormatted: '۱۴۹,۰۰۰',
    rating: 4.6,
    ratingFormatted: '۴.۶',
    image: DentilandImages.products.dentalFloss,
    inStock: true,
    isPopular: true,
    description: 'نخ دندان نانو موم‌دار با رایحه نعنا، ضد پارگی و مناسب لثه‌های حساس کودکان و بزرگسالان.',
  },
  {
    id: 'prod-4',
    name: 'دهانشویه ضد باکتری',
    category: 'بهداشت دهان',
    price: 279000,
    priceFormatted: '۲۷۹,۰۰۰',
    rating: 4.7,
    ratingFormatted: '۴.۷',
    image: DentilandImages.products.mouthwash,
    inStock: true,
    isPopular: true,
    description: 'فرمولاسیون ملایم بدون الکل با خاصیت محافظت ۱۲ ساعته در برابر باکتری‌های مولد پلاک.',
  },
  {
    id: 'prod-3',
    name: 'ست مسواک کودک',
    category: 'محصولات کودکان',
    price: 349000,
    priceFormatted: '۳۴۹,۰۰۰',
    rating: 4.9,
    ratingFormatted: '۴.۹',
    image: DentilandImages.products.kidsBrushSet,
    inStock: true,
    isPopular: true,
    description: 'پک ۵ عددی مسواک‌های فانتزی پایه مکنده‌دار با فیلامنت‌های فوق‌العاده نرم و سیلیکونی.',
  },
  {
    id: 'prod-2',
    name: 'خمیردندان ضد حساسیت',
    category: 'مسواک و خمیردندان',
    price: 169000,
    priceFormatted: '۱۶۹,۰۰۰',
    rating: 4.5,
    ratingFormatted: '۴.۵',
    image: DentilandImages.products.sensitiveToothpaste,
    inStock: true,
    isPopular: true,
    description: 'خمیردندان ارگانیک کودکان حاوی زایلیتول طبیعی جهت ترمیم و استحکام مینای دندان.',
  },
  {
    id: 'prod-1',
    name: 'مسواک برقی هوشمند',
    category: 'ابزار و تجهیزات',
    price: 2650000,
    priceFormatted: '۲,۶۵۰,۰۰۰',
    rating: 4.8,
    ratingFormatted: '۴.۸',
    image: DentilandImages.products.lumiElectric,
    inStock: true,
    isPopular: true,
    description: 'مسواک سونیک مجهز به حسگر فشار، تایمر ۲ دقیقه‌ای هوشمند و نمایشگر میزان پاکسازی.',
  },
];

export const WHY_DENTILAND_FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: 'اصالت ۱۰۰٪ کالا',
    subtitle: 'ضمانت کیفیت',
    iconName: 'shield',
  },
  {
    id: 'f2',
    title: 'ارسال سریع',
    subtitle: 'سراسر کشور',
    iconName: 'zap',
  },
  {
    id: 'f3',
    title: 'مشاوره تخصصی',
    subtitle: 'دندانپزشکان مجرب',
    iconName: 'chat',
  },
  {
    id: 'f4',
    title: 'ضمانت بازگشت',
    subtitle: '۷ روز مهلت تست',
    iconName: 'return',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'اهمیت نخ دندان در سلامت دهان',
    excerpt: 'استفاده منظم از نخ دندان مانع تشکیل پلاک و بیماری‌های لثه می‌شود و تا ۴۰٪ پاکسازی را افزایش می‌دهد.',
    category: 'آموزشی',
    tagColor: 'bg-sky-500',
    date: '۱۴۰۳/۰۱/۱۵',
    readTime: '۴ دقیقه',
    image: DentilandImages.articles.dentist,
  },
  {
    id: 'art-2',
    title: 'چگونه از دندان‌های کودکان مراقبت کنیم؟',
    excerpt: 'راهنمای جامع والدین برای انتخاب مسواک مناسب، آموزش مسواک زدن شاد و پیشگیری از پوسیدگی دندان شیری.',
    category: 'کودکان',
    tagColor: 'bg-amber-500',
    date: '۱۴۰۳/۰۱/۱۸',
    readTime: '۶ دقیقه',
    image: DentilandImages.articles.kidsBrushing,
  },
  {
    id: 'art-3',
    title: '۵ نکته مهم برای انتخاب مسواک مناسب',
    excerpt: 'بررسی زوایای برس، درجه نرمی یا زبری و ویژگی‌های ارگونومیک برای داشتن بهترین بهداشت دهانی.',
    category: 'راهنمای خرید',
    tagColor: 'bg-blue-600',
    date: '۱۴۰۳/۰۱/۲۰',
    readTime: '۵ دقیقه',
    image: DentilandImages.articles.mascots,
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'نرگس رضوانی',
    initials: 'ن',
    avatarBg: 'bg-sky-500',
    rating: 5,
    text: '«بسته‌بندی بهداشتی عالی، اصالت صد در صدی کالاها و مهم‌تر از همه مشاور آنلاین دندانپزشک سایت که خیلی صبورانه پاسخ دادند. واقعاً راضی هستم.»',
    date: '۲ هفته پیش',
  },
  {
    id: 'rev-2',
    author: 'علی محمدی',
    initials: 'ع',
    avatarBg: 'bg-blue-600',
    rating: 5,
    text: '«ارسال بسیار سریع بود و خمیردندان کاملاً پلمپ و باکیفیت به دستم رسید. بچه‌ها عاشق بسته‌بندی مسواک‌ها و تم کودکانه‌اش شدن.»',
    date: '۱ هفته پیش',
  },
  {
    id: 'rev-3',
    author: 'سارا کمالی',
    initials: 'س',
    avatarBg: 'bg-cyan-500',
    rating: 5,
    text: '«تنوع محصولات اورجینال کودک در سایت عالیه. مشاوره قبل از خرید هم خیلی به من کمک کرد تا بهترین مسواک نرم رو برای دخترم انتخاب کنم.»',
    date: '۳ روز پیش',
  },
];
