<template>
  <div class="card4">
    <div class="card4_heading">
      <h1>Software Developer</h1>
      <div class="cardbottomcircle center">
        <div class="div1 bottom_circle"></div>
        <div class="div2 bottom_circle"></div>
        <div class="div3 bottom_circle"></div>
      </div>
    </div>
    <div class="card4_box center">
      <div class="card1_content center">
        <div class="card_ex">
          <div class="number">
            <div class="border_radius">
              <img alt="Vue logo" src="https://shorturl.at/DSt5S">
            </div>
            <div class="id_detail">
              <h3>Chai naing</h3>
              <p>ID : 33439</p>
              <p>AG : 187</p>
            </div>
          </div>
          <div class="text_and_icon">
            <div class="text">
              <h1>ရွှေသဲ</h1>
              <img class="qr_image" alt="Vue logo" src="https://shorturl.at/p6pPZ">
              <p>အလုပ်ဝင်ရက် - ၄.၅.၂၀၂၄</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style>
:root {
  --firstColor: #f25c05;
  --secondColor: #bbbcc0;
  --thirdColor: #254159;
  --fouthColor: #70181f;
  --paratext: #e8e6e6;
  --white: #ffff;
  --black: #0000;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.card4 {
  margin: 50px 20px;
}
.card4_heading {
  text-align: center;
  margin: 20px 0;
}
.card4_heading h1 {
  text-transform: uppercase;
  font-size: 1.5rem;
}
.card4_heading .cardbottomcircle {
  margin-top: 5px;
}
.card4_heading .bottom_circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.card4_heading .bottom_circle.div1 {
  background-color: var(--firstColor);
}
.card4_heading .bottom_circle.div2 {
  background-color: var(--secondColor);
}
.card4_heading .bottom_circle.div3 {
  background-color: var(--thirdColor);
}
.card4_box .card1_content {
  background: linear-gradient(0deg, var(--secondColor) 70%, var(--fouthColor) 30%);
  max-width: 400.8px;
  height: 211.2px;
  text-align: center;
  border-radius: 20px;
  border: 10px solid var(--white);
  box-shadow: 20px 20px 20px rgba(0, 0, 0, .3);
  padding: 20px;
}
.number {
  padding: 10px;
  margin: 0 0 10px 0;
}
.number .border_radius {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--firstColor);
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.2);
  border: 3px solid var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.number .border_radius img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.qr_image {
  width: 50%;
  height: auto;
}
.text_and_icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 13px;
  padding: 20px;
  color: var(--white);
}
.text_and_icon .text p {
  text-align: justify;
  line-height: 1.5;
}
.card_ex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.id_detail {
  text-align: center;
  margin-top: 10px;
  color: var(--white);
}
@media (min-width: 100px) {
  .card_ex {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
  .number {
    margin: 0 0 0 10px;
  }
  .text_and_icon {
    padding: 20px;
  }
}


</style>
