import { ADD_TEXT_TO_SCENE, UPDATE_TEXT_POSITION_ON_SCENE, DELETE_TEXT_FROM_SCENE, UPDATE_TEXT_ON_SCENE } from '../constants/actionsConstants'

export const addTextToScene = data => ({
    type: ADD_TEXT_TO_SCENE,
    data,
})

export const updateTextOnScene = data => ({
    type: UPDATE_TEXT_ON_SCENE,
    data,
})

export const deleteTextFromScene = () => ({
    type: DELETE_TEXT_FROM_SCENE,
})

export const updateTextPositionOnScene = (x, y) => ({
    type: UPDATE_TEXT_POSITION_ON_SCENE,
    x,
    y,
})
