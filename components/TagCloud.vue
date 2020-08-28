<template>
  <div class="tags">
    <svg
      :width="width"
      :height="height"
      @mousemove="listener($event)"
    >
      <a
        v-for="tag in tags3D"
        :key="tag.name"
        :href="tag.path"
        rel="external nofollow"
      >
        <text
          :x="tag.x"
          :y="tag.y"
          :font-size="16 * (600 / (600 - tag.z))"
          :fill-opacity="(400 + tag.z) / 800"
        >{{ tag.name }}
        </text>
      </a>
    </svg>
  </div>
</template>

<script>
import {getOneColor} from '@theme/helpers/other'

export default {
  name: 'TagCloud',
  props: {
    currentTag: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      width: 270,//svg宽度
      height: 270,//svg高度
      tagsNum: 20,//标签数量
      RADIUS: 100,//球的半径
      speedX: Math.PI / 360,//球一帧绕x轴旋转的角度
      speedY: Math.PI / 360,//球-帧绕y轴旋转的角度,
      tags3D: []
    }
  },
  computed: {
    CX() {//球心x坐标
      return this.width / 2;
    },
    CY() {//球心y坐标
      return this.height / 2;
    }
  },
  mounted(){//使球开始旋转
    this.init()
    setInterval(() => {
      this.rotateX(this.speedX);
      this.rotateY(this.speedY);
    }, 17)
  },
  methods: {
    init() {
      let tags = [{name: this.$nineLocales.tag.all, path: '/tag/'}, ...this.$tags.list]
      for(let i = 0; i < tags.length; i++){
        let tag = tags[i];
        let k = -1 + (2 * (i + 1) - 1) / tags.length;
        let a = Math.acos(k);
        let b = a * Math.sqrt(tags.length * Math.PI)//计算标签相对于球心的角度
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);//根据标签角度求出标签的x,y,z坐标
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
        tag.z = this.RADIUS * Math.cos(a);
      }
      this.tags3D = tags
    },
    rotateX(angleX){
      let cos = Math.cos(angleX);
      let sin = Math.sin(angleX);
      for(let tag of this.tags3D){
        let y1 = (tag.y- this.CY) * cos - tag.z * sin + this.CY;
        let z1 = tag.z * cos + (tag.y- this.CY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(angleY){
      let cos = Math.cos(angleY);
      let sin = Math.sin(angleY);
      for(let tag of this.tags3D){
        let x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
        let z1 = tag.z * cos + (tag.x - this.CX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event){//响应鼠标移动
      let x = event.clientX - this.CX;
      let y = event.clientY - this.CY;
      this.speedX = x * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, x * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
      this.speedY = y * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, y * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
    },
    tagClick(tag) {
      this.$emit('get-current-tag', tag)
    },
    getOneColor,
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'

.tags
  margin 30px 0
  span
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px;
    display: inline-block;
    cursor: pointer;
    border-radius: $borderRadius
    background: #fff;
    color: #fff;
    line-height 13px
    font-size: 13px;
    box-shadow var(--box-shadow)
    transition: all .5s
    &:hover
      transform scale(1.04)
    &.active
      transform scale(1.2)
</style>
