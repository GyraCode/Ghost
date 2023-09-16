<template>
  <div class="hp-container">
    <div class="container">
      <!-- 電腦 -->
      <div class="hp-left">
        <div class="hp-title">
          <h1>START</h1>
          <h1>MY</h1>
          <h1>BUSINESS</h1>
        </div>
        <p>STARTBIZ幫你創業的好夥伴</p>
        <div class="hp-buttons">
          <button class="hp-yellow-btn">線上諮詢</button>
          <button class="hp-green-btn">加入 LINE 好友</button>
        </div>
      </div>
      <div class="hp-right">
        <img src="home-image.png" alt="大蜜蜂" />
      </div>
      <!-- 手機 -->
      <div class="hp-mobile">
        <div class="hp-title">
          <div class="title-texts">
            <h1>START</h1>
            <h1>MY</h1>
          </div>
          <div class="right-corner-container">
            <img src="mobilerightcorner.png" alt="右上" />
          </div>
        </div>

        <div class="hp-images">
          <img class="bee-image" src="home-image.png" alt="大蜜蜂" />
        </div>
        <img src="mobileleftcorner.png" alt="左下" />

        <div class="hp-slogan">
          <h1>BUSINESS</h1>
          <p>STARTBIZ幫你創業的好夥伴！</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { ref } from "vue";
import "./../assets/homepage.css";

export default {};
</script>
