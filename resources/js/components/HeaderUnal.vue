<script setup lang="ts">
  // const cx = '008572255874373046644:chip1p1uf-4';
  // const gcse = document.createElement('script');
  // gcse.type = 'text/javascript';
  // gcse.async = true;
  // gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
  // '//www.google.com/cse/cse.js?cx=' + cx;
  // const s = document.getElementsByTagName('script')[0];

import { HeaderItem } from '../interfaces';

const headerItems: HeaderItem[] = [
  {
    label: 'Inicio',
    src: '#',
    subItems: [],
  },
  {
    label: 'Sobre Nosotros',
    src: '#',
    subItems: [],
  },
  {
    label: 'Experiencias de Paz',
    src: '#',
    subItems: [
      { label: 'Iniciativas RedPaz Unal', src: '#' },
      { label: 'Proyectos de Docencia', src: '#' },
      { label: 'Proyectos de Investigación', src: '#' },
      { label: 'Proyectos de Extensión', src: '#' },
    ],
  },
  {
    label: 'Experiencias de Paz',
    src: '#',
    subItems: [
      { label: 'Sistema Integral para la Paz', src: '#' },
      { label: 'Entidades Gubernamentales', src: '#' },
      { label: 'Organismos Internacionales', src: '#' },
    ],
  },
  {
    label: 'Recursos',
    src: '#',
    subItems: [
      { label: 'Formación y cursos de extensión', src: '#' },
      { label: 'Publicaciones', src: '#' },
    ],
  },
  {
    label: 'Contacto',
    src: '#',
    subItems: [],
  },
  {
    label: 'Sedes',
    src: '#',
    subItems: [
      { label: 'Amazonía', src: 'https://www.imani.unal.edu.co/' },
      { label: 'Bogotá', src: 'https://bogota.unal.edu.co/' },
      { label: 'Caribe', src: 'https://caribe.unal.edu.co/' },
      { label: 'Manizales', src: 'https://www.manizales.unal.edu.co/' },
      { label: 'Medellín', src: 'https://medellin.unal.edu.co/' },
      { label: 'Caribe', src: 'https://caribe.unal.edu.co/' },
      { label: 'Orinoquía', src: 'https://orinoquia.unal.edu.co/' },
      { label: 'Palmira', src: 'https://www.palmira.unal.edu.co/' },
      { label: 'Tumaco', src: 'https://www.tumaco-pacifico.unal.edu.co/' },
    ],
  },
];

</script>

<template>
  <header id="header-unal">
    <div class="headerUN">
        <div class="escudo">
            <div class="fondo">
                <img src="/images/header-unal/sealBck.png" alt="Fondo Escudo" title="Fondo Escudo" class="hidden-xs">
                <a href="https://unal.edu.co" class="logo" target="_blank">
                    <img src="/images/header-unal/escudoUnal.svg" alt="Escudo de la Universidad Nacional de Colombia" title="Escudo de la Universidad Nacional de Colombia" class="img-responsive"/>
                </a>
            </div>
        </div>

        <div class="navbar-header">
            <button class="navbar-toggle" data-target="#menu-FCH" data-toggle="collapse" aria-controls="menu-FCH" aria-expanded="false" type="button">
                <span class="icon-bar"></span>
            </button>
        </div>
    </div>

    <div class="redes-sociales hidden sm:block">
        <ul>
            <li class="social">
                <a target="_blank" href="https://www.youtube.com/user/faccienciashumanas" class="youtube"></a>
            </li>
            <li class="social">
                <a target="_blank" href="https://twitter.com/humanasunal" class="twitter"></a>
            </li>
            <li class="social">
                <a target="_blank" href="https://www.facebook.com/humanasunal" class="facebook"></a>
            </li>
        </ul>
    </div>

    <div id="menu-FCH" class="navbar-collapse navigation collapse">
      <div class="menu-superior clearfix">
        <div class="url-humanas">
          <a href="http://redpaz.unal.edu.co/2017/" class="url-site">redpaz.unal.edu.co</a>
        </div>
        <!-- <div class="buscador">
          <gcse:searchbox-only resultsurl="https://unal.edu.co/resultados-de-la-busqueda/"></gcse:searchbox-only>
        </div> -->
      </div>
      <div class="escudo_colombia hidden-xs">
        <img src="/images/header-unal/escudoColombia.png" alt="Escudo de la República de Colombia" title="Escudo de la República de Colombia" height="66" with="66"/>
      </div>

      <ul class="items-menu clearfix">
        <li
          v-for="(item, index) in headerItems"
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
              class="ml-2"
            />
          </a>

          <ul
            v-if="item.subItems!.length > 0"
            class="item_submenu"
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
  border: none;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
#header-unal {
  background-color: #666;
  position: relative;
}
#header-unal .escudo {
  position: absolute;
  height: 135px;
  width: 234px;
  z-index: 500;
}
#header-unal .escudo .fondo {
  margin-left: 0;
  position: relative;
}
#header-unal .escudo .fondo .logo {
  left: 0;
  position: absolute;
  margin: 0 auto;
  right: 0;
  top: 5%;
  width: 90%;
}
#header-unal .redes-sociales {
  background-color: #5b5b5b;
  display: block;
  height: 30px;
  padding: 5px 5px 0 240px;
  position: relative;
}
#header-unal .redes-sociales ul {
  margin: 0;
  padding: 0;
  text-align: right;
}
#header-unal .redes-sociales ul .social {
  display: inline-block;
}
#header-unal .redes-sociales ul .social a {
  background: url(../../images/header-unal/redes_sociales.png) no-repeat 0 0 transparent;
  display: block;
  height: 20px;
  width: 20px;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}
#header-unal .redes-sociales ul .social .facebook {
  background-position: -42px 0;
}
#header-unal .redes-sociales ul .social .facebook:hover {
  background-position: -42px -21px;
}
#header-unal .redes-sociales ul .social .twitter {
  background-position: -21px 0;
}
#header-unal .redes-sociales ul .social .twitter:hover {
  background-position: -21px -21px;
}
#header-unal .redes-sociales ul .social .youtube {
  background-position: 0 0;
}
#header-unal .redes-sociales ul .social .youtube:hover {
  background-position: 0 -21px;
}

#header-unal .navbar-header .navbar-toggle {
  display: none;
}

#header-unal #menu-FCH {
  margin: 0 0 0 240px;
  padding: 0;
  position: relative;
  width: calc(100% - 240px);
}
#header-unal #menu-FCH .menu-superior {
  position: relative;
  padding: 5px 0;
  width: calc(100% - 85px);
}
#header-unal #menu-FCH .menu-superior .url-humanas {
  display: inline-block;
  padding: 0;
}
#header-unal #menu-FCH .menu-superior .url-humanas .url-site {
  color: #fff;
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif;
  font-size: 24px;
  letter-spacing: 0.6px;
  padding-left: 20px;
  position: relative;
}
#header-unal #menu-FCH .menu-superior .url-humanas .url-site:hover {
  text-decoration: none;
}
#header-unal #menu-FCH .menu-superior .url-humanas .url-site::before {
  background: no-repeat 0 0 url(../../images/header-unal/ubicacion.png);
  content: "";
  height: 18px;
  position: absolute;
  width: 11px;
  top: 3px;
  left: 0;
}
#header-unal #menu-FCH .menu-superior .buscador {
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif;
  width: 250px;
  float: right;
  margin-top: 5px;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only {
  margin: 0;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools {
  height: 30px;
  margin: 0;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box {
  display: block;
  height: 100%;
  margin: 0;
  position: relative;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody {
  display: block;
  height: 100%;
  margin: 0;
  position: relative;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr {
  display: block;
  height: 100%;
  margin: 0;
  position: relative;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input {
  background: #777 !important;
  background-image: none !important;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 14px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  text-indent: 3px !important;
  width: 220px;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif;
  font-size: 15px !important;
  color: #333;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input::-moz-placeholder {
  /* Firefox 19+ */
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif;
  font-size: 15px !important;
  color: #333;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input:-ms-input-placeholder {
  /* IE 10+ */
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif;
  font-size: 15px !important;
  color: #333;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input:-moz-placeholder {
  /* Firefox 18- */
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif;
  font-size: 15px !important;
  color: #333;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box {
  background-color: #777;
  border-color: transparent;
  color: #333;
  height: 30px;
  overflow: hidden !important;
  padding-top: 1px;
  width: 220px;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 {
  display: block;
  height: 100%;
  margin: 0;
  position: relative;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 tbody {
  display: block;
  height: 100%;
  margin: 0;
  position: relative;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 tbody tr {
  display: block;
  height: 100%;
  margin: 0;
  position: relative;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 tbody .gsc-input {
  font-size: 16px;
  padding-top: 2px !important;
  position: relative;
  vertical-align: middle;
  width: 90% !important;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 tbody .gsib_a {
  font-size: 16px;
  height: 100%;
  padding-top: 0;
  position: absolute;
  width: 100%;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 tbody .gsib_b {
  height: 20px;
  position: absolute;
  right: 0;
  width: 20px;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 tbody .gsib_b .gsst_b {
  height: 20px;
  left: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 20px;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box .gstl_50 tbody .gsib_b .gsst_b .gsst_a {
  height: 20px;
  left: -5px;
  padding: 0 !important;
  position: absolute;
  top: 6px;
  width: 20px;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box-hover,
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box-focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
#header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-search-button {
  border-radius: 0;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 30px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  vertical-align: middle;
  width: 30px;
}
#header-unal #menu-FCH .items-menu {
  padding: 0;
  margin: 0;
  position: relative;
  width: calc(100% - 85px);
}
#header-unal #menu-FCH .items-menu .item {
  display: block;
  float: left;
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif;
  list-style: none;
  text-transform: uppercase;
}
#header-unal #menu-FCH .items-menu .item .item-name {
  background-color: transparent;
  color: #fff;
  display: block;
  font-size: 15.75px;
  padding: 5px 13px;
  position: relative;
  text-decoration: none;
  z-index: 50;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#header-unal #menu-FCH .items-menu .item .item-name svg,
#header-unal #menu-FCH .items-menu .item .item-name i {
  color: #50992e;
  font-size: 11px;
  position: absolute;
  right: 6px;
  top: 10px;
}
#header-unal #menu-FCH .items-menu .item .item-name:hover,
#header-unal #menu-FCH .items-menu .item .item-name:active,
#header-unal #menu-FCH .items-menu .item .item-name:focus {
  outline: none;
}
#header-unal #menu-FCH .items-menu .item .item_submenu {
  filter: alpha(opacity=0);
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  text-transform: initial;
  visibility: hidden;
  z-index: 10;
  -webkit-transition: all 0.25s ease-in;
  transition: all 0.25s ease-in;
}
#header-unal #menu-FCH .items-menu .item .item_submenu .sub-item {
  list-style: none;
}
#header-unal #menu-FCH .items-menu .item .item_submenu .sub-item a {
  background-color: #333;
  color: #fff;
  display: block;
  font-size: 15px;
  padding: 4px 15px;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
#header-unal #menu-FCH .items-menu .item .item_submenu .sub-item a:hover,
#header-unal #menu-FCH .items-menu .item .item_submenu .sub-item a:active,
#header-unal #menu-FCH .items-menu .item .item_submenu .sub-item a:focus {
  background-color: #555;
  outline: none;
}
#header-unal #menu-FCH .items-menu .item:last-child {
  float: right;
}
#header-unal #menu-FCH .items-menu .item:hover .item-name {
  background-color: #555;
}
#header-unal #menu-FCH .items-menu .item:hover .item_submenu {
  filter: alpha(opacity=100);
  opacity: 1;
  visibility: visible;
  z-index: 5000;
}
#header-unal #menu-FCH .items-menu .has_submenu .item-name {
  padding: 5px 22px 5px 7px;
}
#header-unal .escudo_colombia {
  position: absolute;
  right: 5px;
  top: 6px;
}

 @media screen and (max-width: 40em) {
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
  #header-unal #menu-FCH {
      background-color: #484848;
      bottom: unset;
      left: unset;
      margin: 0;
      position: relative;
      width: 100%;
      z-index: 500;
  }
  #header-unal #menu-FCH .menu-superior {
      width: 100%;
  }
  #header-unal #menu-FCH .menu-superior .url-humanas {
      display: block;
      padding: 0 10px;
  }
  #header-unal #menu-FCH .menu-superior .url-humanas .url-site {
      font-size: 20px;
      padding-bottom: 10px;
  }
  #header-unal #menu-FCH .menu-superior .url-humanas .url-site::before {
      background-size: 90%;
      height: 15px;
      left: 5px;
      width: 10px;
  }
  #header-unal #menu-FCH .menu-superior .buscador {
      padding: 0 15px;
      width: 100%;
  }
  #header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input {
      width: calc(100% - 30px);
  }
  #header-unal #menu-FCH .menu-superior .buscador .gsc-control-searchbox-only .gsc-search-box-tools .gsc-search-box tbody tr .gsc-input .gsc-input-box {
      width: 100%;
  }
  #header-unal #menu-FCH .items-menu {
      width: 100%;
  }
  #header-unal #menu-FCH .items-menu .item {
      border-bottom: 1px solid #666;
      float: unset;
  }
  #header-unal #menu-FCH .items-menu .item .item-name {
      padding: 8px 15px;
  }
  #header-unal #menu-FCH .items-menu .item .item-name i {
      font-size: 15px;
      right: 20px;
      top: 12px;
      -webkit-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
  }
  #header-unal #menu-FCH .items-menu .item .item_submenu {
      max-height: 0;
      opacity: 1;
      position: relative;
      top: unset;
      visibility: visible;
      -webkit-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
  }
  #header-unal #menu-FCH .items-menu .item .item_submenu .sub-item {
      border-bottom: 1px solid #484848;
  }
  #header-unal #menu-FCH .items-menu .item .item_submenu .sub-item a {
      padding-left: 25px;
  }
  #header-unal #menu-FCH .items-menu .item .item_submenu .sub-item:last-child {
      border-bottom: none;
  }
  #header-unal #menu-FCH .items-menu .item .active {
      max-height: 650px !important;
  }
  #header-unal #menu-FCH .items-menu .item .active li {
      display: block !important;
  }
  #header-unal #menu-FCH .items-menu .item:last-child {
      float: unset;
  }
  #header-unal #menu-FCH .items-menu .item:hover {
      background-color: #484848;
  }
  #header-unal #menu-FCH .items-menu .has_submenu .item-name {
      padding: 8px 15px;
  }
  #header-unal #menu-FCH .items-menu .has_submenu .item-name:hover {
      background-color: transparent;
  }
  #header-unal #menu-FCH .items-menu .selected .item-name {
      background-color: #666 !important;
  }
}

</style>
