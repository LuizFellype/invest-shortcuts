const graphicsButtonClassNames = ["button", "button--small", "header__sidebar-button"]

const getGraphicsList = () => {
    const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]

    if (!settingsBtn) return []

    settingsBtn.click();
    const menuList = document.querySelectorAll('.sidepanel__menu-item')

    return menuList
}

const getPocketGraphicsList = () => {
    const settingsBtn = document.getElementsByClassName('items__link items__link--drawings')[0]

    if (!settingsBtn) return []

    settingsBtn.click();
    const menuList = document.getElementsByClassName('list-item')

    return menuList
}

const closeGraphicsList = () => {
    const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]
    settingsBtn.click();
    const menuList = document.querySelectorAll('.sidepanel__menu-item')

    return menuList
}

const getGraphicsDataBasedOnBroker = (isPocket = false) => {
    const QXShouldCloseMenu = false

    const QXButtons = [['Fibo', 19], ['Horizontal', 11], ['Trend', 9]]
    const pocketButtons = [['--', 0], ['/', 2]]

    return {
        _getGraphicsList: isPocket ? getPocketGraphicsList : getGraphicsList,
        closeMenu: isPocket ? closePocketMenu : closeGraphicsList,
        buttonClassName: isPocket ? ['items__link', 'items__link--chart-type', 'pocket-tf-button'] : graphicsButtonClassNames,
        buttons: isPocket ? pocketButtons : QXButtons,
    }
}

const graphicsButtonsWrapperClassname = "graphics-wrapper"
const createGraphicsShortcuts = (isPocket = false) => {
    const buttonsWrapper = document.createElement("div")
    buttonsWrapper.classList.add(graphicsButtonsWrapperClassname)

    const { _getGraphicsList,
        closeMenu,
        buttonClassName,
        buttons } = getGraphicsDataBasedOnBroker(isPocket)

    const createButtons = buttonData => {
        const button = createButton(_getGraphicsList, closeMenu, buttonClassName)(...buttonData)
        buttonsWrapper.appendChild(button)
    }

    buttons.forEach(createButtons)

    return buttonsWrapper
}