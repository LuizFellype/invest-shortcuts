const createButton = (getMenuList, shouldCloseMenu = true, buttonClassNames = graphicsButtonClassNames) => (content = '', positionOnList, onclick = () => { }) => {
    const button = document.createElement("button")

    buttonClassNames.forEach(className => button.classList.add(className))
    button.innerHTML = content;
    button.onclick = positionOnList !== undefined ? () => {
        const menuList = getMenuList()
        menuList[positionOnList]?.click();
        shouldCloseMenu && closeGraphicsList()
    } : onclick

    return button
}