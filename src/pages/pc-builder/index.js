import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Button, Typography, Image } from "antd";
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
      image: "https://m.media-amazon.com/images/I/71aqa3+UdoL._AC_SL1500_.jpg",
      href: "/category/cpu",
    },
    {
      title: "Motherboard",
      image: "https://m.media-amazon.com/images/I/81aRnPKw8TL._AC_SL1500_.jpg",
      href: "/category/motherboard",
    },
    {
      title: "RAM",
      image: "https://m.media-amazon.com/images/I/81dGOtA7GsL._AC_SL1500_.jpg",
      href: "/category/ram",
    },
    {
      title: "Power Supply Unit",
      image: "https://m.media-amazon.com/images/I/81VF8Cx339L._AC_SL1500_.jpg",
      href: "/category/powersupply",
    },
    {
      title: "Storage Device",
      image: "https://m.media-amazon.com/images/I/61p7YfBpgjL._AC_SL1200_.jpg",
      href: "/category/storagedevice",
    },
    {
      title: "Monitor",
      image: "https://m.media-amazon.com/images/I/41vNitCSoHL._AC_SL1000_.jpg",
      href: "/category/monitor",
    },
    {
      title: "Others",
      image: "https://m.media-amazon.com/images/I/7156DLyUsYL._AC_SL1500_.jpg",
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
    } else if (category === "Power Supply Unit") {
      return builderState["powersupply"];
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
        powersupply: null,
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
      <div className="w-11/12 mx-auto pb-12 ">
        <div className="flex items-center justify-between">
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
            <div key={i} className="">
              <div className="">
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
              </div>
              <div className="">
                {showChoosedProduct(category?.title) && (
                  <div className="">
                    <Image
                      src={showChoosedProduct(category?.title)?.image}
                      className=""
                      alt={category?.title}
                    />
                    <div className="">
                      <Title level={4}>
                        {showChoosedProduct(category?.title)?.ProductName}
                      </Title>
                      <Text>
                        Price: {showChoosedProduct(category?.title)?.Price}
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
            </div>
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
