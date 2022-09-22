import { errorLog } from "swen-logger";
import { getDomFromReference } from "../getters";

/**
 * Removes all event listeners from the DOM
 * @param {DOMElement | String} domRef - reference to the dom element
 * @returns DOM element
 */
export let removeEventListener = (domRef: Document | HTMLElement) => {
    let dom = getDomFromReference(domRef);
    
    if(dom == null || dom == undefined) {
        errorLog(`The dom is eather null or undefined`);
        return null;
    }

    let elClone = dom.cloneNode(true);

    dom.parentNode ? dom.parentNode.replaceChild(elClone, dom) : errorLog('Dom has no parent element');
    return dom;
};