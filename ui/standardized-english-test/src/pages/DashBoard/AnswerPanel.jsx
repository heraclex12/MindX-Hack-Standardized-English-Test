import React, { useState, useEffect } from 'react';
import { Collapse, Input } from 'antd';
import { CBadge } from '@coreui/react';
const AnswerPanel = (props) => {
  const { question, answer } = props;
  const { Panel } = Collapse;
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState('');
  const onPressEnter = () => {
    setDisplay(true);
  };

  const onChange = (s) => {
    // console.log(text)
    setText(s.target.value);
  };

  useEffect(() => {
    setText('');
    setDisplay(false);
    console.log('HERE');
  }, [answer]);

  return (
    <>
      <span>Answer: </span>
      <Input onChange={onChange} value={text} onPressEnter={onPressEnter} />
      {display && (
        <CBadge
          color={
            (text.toLowerCase().indexOf(answer.toLowerCase()) != -1 &&
              'success') ||
            'danger'
          }
        >
          <h5>{answer}</h5>
        </CBadge>
      )}
    </>
  );
};

export default AnswerPanel;
