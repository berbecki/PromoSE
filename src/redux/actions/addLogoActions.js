import {ADD_IMG_TO_SCENE, DELETE_IMG_FROM_SCENE, UPDATE_IMG_ON_SCENE} from '../constants/actionsConstants'

export const addImgToScene = data => ({
    type: ADD_IMG_TO_SCENE,
    data,
})

export const deleteImgFromScene = id => ({
    type: DELETE_IMG_FROM_SCENE,
    id
})

export const updateImgOnScene = (index, x, y) => ({
    type: UPDATE_IMG_ON_SCENE,
    index,
    x,
    y,
})
