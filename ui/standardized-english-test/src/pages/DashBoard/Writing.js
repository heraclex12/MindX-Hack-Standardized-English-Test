import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { Pagination } from 'antd';
import axios from 'axios';
import './index-writing.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect
} from 'react-router-dom';

import Circle from '../../components/Circle';

const { TextArea } = Input;
const { Title } = Typography;


// import {ReactComponent as BBC} from '../../assets/icons/bbc.svg'
export default function Writing(props) {
  let { path, url } = useRouteMatch();
  const [prompt, setPrompt] = useState('');
  const [promptID, setPromptID] = useState(1);
  const [answer, setAnswer] = useState('');
  const [scores, setScores] = useState({})
  const [annotation, setAnnotation] = useState('');

  const clickPage = (p, s) => {
    setPromptID(p);
  }
  useEffect(()=> {
    fetch(`http://35.208.221.249:5000/api/get_writing_question/${promptID}`)
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
          // var decoder = new TextDecoder('utf-8'), decodedMessage;

          // decodedMessage = decoder.decode(data.question);
          setPrompt(data.question);
          // setPromptID(data.id);
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  },[promptID]);
  const addAnnotation = (s, offset,length, message) => (
    s.substr(0, offset) + `<span title="${message}" class="highlight" >`+s.substr(offset,length)+'</span>' + s.substr(offset+length)
  )
  const submit = () => {
    
    fetch('http://35.208.221.249:5000/api/get_writing_score', {
      method: 'POST',
      body: JSON.stringify({
        question_id: promptID,
        question_content: prompt,
        answer_content: answer
      })
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
          const {
            coherence_score = 1,
            relative_score = 1,
            semantic_score = 1,
            score: { total = 1 } = {}
          } = data;
          setScores({
            coherence: coherence_score,
            relative: relative_score,
            total:
              coherence_score +
              relative_score +
              semantic_score +
              parseInt(total / 10),
            sematic: semantic_score,
            grammar: parseInt(total / 10)
          });

          let annotation_html = ''
          let i=0
          for (const err of data.error) {
            annotation_html+= answer.substr(i,err.offset-i)
            i=err.offset+err.length
            let message=err.msg
            if ('rep' in err && err.rep.length>0) {
              message+=`. Suggestion: ${err.rep[0].value}`
            }
            annotation_html+= `<span title='${message}' class="highlight">` + answer.substr(err.offset,err.length) +'</span>'
          }
          annotation_html+=answer.substr(i)
          setAnnotation(annotation_html)
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 0 30px 0'
        }}
      >
        <Pagination
          // defaultCurrent={0}
          total={8}
          defaultPageSize={1}
          onChange={clickPage}
          current={promptID}
        />
      </div>
      <Title level={3} style={{ textAlign: 'center' }}>
        {promptID != '0' ? `Prompt ${promptID}` : ""}
      </Title>
      <Typography style={{ textAlign: 'justify', margin: '20px 30px' }}>{prompt}</Typography>

      <TextArea rows={4} style={{ margin: '20px 0px 10px 0px' }} onChange={(e) => { setAnswer(e.target.value) }} />
      
      
      <div style={{ textAlign: 'right' }}>
        <Button type="primary" size='large' onClick={submit}>Submit</Button>
      </div >
      <div className="content" dangerouslySetInnerHTML={{__html: annotation}} style={{margin:'30px'}}></div>

      <div className='circle-container'>
        {Object.keys(scores).length > 0 &&
          Object.keys(scores).map((item) => (
            <>
              <Circle title={item} amount={scores[item]} />
            </>
            //   <p>
            //     <span>{item} : </span>
            //     {scores[item]}
            //   </p>
          ))}
      </div>
    </div>
  );
}
