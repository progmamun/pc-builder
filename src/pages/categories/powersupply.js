import RootLayout from "@/components/Layouts/RootLayout";
import CategoriesCard from "@/components/UI/CategoriesCard";
import { Card, Row } from "antd";
import Head from "next/head";

function powersupplyPage({ products }) {
  return (
    <>
      <Head>
        <title>PC Builder | Power Supply</title>
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
        Best Power Supply.
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
          <CategoriesCard key={product._id} product={product}></CategoriesCard>
        ))}
      </Row>
    </>
  );
}

export default powersupplyPage;

powersupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=Power Supply`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};
