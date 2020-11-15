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
            <Row className='body-content-row' gutter={[12, 22]}>
              <Col span={12}>
                <div className='img-container'>
                  <img src={imgSrc} alt='illustration' />
                </div>
              </Col>
              <Col span={12}>
                <h2>{title}</h2>
                <p>{content}</p>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          <div className='body-content'>
            <Row className='body-content-row' gutter={[12, 22]}>
              <Col span={12}>
                <h2>{title}</h2>
                <p>{content}</p>
              </Col>
              <Col span={12}>
                <div className='img-container'>
                  <img src={imgSrc} alt='illustration' />
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
