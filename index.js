import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as serviceWorker from './serviceWorker';
import queryBuilderRender from "./components/QueryBuilder/querybuilderrender";

import {
    isUndefinedOrNull
} from "../src/utils/utils";

import {
    resetTagSelectorOptions
} from "../src/utils/tagselectorutils";

import {
    resetDateHierarchyOptions
} from "./utils/datehierarchyutils";

import './components/QueryBuilder/query-builder.scss';

(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        let evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

Array.prototype.forEach.call(
    document.getElementsByTagName('query-builder'),
    (el) => {
        queryBuilderRender(el);
    })
window.addReactDatepicker = datepickerRender;

function trigger(elem, name, e) {
    // eslint-disable-next-line
    let func = new Function('e', 'with(document) { with(this) {' + elem.getAttribute(name) + '} }');
    func.call(elem, e);
}

serviceWorker.unregister();
