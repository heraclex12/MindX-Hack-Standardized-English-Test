import React, { useState } from 'react'
import { Button } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { Pagination } from 'antd';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
const { TextArea } = Input;
const { Title } = Typography;

// import {ReactComponent as BBC} from '../../assets/icons/bbc.svg'
export default function Writing(props) {
    let { path, url } = useRouteMatch();
    const [prompt,setPrompt] = useState('');
    const [promptID,setPromptID]=useState('0');
    return (
        <div>
            <Pagination defaultCurrent={0} total={8} defaultPageSize={1}
                onChange={(p, s) => {
                    console.log(p, s);
                    fetch(`http://35.208.221.249:5000/api/get_writing_question/${p}`)
                        .then(
                            function (response) {
                                if (response.status !== 200) {
                                    console.log('Looks like there was a problem. Status Code: ' +
                                        response.status);
                                    return;
                                }

                                // Examine the text in the response
                                response.json().then(function (data) {
                                    console.log(data)
                                    setPrompt(data.question)
                                    setPromptID(data.id)
                                });
                            }
                        )
                        .catch(function (err) {
                            console.log('Fetch Error :-S', err);
                        });
                }}
            />
            {/* <Switch>
                <Route path={`${path}/:id`}>
                    <Prompt />
                </Route>
            </Switch> */}
            <Title level={3}>{promptID!='0'?`Prompt ${promptID}`:"" }</Title>
            <Typography >{prompt}</Typography>
            <TextArea rows={4} />
            <Button type="primary">Submit</Button>
        </div>
    )
}

// function Prompt(props) {
//     fetch('')
//     return (

//     )
// }