export default (mongooseDbDao) => {
  // the current DB is mongoose. If we need to change that
  // in the future, we only need to swap this dependency
  return mongooseDbDao;
};