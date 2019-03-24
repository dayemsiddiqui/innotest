import React, { Component } from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchOneQuiz, saveResponse } from '../../thunks'
import QuizPreview from '../../views/Quiz/QuizPreview'
import { prepareDataForQuestionPreview } from './../../mutators'
import { withAlert } from 'react-alert'
import { Redirect } from 'react-router-dom'

class Submission extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      answers: [],
      showResult: false
    }
    this.updateAnswers = this.updateAnswers.bind(this)
    this.saveAnswers = this.saveAnswers.bind(this)
  }

  componentDidMount (props) {
    this.props.fetchOneQuiz(this.props.match.params.id)
  }

  updateAnswers (response) {
    this.setState({ answers: response })
  }

  saveAnswers () {
    if (this.state.name === '') {
      return this.props.alert.error('Please enter your name')
    }
    const data = {
      name: this.state.name,
      answers: this.state.answers
    }
    this.props.saveResponse(data, this.props.match.params.id,
      () => { this.setState({ showResult: true }) }
    )
  }

  render () {
    const { data } = this.props
    if (this.state.showResult) {
      return <Redirect to={{
        pathname: `/result/${this.props.match.params.id}`,
        state: { answers: this.state.answers }
      }} />
    }
    return (
      <div className='wrapper'>
        <div>
          <Header {...this.props} />
          <h1 style={{ textAlign: 'center' }}>
            {data.title}
          </h1>
          <div style={{ padding: '50px' }}>
            <label>Enter your name</label>
            <input className='form-control'
              type='text'
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder='John Doe'
            />
            { data.questions && <QuizPreview
              questions={prepareDataForQuestionPreview(data.questions)}
              getResponse={this.updateAnswers}
            /> }
            <button className='btn btn-success' style={{ float: 'right' }} onClick={this.saveAnswers}>Submit Answers</button>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.currentQuiz
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ fetchOneQuiz, saveResponse }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(withAlert()(Submission))
