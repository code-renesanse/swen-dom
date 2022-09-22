import { getDomFromReference } from "../getters";

/**
 * 
 * @param {DOMElement | String} dom 
 * @param {String} domId to be set 
 * @returns boolean
 */
export let setIdOfDOM = (domRef: HTMLElement | string, domId: string) => {
    // validateString(domId);
    let dom = getDomFromReference(domRef) as HTMLElement;
    dom.id = domId;
    return true;
};