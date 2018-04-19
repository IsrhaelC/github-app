'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  render () {
    return (
      <div className='search col-lg-4 form-group'>
        <input
          className='form-control'
          type='search'
          placeholder='Digite o nome do usuário'
          disabled={this.props.isDisabled}
          onKeyUp={this.props.handleSearch}
        />
      </div>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}
