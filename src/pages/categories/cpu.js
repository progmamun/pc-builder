import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;

const style = {
  margin: "12px 0",
};

function cpuPage({ products }) {
  return (
    <>
      <Head>
        <title>PC Builder | CPU</title>
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
        Best CPU / Processor.
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
          <Col
            key={product.id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={10}
          >
            <Card
              style={style}
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
}

export default cpuPage;

cpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products?category=CPU`);
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};
