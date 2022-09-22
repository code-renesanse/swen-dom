import { errorLog } from "swen-logger";
import { getDomFromReference } from "../getters";

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom
 * @param {String} className class to add to DOM 
 * @returns boolean
 */
export let addClass = (domRef: HTMLElement, className: string | string[]) => {
    // validateString(className);
    let dom = getDomFromReference(domRef);
    
    if(dom == null || dom == undefined) {
        errorLog(`The dom is eather null or undefined`);
        return false;
    }

    if (Array.isArray(className)) {
        for(let name of className) {
            dom.classList.add(name);
        }
    } else {
        dom.classList.add(className);
    }
    
    return true;
};

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom
 * @param {String} cls class to remove to DOM 
 * @returns boolean
 */
export let removeClass = (domRef: HTMLElement, cls: string | string[]) => {
    // validateString(cls);
    let dom = getDomFromReference(domRef);
    
    if(dom == null || dom == undefined) {
        errorLog(`The dom is eather null or undefined`);
        return false;
    }

    if (Array.isArray(cls)) {
        for(let name of cls) {
            dom.classList.remove(name);
        }
        return true;
    } else {
        return dom.classList.remove(cls);
    }
};

/**
 * 
 * @param {DOMElement} domRef - reference to the dom element 
 * @param {String} oldClass - class name to remove
 * @param {String} newClass - class name to add
 * @returns boolean
 */
export let replaceClass = (domRef: HTMLElement | string, oldClass: string, newClass: string) => {
    // validateString(oldClass);
    // validateString(newClass);
    let dom = getDomFromReference(domRef);
    if(dom == null || dom == undefined) {
        errorLog(`The dom is eather null or undefined`);
        return false;
    }
    return dom.classList.replace(oldClass, newClass);    
};
