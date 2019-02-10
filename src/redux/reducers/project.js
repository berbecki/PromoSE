import {
    SET_SELECTED_BG_INDEX,
    ADD_IMG_TO_SCENE,
    UPDATE_IMG_ON_SCENE,
    DELETE_IMG_FROM_SCENE,
    ADD_TEXT_TO_SCENE,
    UPDATE_TEXT_ON_SCENE,
    UPDATE_TEXT_POSITION_ON_SCENE,
    UPLOAD_PROJECT_FROM_LS,
    DELETE_TEXT_FROM_SCENE,
} from '../constants/actionsConstants'

export default function project(
    project = {
        background_image: {
            source: [
                '1547054099-43b7f8d39311',
                '1547589445-3f30b3cdd846',
                '1548591191-4440b3299254',
                '1548617465-ba06797d1d1f',
            ],
            active: -1,
        },
        logo: [],
        text: null,
    },
    action,
) {
    switch (action.type) {
        case SET_SELECTED_BG_INDEX:
            return { ...project, background_image: { ...project.background_image, active: action.index } }
        case ADD_IMG_TO_SCENE:
            return { ...project, logo: project.logo.concat({ ...action.data }) }
        case UPDATE_IMG_ON_SCENE:
            return {
                ...project,
                logo: project.logo.map((elem, id) => {
                    if (id === action.index) {
                        elem.x = action.x
                        elem.y = action.y
                    }
                    return elem
                }),
            }
        case ADD_TEXT_TO_SCENE:
            return { ...project, text: { ...action.data } }
        case UPDATE_TEXT_ON_SCENE:
            return {
                ...project,
                text: { ...project.text, content: action.data.content, format: { ...action.data.format } },
            }
        case DELETE_IMG_FROM_SCENE:
            const { id } = action
            return {
                ...project,
                logo: project.logo.slice(0, id).concat(project.logo.slice(id + 1, project.logo.length)),
            }
        case DELETE_TEXT_FROM_SCENE:
            return { ...project, text: null }
        case UPDATE_TEXT_POSITION_ON_SCENE:
            return { ...project, text: { ...project.text, position: { x: action.x, y: action.y } } }
        case UPLOAD_PROJECT_FROM_LS:
            return { ...action.project }
        default:
            return project
    }
}
