const PHOTO_WIDTH = 350
const PHOTO_HEIGHT = 100

/**
* @param  {Number} num query param
* @return {String} photo URL
* @public
*/
function getRandomPhoto(num) {
  return `https://picsum.photos/${PHOTO_WIDTH}/${PHOTO_HEIGHT}?random=${num}`
}

export default getRandomPhoto