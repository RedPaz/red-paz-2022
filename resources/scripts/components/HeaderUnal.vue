<script setup lang="ts">
import { computed, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { HEADER_ITEMS } from '../constants';
import { notify } from '@kyvg/vue3-notification';
import { required, helpers, minLength } from '@vuelidate/validators';

const searchQuery = ref('');
const searchError = 'Ingrese al menos 3 caracteres';

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
</script>

<template>
  <header id="header-unal">
    <div class="headerUN">
      <div class="shield">
        <img src="/images/header-unal/sealBck.png" alt="Fondo Escudo" title="Fondo Escudo" class="hidden-xs">
        
        <a href="https://unal.edu.co" class="logo" target="_blank">
          <img src="/images/header-unal/escudoUnal.svg" alt="Escudo de la Universidad Nacional de Colombia" title="Escudo de la Universidad Nacional de Colombia" class="img-responsive"/>
        </a>
      </div>

      <!-- <div class="navbar-header">
        <button class="navbar-toggle" data-target="#menu" data-toggle="collapse" aria-controls="menu" aria-expanded="false" type="button">
          <span class="icon-bar"></span>
        </button>
      </div> -->
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

    <div id="menu" class="navbar-collapse navigation collapse">
      <div class="top-menu">
        <div class="main-url">
          <img src="/images/header-unal/ubicacion.png" class="mr-2 mb-1" />
          <a href="http://redpaz.unal.edu.co/2017/">redpaz.unal.edu.co</a>
        </div>

        <form
          class="search relative"
          @submit.prevent="search()"
        >
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar en la universidad"
            class="input-search rounded-md p-1 px-2 w-60 bg-gray-unal-100"
          >
          
          <button
            type="submit"
            class="absolute text-white h-full px-2 right-0 top-0 bg-green-unal rounded-tr-md rounded-br-md flex items-center"
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
          :class="{ 'has_submenu': item.subItems!.length > 0 }"
        >
          <a
            :href="item.src"
            class="item-name"
          >
            {{ item.label }}

            <fa
              v-if="item.subItems!.length > 0"
              icon="caret-down"
              class="icon ml-2"
            />
          </a>

          <ul
            v-if="item.subItems!.length > 0"
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
  @apply absolute h-[135px] w-[234px] z-10;
}

.shield-bg {
  @apply relative;
}

.logo {
  @apply absolute top-1/3 right-1/2 translate-x-1/2 -translate-y-1/3 w-11/12;
}
/* Social */
.social {
  @apply bg-gray-unal-400 h-[30px] relative py-0 px-1 m-0 flex justify-end items-center;
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
  @apply ml-60 p-0 relative flex flex-col;
}

.top-menu {
  @apply flex justify-between py-1.5 w-[calc(100%-85px)];
}

.main-url {
  @apply text-white text-2xl relative tracking-wide hover:no-underline flex items-center;
}

.items-menu {
  @apply flex w-[calc(100%-85px)];
}

.items-menu .item {
  @apply flex font-sans uppercase;
  @apply hover:bg-gray-unal-300;
  @apply last:ml-auto;
}

.item-name {
  @apply relative text-white px-2.5 pt-2 pb-1 no-underline z-10 duration-300 ease-in-out;
}

.item-name .icon {
  @apply text-green-unal text-xs right-1.5 top-2.5;
}

.item-submenu {
  @apply absolute top-full opacity-0 p-0 invisible z-10 duration-200 ease-in overflow-hidden;
}

.items-menu .item:hover .item-submenu {
  @apply opacity-100 visible z-20;
}

.sub-item a {
  @apply bg-gray-unal-800 text-sm normal-case text-white block px-4 py-1 no-underline duration-200 ease-in-out;
  @apply hover:bg-gray-unal-300;
}

.colombia {
  @apply absolute right-1.5 top-1.5 w-16 h-16;
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
