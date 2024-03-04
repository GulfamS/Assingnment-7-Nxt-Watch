import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const bgColor = isDarkMode ? '#181818' : '#f8fafc'
      const textColor = isDarkMode ? '#f8fafc' : '#181818'
      const noteColor = isDarkMode ? '#e2e8f0' : '#475569'

      const notFoundImageUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFoundImageUrl} alt="not found" />
              <NotFoundVideosHeading textColor={textColor}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default NotFound
