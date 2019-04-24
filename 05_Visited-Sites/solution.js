function solve() {
  let arr = (document.getElementsByTagName('div')[2])

  let arr2 = Array.from(arr.getElementsByTagName('div'))

  arr2.forEach((element) => {
    element.addEventListener('click', () => {
      let numberOfClicks = element.getElementsByTagName("span")[0].innerText
      numberOfClicks = Number(numberOfClicks.split(": ")[1].split(" ")[0])
      numberOfClicks++;
      let currentAttribute = element.getElementsByTagName('span')[0]
      currentAttribute.innerText = `Visited: ${numberOfClicks} times`
    })

  })

}