import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

const BodyContent = (props) => {
  const { title = '', content = '', imgSrc = '', reverse = false } = props;

  return (
    <>
      {reverse ? (
        <>
          <div className='body-content reverse'>
            <Row
              className='body-content-row'
              gutter={{ xs: 4, sm: 8, md: 12, lg: 22 }}
            >
              {/* <Col md={24} span={12}> */}
              <Col xs={2} sm={4} md={10} lg={10} xl={12}>
                <div className='img-container'>
                  <img
                    src={imgSrc}
                    //   src='https://ouch-cdn.icons8.com/preview/706/5edf5dc1-a4f1-4a7f-ba51-1ffa3ba997ba.png'
                    alt='illustration'
                  />
                </div>
              </Col>
              <Col xs={2} sm={4} md={6} lg={10} xl={12}>
                <h2>{title}</h2>
                <p>{content}</p>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          <div class='body-content'>
            <Row className='body-content-row' gutter={[12, 22]}>
              <Col span={12}>
                <h2>{title}</h2>
                <p>{content}</p>
              </Col>
              <Col span={12}>
                <div className='img-container'>
                  <img
                    src={imgSrc}
                    //   src='https://ouch-cdn.icons8.com/preview/706/5edf5dc1-a4f1-4a7f-ba51-1ffa3ba997ba.png'
                    alt='illustration'
                  />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default BodyContent;
