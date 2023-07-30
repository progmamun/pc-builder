import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const style = {
  margin: "12px 0",
};

function FeaturedCategories() {
  const { Meta } = Card;

  const categories = [
    {
      title: "CPU",
      image: "https://m.media-amazon.com/images/I/71aqa3+UdoL._AC_SL1500_.jpg",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image: "https://m.media-amazon.com/images/I/81aRnPKw8TL._AC_SL1500_.jpg",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image: "https://m.media-amazon.com/images/I/81dGOtA7GsL._AC_SL1500_.jpg",
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      image: "https://m.media-amazon.com/images/I/81VF8Cx339L._AC_SL1500_.jpg",
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      image: "https://m.media-amazon.com/images/I/61p7YfBpgjL._AC_SL1200_.jpg",
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      image: "https://m.media-amazon.com/images/I/41vNitCSoHL._AC_SL1000_.jpg",
      href: "/categories/monitor",
    },
    {
      title: "Others",
      image: "https://m.media-amazon.com/images/I/7156DLyUsYL._AC_SL1500_.jpg",
      href: "/categories/others",
    },
  ];
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Featured Categories.
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {categories.map((category, i) => (
          <Col
            key={i}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={10}
          >
            <Link href={category?.href}>
              <Card
                style={style}
                hoverable
                cover={
                  <Image
                    src={category?.image}
                    width={500}
                    height={200}
                    responsive
                    alt="products image"
                  />
                }
              >
                <Meta title={category.title} />

                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "#FFD814",
                    color: "#0F1111",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  See Details
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default FeaturedCategories;
