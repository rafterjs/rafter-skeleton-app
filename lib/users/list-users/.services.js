export default {
    listUsersController: {
        path: `${__dirname}/list-users-controller`,
        dependencies: [
            `getRequestDtoProvider`,
            `listUsersInteractor`,
            `usersCollectionResponseDtoToResponseDtoTransformer`,
            `jsonRendererService`,
        ]
    },
    listUsersInteractor: {
        path: `${__dirname}/list-users-interactor`,
        dependencies: [
            `userManager`,
            `filterDtoToFilterObjectTransformer`,
            `sortDtoToQueryObjectTransformer`,
        ]
    }
};
