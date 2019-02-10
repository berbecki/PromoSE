import { UPLOAD_PROJECT_FROM_LS } from '../constants/actionsConstants'

export const uploadProjectFromLS = project => ({
    type: UPLOAD_PROJECT_FROM_LS,
    project,
})
