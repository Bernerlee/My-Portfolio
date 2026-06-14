import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "LINKSCHAT transformed the way our remote team collaborates.",
  },
  {
    name: "Michael Brown",
    text: "The interface is beautiful and messaging feels instant.",
  },
  {
    name: "David Wilson",
    text: "Privacy features are exactly what we were looking for.",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.heading}>
          <h2>What People Are Saying</h2>
          <p>Trusted by individuals, teams, and communities.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
