import { getDomFromReference } from "../../getters";

/**
 * 
 * @param {DOMElement | String} domRef = reference to the dom element
 * @param {String} animationName 
 * @param {Number} animationDuration - in ms
 * @param {String} animationType - ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) 
 * @returns 
 */
export let setAnimation = (domRef: HTMLElement, animationName: string, animationDuration: string, animationType: string) => {
    setAnimationName(domRef, animationName);
    setAnimationDuration(domRef, animationDuration);
    setAnimationTiminingFunction(domRef, animationType);
};


export let setAnimationName = (domRef: HTMLElement, animationName: string) => {
    // validateString(animationName);
    let dom = getDomFromReference(domRef);
    
    dom.style.animationName = animationName;
};

export let setAnimationDuration = (domRef: HTMLElement, animationDuration: string) => {
    // validateString(animationDuration);
    let dom = getDomFromReference(domRef);
    
    dom.style.animationDuration = animationDuration;
};

export let setAnimationTiminingFunction = (domRef: HTMLElement, animationType: string) => {
    // validateString(animationType);
    let dom = getDomFromReference(domRef);
    dom.style.animationTimingFunction = animationType;
};

export let setAnimationIterationCount = (domRef: HTMLElement,  iterCount: string) => {
    let dom = getDomFromReference(domRef);
    // validateString(iterCount);
    dom.style.animationIterationCount = iterCount;
};