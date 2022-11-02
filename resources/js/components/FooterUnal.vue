<script setup lang="ts">
</script>

<template>
  <footer id="footer-unal">
    <div class="general-links">
      <!-- Col #1 -->
      <div>
        <p><a href="http://www.legal.unal.edu.co/rlunal/home/" target="_blank">R&eacute;gimen legal</a></p>
        <p><a href="http://contratacion.unal.edu.co/nal/" target="_blank">Contrataci&oacute;n</a></p>
        <p><a href="http://launalcuenta.unal.edu.co/" target="_blank">Rendici&oacute;n de cuentas</a></p>
        <p><a href="https://pagovirtual.unal.edu.co/index.php" target="_blank">Pago Virtual</a></p>
        <p><a href="http://siga.unal.edu.co/" target="_blank">Calidad</a></p>
      </div>
    
      <!-- Col #2 -->
      <div class="even-column">
        <p><a href="http://personal.unal.edu.co/" target="_blank">Talento humano</a></p>
        <p><a href="http://personal.unal.edu.co/" target="_blank">Ofertas de empleo</a></p>
        <p><a href="https://docentes.unal.edu.co/concurso-profesoral/" target="_blank">Concurso docente</a></p>
        <p><a href="http://controlinterno.unal.edu.co/" target="_blank">Control interno</a></p>
        <p><a href="http://unal.edu.co/buzon-de-notificaciones/" target="_blank">Buz&oacute;n de notificaciones</a></p>
      </div>

      <!-- Col #3 -->
      <div>
        <p><a href="http://correo.unal.edu.co" target="_blank">Correo institucional</a></p>
        <p><a href="https://redessociales.unal.edu.co/" target="_blank">Redes sociales</a></p>
        <p><a href="http://quejasyreclamos.unal.edu.co/" target="_blank">Quejas y reclamos</a></p>
        <p><a href="http://unal.edu.co/encuesta/" target="_blank">Encuesta</a></p>
        <p><a href="http://estadisticas.unal.edu.co/home/" target="_blank">Estad&iacute;sticas</a></p>
      </div>
    <!-- Col #4 -->
    <div class="even-column">
      <p><a href="http://unal.edu.co/mapa-del-sitio/" target="_blank">Mapa del sitio</a></p>
      <p><a href="http://unal.edu.co/faq/" target="_blank">FAQ</a></p>
      <p><a href="http://unal.edu.co/atencion-en-linea/" target="_blank">Atenci&oacute;n en l&iacute;nea</a></p>
      <p><a href="http://unal.edu.co/contactenos/" target="_blank">Cont&aacute;ctenos</a></p>
      <p><a href="http://unal.edu.co/glosario/" target="_blank">Glosario</a></p>
    </div>
  </div>

  <div class="contact-links">
    <div class="contact-items">
      <!-- Col #5 -->
      <div>
        <p><strong>Contacto p&aacute;gina web:</strong></p>
        <p>Direcci&oacute;n</p>
        <p>Edif. 205 -&nbsp;Of. 117</p>
        <p>Bogot&aacute; D.C.,&nbsp; Colombia</p>
        <p>(+57 1) &nbsp;316 5000</p>
      </div>

      <!-- Col #6 -->
      <div class="even-column">
        <p>&copy; Copyright 2014</p>
        <p>Algunos derechos reservados.</p>
        <p><a href="mailto:editorweb_fchbog@unal.edu.co" title="Comuníquese con el webmaster de la Universidad Nacional de Colombia">editorweb_fchbog@unal.edu.co</a></p>
        <p><a href="https://unal.edu.co/acerca-de-este-sitio-web.html" target="_blank" title="Acerca de la web de la Universidad Nacional de Colombia">Acerca de este sitio web</a></p>
      </div>
    </div>

    <div class="logos">
      <a href="http://orgullo.unal.edu.co/">
        <img alt="Orgullo UN" src="/images/footer-unal/log_orgullo.png" title="Orgullo UN"/>
      </a>
      <a href="https://www.gov.co/home">
        <img alt="Programa gobierno en línea" src="/images/footer-unal/log_gobiern.png" title="Programa gobierno en línea"/>
      </a>
      <a class="imgAgencia" href="https://agenciadenoticias.unal.edu.co/index.php">
        <img alt="Agencia de Noticias" src="/images/footer-unal/log_agenc.png" title="Agencia de Noticias"/>
      </a>
      <a href="https://www.contaduria.gov.co/">
        <img alt="Contaduría general de la republica" src="/images/footer-unal/log_contra.png" title="Contaduría general de la republica"/>
      </a>
    </div>
  </div>
  </footer>
</template>

<style scoped>
#footer-unal {
  @apply bg-gray-unal-200 font-sans p-6 grid grid-cols-1 xl:grid-cols-2 text-sm gap-8 text-gray-200;
}

.general-links, .contact-items {
  @apply grid gap-8 grid-cols-2 xl:grid-cols-4;
}

.contact-items {
  @apply xl:grid-cols-2 xl:col-span-2 xl:gap-0 xl:border-x xl:border-x-gray-200 xl:px-6;
}

.even-column {
  @apply text-right md:text-left;
}

.contact-links {
  @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8;
}

.logos {
  @apply grid grid-cols-4 gap-1 items-center xl:grid-cols-2 p-4;
}

a {
  @apply text-gray-200 no-underline;
}

p {
  @apply mb-0;
}
</style>
