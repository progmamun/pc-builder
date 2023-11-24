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
      image: "https://i.ibb.co/MkFmTgS/cpu.png",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image: "https://i.ibb.co/CzRYfd7/motherboard.png",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image: "https://i.ibb.co/rfZjBt8/ram.png",
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      image: "https://i.ibb.co/GpQYHvm/power-supply.png",
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      image: "https://i.ibb.co/YRtkcxy/storage-device.png",
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      image: "https://i.ibb.co/wBdXytt/monitor.png",
      href: "/categories/monitor",
    },
    {
      title: "Others",
      image: "https://i.ibb.co/4YWyyGW/others-7580275.png",
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
          <Col key={i} className="gutter-row" xs={24} sm={12} md={8} lg={8}>
            <Link href={category?.href}>
              <Card
                style={style}
                hoverable
                cover={
                  <Image
                    src={category?.image}
                    width={200}
                    height={200}
                    responsive
                    alt={category?.title}
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
