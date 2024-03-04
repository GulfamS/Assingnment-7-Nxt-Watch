import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkMode: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
