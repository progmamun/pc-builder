import RootLayout from "@/components/Layouts/RootLayout";
import CategoryCard from "@/components/UI/CategoryCard";
import { Card, Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;

const style = {
  margin: "12px 0",
};

function othersPage({ products }) {
  return (
    <>
      <Head>
        <title>PC Builder | Others</title>
        <meta
          name="description"
          content="Build Your Custom AMD Ryzen or Intel Gaming PC from PC House PC Builder. Visit PC House shop or Order Online to get delivery Anywhere in BD."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Others Products.
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => (
          <CategoryCard key={product._id} product={product}></CategoryCard>
        ))}
      </Row>
    </>
  );
}

export default othersPage;

othersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://pc-house-ecru.vercel.app/api/products?category=Others`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};
