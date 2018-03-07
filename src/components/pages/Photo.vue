<template>
  <div class="photo">
    <div class="top-area">
      <img src="../../assets/hanabi/iphone_hanabi.png" alt="">
      <div class="top-area__desc">
        <p class="top-area__title">打上花火/夏祭り<br><span>2017.08.23</span></p>
        <p class="top-area__text">
          埼玉の花火大会と麻布十番夏祭り
        </p>
      </div>
    </div>
    <div class="content">
      <p class="content__title">{{title}}</p>
      <div class="photo__box">
        <div class="photo__clip">
          <img src="../../assets/hanabi/shade.png" alt="">
        </div>
        <div class="photo__clip">
          <img src="../../assets/hanabi/twin.png" alt="">
        </div>
        <div class="photo__clip">
          <img src="../../assets/hanabi/foot.png" alt="">
        </div>
        <div class="photo__clip">
          <img src="../../assets/hanabi/tokyo_tower.png" alt="">
        </div>
        <div class="photo__clip">
          <img src="../../assets/hanabi/chouchin.png" alt="">
        </div>
        <div class="photo__clip">
          <img src="../../assets/hanabi/ushiro.png" alt="">
        </div>                                    
      </div>
    </div>
    <h1>{{ msg }}</h1>
    <a href="/">home</a>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  data () {
    return {
      msg: 'Welcome to Photo page!',
      title: 'Photo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.photo {
  &__box {
    width: 100%;
  }
  &__clip {
    width: 30%;
    display: inline-block;
    margin: 1em;
    img {
      width: 100%;
      box-shadow:0px 3px 10px 0px #808080;
    }
  }
}
.top-area {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  &__desc {
   position: absolute;
   width: 30%;
   top: 20%;
   right: 10%;
   color: #000;
   font-size: 2em;
   background:rgba(255, 255, 255, .5);
   padding: 1em;
  }
}
.content {
  &__title {
    font-size: 1.5em;
  }
}
</style>
