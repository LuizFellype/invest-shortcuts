const buttonClassNames = ["button", "button--small", "header__sidebar-button"]

const createButton = (content = '', positionOnList) => {
  const button = document.createElement("button")
  
  buttonClassNames.forEach(className => button.classList.add(className))
  button.innerHTML = content;
  console.log('QX >>>', {button});
   button.onclick = positionOnList !== undefined ? async () => {
    const settingsBtn = document.querySelectorAll('.trading-chart-settings__item')[0]
    settingsBtn.click();    
    const menuList = await document.querySelectorAll('.sidepanel__menu-item')
    menuList[positionOnList].click();    
    document.querySelectorAll('.sidepanel__close')[0].click();
  } : () => {

  }
  
  return button
}

const buttonsWrapperClass = "shortcut-wrapper"

let interval = setInterval(() => {
  let menu = document.querySelector(".header__container")

  if (menu) {
    try {
      clearInterval(interval)
      const onGoingTime = document.getElementsByClassName('server-time online')[0]
      onGoingTime && (onGoingTime.style.fontSize = '20px');

      const buttonsWrapper = document.createElement("div")
      buttonsWrapper.classList.add(buttonsWrapperClass)
      
      const setupButtonsOnDivWrapper = buttonData => {
        const button = createButton(...buttonData)
        buttonsWrapper.appendChild(button)
      }
      
      [['Trend', 9], ['Horizontal', 11], ['Fibo', 19]].forEach(setupButtonsOnDivWrapper)
      // const configWrapper =  document.createElement("div")
      // const allItens = document.querySelectorAll(".sidepanel__menu-item")
      // [...allItens].map(e => {
      // button = document.createElement("button")
      // button.innerHTML = e.innerHTML
      // configWrapper.appendChild(ib)    })
      
      menu.appendChild(buttonsWrapper)
    } catch (error) {
      console.log('QX >>> error', {error})
      
    }
  }
}, 1000);
