const createButton = (getMenuList, closeMenu, buttonClassNames = [], element = 'button', onClickError = (err) => console.log('IS >>', err)) => (content = '', positionOnList, customClassName, onclick = () => { }) => {
    const button = document.createElement(element)

    buttonClassNames.forEach(className => button.classList.add(className))
    if (customClassName) button.classList.add(customClassName)

    button.innerHTML = content;
    button.onclick = positionOnList !== undefined ? () => {
        const click = () => {
            const menuList = getMenuList()
            menuList[positionOnList]?.click();
            closeMenu && closeMenu()
        }
        try {
            click()
        } catch (error) {
            onClickError(error)
            click()
        }
    } : onclick

    return button
}