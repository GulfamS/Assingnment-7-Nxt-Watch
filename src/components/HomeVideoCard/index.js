import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
import {
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewAndDate,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const textColor = isDarkMode ? '#f9f9f9' : '#212121'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewAndDate color={textColor}>
                    {viewCount} views<Dot>&#8226;</Dot>
                    {publishedAt}
                  </ViewAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
