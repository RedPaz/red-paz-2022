<script setup lang="ts">
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { HEADER_ITEMS } from '../constants';
import { notify } from '@kyvg/vue3-notification';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { required, helpers, minLength } from '@vuelidate/validators';

const showMenu = ref(false);
const searchQuery = ref('');
const searchError = 'Ingrese al menos 3 caracteres';
const isMobile = useBreakpoints(breakpointsTailwind).smaller('sm');
const currentParent = ref();

const rules = computed(() => ({
  searchQuery: {
    required,
    minLength: helpers.withMessage(searchError, minLength(3)),
  },
}));

const v$ = useVuelidate(rules, { searchQuery });

/**
 * Search in Unal page
 */
function search() {
  if (v$.value.$invalid) {
    notify({
      title: searchError,
      type: 'error',
      duration: 1500,
    });

    return;
  }
  // Redirect to UN search
  window.location.href = `https://unal.edu.co/resultados-de-la-busqueda/?q=${searchQuery.value}`;
}

/**
 * Toggle 'showMenu' value and reset 'currentParent'
 * if current value is true.
 */
function toggleMenu() {
  if (showMenu.value)  currentParent.value = null;

  showMenu.value = !showMenu.value;
}

/**
 * Toggle or update 'currentParent' value after
 * click on menu item in mobile screens.
 * @param index => Index to select
 */
function setCurrentParent(index: number) {
  if (!isMobile.value) return;

  if (currentParent.value === index) {
    currentParent.value = null;
    return;
  }

  currentParent.value = index;
}
</script>

<template>
  <header id="header-unal">
    <div class="headerUN">
      <div class="shield">
        <img src="/images/header-unal/sealBck.png" alt="Fondo Escudo" title="Fondo Escudo" class="hidden xl:block">
        
        <a href="https://unal.edu.co" class="logo" target="_blank">
          <img src="/images/header-unal/escudoUnal.svg" alt="Escudo de la Universidad Nacional de Colombia" title="Escudo de la Universidad Nacional de Colombia" class="object-fit"/>
        </a>
      </div>

      <button
        v-if="isMobile"
        class="mr-4"
        data-target="#menu" 
        data-toggle="collapse"
        aria-controls="menu"
        aria-expanded="false"
        type="button"
        @click="toggleMenu()"
      >
        <span
          class="icon-bar"
          :class="{ 'active': showMenu }"
        />
      </button>
    </div>

    <ul class="social">
      <li class="social-item">
        <a target="_blank" href="#" class="youtube"></a>
      </li>
      <li class="social-item">
        <a target="_blank" href="#" class="twitter"></a>
      </li>
      <li class="social-item">
        <a target="_blank" href="#" class="facebook"></a>
      </li>
    </ul>

    <div 
      id="menu"
      v-if="showMenu || !isMobile"
    >
      <div class="top-menu">
        <div class="main-url">
          <img src="/images/header-unal/ubicacion.png" class="mb-0 mr-2 lg:mb-1" />
          <a href="http://redpaz.unal.edu.co/2017/">redpaz.unal.edu.co</a>
        </div>

        <form
          class="search relative px-5 my-1"
          @submit.prevent="search()"
        >
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar en la universidad"
            class="input-search rounded-md p-1 px-2 w-full lg:w-60 bg-gray-unal-100"
          >
          
          <button
            type="submit"
            class="text-sm right-5 absolute text-white h-full px-2 lg:right-0 top-0 bg-green-unal rounded-tr-md rounded-br-md flex items-center"
          >
            <fa icon="search"/>
          </button>
        </form>
      </div>

      <img
        class="colombia"
        src="/images/header-unal/escudoColombia.png"
        alt="Escudo de la República de Colombia"
        title="Escudo de la República de Colombia"
      />

      <ul class="items-menu">
        <li
          v-for="(item, index) in HEADER_ITEMS"
          :key="index"
          class="item"
          :class="{ 'has-submenu': item.subItems!.length > 0, 'current-item': currentParent === index }"
        >
          <a
            :href="item.src"
            class="item-name"
            @click="setCurrentParent(index)"
          >
            {{ item.label }}

            <fa
              v-if="item.subItems!.length > 0"
              icon="caret-down"
              class="icon ml-2"
            />
          </a>

          <ul
            v-if="(isMobile && currentParent === index) || (!isMobile && item.subItems!.length > 0)"
            class="item-submenu"
          >
            <li
              v-for="(subitem, index) in item.subItems"
              :key="index"
              class="sub-item"
            >
              <a :href="subitem.src">{{ subitem.label }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
#header-unal {
  @apply border-none p-0 flex flex-col bg-gray-unal-200 relative;
}

.shield {
  @apply relative;
  @apply xl:absolute xl:h-[135px] xl:w-[234px] xl:z-10;
}

.shield-bg {
  @apply relative;
}

.logo {
  @apply w-28 block translate-x-0 translate-y-0;
  @apply xl:top-1/3 xl:right-1/2 xl:translate-x-1/2 xl:-translate-y-1/3 xl:w-11/12 xl:absolute;
}
/* Mobile menu */
.headerUN {
  @apply flex justify-between items-center w-full;
}
.icon-bar {
  @apply bg-white block duration-200 ease-linear sm:hidden w-6 h-0.5 rounded relative;
}

.icon-bar::before, .icon-bar::after {
  @apply bg-white content-[''] absolute w-full h-0.5 -top-1.5 right-0 rounded duration-200 delay-200;
}

.icon-bar::after {
  @apply top-1.5;
}

.icon-bar.active {
  @apply bg-transparent;
}

.icon-bar.active::before {
  @apply top-0 rotate-45;
}

.icon-bar.active::after {
  @apply top-0 -rotate-45;
}
/* Social */
.social {
  @apply hidden bg-gray-unal-400 h-[30px] relative py-0 px-1 m-0 xl:flex justify-end items-center;
}

.social a {
  @apply bg-social h-5 w-5 block duration-150 ease-in-out ml-0.5;
}

.facebook {
  @apply bg-[right_-42px_top_0] hover:bg-[right_-42px_top_-21px];
}

.twitter {
  @apply bg-[left_-21px_top_0] hover:bg-[left_-21px_top_-21px];
}

.youtube {
  @apply bg-[left_0_top_0] hover:bg-[left_0_top_-21px];
}
/* Menu items */
#menu {
  @apply bg-gray-unal-500 lg:bg-transparent m-0 p-0 relative flex flex-col xl:ml-60;
}

.top-menu {
  @apply flex flex-col justify-between py-1.5 w-full xl:flex-row xl:w-[calc(100%-85px)];
}

.main-url {
  @apply w-full text-white text-xl relative tracking-wide px-5 py-1;
  @apply lg:text-2xl hover:no-underline flex items-center;
}

.items-menu {
  @apply w-full lg:w-[calc(100%-85px)];
}

.items-menu .item {
  @apply flex font-sans uppercase w-full border-b border-b-gray-unal-400 lg:w-auto flex-col;
  @apply hover:bg-gray-unal-300;
  @apply last:ml-auto;
}

.item-name {
  @apply py-2 px-5 relative text-white lg:px-2.5 lg:pt-2 lg:pb-1 no-underline z-10 duration-300 ease-in-out w-full lg:w-auto flex justify-between;
}

.item-name .icon {
  @apply absolute right-5 text-base top-1/2 -translate-y-1/2 text-green-unal lg:text-xs lg:right-1.5 lg:top-2.5 lg:translate-y-0 duration-150;
}

.current-item .item-name .icon {
  @apply rotate-180;
}

.item-submenu {
  @apply relative w-full;
  @apply lg:absolute lg:top-full lg:opacity-0 lg:p-0 lg:invisible lg:z-10 lg:duration-200 lg:ease-in lg:overflow-hidden;
}

.items-menu .item:hover .item-submenu {
  @apply opacity-100 visible z-20;
}

.sub-item {
  @apply border-b border-b-gray-unal-400 lg:border-0;
  @apply last:border-0;
}
.sub-item a {
  @apply bg-gray-unal-800 text-sm normal-case text-white block py-2 px-5 lg:px-4 lg:py-1 no-underline duration-200 ease-in-out;
  @apply hover:bg-gray-unal-300;
}

.colombia {
  @apply hidden absolute right-1.5 top-1.5 w-16 h-16 xl:block;
}

 /* @media screen and (max-width: 40em) {
  body {
      overflow-x: hidden;
  }
  .gssb_c {
      top: 125px !important;
  }
  #header-unal {
      display: block;
  }
  #header-unal .escudo {
      float: left;
      height: auto;
      position: relative;
      width: auto;
  }
  #header-unal .escudo .fondo {
      float: left;
      line-height: 0;
      margin: 0;
  }
  #header-unal .escudo .fondo .logo {
      display: inline-block;
      left: unset;
      position: relative;
      right: unset;
      top: unset;
      width: auto;
  }
  #header-unal .escudo .fondo .logo img {
      height: 54px;
      width: 103px;
  }
  #header-unal .navbar-header {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 500;
  }
  #header-unal .navbar-header button {
      height: 34px;
      margin: 11px 11px 11px 0;
      width: 44px;
  }
  #header-unal .navbar-header button span {
      background-color: #fff;
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      top: calc(50% - 1px);
      -webkit-transition: all 0.25s ease-in-out;
      transition: all 0.25s ease-in-out;
  }
  #header-unal .navbar-header button span::before,
  #header-unal .navbar-header button span::after {
      background-color: #fff;
      border-radius: 1px;
      content: "";
      display: block;
      height: 2px;
      left: 0;
      position: absolute;
      width: 100%;
      -webkit-transition-delay: 0.25s, 0s;
      transition-delay: 0.25s, 0s;
      -webkit-transition-duration: 0.25s, 0.25s;
      transition-duration: 0.25s, 0.25s;
  }
  #header-unal .navbar-header button span::before {
      top: -7px;
      -webkit-transition-property: top, transform;
      -webkit-transition-property: top, -webkit-transform;
      transition-property: top, -webkit-transform;
      transition-property: top, transform;
      transition-property: top, transform, -webkit-transform;
  }
  #header-unal .navbar-header button span::after {
      bottom: -7px;
      -webkit-transition-property: bottom, transform;
      -webkit-transition-property: bottom, -webkit-transform;
      transition-property: bottom, -webkit-transform;
      transition-property: bottom, transform;
      transition-property: bottom, transform, -webkit-transform;
  }
  #header-unal .navbar-header .is-active span {
      background-color: transparent;
  }
  #header-unal .navbar-header .is-active span::before {
      top: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transition-delay: 0s, 0.25s;
      transition-delay: 0s, 0.25s;
  }
  #header-unal .navbar-header .is-active span::after {
      bottom: 0;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-transition-delay: 0s, 0.25s;
      transition-delay: 0s, 0.25s;
  }
  #header-unal #menu {
      background-color: #484848;
      bottom: unset;
      left: unset;
      margin: 0;
      position: relative;
      width: 100%;
      z-index: 500;
  }
  #header-unal #menu .menu-superior {
      width: 100%;
  }
  #header-unal #menu .menu-superior .url-humanas {
      display: block;
      padding: 0 10px;
  }
  #header-unal #menu .menu-superior .url-humanas .url-site {
      font-size: 20px;
      padding-bottom: 10px;
  }
  #header-unal #menu .menu-superior .url-humanas .url-site::before {
      background-size: 90%;
      height: 15px;
      left: 5px;
      width: 10px;
  }
  #header-unal #menu .menu-superior .buscador {
      padding: 0 15px;
      width: 100%;
  }
  #header-unal #menu .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input {
      width: calc(100% - 30px);
  }
  #header-unal #menu .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box {
      width: 100%;
  }
  #header-unal #menu .items-menu {
      width: 100%;
  }
  #header-unal #menu .items-menu .item {
      border-bottom: 1px solid #666;
      float: unset;
  }
  #header-unal #menu .items-menu .item .item-name {
      padding: 8px 15px;
  }
  #header-unal #menu .items-menu .item .item-name i {
      font-size: 15px;
      right: 20px;
      top: 12px;
      -webkit-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
  }
  #header-unal #menu .items-menu .item .item_submenu {
      max-height: 0;
      opacity: 1;
      position: relative;
      top: unset;
      visibility: visible;
      -webkit-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
  }
  #header-unal #menu .items-menu .item .item_submenu .sub-item {
      border-bottom: 1px solid #484848;
  }
  #header-unal #menu .items-menu .item .item_submenu .sub-item a {
      padding-left: 25px;
  }
  #header-unal #menu .items-menu .item .item_submenu .sub-item:last-child {
      border-bottom: none;
  }
  #header-unal #menu .items-menu .item .active {
      max-height: 650px !important;
  }
  #header-unal #menu .items-menu .item .active li {
      display: block !important;
  }
  #header-unal #menu .items-menu .item:last-child {
      float: unset;
  }
  #header-unal #menu .items-menu .item:hover {
      background-color: #484848;
  }
  #header-unal #menu .items-menu .has_submenu .item-name {
      padding: 8px 15px;
  }
  #header-unal #menu .items-menu .has_submenu .item-name:hover {
      background-color: transparent;
  }
  #header-unal #menu .items-menu .selected .item-name {
      background-color: #666 !important;
  }
} */

</style>
