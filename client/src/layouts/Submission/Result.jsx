import React, { Component } from 'react'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { computeResult } from '../../thunks'
import ChartistGraph from 'react-chartist'
import { graphData } from './../../mutators'
class Result extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount (props) {
    this.props.computeResult(this.props.match.params.id, this.props.location.state.answers)
  }

  render () {
    const { data,result } = this.props
    console.log('Moi Data', data)
    return (
      <div className='wrapper'>
        <div>
          <Header {...this.props} />
          <h1 style={{ textAlign: 'center' }}>
            Result
          </h1>
          <div style={{ padding: '50px' }}>
            <p>Thank you for taking the test. Here is your result</p>
            <h3>You scored { result.score } out of { result.totalScore }</h3>
            <ChartistGraph data={data} type='Bar' />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: graphData(state.result),
    result: state.result
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ computeResult }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Result)
