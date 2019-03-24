import React, { Component } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ answer: parseInt(e.target.value) })
    this.props.submitAnswer({ answer: parseInt(e.target.value), questionId: this.props.question._id })
  }

  render () {
    const { question, id } = this.props
    return (

      question && <Row >
        <Col sm={12}>

          <p>Q. { question.title }? <span style={{ float: 'right' }}>Marks: {question.score}</span></p>
          <input type='radio' value={0} name={id}
            onChange={this.handleChange}
            checked={this.state.answer === 0} /> {question.option1} <br />
          <input type='radio' value={1} name={id}
            onChange={this.handleChange}
            checked={this.state.answer === 1} /> {question.option2} <br />
          <input type='radio' value={2} name={id}
            onChange={this.handleChange}
            checked={this.state.answer === 2} /> {question.option3}  <br />
        </Col>
      </Row>

    )
  }
}

export default Question
