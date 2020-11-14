import React, { Component } from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
    CNavItem,
    CNavLink,
    CTabPane,
    CNav,
    CTabContent,
    CTabs,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Button } from 'antd';
import './index-reading.css'
import './index-reading.scss'
// import {ReactComponent as BBC} from '../../assets/icons/bbc.svg'
export default class Reading extends Component {
    constructor() {
        super()
        const news_info = [
            ['https://cdn.flipboard.com/uploads/avatar/f73114cb60def0695b1c05e4c4f53916c545690f.png',
                'The New York Times', 'Find breaking news, multimedia, reviews and opinion on politics, business, sports, music, travel, books, jobs, education and education.'],

            ['https://cdn.flipboard.com/uploads/avatar/3c068d032f0a2747319abf96b5ccbde553689073.png',
                'FORBES', 'The world’s leading voice for entrepreneurial success and free enterprise.'],

            ['https://cdn.flipboard.com/uploads/avatar/df16bbdc485527cbd8a1d4c3414b721e4df6dfc7.png',
                'BBC NEWS', 'International news from the BBC.'],
            ['https://cdn.flipboard.com/uploads/avatar/bddccc74d057039494111628ac6e7c1d43543c2f.png',
                'REUTERS', 'Global news service feed.'],

            ['https://cdn.flipboard.com/uploads/avatar/c3e5f8e4ab07ada9d3b2bc7c91b706b12665572c.jpg',
                'LOS ANGELES TIMES', 'The Pulitzer Prize-winning Los Angeles Times has been covering Southern California for more than 138 years.'],

            ['https://cdn.flipboard.com/uploads/avatar/1daa5234ab229af8dfd9c087bacb6db680213cf8.png',
                'CNBC', 'First in Business Worldwide']
        ]

        this.state = {
            news_info,
            selectedIndex: undefined,
        }
    }

    componentDidMount() {

    }

    news_card() {
        const { news_info, selectedIndex } = this.state
        return <CRow> {news_info.map((n, index) => <CCol xs="12" sm="6" md="4">
            <CCard>
                <CCardHeader>
                    <img className='transfermarkt_profile_pic' src={n[0]} />

                    <b>{n[1]}</b>
                    <CIcon
                        name="cilCheck"
                        color='danger'
                        style={{ marginLeft: '2%' }}
                    />
                    <div className="card-header-actions">
                        <CBadge color="success" className="float-right">Share</CBadge>
                    </div>
                </CCardHeader>
                <CCardBody>
                    <CRow style={{ fontSize: '22px', fontFamily: 'Tiempos,Georgia,serif' }}>{n[2]}</CRow>
                    <CRow></CRow>
                </CCardBody>
                <CCardFooter>
                    <CRow>
                        <Button danger style={{ marginLeft: '2%' }}><b>Follow</b></Button>
                        <Button danger style={{ marginLeft: '2%' }}><b>Add to Favorite</b></Button>
                        <Button type="primary" onClick={() => this.setState({ selectedIndex: index })} style={{ marginLeft: '2%' }}> <b>View</b></Button>

                    </CRow>
                </CCardFooter>
            </CCard>
        </CCol>)} </CRow>
    }

    render() {
        const { news_info, selectedIndex } = this.state
        return (
            <div className='has-bootstrap'>

                {selectedIndex == undefined && this.news_card()}

                {selectedIndex != undefined &&


                    <CCard>
                        <CCardHeader>
                            <img className='transfermarkt_profile_pic' src={news_info[selectedIndex][0]} />

                            <b>{news_info[selectedIndex][1]}</b>
                            <CIcon
                                name="cilCheck"
                                color='danger'
                                style={{ marginLeft: '2%' }}
                            />
                            <div className="card-header-actions">
                                <Button danger onClick={() => this.setState({ selectedIndex: undefined })}>Back</Button>
                            </div>
                        </CCardHeader>
                    </CCard>



                }


            </div>
        )
    }
}

// export default withRouter(Reading);