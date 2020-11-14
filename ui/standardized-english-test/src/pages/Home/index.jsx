import React from 'react';
import { Carousel, Row, Col } from 'antd';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.png';
import BodyContent from '../../components/BodyContent';
import CardInfo from '../../components/CardInfo';
import CardSelect from '../../components/CardSelect';

import './index.css';

const IMG_SRC = [
  'https://ouch-cdn.icons8.com/thumb/52/58c3b830-0f88-4078-8854-acbf11cd4bf9.png',
  'https://ouch-cdn.icons8.com/thumb/1000/905bb965-7071-4c55-ac67-b723f84e659c.png',
  'https://ouch-cdn.icons8.com/thumb/429/c10f015f-4242-4eb1-8f11-b128524e1072.png'
];

const IMG_SRC_CARD_INFO = [
  'https://elearni.wpengine.com/wp-content/uploads/2018/12/desktop.png',
  'https://elearni.wpengine.com/wp-content/uploads/2018/12/student-genius.png',
  'https://elearni.wpengine.com/wp-content/uploads/2018/12/tests-taken.png',
  'https://elearni.wpengine.com/wp-content/uploads/2018/12/apple.png'
];

const contentStyle = {
  height: '560px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center'
  // background: '#364d79'
};

const Home = (props) => {
  const onChange = () => {};

  return (
    <div className='home'>
      {/* <header>
        <nav>
          <h1>AppName</h1>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
      </header> */}

      <div className='carousel-container'>
        <div className='content'>
          <h3>Standardized English Test</h3>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis molestie ex ut aliquet. Morbi aliquam finibus diam eget
            aliquet. Vivamus eu posuere libero. In luctus vehicula tristique.
            Mauris convallis mattis rutrum. Sed a semper dolor. Integer quis
            turpis arcu. Sed bibendum accumsan vehicula
          </p>
        </div>
        <Carousel afterChange={onChange} autoplay autoplaySpeed='16' infinite>
          <div>
            <div className='carousel-content carousel1' style={contentStyle}>
              1
            </div>
          </div>
          <div>
            <div className='carousel-content carousel2' style={contentStyle}>
              2
            </div>
          </div>
          <div>
            <div className='carousel-content carousel3' style={contentStyle}>
              3
            </div>
          </div>
        </Carousel>
      </div>

      <BodyContent
        title='The trusted source for learning English'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        sagittis molestie ex ut aliquet. Morbi aliquam finibus diam eget
        aliquet.'
        imgSrc={IMG_SRC[0]}
      />

      <BodyContent
        title='Integrate with machine learning'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis molestie ex ut aliquet. Morbi aliquam finibus diam eget
            aliquet.'
        imgSrc={IMG_SRC[1]}
        reverse
      />

      <BodyContent
        title='Header 3'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis molestie ex ut aliquet. Morbi aliquam finibus diam eget
            aliquet.'
        imgSrc={IMG_SRC[2]}
      />

      <div className='info'>
        <Row gutter={16}>
          <Col span={6}>
            <CardInfo
              title='9900+ Topics'
              content='learn anything'
              imgSrc={IMG_SRC_CARD_INFO[0]}
            />
          </Col>
          <Col span={6}>
            <CardInfo
              title='3000+ Student'
              content='future genius'
              imgSrc={IMG_SRC_CARD_INFO[1]}
            />
          </Col>
          <Col span={6}>
            <CardInfo
              title='48000+ Test Taken'
              content={`that's a lot`}
              imgSrc={IMG_SRC_CARD_INFO[2]}
            />
          </Col>
          <Col span={6}>
            <CardInfo
              title='750+ Instructors'
              content='all trained professionals'
              imgSrc={IMG_SRC_CARD_INFO[3]}
            />
          </Col>
        </Row>
      </div>

      <div className='cards-select'>
        <CardSelect title='reading' id={1} />
        <CardSelect title='writing' id={2} />
      </div>
    </div>
  );
};

export default Home;
