import Counter from '../common/Counter';

const MODAL_REGISTRY = {
  Counter,
};

/**
 * Get a tcomb factory for a form field
 * @param  {String} id
 * @return {AnyReactElement}
 */
export default (id: string) => MODAL_REGISTRY[id];
