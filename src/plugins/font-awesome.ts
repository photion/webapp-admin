import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* 
    To Use Font awesome you must import each icon and add it to the library, like:
    
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
    library.add(faUserSecret);

    If you desire to import all icons at once you can use:

    // Solid Icons
    import { fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fas)
    
    // Brand Icons
    import { fab } from '@fortawesome/free-solid-svg-icons'
    library.add(fav)

*/

Vue.component('font-awesome-icon', FontAwesomeIcon);