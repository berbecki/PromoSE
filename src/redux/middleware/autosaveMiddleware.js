import {
    ADD_TEXT_TO_SCENE,
    DELETE_TEXT_FROM_SCENE,
    UPDATE_TEXT_ON_SCENE,
    UPDATE_TEXT_POSITION_ON_SCENE,
    DELETE_IMG_FROM_SCENE,
    UPDATE_IMG_ON_SCENE,
    ADD_IMG_TO_SCENE,
    SET_SELECTED_BG_INDEX,
} from '../constants/actionsConstants'

const autoSaveMiddleware = ({ dispatch, getState }) => next => action => {
    next(action)
    const { type } = action
    if (
        type === ADD_TEXT_TO_SCENE ||
        type === DELETE_TEXT_FROM_SCENE ||
        type === UPDATE_TEXT_ON_SCENE ||
        type === UPDATE_TEXT_POSITION_ON_SCENE ||
        type === DELETE_IMG_FROM_SCENE ||
        type === UPDATE_IMG_ON_SCENE ||
        type === ADD_IMG_TO_SCENE ||
        type === SET_SELECTED_BG_INDEX
    ) {
        localStorage.setItem('project', JSON.stringify(getState().project))
    }
}

export default autoSaveMiddleware
