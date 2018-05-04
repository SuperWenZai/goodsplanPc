import {ContainerMixin, ElementMixin} from 'vue-slicksort';

export const SortableList = {
  mixins: [ ContainerMixin ],
  render (h) {
    return h('div', this.$slots.default);
  },
};

export const SortableItem = {
  mixins: [ ElementMixin ],
  render (h) {
    return h('div', this.$slots.default);
  },
};
