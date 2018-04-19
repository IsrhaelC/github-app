'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Actions extends Component {
  render () {
    return (
      <div className='actions btn-group col-lg-4'>
        <button onClick={this.props.getRepos} className='btn btn-primary'>Ver repositórios</button>
        <button onClick={this.props.getStarred} className='btn btn-primary'>Ver favoritos</button>
      </div>
    )
  }
}

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}
