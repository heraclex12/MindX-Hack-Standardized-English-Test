import React, { Component } from 'react'
import { Button } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';

const { TextArea } = Input;

const { Title } = Typography;

// import {ReactComponent as BBC} from '../../assets/icons/bbc.svg'
export default class Writing extends Component {
    constructor() {
        super()
    }

    render() {

        return (
            <div>
            <Title level={3}>Prompt</Title>
            <Typography >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            <TextArea rows={4} />
            <Button type="primary">Submit</Button>
            </div>
        )
    }
}
