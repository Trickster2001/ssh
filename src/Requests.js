const apiKey = 'b8a0168936974549b29e0d940345f183'

const requests = {
  requestChicken : `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pizza&number=10`,
  baseURL : `https://api.spoonacular.com/recipes/?apiKey=${apiKey}&query=pizza&number=10`
}

export default requests;