import { Col, Row, Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Banner_03 from "@/assets/images/banner-images/Banner-03.jpg";
import Banner_04 from "@/assets/images/banner-images/Banner-04.jpg";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const data = [
  {
    title: `LET&apos;S BUILD <br /> YOUR PC`,
    description: `Welcome to our PC Build website! Discover the ultimate gaming
    experience with our top-notch components and expert guidance.
    selection of CPUs, GPUs, motherboards, RAM, and more.`,
    buttonContent: "Build pc",
    bannerImage: "/Banner-03.jpg",
  },
  {
    title: ` Build Your Ultimate <br />PC Rig Today!`,
    description: `Welcome to our PC Build website! We are dedicated to providing you
    with the best components and resources to create your ultimate gaming rig...`,
    buttonContent: "Build pc",
    bannerImage: "/Banner-04.jpg",
  },
];

const BannerCarousel = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {data?.map((item, index) => (
      <div key={index}>
        <Row>
          <Col
            lg={{
              span: 8,
            }}
          >
            <h1
              style={{ fontSize: "50px" }}
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h1>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "95%",
              }}
            ></div>

            <p style={{ fontSize: "20px", marginBottom: "15px" }}>
              {item?.description}
            </p>
            <a
              href={"/pcBuilder"}
              style={{
                fontSize: "20px",
                margin: "20px 0px",
                width: "168px",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
                cursor: "pointer",
              }}
              className="border border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff]"
            >
              {item.buttonContent} <ArrowRightOutlined />
            </a>
          </Col>

          <Col
            lg={{
              span: 16,
            }}
            style={contentStyle}
          >
            <Image src={item.bannerImage} quality={90} priority fill alt="drawing_image" />
          </Col>
        </Row>
      </div>
    ))}
  </Carousel>
);
export default BannerCarousel;
