import {
  FaFaceLaughBeam,
  FaMoon,
  FaPeopleGroup,
  FaPersonRunning,
  FaBowlFood,
  FaStar,
  FaLocationDot,
  FaRoute,
  FaCameraRetro,
  FaBolt
} from "react-icons/fa6";
import {
  Activity,
  GoodsItem,
  RamenShop,
  SatisfactionMetric,
  Spot,
  Testimonial
} from "@/types";

export const testimonials: Testimonial[] = [
  {
    name: "Ai",
    quote: "運動不足が解消された！",
    rating: 5,
    icon: FaPersonRunning
  },
  {
    name: "Ao",
    quote: "風が気持ちいい！",
    rating: 5,
    icon: FaPeopleGroup
  },
  {
    name: "Kazuki",
    quote: "黒いは強い，だから僕は強い",
    rating: 8,
    icon: FaBolt
  },
  {
    name: "Toua",
    quote: "ラーメン目的で参加してます",
    rating: 5,
    icon: FaBowlFood
  }
];

export const satisfactionMetrics: SatisfactionMetric[] = [
  { label: "満足度", value: 98, colorClass: "from-accent-500 to-accent-300" },
  { label: "継続率", value: 92, colorClass: "from-sky-500 to-cyan-300" },
  { label: "ラーメン率", value: 3, colorClass: "from-orange-500 to-amber-300" }
];

export const activities: Activity[] = [
  {
    title: "皇居ラン",
    date: "2026.05.01",
    distance: "8.2km",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
    tags: ["朝活", "皇居", "初心者歓迎"]
  },
  {
    title: "深夜横浜ラン",
    date: "2026.04.22",
    distance: "11.4km",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
    tags: ["夜景", "港", "フォトラン"]
  },
  {
    title: "雨の日耐久ラン",
    date: "2026.04.14",
    distance: "6.7km",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80",
    tags: ["雨", "根性", "達成感"]
  },
  {
    title: "ラーメン完走チャレンジ",
    date: "2026.03.30",
    distance: "9.5km",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1200&q=80",
    tags: ["ご褒美", "グルメ", "人気"]
  }
];

export const mapSpots: Spot[] = [
  {
    name: "皇居外周",
    type: "おすすめコース",
    area: "千代田区",
    note: "信号が少なく、ペースをつかみやすい定番コース",
    icon: FaRoute
  },
  {
    name: "渋谷ストリーム前",
    type: "集合場所",
    area: "渋谷区",
    note: "仕事帰りにそのまま集合しやすいアクセス",
    icon: FaLocationDot
  },
  {
    name: "大さん橋",
    type: "夜景スポット",
    area: "横浜",
    note: "ラン後の写真撮影にぴったりな海辺ビュー",
    icon: FaCameraRetro
  }
];

export const ramenShops: RamenShop[] = [
  {
    name: "麺や Sprint",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    point: "塩ラーメンがラン後にちょうどいい軽さ",
    score: "おすすめ度 9.6/10"
  },
  {
    name: "Tokyo Noodle Lab",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1200&q=80",
    point: "淡麗しょうゆで罪悪感が少ない気がする",
    score: "おすすめ度 9.2/10"
  },
  {
    name: "夜ふかし豚骨",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1200&q=80",
    point: "夜ラン完走の背徳ご褒美として人気",
    score: "おすすめ度 10/10"
  }
];

export const goods: GoodsItem[] = [
  {
    name: "クラブTシャツ",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    description: "吸汗速乾で普段着にも使えるミニマルデザイン"
  },
  {
    name: "ランニングタオル",
    image: "https://images.unsplash.com/photo-1617957743098-6619a16ddad6?auto=format&fit=crop&w=1200&q=80",
    description: "首に巻きやすい薄さと、さわやかなカラーリング"
  },
  {
    name: "シューズ",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    description: "初心者にも扱いやすいクッション重視モデル"
  },
  {
    name: "ステッカー",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80",
    description: "PCにもボトルにも貼れる遊び心ある限定デザイン"
  }
];

export const navLinks = [
  { label: "活動", href: "#activities" },
  { label: "マップ", href: "#map" },
  { label: "ラーメン", href: "#ramen" },
  { label: "グッズ", href: "#goods" },
  { label: "Instagram", href: "#instagram" }
];

export const copy = {
  heroTitle: "日常に走る楽しみを",
  heroText: `走ることをもっと自由に、もっと楽しく。
仲間と一緒に、日本の街を駆け抜けよう。`
};

export const starIcon = FaStar;
export const smileIcon = FaFaceLaughBeam;
