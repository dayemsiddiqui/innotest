import React, { Component } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'

import Card from 'components/Card/Card.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllResponses } from '../../thunks'
import { getResponseList } from '../../reducers'
import { CSVLink } from 'react-csv'

class Responses extends Component {
  componentDidMount (props) {
    this.props.fetchAllResponses()
  }

  render () {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                plain
                title='Quiz Responses'
                category='List of responses for all the quizes'
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Row>
                    <CSVLink data={this.props.data}
                      style={{ float: 'right', margin: '25px' }}
                      className='btn btn-primary'
                      filename={'data.xlsx'}>Download Data</CSVLink>
                    <Table hover>
                      <thead>
                        <tr>
                          <th>Quiz Name</th>
                          <th>User Name</th>
                          <th>User Score</th>
                          <th>Total Score</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.data.map((response) => {
                          return (
                            <tr key={response._id}>
                              <td>{response.quizName}</td>
                              <td>{response.userName}</td>
                              <td>{response.userScore}</td>
                              <td>{response.totalScore}</td>
                              <td>{response.date}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  </Row>

                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: getResponseList(state.responses).sort(function (a, b) {
      return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0)
    })
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ fetchAllResponses }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Responses)
