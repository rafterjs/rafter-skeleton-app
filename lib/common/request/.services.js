export default {
    getRequestDtoProvider: {
        path: `${__dirname}/get-request-dto-provider`,
        dependencies: [
            'filterObjectToFilterDtoTransformer',
            'sortStringToSortDtoTransformer',
            'paramsObjectToParamsDtoTransformer',
        ]
    },
};
