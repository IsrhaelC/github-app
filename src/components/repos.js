'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Repos extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <h2 className='text-center'>{this.props.title}</h2>
        {this.props.repos.map((repo, index) => (
          <a key={index} href={repo.html_url} class='list-group-item list-group-item-action flex-column align-items-start'>
            <div class='d-flex w-100 justify-content-between'>
              <h5 class='mb-1'>{repo.name}</h5>
              <small>Open Issues: {repo.open_issues_count}</small>
            </div>
            <p class='mb-1'>{repo.description}</p>
            <small>{repo.language}</small>
          </a>
        ))}
      </div>
    )
  }
}

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}
