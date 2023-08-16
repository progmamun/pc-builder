import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import React from "react";
import { Space, Typography } from "antd";
const { Title, Text } = Typography;
import { Col, Row } from "antd";

const ProductDetails = ({ product }) => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      style={{ margin: "20px 0px", minHeight: "100vh" }}
    >
      <Col
        className="gutter-row"
        xs={{
          span: 24,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 12,
        }}
        lg={{
          span: 12,
        }}
      >
        <Image
          fill
          sizes="(min-width: 1000px) calc(50vw - 34px), calc(102.35vw - 99px)"
          src={product?.image}
          alt={product?.name}
        />
      </Col>
      <Col
        className="gutter-row"
        xs={{
          span: 24,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 12,
        }}
        lg={{
          span: 12,
        }}
      >
        <Space direction="vertical">
          <Title level={2}>{product?.name}</Title>
          <Text strong>Category: {product?.category}</Text>
          <Text>
            Status: <Text type="success">{product?.status}</Text>
          </Text>
          <Text strong>Price: ৳{product?.price}</Text>
          <Text strong>Description: {product?.description}</Text>
          <Text strong>Brand: {product?.features}</Text>
          <Text strong>Total Ratings: {product?.rating}</Text>
          <Text strong>Average Rating: {product?.avgRating}</Text>
          <Text>Reviews: {product?.reviews}</Text>
        </Space>
      </Col>
    </Row>
  );
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-house-ecru.vercel.app/api/products");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-house-ecru.vercel.app/api/products?productId=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};

export default ProductDetails;
