import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSaveVideosView,
  NoSaveVideosImage,
  NoSaveVideosHeading,
  NoSaveVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkMode, savedVideos} = value
      const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkMode ? '#f9f9f9' : '#0f0f0f'
      const headingColor = isDarkMode ? '#f8fafc' : '#1e293b'
      const noteColor = isDarkMode ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer bgColor={bgColor} data-testid="savedVideos">
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={25} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSaveVideosView>
                <NoSaveVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSaveVideosHeading headingColor={headingColor}>
                  No Saved videos found
                </NoSaveVideosHeading>
                <NoSaveVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSaveVideosNote>
              </NoSaveVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SavedVideos
