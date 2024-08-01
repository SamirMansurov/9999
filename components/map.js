export function card(item) {
    const map = document.createElement('div')
    map.classList.add('card')

    
    const name_map = document.createElement('p')
    name_map.classList.add('name_card')
    name_map.innerHTML = 'VISA'

    const current = document.createElement('p')
    current.classList.add('currently')
    current.innerHTML = 'rub'



    map.append(name_map, current)

    return map
}