<template>
  <footer class="copyright-section">
    <div class="container">
      <div class="copyright-image-container">
        <img class="desktopfooter" src="footer.png" alt="Copyright Image" />
        <img
          class="mobilefooter"
          src="mobilefooter.png"
          alt="Copyright Image mobile"
        />
      </div>
      <div class="copyright-text-container">
        <img src="helpyoulogo.png" alt="Text Image" />
        <p>© Startbiz, 2023. All rights reserved.</p>
      </div>
    </div>
    <div class="mb-container">
      <div class="mbfooterlogo">
        <img src="helpyoulogo.png" alt="Text Image" />
      </div>

      <div class="mb-copyright-image-container">
        <img
          class="mobilefooter"
          src="mobilefooter.png"
          alt="Copyright Image mobile"
        />
      </div>
      <div class="mb-copyright-text-container">
        <p>© Startbiz, 2023. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
import "./../assets/copyright.css";

export default {};
</script>
