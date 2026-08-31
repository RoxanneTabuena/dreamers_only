export const initialFeatureState = {
    feature: ''
};

export function featureReducer(state, action) {
switch (action.type) {

    case "UPDATE": {
    return {
        ...state,
        feature: action.payload
    };
    }

    default:
    return state;
}
}