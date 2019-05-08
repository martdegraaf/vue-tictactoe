import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import Board from '@/components/Board.vue';

describe('Board.vue', () => {
  it('sets the currentIcon into the Square', () => {
    const wrapper = shallowMount(Board, {
      propsData: { },
    }) as Wrapper<Board>;
    const c = wrapper.vm;
    // c.mounted();
    c.$refs.square[0].setIcon();
    c.$refs.square[4].setIcon();
    c.$refs.square[1].setIcon();
    c.$refs.square[5].setIcon();
    c.$refs.square[2].setIcon();
    //Player 1 wins

    console.log(wrapper.vm.ended);
  });
});
