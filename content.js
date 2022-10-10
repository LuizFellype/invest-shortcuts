const graphicsButtonClassNames = ["button", "button--small", "header__sidebar-button"]

const getGraphicsList = () => {
  const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]
  settingsBtn.click();
  const menuList = document.querySelectorAll('.sidepanel__menu-item')

  return menuList
}

const closeGraphicsList = () => {
  const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]
  settingsBtn.click();
  const menuList = document.querySelectorAll('.sidepanel__menu-item')

  return menuList
}

const createButton = (getMenuList, shouldCloseMenu = true, buttonClassNames = graphicsButtonClassNames) => (content = '', positionOnList, onclick = () => { }) => {
  const button = document.createElement("button")

  buttonClassNames.forEach(className => button.classList.add(className))
  button.innerHTML = content;
  button.onclick = positionOnList !== undefined ? () => {
    const menuList = getMenuList()
    menuList[positionOnList].click();
    shouldCloseMenu && closeGraphicsList()
  } : onclick

  return button
}

const graphicsButtonsWrapperClassname = "graphics-wrapper"
const createGraphicsShortcutOnHeader = () => {
  const buttonsWrapper = document.createElement("div")
  buttonsWrapper.classList.add(graphicsButtonsWrapperClassname)

  // const configWrapper =  document.createElement("div")
  // const allItens = document.querySelectorAll(".sidepanel__menu-item")
  // [...allItens].map(e => {
  // button = document.createElement("button")
  // button.innerHTML = e.innerHTML
  // configWrapper.appendChild(ib)    })
  // const configWrapper =  document.createElement("div")
  // const a = () => {
  //   const menuList = getMenuList()
  // }

  const createButtons = buttonData => {
    const button = createButton(getGraphicsList)(...buttonData)
    buttonsWrapper.appendChild(button)
  }

  [['Fibo', 19], ['Horizontal', 11], ['Trend', 9]].forEach(createButtons)

  return buttonsWrapper
}

const timeframeWrapperClassnames = 'timeframe-wrapper'
const timeframeButtonClassNames = ['trading-chart-settings__item']

const getTimeframeList = () => {
  const currentTimeFrameButton = document.getElementsByClassName('trading-chart-settings__item')[1]
  currentTimeFrameButton.click()
  const timeframeButtons = document.getElementsByClassName('popover-select__settings-time-item')

  return timeframeButtons
}

const createTimeframShortcut = () => {
  const timeframeWrapper = document.createElement("div")
  timeframeWrapper.classList.add(timeframeWrapperClassnames)

  const buttons = [['1m', 4], ['3m', 6], ['5m', 7], ['15m', 9]]

  const createButtons = buttonData => {
    const shouldCloseMenu = false
    const button = createButton(getTimeframeList, shouldCloseMenu, timeframeButtonClassNames)(...buttonData)
    timeframeWrapper.appendChild(button)
  }

  buttons.forEach(createButtons)

  return timeframeWrapper
}

const increaseLiveTiming = () => {
  let findServerLiveTimeInterval = setInterval(() => {
    const onGoingTime = document.getElementsByClassName('server-time online')[0]

    if (onGoingTime) {
      clearInterval(findServerLiveTimeInterval)
      onGoingTime.style.fontSize = '20px';
    }
  }, 1000)
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
