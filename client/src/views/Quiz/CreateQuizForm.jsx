import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import { Card } from 'components/Card/Card.jsx'
import { Formik } from 'formik'

class CreateQuizForm extends Component {
  render () {
    return (
      <div className='content'>
        <Grid fluid>
          <Row>
            <Card
              title='Add Questions'
              content={
                <Row>
                  <Col sm={12} />
                  <Col sm={12}>
                    <Formik
                      initialValues={{ title: '',
                        score: 0,
                        option1: '',
                        option2: '',
                        option3: '',
                        answer: 0 }}
                      validate={values => {
                        let errors = {}
                        if (!values.title) {
                          errors.title = 'Required'
                        }
                        if (values.score < 0) {
                          errors.score = 'Cannot have negative score'
                        }
                        return errors
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        this.props.addQuestion(values)
                        values = { title: '',
                          score: 0,
                          option1: '',
                          option2: '',
                          option3: '',
                          answer: 0 }
                        setTimeout(() => {
                          setSubmitting(false)
                        }, 400)
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <label>Question Title</label>
                          <input
                            type='text'
                            name='title'
                            className='form-control'
                            placeholder='Write the question here'
                            onChange={handleChange}
                            value={values.title}
                          />
                          <label>Score</label>
                          <input
                            type='number'
                            name='score'
                            className='form-control'
                            onChange={handleChange}
                            value={values.score}
                          />
                          {errors.score && touched.score && errors.score}
                          <label>Option 1</label>
                          <input
                            type='text'
                            name='option1'
                            className='form-control'
                            onChange={handleChange}
                            value={values.option1}
                          />
                          {errors.option1 && touched.option1 && errors.option1}
                          <label>Option 2</label>
                          <input
                            type='text'
                            name='option2'
                            className='form-control'
                            onChange={handleChange}
                            value={values.option2}
                          />
                          {errors.option2 && touched.option2 && errors.option2}
                          <label>Option 3</label>
                          <input
                            type='text'
                            name='option3'
                            className='form-control'
                            onChange={handleChange}
                            value={values.option3}
                          />
                          {errors.option3 && touched.option3 && errors.option3}
                          <label>Correct Answer</label>
                          <select
                            name='answer'
                            className='form-control'
                            onChange={handleChange}
                            value={values.answer}
                          >
                            <option value={0}>Option 1</option>
                            <option value={1}>Option 2</option>
                            <option value={2}>Option 3</option>
                          </select>
                          <button type='submit' style={{ float: 'right', margin: '15px' }} className='btn btn-primary' disabled={isSubmitting}>
                            Add Question
                          </button>
                        </form>
                      )}
                    </Formik>

                  </Col>
                </Row>
              }

            />

          </Row>
        </Grid>
      </div>
    )
  }
}

export default CreateQuizForm
