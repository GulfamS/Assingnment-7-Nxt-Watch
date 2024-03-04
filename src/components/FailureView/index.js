import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedDescription,
  FailedButton,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const headingColor = isDarkMode ? '#f9f9f9' : '#1e293b'
        const descriptionColor = isDarkMode ? '#e2e8f0' : '#475569'

        const failureImageUrl = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailedImage
              src={failureImageUrl}
              className="faile-img"
              alt="failure view"
            />
            <FailedHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedDescription descriptionColor={descriptionColor}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </FailedDescription>
            <FailedButton type="button" onClick={onClickRetry}>
              Retry
            </FailedButton>
          </FailedView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default FailureView
