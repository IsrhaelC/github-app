'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  render () {
    return (
      <div className='search offset-3 col-lg-6 form-group'>
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
