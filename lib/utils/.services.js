export default {
    dbDao: {
        path: `${__dirname}/mongoose-db-dao`,
        dependencies: [
            `config.db.connectionUrl`
        ]
    },
    connectDbPreStartHook: {
        path: `${__dirname}/connect-db-pre-start-hook`,
        dependencies: [
            `dbDao`,
            `logger`,
        ]
    },
    winston: {
        path: `${__dirname}/winston-factory`,
        dependencies: [
            `config`,
        ]
    },
    moment: {
        path: `${__dirname}/moment-factory`,
        dependencies: []
    },
    logger: {
        path: `${__dirname}/logger`,
        dependencies: [
            `winston`
        ]
    },
};
