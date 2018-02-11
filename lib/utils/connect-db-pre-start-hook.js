/**
 * This pre start hook will ensure the db is connected
 *
 * @param {MongooseDbDao} dbDao
 * @param {Logger} logger
 * @return {Function}
 */
export default (dbDao, logger) => {
    return async () => {
        logger.info(`   Connecting to the database`);
        return dbDao.connect();
    }
}
