import { IconType } from "react-icons";

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  icon: IconType;
};

export type SatisfactionMetric = {
  label: string;
  value: number;
  colorClass: string;
};

export type Activity = {
  title: string;
  date: string;
  distance: string;
  image: string;
  tags: string[];
};

export type Spot = {
  name: string;
  type: "おすすめコース" | "集合場所" | "夜景スポット";
  area: string;
  note: string;
  icon: IconType;
};

export type RamenShop = {
  name: string;
  image: string;
  point: string;
  score: string;
};

export type GoodsItem = {
  name: string;
  images: string[];
  description: string;
};
