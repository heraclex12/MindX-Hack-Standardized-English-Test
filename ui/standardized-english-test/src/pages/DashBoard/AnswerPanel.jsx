import React, {useState} from 'react'
import { Collapse, Input } from 'antd';
import { CBadge} from '@coreui/react';
const AnswerPanel = (props) => {

    const {question, answer} = props
    const {Panel} = Collapse
    const [display, setDisplay] = useState(false)
    const [text, setText] = useState("")
    const onPressEnter = () => {
        setDisplay(true)
    }

    const onChange = (s) => {
        // console.log(text)
        setText(s.target.value)
    }

    return (
        <>
            <Input onChange={onChange} onPressEnter={onPressEnter}/>
            {display && <CBadge color={(text.toLowerCase().indexOf(answer.toLowerCase()) != -1 && "success") || "danger"}><h5>{answer}</h5></CBadge>}
        </>
    )
}

export default AnswerPanel
