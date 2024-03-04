import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  RetryButton,
  VideoCardList,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const headingColor = isDarkMode ? '#f1f5f9' : '#1e293b'
        const descriptionColor = isDarkMode ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDescription descriptionColor={descriptionColor}>
              Try different keywords or remove search filter
            </NoVideosDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideos
