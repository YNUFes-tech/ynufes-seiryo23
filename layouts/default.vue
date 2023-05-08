<script lang="ts" setup></script>

<template>
  <div class="base-frame">
    <HeaderMobile id="header-mobile" />
    <main id="main-content-wrapper">
      <slot />
    </main>
    <div id="left-bar">
      <HeaderPC id="header-pc" />
      <div id="overture-background">
        <div id="overture-text">OVERTURE</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1334.87 1440">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="135.29"
              y1="1903.86"
              x2="1575.29"
              y2="1903.86"
              gradientTransform="translate(2571.29 1575.29) rotate(-90) scale(1 -1)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ed96c0" stop-opacity=".62" />
              <stop offset=".07" stop-color="#ed96c1" />
              <stop offset=".53" stop-color="#b0cbff" />
              <stop offset="1" stop-color="#93ebf6" stop-opacity=".5" />
            </linearGradient>
          </defs>
          <path
            class="cls-1"
            d="m1225.7,1440l21.3-60c21.7-60,63.7-180,80-300,15.7-120,5.7-240-10.6-360-15.7-120-37.7-240-48-360-10.7-120-10.7-240-10.7-300V0H0v1440h1225.7Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-frame {
  position: relative;
  width: 100%;
  min-height: 100lvh;
  overflow: hidden;
}

#header-pc {
  z-index: 10;
  display: none;
}

#header-mobile {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 10;
}

#main-content-wrapper {
  padding-top: 150px;
  position: relative;
  height: 100%;
  overflow: hidden;
}

#left-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}

#overture-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100lvh;
  transition: all 0.3s ease-out;
  z-index: -5;

  #overture-text {
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: left bottom;
    transform: rotate(270deg) translateY(95%);
    font-size: min(10vh, 40vw);
    text-align: center;
    width: 100vh;
    color: #f6f4f0;
    user-select: none;
    font-family: "Konkhmer Sleokchher", cursive;
  }

  > svg {
    opacity: 0.5;
    z-index: -1;
    left: 0;
    position: absolute;
    height: 100vh;
    width: fit-content;
    transform: translateX(calc(-100% + min(10vh, 40vw)));

    path {
      fill: url(#linear-gradient);
    }
  }
}

@media screen and (min-aspect-ratio: 1/1.4) and (min-width: 600px) {
  #header-mobile {
    display: none;
  }

  #main-content-wrapper {
    margin-left: max(200px, 25vw);
  }

  #overture-background {
    transform: translateX(max(200px, 25vw));
  }

  #header-pc {
    display: block;
  }
}
</style>

<style lang="scss">
body {
  font-family: "Noto Sans JP", sans-serif;
  color: #594e4e;
  background: #f6f4f0;
}
</style>
