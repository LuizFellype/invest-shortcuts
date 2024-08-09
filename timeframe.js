const timeframeWrapperClassnames = 'timeframe-wrapper'
const timeframeButtonClassNames = ['trading-chart-settings__item']

const getTimeframeList = (cb = () => {}) => {
    const currentTimeFrameButton = document.getElementsByClassName('trading-chart-settings__item')[1]

    if (!currentTimeFrameButton) return []
    currentTimeFrameButton.click()

    setTimeout(() => {
        const timeframeButtons = document.getElementsByClassName('popover-select__settings-time-item')

        cb(timeframeButtons)
    })
    
    
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

    const QXButtons = [['1m', 4], ['3m', 6], ['5m', 7], ['15m', 9], ['1H', 11]]
    const pocketButtons = [['1m', 4], ['3m', 6], ['5m', 7], ['10m', 8], ['15m', 9], ['1H', 11]]

    const pocketButtonClassnames = ['items__link', 'items__link--chart-type', 'pocket-tf-button']

    if (isPocket) {
        return {
            _getTimeframList: getPocketTimeframeList,
            closeMenu: closePocketMenu,
            buttonClassName: pocketButtonClassnames,
            buttons: pocketButtons,
        }
    }

    return {
        _getTimeframList: getTimeframeList,
        closeMenu: QXShouldCloseMenu,
        buttonClassName: timeframeButtonClassNames,
        buttons: QXButtons,
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