const increaseLiveTiming = () => {
  let findServerLiveTimeInterval = setInterval(() => {
    const onGoingTime = document.getElementsByClassName('server-time online')[0]

    if (onGoingTime) {
      clearInterval(findServerLiveTimeInterval)
      onGoingTime.style.fontSize = '20px';
    }
  }, 1000)
}

const createShortcutWrapper = () => {
  const shortcutsWrapper = document.createElement("div")
  shortcutsWrapper.classList.add(shortcutsWrapperClassName)

  return shortcutsWrapper
}

const shortcutsWrapperClassName = 'shortcuts-wrapper'
// main execution
let findChartSettingsInterval = setInterval(() => {
  let chartSettingsWrapper = document.querySelector(".trading-chart-settings")

  if (chartSettingsWrapper) {
    try {
      clearInterval(findChartSettingsInterval)

      increaseLiveTiming()

      const graphicButtonsWrapper = createGraphicsShortcutOnHeader()
      const timeframeButtonsWrapper = createTimeframShortcut()

      const shortcutsWrapper = document.createElement("div")
      shortcutsWrapper.classList.add(shortcutsWrapperClassName)

      shortcutsWrapper.appendChild(timeframeButtonsWrapper)
      shortcutsWrapper.appendChild(graphicButtonsWrapper)

      chartSettingsWrapper.appendChild(shortcutsWrapper)

    } catch (error) {
      console.log('QX >>> error', { error })
    }
  }
}, 1000);