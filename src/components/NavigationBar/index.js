import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactNote,
  ContactImage,
  NavigationSmallContainer,
  NavBar,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkMode, activeTab, changeTab} = value
        const bgColor = isDarkMode ? '#231f20' : '#f1f5f9'
        const textColor = isDarkMode ? '#f1f5f9' : '#231f20'
        const activeTabBg = isDarkMode ? '#475569' : '#cbd5e1'

        const onClickHomeTab = () => {
          changeTab('Home')
        }

        const onClickTrendingTab = () => {
          changeTab('Trending')
        }

        const onClickGamingTab = () => {
          changeTab('Gaming')
        }

        const onClickSavedTab = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavigationLgContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickHomeTab}
                  >
                    <AiFillHome
                      size={25}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTrendingTab}
                  >
                    <HiFire
                      size={25}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickGamingTab}
                  >
                    <SiYoutubegaming
                      size={25}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickSavedTab}
                  >
                    <CgPlayListAdd
                      size={25}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={textColor}>
                  Enjoy! Now to see your channel and recommandations!
                </ContactNote>
              </ContactInfo>
            </NavigationLgContainer>
            <NavigationSmallContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={25}
                  onClick={onClickHomeTab}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>

              <NavLink to="/trending">
                <HiFire
                  size={25}
                  onClick={onClickTrendingTab}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>

              <NavLink to="/gaming">
                <HiFire
                  size={25}
                  onClick={onClickGamingTab}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>

              <NavLink to="/saved-videos">
                <HiFire
                  size={25}
                  onClick={onClickSavedTab}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems}</>
  }
}
export default NavigationBar
