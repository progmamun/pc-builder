import { Card, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Meta } = Card;

const style = {
  margin: "12px 0",
};

function CategoriesCard({ product }) {
  return (
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
  );
}

export default CategoriesCard;
