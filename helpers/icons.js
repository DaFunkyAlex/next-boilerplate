import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faHome, faUsers, faUser, faEuroSign, faChevronRight, faChevronDown,
    faBell, faCaretDown, faUserEdit, faTrash, faRedo, faSyncAlt, faKey,
    faLock, faLockOpen, faUnlock, faSignOutAlt, faPowerOff, faCheck, faTimes,
    faCommentDots, faCog, faEnvelope,
} from '@fortawesome/free-solid-svg-icons'


/**
 * Helper: Icons
 *
 * @author: Alexander Jungwirth
 * @version: 1.0.0.0
 */


const icons = {
    library: library.add(
        faHome, faUsers, faUser, faEuroSign, faChevronRight, faChevronDown,
        faBell, faCaretDown, faUserEdit, faTrash, faRedo, faSyncAlt, faKey,
        faLock, faLockOpen, faUnlock, faSignOutAlt, faPowerOff, faCheck, faTimes,
        faCommentDots, faCog, faEnvelope,
    )
};


export default icons;