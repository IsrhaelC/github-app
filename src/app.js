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
      starred: [],
      isFetching: false
    }
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              userName: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        }).always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userInfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          if (type === 'repos') {
            this.setState({
              repos: result,
              starred: []
            })
          } else {
            this.setState({
              starred: result,
              repos: []
            })
          }
        })
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}
