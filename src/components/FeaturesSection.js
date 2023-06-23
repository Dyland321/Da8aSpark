import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "Data Strategy",
      body:
        "Understanding the grand scheme of things while you're engrossed in day-to-day business operations can be challenging. Our dedicated team takes a comprehensive look at your data management, analysis, and utilization practices to align them with your business objectives. We provide a tailor-made action plan, serving as your guiding beacon for all data-related endeavors.",
      image: "https://i.ibb.co/sFK9PNh/strategy.jpg"
    },
    {
      title: "Data Implementation",
      body:
        "Setting up fresh data and analytics systems can often be a costly and lengthy process. However, our team of seasoned professionals is ready to develop and establish the necessary foundation, structure, and data analytics for your needs. We aim to empower your teams and pave the way towards success.",
      image: "https://i.ibb.co/wwpWSRm/Implementation.jpg"
    },
    {
      title: "Data Migration",
      body:
        "Mitigate the risk of business interruptions by entrusting us with the intricate process of transitioning from outdated data solutions to cutting-edge, cloud-based platforms. We facilitate a swift and smooth changeover that fosters innovation and boosts your business's growth potential.",
      image: "https://i.ibb.co/qND9Z1m/Second.jpg"
    },
    {
      title: "Comprehensive Talent Augmentation and Ongoing Support Services",
      body:
        "Bridge any skill deficits across your organization with continuous assistance from our proficient team of data specialists. Our roster includes Chief Data Officers (CDOs), data engineers, data architects, project managers, and business analysts, all at your service.",
      image: "https://i.ibb.co/LQ2gDmX/Full-Service.jpg"
    }
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card>
          <Row className="no-gutters overflow-hidden">
            {items.map((item, index) => (
              <Col
                xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  boxShadow: "1px 1px 0 0 #efefef"
                }}
                key={index}
              >
                <div className="FeaturesSection__item has-text-centered">
                  <div className="FeaturesSection__image-container">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fluid={true}
                        style={{ objectFit: "cover", height: "100%" }}
                      />
                    </AspectRatio>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
