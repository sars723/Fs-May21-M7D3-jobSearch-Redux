export const addToFavoriteCompanyAction = (companyToAdd) => ({
  type: 'ADD_Companies_To_favorite',
  payload: companyToAdd,
})

export const removeFromFavoriteCompanyAction = (index) => ({
  type: 'Remove_Companies_From_favorite',
  payload: index,
})


