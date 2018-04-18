'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }

    this.result = ''
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.result = result
          this.setState({
            userInfo: {
              userName: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  handleRepo (e) {
    ajax().get(this.result.repos_url)
      .then((result) => {
        this.setState({
          repos: result
        })
      })
  }

  handleStarred (e) {
    ajax().get(this.result.starred_url)
      .then((result) => {
        this.setState({
          starred: result
        })
      })
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        handleRepo={(e) => this.handleRepo(e)}
        handleStarred={(e) => this.handleStarred(e)}
      />
    )
  }
}
