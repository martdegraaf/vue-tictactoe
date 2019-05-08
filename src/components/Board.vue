<template>
  <div class="layout">
    <span v-if="!ended()">Still playing</span>
    <span v-if="ended()">
    <span v-if="isAWin('X')">X wins!</span>
    <span v-if="isAWin('O')">O wins!</span>
    <button @click="resetBoard()">Reset board</button>
    </span>
    <div class="board">
      <div class="square" v-for="(square,index) in 9" :key="index">
        <Square ref="square" :currentIcon="currentIcon" v-on:switch-player="switchPlayer()"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Square from "@/components/Square.vue";

@Component({
  components: { Square }
})
export default class Board extends Vue {
  $refs!: {
    square: Square[];
  };

  public currentIcon: string = "X";

  public winCombos = [
      //Horizontal
      [
          0,1,2
      ],
      [
          3,4,5
      ],
      [
          6,7,8
      ],
//Vertical
      [
          0,3,6
      ],
      [
          1,4,7
      ],
      [
          2,5,8
      ],
//Diagonal
      [
          0,4,8
      ],
      [
          2,4,6
      ],
  ]

  constructor() {
    super();
  }


  ended(): boolean {
      if(!this.$refs.square){
          return false;
      }
    return (
      this.isAWin("X") ||
      this.isAWin("O")
    );
  }

  isAWin(player: string ): boolean
	{
        let board = this.$refs.square;
		for(let i in this.winCombos) {
		    if(board[this.winCombos[i][0]].$data.content == player && board[this.winCombos[i][1]].$data.content == player && board[this.winCombos[i][2]].$data.content == player){
                return true;
            }
		}
	    return false;
    }	

  switchPlayer(): void {
    this.currentIcon = this.currentIcon == "X" ? "O" : "X";
  }

  resetBoard(){
      for(let i in this.$refs.square) {
          this.$refs.square[i].reset();
    }
  }
}
</script>

<style scoped lang="scss">
$size: 200px;
.board {
    border: 20px solid grey;
    height: ($size * 3) + (10 *3);
      display: flex;
      flex-wrap: wrap;
  .square {
    border: 1px solid grey;
    width: 33%;
    height: $size;
    line-height: $size;
    font-size: $size;
  }
}
</style>
