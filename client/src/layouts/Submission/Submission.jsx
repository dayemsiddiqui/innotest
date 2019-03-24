import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

class Submission extends Component {
  render () {
    return (
      <div className='wrapper'>
        <div>
          <Header {...this.props} />
          <h1>Quiz Submission</h1>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Submission
