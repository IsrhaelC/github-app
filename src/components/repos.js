'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Repos extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.repos.map((repo, index) => (
            <li key={index} className='list-group-item'>
              <a href={repo.link}>{repo.name}</a></li>
          ))}
        </ul>
      </div>
    )
  }
}

Repos.defaultProps = {
  className: ''
}

Repos.PropTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}
