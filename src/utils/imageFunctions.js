export const getImageURL = imageParameter => { //totoro.jpg
    return new URL(`../assets/images/${imageParameter}`, import.meta.url).href
}