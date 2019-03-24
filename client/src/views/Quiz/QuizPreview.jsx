import React, { Component } from 'react'
import {
  Grid,
  Row
} from 'react-bootstrap'
import Question from './Question'

class QuizPreview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: []
    }
    this.handleSumbitAnswer = this.handleSumbitAnswer.bind(this)
  }

  handleSumbitAnswer (answer) {
    const i = this.state.response.findIndex(_item => _item.questionId === answer.questionId)
    if (i > -1) this.state.response[i] = answer // (2)
    else this.state.response.push(answer)
    this.setState({ response: this.state.response })
    this.props.getResponse(this.state.response)
  }

  render () {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            { this.props.questions.map((item) =>
              (
                <Question question={item} id={item._id} key={item._id} submitAnswer={this.handleSumbitAnswer} />
              )
            )}

          </Row>
        </Grid>
      </div>
    )
  }
}

export default QuizPreview
