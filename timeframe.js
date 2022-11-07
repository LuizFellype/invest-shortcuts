const timeframeWrapperClassnames = 'timeframe-wrapper'
const timeframeButtonClassNames = ['trading-chart-settings__item']

const getTimeframeList = () => {
    const currentTimeFrameButton = document.getElementsByClassName('trading-chart-settings__item')[1]

    if (!currentTimeFrameButton) return []

    currentTimeFrameButton.click()
    const timeframeButtons = document.getElementsByClassName('popover-select__settings-time-item')

    return timeframeButtons
}

const getPocketTimeframeList = () => {
    const currentTimeFrameButton = document.getElementsByClassName('items__link items__link--chart-type')[0]

    if (!currentTimeFrameButton) return []

    currentTimeFrameButton.click()

    const timeframeButtons = document.querySelectorAll('.time-frames-block .list-links a')

    return timeframeButtons
}

const closePocketMenu = () => {
    const modal = document.getElementById('modal-root')
    modal.children[0].style.display = 'none'
}

const getTFDataBasedOnBroker = (isPocket = false) => {
    const QXShouldCloseMenu = false

    const QXButtons = [['1m', 4], ['3m', 6], ['5m', 7], ['15m', 9]]
    const pocketButtons = [['1m', 4], ['3m', 6], ['5m', 7], ['10m', 8], ['15m', 9], ['1H', 11]]

    return {
        _getTimeframList: isPocket ? getPocketTimeframeList : getTimeframeList,
        closeMenu: isPocket ? closePocketMenu : QXShouldCloseMenu,
        buttonClassName: isPocket ? ['items__link', 'items__link--chart-type', 'pocket-tf-button'] : timeframeButtonClassNames,
        buttons: isPocket ? pocketButtons : QXButtons,
    }
}

const createTimeframShortcut = (isPocket = false) => {
    const timeframeWrapper = document.createElement("div")
    timeframeWrapper.classList.add(timeframeWrapperClassnames)

    const { _getTimeframList,
        closeMenu,
        buttonClassName,
        buttons } = getTFDataBasedOnBroker(isPocket)

    const createButtons = buttonData => {
        const button = createButton(_getTimeframList, closeMenu, buttonClassName)(...buttonData)
        timeframeWrapper.appendChild(button)
    }

    buttons.forEach(createButtons)

    return timeframeWrapper
}