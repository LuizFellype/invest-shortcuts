const createButton = (getMenuList, closeMenu, buttonClassNames = [], element = 'button') => (content = '', positionOnList, onclick = () => { }) => {
    const button = document.createElement(element)

    buttonClassNames.forEach(className => button.classList.add(className))
    button.innerHTML = content;
    button.onclick = positionOnList !== undefined ? () => {
        const menuList = getMenuList()
        menuList[positionOnList]?.click();
        closeMenu && closeMenu()
    } : onclick

    return button
}