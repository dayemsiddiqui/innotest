import React, { Component } from 'react'
import {
  Grid,
  Row
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllQuizes, saveQuiz } from '../../thunks'
import CreateQuizForm from './CreateQuizForm'
import QuizPreview from './QuizPreview'
import { Redirect } from 'react-router-dom'
import { prepareDataForQuestionPreview, prepareQuizData } from './../../mutators'

import { withAlert } from 'react-alert'

class CreateQuiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      questions: [],
      redirect: false
    }
    this.updateQuestions = this.updateQuestions.bind(this)
    this.saveQuiz = this.saveQuiz.bind(this)
  }

  updateQuestions (q) {
    this.state.questions.push(q)
    this.setState({ questions: this.state.questions })
  }

  saveQuiz () {
    if (this.state.title === '') {
      return this.props.alert.error('Please add a quiz title')
    }
    if (this.state.questions.length <= 0) {
      return this.props.alert.error('Please add atleast one question')
    }
    this.props.saveQuiz(
      prepareQuizData(this.state.questions, this.state.title)
    )
    this.setState({ redirect: true })
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/quizes' />
    }

    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <label>Quiz Title</label>
            <input
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              placeholder='Quiz Name'
              className='form-control' />
            <br />
          </Row>
          <Row>
            <CreateQuizForm addQuestion={this.updateQuestions} />
          </Row>
          <Row>
            <button className='btn btn-primary'
              onClick={this.saveQuiz}>
              Save Quiz</button>
          </Row>
          <Row>
            <h1 style={{ textAlign: 'center' }}>Preview</h1>
          </Row>
          <Row>
            <QuizPreview questions={prepareDataForQuestionPreview(this.state.questions)} />
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ fetchAllQuizes, saveQuiz }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(withAlert()(CreateQuiz))
