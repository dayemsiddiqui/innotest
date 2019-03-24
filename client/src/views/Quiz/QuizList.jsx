import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Table
} from 'react-bootstrap'
import Button from 'components/CustomButton/CustomButton'
import { Card } from 'components/Card/Card.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllQuizes } from '../../thunks'
import { Link } from 'react-router-dom'
import { getQuizList } from './../../reducers'


class QuizList extends Component {
  componentDidMount (props) {
    this.props.fetchAllQuizes()
  }

  render () {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <Link to='/createQuiz'>
              <Button bsStyle='primary' style={{ float: 'right', margin: '15px' }}>Create Quiz</Button>
            </Link>

            <Col md={12}>
              <Card
                title='Quiz List'
                category='Here is a list of quizes you have created'
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Max Score</th>
                        <th>Created At</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      { this.props.data.map(item =>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.maxScore}</td>
                          <td>{item.date}</td>
                          <td><a href={item.link} target='_blank'>{item.link}</a></td>
                        </tr>
                      ) }

                    </tbody>
                  </Table>
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
  console.log(state)
  return {
    data: getQuizList(state.quizes)
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ fetchAllQuizes }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
