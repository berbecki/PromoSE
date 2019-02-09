export const setSelectedBackgroundIndex = index => ({
    type: 'SET_SELECTED_BG_INDEX',
    index,
})

export const addImgToScene = data => ({
    type: 'ADD_IMG_TO_SCENE',
    data,
})

export const updateImgOnScene = (index, x, y) => ({
    type: 'UPDATE_IMG_ON_SCENE',
    index,
    x,
    y,
})
