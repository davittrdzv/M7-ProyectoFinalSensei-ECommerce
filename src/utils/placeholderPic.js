const placeholderPic = 'https://picsum.photos/200'

const handlePicError = (e) => {
  e.target.src = placeholderPic
}

export { placeholderPic, handlePicError }
