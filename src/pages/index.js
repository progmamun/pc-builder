import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import ProductCard from "@/components/UI/ProductCard";
import Head from "next/head";

export const featuredCategories = [
  "CPU",
  "Motherboard",
  "RAM",
  "Power Supply",
  "Storage Device",
  "Monitor",
  "Others",
];

export default function HomePage({ allPc }) {
  return (
    <>
      <Head>
        <title>PC Builder | Nextjs</title>
        <meta
          name="description"
          content="Build Your Custom AMD Ryzen or Intel Gaming PC from PC House PC Builder. Visit PC House shop or Order Online to get delivery Anywhere in BD."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner></Banner>
        <ProductCard allPc={allPc} />

        <section className="featured-categories">
          <h2>Featured Categories</h2>
          <div className="category-cards">
            {featuredCategories.map((category, index) => (
              <div className="category-card" key={index}>
                <h3>{category}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

  // Randomly select 6 products
  function getRandomProducts(data, count) {
    const shuffled = data.data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomProducts = getRandomProducts(data, 6);

  console.log(data);

  return {
    props: {
      allPc: randomProducts,
    },
    revalidate: 10,
  };
};
