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
  // document.querySelector('.counter>.counter__number')?.style.fontSize = '13px'
}

const createShortcutWrapper = () => {
  const shortcutsWrapper = document.createElement("div")
  shortcutsWrapper.classList.add(shortcutsWrapperClassName)

  return shortcutsWrapper
}

const reloadShortcuts = (injectShortcuts) => {
  const leftSidebarSettings = document.querySelector(".sidebar__settings-block")
  const _createButton = createButton(undefined, undefined, ['sidebar__settings-button', 'reload-shortcuts'])

  leftSidebarSettings.appendChild(_createButton('*', undefined, undefined, injectShortcuts))
}

const injectGaphicTimeframe = () => {
  const graphicButtonsWrapper = createGraphicsShortcuts()
  const timeframeButtonsWrapper = createTimeframShortcut()

  const shortcutsWrapper = document.createElement("div")
  shortcutsWrapper.classList.add(shortcutsWrapperClassName)

  shortcutsWrapper.appendChild(timeframeButtonsWrapper)
  shortcutsWrapper.appendChild(graphicButtonsWrapper)

  const chartSettingsWrapper = document.querySelector(".trading-chart-settings")
  chartSettingsWrapper?.appendChild(shortcutsWrapper)
}

const injectShortcuts = () => {
  increaseLiveTiming()
  injectGaphicTimeframe()
  shortExpirationButtons()
}

const shortcutsWrapperClassName = 'shortcuts-wrapper'
// main execution
let findAnchor = setInterval(() => {
  const QXChartSettingsWrapper = document.querySelector(".trading-chart-settings")
  const leftSidebarSettings = document.querySelector(".sidebar__settings-block")
  

  if(leftSidebarSettings) {
    reloadShortcuts(injectShortcuts)
  }

  if (QXChartSettingsWrapper) {
    try {
      clearInterval(findAnchor)

      injectShortcuts()

    } catch (error) {
      console.log('QX helper >>> error', { error })
    }
  } 
}, 1000);

let interval = setInterval(() => {
  const leftSidebarSettings = document.querySelector(".sidebar__settings-block")
  const reloadShortcutsButton = document.querySelector(".reload-shortcuts")
  
  if(leftSidebarSettings && !reloadShortcutsButton) {
    reloadShortcuts(injectShortcuts)
  }
}, 2000);


