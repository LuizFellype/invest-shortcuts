const timeframeWrapperClassnames = 'timeframe-wrapper'
const timeframeButtonClassNames = ['trading-chart-settings__item']

const getTimeframeList = () => {
    const currentTimeFrameButton = document.getElementsByClassName('trading-chart-settings__item')[1]

    if (!currentTimeFrameButton) return []

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