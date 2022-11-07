const increaseLiveTiming = () => {
  let findServerLiveTimeInterval = setInterval(() => {
    const onGoingTime = document.getElementsByClassName('server-time online')[0]

    if (onGoingTime) {
      clearInterval(findServerLiveTimeInterval)
      onGoingTime.style.fontSize = '20px';
    }
  }, 1000)
}

const increaseCurrentTimeframeFont = () => {
  document.getElementsByClassName('items__timeframe')[0].style.fontSize = '13px'
}

const createShortcutWrapper = () => {
  const shortcutsWrapper = document.createElement("div")
  shortcutsWrapper.classList.add(shortcutsWrapperClassName)

  return shortcutsWrapper
}

const shortcutsWrapperClassName = 'shortcuts-wrapper'
// main execution
let findAnchor = setInterval(() => {
  let QXChartSettingsWrapper = document.querySelector(".trading-chart-settings")

  if (QXChartSettingsWrapper) {
    try {
      clearInterval(findAnchor)

      increaseLiveTiming()

      const graphicButtonsWrapper = createGraphicsShortcuts()
      const timeframeButtonsWrapper = createTimeframShortcut()

      const shortcutsWrapper = document.createElement("div")
      shortcutsWrapper.classList.add(shortcutsWrapperClassName)

      shortcutsWrapper.appendChild(timeframeButtonsWrapper)
      shortcutsWrapper.appendChild(graphicButtonsWrapper)

      QXChartSettingsWrapper.appendChild(shortcutsWrapper)

    } catch (error) {
      console.log('QX >>> error', { error })
    }
  } else {
    let pocketSettingsWrapper = document.querySelector(".top-left-block__block1")

    if (pocketSettingsWrapper) {
      try {
        clearInterval(findAnchor)

        const graphicButtonsWrapper = createGraphicsShortcuts(true)
        const timeframeButtonsWrapper = createTimeframShortcut(true)

        increaseCurrentTimeframeFont()

        const shortcutsWrapper = document.createElement("div")
        shortcutsWrapper.classList.add('pocket-shortcuts-wrapper')

        shortcutsWrapper.appendChild(timeframeButtonsWrapper)

        const wrapper = document.querySelector(".top-left-block")
        wrapper.insertBefore(shortcutsWrapper, wrapper.children[1]);

        const indicatorsWrapper = document.querySelector(".top-left-block__block1")

        indicatorsWrapper.appendChild(graphicButtonsWrapper)

        addExpirationButtons()
      } catch (error) {
        console.log('Pocket >>> error', { error })
      }
    }
  }
}, 1000);