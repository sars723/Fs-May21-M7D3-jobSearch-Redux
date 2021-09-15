import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_Companies_To_favorite':
      return {
        ...state,
        favoriteCompanies: {
          ...state.favoriteCompanies,
          companies: [...state.favoriteCompanies.companies, action.payload],
        },
      }
    case 'Remove_Companies_From_favorite':
      return {
        ...state,
        favoriteCompanies: {
          ...state.favoriteCompanies,
          companies: state.favoriteCompanies.companies.filter((company, i) => i !== action.payload),
        },
      }
   
    default:
      return state
  }
}

export default mainReducer
