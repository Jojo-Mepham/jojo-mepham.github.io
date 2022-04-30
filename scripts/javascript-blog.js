// radio buttons change background colour //

function changeBackgroundColour(value) {
  let colour = document.body.style.backgroundColor
  switch (value) {
    case 'd':
      colour = '#091a22'
      break
    case 'p':
      colour = '#f7a0bf'
      break
    case 'w':
      colour = '#FFFFFF'
      break
  }
  document.body.style.backgroundColor = colour
}
