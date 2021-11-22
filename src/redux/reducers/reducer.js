
export const reducer = (state, action) => {
  if (action) { return action() } else return state
}
