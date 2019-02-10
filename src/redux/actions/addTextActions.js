import { ADD_TEXT_TO_SCENE, UPDATE_TEXT_POSITION_ON_SCENE } from '../constants/actionsConstants'

export const addTextToScene = data => ({
    type: ADD_TEXT_TO_SCENE,
    data,
})

export const updateTextPositionOnScene = (x, y) => ({
    type: UPDATE_TEXT_POSITION_ON_SCENE,
    x,
    y,
})
