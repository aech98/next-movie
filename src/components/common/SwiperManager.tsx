import { ReactNode } from "react";
import { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

type SwiperManagerProps<T> = {
  items: T[];
  keyExtractor: (item: T) => string | number;
  renderItem: (item: T, index: number) => ReactNode;
  swiperOptions?: SwiperOptions;
  swiperClassName?: string;
  swiperSliderClassName?: string;
};

const SwiperManager = <T,>({
  items,
  keyExtractor,
  renderItem,
  swiperOptions,
  swiperClassName,
  swiperSliderClassName,
}: SwiperManagerProps<T>) => {
  return (
    <Swiper {...swiperOptions} className={swiperClassName}>
      {items.map((item, index) => (
        <SwiperSlide key={keyExtractor(item)} className={swiperSliderClassName}>
          {renderItem(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperManager;
