import { errorLog } from "swen-logger";

/**
 * 
 * @param {DOM Element | String} domRef - reference to the dom element 
 * @returns string id of the dom element
 */
export let getId = (domRef: HTMLElement) => {
    let dom = getDomFromReference(domRef);
    if (dom == null || dom == undefined) {
        errorLog("DOM is eather null or undefined");
        return;
    }
    return dom.id;
};

/**
 * 
 * @param {DOM Element || String} domRef - a reference to the dom element; eather the dom element itself or dom element's id 
 * @returns 
 */
export let getDomFromReference = (domRef: Document | HTMLElement | string): HTMLElement => {
    let out;
    let outId;
    if (typeof domRef === 'string') {
        outId = `#${domRef}`;
        out = document.querySelector(outId) as HTMLElement;
    } else if (domRef instanceof Element){
        out = domRef;
        outId = domRef.id;
    } else {
        errorLog(`${domRef} is neither a dom string id nor an instance of an element`);
        return document.createElement('div');
    }
    return out;
    // TODO: fix this
    // validateDOM(out, outId);
};