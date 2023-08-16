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
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu-48x48_1686724838.png",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2310600_1686989058.png",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/RAM_1686989592.png",
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/1470116_1686990072.png",
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/SSD-48x48_1686989668.png",
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2194087-200_1686989982.png",
      href: "/categories/monitor",
    },
    {
      title: "Others",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/3137678_1686990169.png",
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
