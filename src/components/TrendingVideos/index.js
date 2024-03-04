import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingContainer,
  TitleIconContainer,
  TrendingVideoTitle,
  TrendingVideoList,
  TrendingText,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updateData = data.videos.map(eachVideos => ({
        id: eachVideos.id,
        title: eachVideos.title,
        thumbnailUrl: eachVideos.thumbnail_url,
        viewCount: eachVideos.view_count,
        publishedAt: eachVideos.published_at,
        name: eachVideos.channel.name,
        profileImageUrl: eachVideos.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideos => (
          <VideoCard key={eachVideos.id} videoDetails={eachVideos} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkMode, toggleTheme} = value
          const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkMode ? '#f9f9f9' : '#0f0f0f'

          return (
            <div data-testid="trending">
              <Header />
              <NavigationBar />
              <TrendingContainer
                bgColor={bgColor}
                data-testid="trending"
                onClick={toggleTheme}
              >
                <TrendingVideoTitle>
                  <TitleIconContainer>
                    <HiFire size={30} color="#ff0b37" />
                  </TitleIconContainer>
                  <TrendingText color={textColor}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingVideos()}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default TrendingVideos
