const robot = require('robotjs')

const moveMouse = (req, res) => {
  const { x, y } = req.query
  const xPos = parseInt(x, 10)
  const yPos = parseInt(y, 10)

  robot.moveMouse(xPos, yPos)

  res.send(`Mouse moved to (${xPos}, ${yPos})`)
}

const clickMouse = (req, res) => {
  const { x, y } = req.query
  const xPos = parseInt(x, 10)
  const yPos = parseInt(y, 10)

  robot.moveMouse(xPos, yPos)
  robot.mouseClick()

  res.send(`Mouse clicked at (${xPos}, ${yPos})`)
}

module.exports = {
  moveMouse,
  clickMouse,
}
