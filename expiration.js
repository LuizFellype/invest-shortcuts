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

const disableExpirationTimeInput = (err) => {
    if (err) console.log('IV >> err', err)

    const expTimeInput = document.querySelector(".input-control--time > input.input-control__input")

    if (expTimeInput?.disabled) expTimeInput.disabled = false
}

const getShortExpirationList = () => {
    const timeInput = document.querySelector(".input-control--time > input.input-control__input")
    const changeExpirationTypeButton = document.querySelector(".input-control--time > .input-control__label__switch")

    const isShortTimeSelected = timeInput.value.length > 5

    isShortTimeSelected ? timeInput.click() : changeExpirationTypeButton.click()

    const list = document.querySelectorAll(".input-control__dropdown > .input-control__dropdown-option")

    return list
}

const shortExpirationButtons = () => {
    const betsWrapper = document.querySelector(".section-deal__put")

    disableExpirationTimeInput()

    const shortExpWrapper = document.createElement("div")
    shortExpWrapper.classList.add('short-expiration-wrapper')

    const buttons = [['5s', 0], ['10s', 1], ['15s', 2], ['30s', 3]]

    const _createButton = createButton(getShortExpirationList, false, timeframeButtonClassNames, undefined, disableExpirationTimeInput)
    buttons.forEach(element => {
        const button = _createButton(...element)
        shortExpWrapper.appendChild(button)
    });

    betsWrapper.insertBefore(shortExpWrapper, betsWrapper.children[0]);

}

