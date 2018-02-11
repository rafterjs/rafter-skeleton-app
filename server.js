import Rafter from 'rafter';
import winstonFactory from './lib/utils/winston-factory';

const run = async () => {
    try {
        const logger = winstonFactory(process.env.NODE_LOG_LEVEL || 'info');
        const rafter = new Rafter({
            appDirectory: `${__dirname}/lib`,
            logger: logger
        });
        await rafter.start();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

run();
