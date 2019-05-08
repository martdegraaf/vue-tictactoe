import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import Square from '@/components/Square.vue';

describe('Square.vue', () => {
  it('sets the currentIcon into the Square', () => {
    const currentIcon = 'X';
    const wrapper = shallowMount(Square, {
      propsData: { currentIcon },
    }) as Wrapper<Square>;
    const c = wrapper.vm;
    c.setIcon();
    expect(wrapper.text()).to.include(currentIcon);
  });
});
