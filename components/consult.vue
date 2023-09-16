<template>
  <div class="inquiry-container">
    <div class="consultpage">
      <div class="form-container">
        <h1>線上洽詢</h1>
        <h2>INQUIRY</h2>
        <form action="#" method="post">
          <div class="input-group">
            <div class="input-wrapper">
              <label for="companyName">公司名稱</label>
              <input type="text" id="companyName" />
            </div>
            <div class="input-wrapper">
              <label for="businessType">業務類別</label>
              <input type="text" id="businessType" />
            </div>
          </div>
          <div class="input-group textareamb">
            <div class="input-wrapper">
              <label for="companyName">職稱/聯絡人姓名</label>
              <input type="text" id="companyName" />
            </div>
            <div class="input-wrapper">
              <label for="businessType">聯絡信箱</label>
              <input type="text" id="businessType" />
            </div>
          </div>
          <label class="textareamt" for="description">方案需求或問題描述</label>
          <textarea
            rows="6"
            cols="50"
            id="description"
            name="description"
            placeholder="輸入方案需求或問題描述"
          ></textarea>
          <button class="consult-buttom" type="submit">送出</button>
        </form>
      </div>
      <div class="image-container">
        <img src="Linefriend.png" alt="成績" />
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import "./../assets/consult.css";

export default {};
</script>
