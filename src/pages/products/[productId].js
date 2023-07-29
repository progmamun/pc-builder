import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
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
      style={{ margin: "20px 0px" }}
    >
      <Col className="gutter-row" span={12}>
        <Image fill responsive src={product?.image} alt={product?.name} />
      </Col>
      <Col className="gutter-row" span={12}>
        <Title level={2}>{product?.name}</Title>
        <p>{product?.category}</p>
        <p>{product?.status}</p>
        <p>৳{product?.price}</p>
        <p>{product?.description}</p>
        <p>{product?.features}</p>
        <p>{product?.rating}</p>
        <p>{product?.avgRating}</p>
        <p>{product?.reviews}</p>
      </Col>
    </Row>
  );
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?productId=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};

export default ProductDetails;
