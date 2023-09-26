const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  // console.log(currentState);
  console.log('Current State =>', currentState);
  console.log('Action dispatch =>', action)
  next(action)
  console.log('Update State ==>', store.getState());
};

export default logger;