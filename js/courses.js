const CourseOptions = { basic: 'basic', pro: 'pro', custom: 'custom' }

function addEventListeners() {
    const oilCheckbox = document.getElementById('oil')
    const akrilCheckbox = document.getElementById('akril')
    const aquarelCheckbox = document.getElementById('aquarel')
    const illustrationCheckbox = document.getElementById('illustration')
    let finalCost = parseInt(document.getElementById('priceNumber').textContent)

    addEventListener(oilCheckbox, 30000)
    addEventListener(akrilCheckbox, 30000)
    addEventListener(aquarelCheckbox, 15000)
    addEventListener(illustrationCheckbox, 20000)

    function addEventListener(checkbox, cost) {
      checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
          finalCost += cost
        } else {
          finalCost -= cost
        }
        let priceNumberDiv = document.getElementById('priceNumber')
        let p = document.createElement('span')
        p.innerHTML = `${finalCost}`
        priceNumberDiv.innerHTML = ''
        priceNumberDiv.appendChild(p)
      })
    }

}

addEventListeners()