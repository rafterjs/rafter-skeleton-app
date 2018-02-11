export default {
    db: {
        // default mongo connection string
        connectionUrl: 'mongodb://localhost:27017/react-example'
    },
    logger: {
        // default log level
        level: process.env.NODE_LOGGER_LEVEL || `info`
    }
};
