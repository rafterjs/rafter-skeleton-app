import Rafter from 'rafter';
import winstonFactory from './lib/utils/winston-factory';

const run = async () => {
    try {
        const logger = winstonFactory('info');
        const rafter = new Rafter(`${__dirname}/lib`, logger);
        await rafter.start();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

run();
