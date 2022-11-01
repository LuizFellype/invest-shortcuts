const graphicsButtonClassNames = ["button", "button--small", "header__sidebar-button"]

const getGraphicsList = () => {
    const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]

    if (!settingsBtn) return []

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

const graphicsButtonsWrapperClassname = "graphics-wrapper"
const createGraphicsShortcutOnHeader = () => {
    const buttonsWrapper = document.createElement("div")
    buttonsWrapper.classList.add(graphicsButtonsWrapperClassname)

    const createButtons = buttonData => {
        const button = createButton(getGraphicsList, closeGraphicsList)(...buttonData)
        buttonsWrapper.appendChild(button)
    }

    [['Fibo', 19], ['Horizontal', 11], ['Trend', 9]].forEach(createButtons)

    return buttonsWrapper
}