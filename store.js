import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
    lastUpdate: 0,
    count: 0,
    items: [],
}

export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    GET_NAVIGATION: 'GET_NAVIGATION',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });

        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });

        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            });

        case actionTypes.GET_NAVIGATION: {
            return Object.assign({}, state, {
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'home',
                        link: '/'
                    },
                    {
                        label: 'Blog',
                        icon: 'comment-dots',
                        link: '/article'
                    },
                    {
                        label: 'Members',
                        icon: 'users',
                        submenu: [
                            {
                                label: 'List',
                                link: '/members/list',
                            },
                            {
                                label: 'Status',
                                link: '/members/status'
                            },
                            {
                                label: 'Departments',
                                link: '/members/departments'
                            },
                            {
                                label: 'Attributes',
                                link: '/members/attributes'
                            },
                        ],
                        submenuOpened: false,
                    }
                ]
            })
        }
        default:
            return state
    }
};

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
    return dispatch({type: actionTypes.TICK, light: !isServer, ts: Date.now()})
};

export const startClock = dispatch => {
    return setInterval(() => {
        // Dispatch `TICK` every 1 second
        dispatch({type: actionTypes.TICK, light: true, ts: Date.now()})
    }, 1000)
};

export const incrementCount = () => dispatch => {
    return dispatch({type: actionTypes.INCREMENT})
};

export const decrementCount = () => dispatch => {
    return dispatch({type: actionTypes.DECREMENT})
};

export const resetCount = () => dispatch => {
    return dispatch({type: actionTypes.RESET})
};

export const getNavigation = () => dispatch => {
    return dispatch({type: actionTypes.GET_NAVIGATION})
};

export function initStore(initialState = exampleInitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
};
