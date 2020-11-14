import React, { Component } from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
     } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Button } from 'antd';
import axios from 'axios';
import './index-reading.css'
import './index-reading.scss'
import {CheckCircleTwoTone } from '@ant-design/icons';
import { withRouter } from 'react-router';
import { Collapse } from 'antd';
import AnswerPanel from './AnswerPanel';

class Reading extends Component {
    constructor(props) {
        super(props)
        const news_info = [
            ['https://cdn.flipboard.com/uploads/avatar/f73114cb60def0695b1c05e4c4f53916c545690f.png', 
            'The New York Times', 'Find breaking news, multimedia, reviews and opinion on politics, business, sports, music, travel, books, jobs, education and education.',
            'nytimes'],
            
            ['https://cdn.flipboard.com/uploads/avatar/82cc0f7e84f616c5241d0de12b8adc83f562ac9f.jpeg', 
            'THE ATLANTIC', 'Current affairs, politics, and culture. ', 'atlantic'],

            ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8MDg8AAABTVFQAAwVAQUHp6emXl5fm5uYwMTLk5OSUlJVnaGiioqLg4ODu7u7AwMD5+fny8vLOzs4nKClZWlosLS04OTm5ubnGx8eys7MPERIWGBmCgoIhIiPU1NSLjIxJSkt0dHV4eXmenp9MTU1iYmNERUWqq6v51PrQAAADnElEQVR4nO3b6XaiMACGYY24VEUU6jp1mW54/1c4tQoJIYl4CjMTzvv8KwkhnwtZsJ0OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSq32uPvjGhaBNzwm57kNB/JPQfCf33WMJ8jJGHAudYVDozKLXpbsDQVLEn5aKfJPyV9q/SX3n/1n2HNKv2nJ251iO6G1CaeinEm56TweKrp4vRdpg6Mz6SMHjKKzxlHRWRsYHM6lpPvGcHIr1pMXA2IPXyM0V/XiyKTo6MP044cnbr+ZZwmB0YlxKOH0woxLxcGPesEb1LKNaxsfhkvXd4llB82sr3loieJRRre4W+udf1JYxHZXGFhMmgcIq8c42Lx38L7fUYhK/T/Ub+XWq67oQT0yB2q+ZI2NXOWMpOlAdEpbQzvV1hlh9ZGrtdX8KhY1ByJdRqTl2dELu8NL0VB3K4mbchYf6GzZTR0d1tzxLmI4XyfolwF072r8t0ZW7R04SJUmqf83qYcOQqtbToV8Jtp8rliuf4lXAv+/hm+VT6nbDQ3WRVKaNvCfNl2MXmcGf1W29CfU7TSEJ9PTrv381YX8LkPVQVpvo1JlxpXZ1Na9zFeGhtkTSTsCs+9CvFrhV+gwm3DSU0LYEX+3+xi9FYwq8pzK50tUFqbdfDhJfJ9rF0Peut3Lvv4bWWWM70C25tn+raEkYz1XjXZMLvjPr7mFhuTbUl/DvjoZpxrW0rvrdgfahnPBQzPptmcT4nvGxhrNXv4+beVNa/hJf3UVlu3J2s+5iwuP/2YVpxeZ+wK+Se6VtLE8qNftPDCx8TBkFh6RvInX7Tswu/El5H2pd176BEVDZMP31PKI7jaPFdpk7RlLupsUWvEsqtNuWJqHxaY2y84SczopzQUe1uQlnYOWRNi3N+zPgIsb6E20nZ8FVoCaOTqdo0v+Cd76GyS3N79rSSE/C44XmpUaInNNtUTag+AR6F+32oLjBM433jCbfVEu4qJuwalvc5y2NuzxKqNxuNaT7jY8KuCI0txNaNmh8ndP/gp/6EXZGWN2m+Fr/17ESt4sFVvMoTHgcO0a3r4hQ5q4Uy4Wd2jdKvp/IqIt0Vdr6Pzg3Th37XJn9kJydN5vFNH+ju1FJnKMZtED2jeJlOzpv5fHM+LZ1VH0z4HwmqvBLffE1YHQn9R0L/kdB/JPQfCf1nSdgmxoTt/z9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKjNH42oWRggVIF8AAAAAElFTkSuQmCC', 
            'IELTS', 'The International English Language Testing System, or IELTS, is an international standardized test of English language proficiency for non-native English language speakers. ',
            'ielts'], 
            
            ['https://cdn.flipboard.com/uploads/avatar/bddccc74d057039494111628ac6e7c1d43543c2f.png', 
            'REUTERS', 'Global news service feed.', 'reuters'], 

            ['https://cdn.flipboard.com/uploads/avatar/df16bbdc485527cbd8a1d4c3414b721e4df6dfc7.png',
                'BBC NEWS', 'International news from the BBC.'],
            ['https://cdn.flipboard.com/uploads/avatar/bddccc74d057039494111628ac6e7c1d43543c2f.png',
                'REUTERS', 'Global news service feed.'],

            ['https://cdn.flipboard.com/uploads/avatar/c3e5f8e4ab07ada9d3b2bc7c91b706b12665572c.jpg',
            'LOS ANGELES TIMES', 'The Pulitzer Prize-winning Los Angeles Times has been covering Southern California for more than 138 years.', 'nytimes'],

            ['https://cdn.flipboard.com/uploads/avatar/1daa5234ab229af8dfd9c087bacb6db680213cf8.png', 
             'CNBC', 'First in Business Worldwide', 'reuters']
        ]


        this.state = {
            news_info,
            selectedIndex: undefined,
            hosting: '35.208.221.249',
            port: '5000',
            readings: {},
            // nytimes: [],
            // atlantic: [],
            // reuters: [],
        }
    }

    getReading(type) {
        const{hosting, port, selectedIndex, news_info} = this.state
        axios.get('http://' + hosting + ':' + port + "/api/get_reading/" + type)
        .then((response) => {
            let read1 = this.state.readings
            // console.log(response.data)
            read1[type] = JSON.parse(response.data)

            this.setState({readings: read1})
          });
    }

    componentDidMount() {
        const {news_info} = this.state
        news_info.map(n => this.getReading(n[3]))
    }


    handleViewReading() {
        // console.log(this.props)
        const { history } = this.props;
        // history.push('/dashboard/reading/nytimes')
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
                  style={{marginLeft: '2%'}}
              />
            <div className="card-header-actions">
              <CBadge color="success" className="float-right">Share</CBadge>
            </div>
          </CCardHeader>
          <CCardBody>
              <CRow style={{fontSize: '22px', fontFamily: 'Tiempos,Georgia,serif'}}>{n[2]}</CRow>
              <CRow></CRow> 
          </CCardBody>
          <CCardFooter>
              <CRow>
                  <Button danger style={{marginLeft: '2%'}}><b>Follow</b></Button> 
                  <Button danger style={{marginLeft: '2%'}}><b>Add to Favorite</b></Button> 
                  <Button type="primary" onClick={() => this.setState({selectedIndex: index})} style={{marginLeft: '2%'}}> 
                  {/* <Link to={"/dashboard/reading/" + n[3]}> */}
                      View
                      {/* </Link> */}
                  
                  </Button> 

                    </CRow>
                </CCardFooter>
            </CCard>
        </CCol>)} </CRow>
    }

    render() {
        const {news_info, selectedIndex, readings} = this.state
        const { Panel } = Collapse;

        return (
            <div className='has-bootstrap'>

                {selectedIndex == undefined && this.news_card()}

                {selectedIndex != undefined  &&
                
                <CCard>
                <CCardHeader>

                    <h1><img className='transfermarkt_profile_pic' src={news_info[selectedIndex][0]}/> <b>{news_info[selectedIndex][1]}</b><CheckCircleTwoTone style={{marginLeft: "2%"}} twoToneColor="#FF0000" /></h1>
                    <CIcon
                        name="cilCheck"
                        color='danger'
                        style={{marginLeft: '2%'}}
                    />
                    {readings && readings[news_info[selectedIndex][3]] && <Button style={{marginBottom: "10%"}} className="float-right" onClick={() =>{
                            let read0 = this.state.readings
                            let read1 = this.state.readings[news_info[selectedIndex][3]]
                            read1.shift()
                            read0[news_info[selectedIndex][3]] = read1
                            this.setState({readings: read0})

                    }}>
                        Next
                    </Button>}

                    <Button style={{marginBottom: "10%"}} className="float-right" danger onClick={() => this.setState({selectedIndex: undefined})}>Back</Button>

                </CCardHeader>
                <CCardBody>
                    <CCard>
                        <CCardHeader>
                            {/* {console.log()} */}
                            {/* {readings && readings[news_info[selectedIndex][3]] && console.log(readings[news_info[selectedIndex][3][0]])} */}
                            {readings && readings[news_info[selectedIndex][3]] && readings[news_info[selectedIndex][3]][0].context}
                           
                        </CCardHeader>
                    </CCard>

                    <Collapse className="collapse-custom">

                    {readings && readings[news_info[selectedIndex][3]] && readings[news_info[selectedIndex][3]][0].qa.map((n,idx) => 
                           <Panel header={n[0]}>
                               <AnswerPanel answer={n[1]} />
                           </Panel>

                    )}
                    </Collapse>

                </CCardBody>
            </CCard>     
            }

    


            </div>
        )
    }
}

export default withRouter(Reading);
