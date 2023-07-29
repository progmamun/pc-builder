import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const ProductCard = ({ allPc }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Best PC Components.
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {/* {allPc?.map((products) => (
          <Col key={products.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={products?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="products image"
                />
              }
            >
              <Meta title={product.name} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined /> {products?.release_date}
                </span>
                <span>
                  <CommentOutlined /> {products?.comment_count} COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> {products?.category}
                </span>
              </p>

              <p style={{ fontSize: "15px" }}>
                {products?.description.length > 100
                  ? products?.description.slice(0, 70) + "..."
                  : products?.description}
              </p>
              <Link href={`/products/${products?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))} */}

        {/* {allPc?.map((product) => (
          <Col key={product.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={product?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="products image"
                />
              }
            >
              <Meta title={product?.title} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined /> {product?.release_date}
                </span>
                <span>
                  <CommentOutlined /> {product?.comment_count} COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> {product?.category}
                </span>
              </p>

              <p style={{ fontSize: "15px" }}>
                {product?.description.length > 100
                  ? product?.description.slice(0, 70) + "..."
                  : product?.description}
              </p>
              <Link href={`/product/${product?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  See Details <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))} */}

        {allPc?.map((product) => (
          <Col key={product.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={product?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="products image"
                />
              }
            >
              <Meta title={product.name} />

              <p>Category: {product.category}</p>
              <p>Price: ৳{product.price}</p>
              <p>Status: {product.status}</p>
              <p>Rating: {product.avgRating} Stars</p>
              <Link href={`/products/${product._id}`} key={product._id}>
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
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductCard;
