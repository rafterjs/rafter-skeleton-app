const servicesConfig = {
    userManager: {
        path: `${__dirname}/user-manager`,
        dependencies: [
            `dbDao`
        ]
    },
    userModelToObjectTransformer: {
        path: `${__dirname}/user-model-to-object-transformer`,
        dependencies: []
    },
    usersCollectionResponseDtoToResponseDtoTransformer: {
        path: `${__dirname}/users-collection-response-dto-to-response-dto-transformer`,
        dependencies: [
            `userModelToObjectTransformer`,
            `responseDtoProvider`,
        ]
    },
};

export default servicesConfig;
