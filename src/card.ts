import { addClass } from './class';
import { createElement } from './create';

/**
 *
 * @param {String} id
 * @param {String} title
 * @returns DIV HTML element
 */
export const createCardLoadHolder = (id: string, title: string): HTMLDivElement => {
  const cardHolder = createElement('div', id) as HTMLDivElement;
  addClass(cardHolder, [
    'w-20r',
    'mx-2',
    'my-2',
    'on-hover',
    'shadow-lg',
    'border',
    'border-dark',
    'border-3'
  ]);
  cardHolder.title = title;
  return cardHolder;
};
