export default function UI(UI = {is_working: false}, action) {
    switch (action.type) {
        case 'MARK_AS_WORKING':
            return {...UI, is_working: true}
        case 'MARK_AS_UNWORKING':
            return {...UI, is_working: false}
        default:
            return UI
    }
}
