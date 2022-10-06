const drawsButtonClassNames = ["button", "button--small", "header__sidebar-button"]

const getDrawersList = () => {
  const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]
  settingsBtn.click();
  const menuList = document.querySelectorAll('.sidepanel__menu-item')

  return menuList
}

const closeMenuList = () => {
  const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]
  settingsBtn.click();
  const menuList = document.querySelectorAll('.sidepanel__menu-item')

  return menuList
}

const createButton = (getMenuList, shouldCloseMenu = true, buttonClassNames = drawsButtonClassNames) => (content = '', positionOnList, onclick = () => { }) => {
  const button = document.createElement("button")

  buttonClassNames.forEach(className => button.classList.add(className))
  button.innerHTML = content;
  button.onclick = positionOnList !== undefined ? () => {
    const menuList = getMenuList()
    menuList[positionOnList].click();
    shouldCloseMenu && closeMenuList()
  } : onclick

  return button
}

const buttonsWrapperClass = "shortcut-wrapper"
const createDrawsShortcutOnHeader = () => {
  const buttonsWrapper = document.createElement("div")
  buttonsWrapper.classList.add(buttonsWrapperClass)

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
    const button = createButton(getDrawersList)(...buttonData)
    buttonsWrapper.appendChild(button)
  }

  [['Trend', 9], ['Horizontal', 11], ['Fibo', 19]].forEach(createButtons)

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

const setTimeFrameShortcutsIntoSettingsWrapper = (timeframeButtonsWrapper) => {
  let findTrandingSettingsInterval = setInterval(() => {
    const rightSidebar = document.getElementsByClassName('sidebar-section')[0]

    if (rightSidebar) {
      clearInterval(findTrandingSettingsInterval)
      rightSidebar.appendChild(timeframeButtonsWrapper)
    }
  }, 1000)
}


// main execution
let findMenuInterval = setInterval(() => {
  let menu = document.querySelector(".header__container")

  if (menu) {
    try {
      clearInterval(findMenuInterval)

      increaseLiveTiming()

      const drawButtonsWrapper = createDrawsShortcutOnHeader()
      menu.appendChild(drawButtonsWrapper)

      const timeframeButtonsWrapper = createTimeframShortcut()
      setTimeFrameShortcutsIntoSettingsWrapper(timeframeButtonsWrapper)
     
    } catch (error) {
      console.log('QX >>> error', { error })
    }
  }
}, 1000);
