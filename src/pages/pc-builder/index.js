import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Button, Typography, Image, Row, Col } from "antd";
import {
  chooseSelectCategory,
  clearBuilder,
} from "@/redux/features/builderSlice";
const { Title, Text } = Typography;

function PcBuilderPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const categories = [
    {
      title: "CPU",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu-48x48_1686724838.png",
      href: "/category/cpu",
    },
    {
      title: "Motherboard",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2310600_1686989058.png",
      href: "/category/motherboard",
    },
    {
      title: "RAM",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/RAM_1686989592.png",
      href: "/category/ram",
    },
    {
      title: "Power Supply",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/1470116_1686990072.png",
      href: "/category/powersupply",
    },
    {
      title: "Storage Device",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/SSD-48x48_1686989668.png",
      href: "/category/storagedevice",
    },
    {
      title: "Monitor",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2194087-200_1686989982.png",
      href: "/category/monitor",
    },
    {
      title: "Others",
      image:
        "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/3137678_1686990169.png",
      href: "/category/others",
    },
  ];

  const handleChooseClick = (redirectUri, title) => {
    router.push(redirectUri);
    dispatch(chooseSelectCategory(title));
  };

  const builderState = useSelector((state) => state.builder.selectedProducts);

  const showChoosedProduct = (category) => {
    if (category === "CPU") {
      return builderState["cpu"];
    } else if (category === "RAM") {
      return builderState["ram"];
    } else if (category === "Monitor") {
      return builderState["monitor"];
    } else if (category === "Motherboard") {
      return builderState["motherboard"];
    } else if (category === "Storage Device") {
      return builderState["storage"];
    } else if (category === "Power Supply") {
      return builderState["power"];
    } else if (category === "Others") {
      return builderState["others"];
    }
  };

  const handleCompleteBuild = () => {
    swal("Wow! Your PC Build Completed!", "success");
    dispatch(
      clearBuilder({
        cpu: null,
        ram: null,
        monitor: null,
        storage: null,
        motherboard: null,
        power: null,
        others: null,
      })
    );
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Build Your Favorite PC.
      </h1>
      <div className="">
        <div className="">
          <div>
            <Title level={3}>Choose Products</Title>
            <Text>PC Builder - Build Your Dream PC!</Text>
          </div>
          {Object.entries(builderState).every(
            ([key, value]) => key === "others" || value !== null
          ) ? (
            <Button onClick={handleCompleteBuild} type="primary" size="large">
              Complete Build
            </Button>
          ) : (
            <Button disabled type="primary" size="large">
              Complete Build
            </Button>
          )}
        </div>
        <div className="">
          {categories?.map((category, i) => (
            <Row
              className="columnBorder"
              key={i}
              align="center"
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" xs={24} sm={12} md={8}>
                <div className="">
                  <Image
                    src={category?.image}
                    height={50}
                    width={50}
                    alt="CategoryImage"
                  />
                  <Title level={4} className="">
                    {category?.title !== "Others"
                      ? category?.title
                      : `${category?.title} (Optional)`}
                  </Title>
                </div>
              </Col>
              <div className="">
                {showChoosedProduct(category?.title) && (
                  <div className="">
                    <Image
                      src={showChoosedProduct(category?.title)?.image}
                      width={50}
                      height={50}
                      className=""
                      alt={category?.title}
                    />
                    <div className="">
                      <Title level={4}>
                        {showChoosedProduct(category?.title)?.name}
                      </Title>
                      <Text>
                        Price: {showChoosedProduct(category?.title)?.price}
                      </Text>
                    </div>
                  </div>
                )}
              </div>
              <Button
                onClick={() =>
                  handleChooseClick(category?.href, category?.title)
                }
                type="primary"
                size="large"
              >
                {showChoosedProduct(category?.title) ? "Change" : "Choose"}
              </Button>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
}

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
