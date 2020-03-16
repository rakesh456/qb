import React from 'react';
import ReactDOM from 'react-dom';
import QueryBuilder from "./index";
import {
    isUndefinedOrNull
} from "../../utils/utils";

function queryBuilderRender(el) {
    let options = JSON.parse(el.getAttribute('data-options'));

    el.reload = function () {
    }

    let qbComponentElement = <QueryBuilder options={options} />;

    let qbComponentInstance = ReactDOM.render(
        qbComponentElement,
        el
    )
}

export default queryBuilderRender;