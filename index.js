const fruitOption = {
    'apple': 'red',
    'banana': 'yellow',
    'watermelon': 'green',
}
export const getFruitColor = color => {
    return fruitOption[color] || '......'
}