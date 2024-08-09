const defaultErrorHandler = (err) => console.log('IS >>', err)
const defaultOnClick = () => { }

const createButton =
    (getMenuList, closeMenu, buttonClassNames = [], element = 'button', onClickError = defaultErrorHandler) =>
        (content = '', positionOrTextContentOnList, customClassName, onclick = defaultOnClick) => {
            const button = document.createElement(element)

            buttonClassNames.forEach(className => button.classList.add(className))
            if (customClassName) button.classList.add(customClassName)

            button.innerHTML = content;
            button.onclick = positionOrTextContentOnList !== undefined ? () => {
                const click = () => {
                    getMenuList((menuList) => {
                        if (typeof positionOrTextContentOnList === 'string') {
                            [...menuList].find(el => el.textContent === positionOrTextContentOnList)?.click();
                        } else {
                            menuList[positionOrTextContentOnList]?.click();
                        }
                        closeMenu && closeMenu()
                    })
                    
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