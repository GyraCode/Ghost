<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img class="desktop-logo" src="/logo.png" alt="Logo" />
        <img class="mobile-logo" src="/mobile-logo.png" alt="Mobile Logo" />
      </div>
      <img class="mobile-logo" src="/mobileheader.png" alt="Mobile Logo" />
      <button
        ref="hamburgerButton"
        class="hamburger"
        @click="toggleNav"
      ></button>
      <nav class="nav" :class="{ open: isOpen }">
        <ul>
          <ul>
            <li>
              <img
                class="nav-icon"
                src="/mobilenavback.png"
                alt="Nav Icon"
                @click="toggleNav"
              />
              <a href="首頁">首頁</a>
            </li>
            <li><a href="關於我們">關於我們</a></li>
            <li><a href="方案與價格">方案與價格</a></li>
            <li><a href="線上諮詢">線上諮詢</a></li>
            <li><a href="部落格文章">部落格文章</a></li>
          </ul>
        </ul>
        <div class="moblie-social-icons">
          <img src="/mobileig.png" alt="Instagram" />
          <img src="/mobileline.png" alt="LINE" />
        </div>
      </nav>
      <div class="social-icons">
        <img src="/instagram.png" alt="Instagram" />
        <img src="/line.png" alt="LINE" />
      </div>
    </div>
  </header>
</template>


  <script>
import { ref } from "vue";
import "./../assets/header.css";

export default {
  setup() {
    const isOpen = ref(false);

    const toggleNav = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleNav,
    };
  },
};
</script>