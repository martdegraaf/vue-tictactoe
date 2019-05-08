<template>
    <div class="contents" @click="setIcon()">
        {{ content }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Square extends Vue {
    public content: string = '';

    @Prop() private currentIcon!: string;

    public setIcon(): void{
      if (this.content === '') {
        this.content = this.currentIcon;
        console.log(this.content);
        this.switchPlayer();
      } else {
        console.log('Deze kun je wel klikken maar staat al wat in.');
      }
    }

    public switchPlayer(): void{
      this.$emit('switch-player');
    }

    public reset(): void{
      this.content = '';
    }
}
</script>

<style scoped lang="scss">
$size : 100%;
.contents {
    width: $size;
    height: $size;
    line-height: $size;
    font-size: $size;
}

</style>
