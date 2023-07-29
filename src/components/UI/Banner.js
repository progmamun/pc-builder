import { Carousel } from "antd";
import Image from "next/image";
import styles from "@/styles/Banner.module.css";

function Banner() {
  return (
    <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
      <div className={styles.imageContainer}>
        <h3>CyberPowerPC Gamer Xtreme VR</h3>
        <Image
          src="https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg"
          layout="fill"
          responsive
          className={styles.image}
          alt="banner img"
        />
      </div>
      <div className={styles.imageContainer}>
        <h3>Thermaltake Glacier 360 Liquid</h3>
        <Image
          src="https://m.media-amazon.com/images/I/61cXu9yGldL._AC_SL1200_.jpg"
          layout="fill"
          className={styles.image}
          alt="banner img"
        />
      </div>
      <div className={styles.imageContainer}>
        <h3>Skytech Archangel Gaming Computer</h3>
        <Image
          src="https://m.media-amazon.com/images/I/81gqqKQVkAL._AC_SL1500_.jpg"
          layout="fill"
          className={styles.image}
          alt="banner img"
        />
      </div>
      <div className={styles.imageContainer}>
        <h3>Skytech Azure Gaming PC Desktop</h3>
        <Image
          src="https://m.media-amazon.com/images/I/91CnBmI3G8L._AC_SL1500_.jpg"
          layout="fill"
          className={styles.image}
          alt="banner img"
        />
      </div>
    </Carousel>
  );
}

export default Banner;
