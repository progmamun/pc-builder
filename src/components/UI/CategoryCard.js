import React from "react";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBuilder } from "@/redux/features/builderSlice";
import { Card, Button, Typography, Space, Col } from "antd";
import { StarFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;
const { Text } = Typography;

const style = {
  margin: "12px 0",
};

const CategoryCard = ({ product }) => {
  /* const sumOfRatings = product?.Reviews.reduce(
    (total, review) => total + review.IndividualRating,
    0
  );
  const averageRating = sumOfRatings / product?.Reviews.length; */

  const router = useRouter();

  const dispatch = useDispatch();
  const categoryState = useSelector(
    (state) => state.builder.chooseSelectedCategory
  );

  const handleAddProduct = (product) => {
    if (product.category === "CPU") {
      dispatch(addProductToBuilder({ key: "cpu", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "RAM") {
      dispatch(addProductToBuilder({ key: "ram", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Motherboard") {
      dispatch(addProductToBuilder({ key: "motherboard", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Monitor") {
      dispatch(addProductToBuilder({ key: "monitor", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Storage Device") {
      dispatch(addProductToBuilder({ key: "storage", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Power Supply") {
      dispatch(addProductToBuilder({ key: "power", data: product }));
      router.push("/pc-builder");
    } else if (product?.category === "Others") {
      dispatch(addProductToBuilder({ key: "others", data: product }));
      router.push("/pc-builder");
    }
  };

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
        {categoryState !== "" && (
          <Button onClick={() => handleAddProduct(product)} className="">
            Add To Builder
          </Button>
        )}
      </Card>
    </Col>
  );
};

export default CategoryCard;
