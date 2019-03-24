import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'
import { Grid, Row, Col } from 'react-bootstrap'

import { Card } from './../../components/Card/Card.jsx'
import { StatsCard } from './../../components/StatsCard/StatsCard.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAnalytics } from '../../thunks'
import { responseCountGraph } from '../../mutators'

class Dashboard extends Component {
  componentDidMount (props) {
    this.props.fetchAnalytics()
  }
  render () {
    const { data, responseCount } = this.props
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className='pe-7s-graph text-warning' />}
                statsText='Total Quiz'
                statsValue={data.totalQuiz}
              />
            </Col>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className='pe-7s-graph text-success' />}
                statsText='Total Response'
                statsValue={data.totalResponse}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                statsIcon='fa fa-history'
                id='chartHours'
                title='Response per quiz'
                content={
                  <div className='ct-chart'>
                    <ChartistGraph data={responseCount} type='Bar' />
                    />
                  </div>
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
    data: state.analytics,
    responseCount: responseCountGraph(state.analytics.quizResponseCount)
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ fetchAnalytics }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
