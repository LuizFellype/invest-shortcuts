const pocketIncreaseExpiration = () => {
    const timeExpirationButton = document.getElementsByClassName('value__val')[0]

    timeExpirationButton.click()

    const increaseExpirationButton = document.getElementsByClassName('btn-plus')[1]

    increaseExpirationButton.click()
}

const addExpirationButtons = () => {
    const expirationIconWrapper = document.querySelector('.control__buttons.buttons')

    const increaseExpirationButton = createButton(undefined, undefined, ['buttons__plus'], 'a')('+', undefined, pocketIncreaseExpiration)

    expirationIconWrapper.appendChild(increaseExpirationButton)
}