/**
 * @author KylesLight
 * @date 01/11/2017-1:11 PM
 * @file base-ui
 */

import component from './component';
import directive from './directive';
import plugin from './plugin';
import './style/main.scss';

export default {

    install(Vue) {
        Vue.use(component);
        Vue.use(directive);
        Vue.use(plugin);
    }

};