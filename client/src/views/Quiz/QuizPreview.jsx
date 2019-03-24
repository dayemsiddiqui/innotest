import React, { Component } from 'react'
import {
  Grid,
  Row
} from 'react-bootstrap'
import Question from './Question'

class QuizPreview extends Component {
  render () {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            { this.props.questions.map((item, index) =>
              (
                <Question question={item} id={index} key={'index-' + index} />
              )

            )}

          </Row>
        </Grid>
      </div>
    )
  }
}

export default QuizPreview
