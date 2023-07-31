import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Banner_03 from "@/assets/images/banner-images/Banner-03.jpg";
import Banner_04 from "@/assets/images/banner-images/Banner-04.jpg";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const BannerCarousel = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            LET&apos;S BUILD
            <br />
            YOUR PC
          </h1>
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
            Welcome to our PC Build website! Discover the ultimate gaming
            experience with our top-notch components and expert guidance.
            Unleash your gaming potential with our meticulously curated
            selection of CPUs, GPUs, motherboards, RAM, and more.
          </p>
          <a
            href={"/pcBuilder"}
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
              cursor: "pointer",
            }}
          >
            Build pc <ArrowRightOutlined />
          </a>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image src={Banner_03} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            Build Your Ultimate
            <br />
            PC Rig Today!
          </h1>
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
            Welcome to our PC Build website! We are dedicated to providing you
            with the best components and resources to create your ultimate
            gaming rig...
          </p>
          <a
            href={"/pcBuilder"}
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
              cursor: "pointer",
            }}
          >
            BUILD PC <ArrowRightOutlined />
          </a>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src={Banner_04}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default BannerCarousel;
