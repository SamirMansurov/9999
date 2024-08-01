export function transaction(item, array) {
    const tr_body = document.createElement('tr')
    const id = document.createElement('td')
    id.classList.add('td')
    id.innerHTML = '121212'

    const visa_card = document.createElement('td')
    visa_card.classList.add('td')
    visa_card.innerHTML = 'VISA'


    const car = document.createElement('td')
    car.classList.add('td')
    car.innerHTML = 'Автомобиль'


    const total = document.createElement('td')
    total.classList.add('td')
    total.innerHTML = '414,000,000'


    const when = document.createElement('td')
    when.classList.add('td')
    when.innerHTML = '4 дня назад'

    tr_body.append(id, visa_card, car, total, when)


    return tr_body
}