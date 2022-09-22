import { errorLog } from "swen-logger";
import { addClass } from "../class";
import { createElement } from "../create";
import { getDomFromReference } from "../getters";

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom element 
 * @param  {...DOMElements} list list of DOM elements to append to the parent
 */
export let appendElementList = (domRef: Document | HTMLElement | string, ...list: (Document | Element)[]) => {
    let parent = getDomFromReference(domRef);
    // validateList(list);
    
    list.forEach(child => {
        if(parent == null || parent == undefined) {
            errorLog(`The dom is eather null or undefined`);
            return false;
        }
        parent.appendChild(child);
    });
};

/**
 * 
 * @returns HTML div element
 */
export let createSubelementsHolder = (id: string) => {
    let buttonHolder = createElement('div', id);
    addClass(buttonHolder, [
        'indent',
        'mx-2'
    ]);
    return buttonHolder;
};