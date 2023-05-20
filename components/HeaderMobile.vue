<script lang="ts" setup>
let isOpen = ref(false);
const toggleHamburger = () => {
  isOpen.value = !isOpen.value;
};
const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="header-base">
    <div class="header-base__title">
      <div>
        <h1>清陵祭2023</h1>
        <h2>横浜国立大学 大学祭</h2>
      </div>
      <div id="hamburger-menu" @click="toggleHamburger">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </div>
    </div>
    <Transition name="hamburger">
      <div v-if="isOpen">
        <nav class="mobile-navigation">
          <ul>
            <li>
              <NuxtLink to="/" @click="close">ホーム</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" @click="close"> 清陵祭について</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events" @click="close">企画一覧</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/timetable" @click="close">タイムスケジュール</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/pamphlet" @click="close">パンフレット</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sponsors" @click="close">
                ご協賛について
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.header-base {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  width: 90vw;
  height: 90px;
  margin: 0 auto;
  background-color: #f6f4f0;
  opacity: 1;
  outline: 1px solid #060707;
  outline-offset: -1px;
  border-radius: 20px;
}

.header-base__title {
  z-index: 10;
  width: 90%;
  padding-left: 30px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: fit-content;
    text-align: center;

    > h1 {
      font-size: 30px;
      line-height: 1;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    > h2 {
      line-height: 1;
      font-size: 15px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
  }

  #hamburger-menu {
    width: 36px;
    margin-right: 10px;

    .hamburger-bar {
      display: block;
      width: 36px;
      height: 2px;
      background-color: #060707;
      margin-bottom: 8px;
      margin-left: auto;

      &:first-child {
        width: 28px;
      }

      &:nth-child(2) {
        width: 16px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.mobile-navigation {
  background-color: #f6f4f0;
  opacity: 1;
  border: 1px solid #060707;
  border-top: none;
  position: relative;
  top: -16px;
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  ul {
    margin: 0;
    padding: 20px;

    &:first-child {
      padding-top: 40px;
    }
  }

  li {
    list-style: none;
    text-align: center;
    margin-bottom: 12px;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #594e4edd;
  }
}

.hamburger-enter-active,
.hamburger-leave-active {
  transition: opacity 0.5s ease;
}

.hamburger-enter-from,
.hamburger-leave-to {
  opacity: 0;
}

a.router-link-active {
  font-size: 1.8em;
  font-weight: bold;
  text-decoration: none;
  color: #594e4e;
}
</style>
