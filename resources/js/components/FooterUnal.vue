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
  background-color: #666; 
  color: #ddd; 
  font-family: "AncizarSans-Regular", Tahoma, Geneva, sans-serif; 
  font-size: 0.85em; 
  position: relative; 
  padding: 2rem; 
  display: grid; 
  grid-template-columns: repeat(1, minmax(0, 1fr)); 
  gap: 2rem;
}
#footer-unal .general-links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
#footer-unal .general-links .even-column { text-align: right; }
#footer-unal .contact-links { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 2rem; }
#footer-unal .contact-links .contact-items { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
#footer-unal .contact-links .contact-items .even-column { text-align: right; }
#footer-unal .contact-links .logos { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; -webkit-box-align: center; -ms-flex-align: center; align-items: center; padding: 0.5rem; }
#footer-unal a { color: #ddd; text-decoration: none; }
#footer-unal a img { margin: 0 auto; }
#footer-unal a:hover { color: #ddd; }
#footer-unal p { margin-bottom: 0; }

@media screen and (min-width: 768px) { #footer-unal .general-links { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  #footer-unal .general-links .even-column { text-align: left; }
  #footer-unal .contact-links { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  #footer-unal .contact-links .contact-items .even-column { text-align: left; } }
@media screen and (min-width: 1280px) { #footer-unal { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  #footer-unal .contact-links { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  #footer-unal .contact-links .contact-items { grid-column: span 2 / span 2; padding: 0 2rem; border: 1px solid #d1d5db; border-top: 0; border-bottom: 0; gap: 0; }
  #footer-unal .contact-links .contact-items .even-column { text-align: right; }
  #footer-unal .contact-links .logos { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 1rem; } }
</style>
