<template>
  <section class="mb-12 text-justify index">
    <article class="mb-6">
      Bienvenido a mi espacio propio de la web, donde lo privado y lo público se
      unen para dar vida a mi perfil técnico profesional, a la vez que puedes
      descubrir un poco más sobre mi persona.
    </article>
    <article class="mb-6">
      Mi nombre es Manuel (Manu) Hurtado y me dedico al desarrollo web.
    </article>
    <article class="mb-6">
      Si te interesa seguir conociendo sobre mí y mi trabajo, te invito a
      navegar por las secciones de mi web. ¡Disfruta!
    </article>
  </section>
  <section class="mb-12 text-justify about-me">
    <h2 class="mb-6 text-4xl text-center">Sobre mí</h2>
    <article class="mb-6">
      Soy un <strong>desarrollador Full Stack web</strong>, más orientado al
      <strong>Front End</strong>. Amante desde pequeño de la informática, la
      música y los videojuegos. Curioso por naturaleza, me apasiona aprender por
      encima de cualquier cosa, y es una virtud que he sabido extrapolar al
      mundo profesional.
    </article>
    <div class="mb-6 lg:flex lg:flex-row lg:items-center">
      <article class="lg:w-4/12">
        Me encanta estudiar y aprender constantemente nuevas tecnologías y áreas
        del desarrollo. No obstante, mi lenguaje preferido es JavaScript y su
        ecosistema.
      </article>

      <img
        src="https://github.com/MHGuitarte.png"
        alt="¡Soy yo!"
        class="rounded-md lg:w-7/12 lg:px-16 lg:mx-8"
        loading="lazy"
      />
    </div>

    <article class="mb-6">
      Mi objetivo profesional dentro del mundo de la programación pasa
      estrictamente por aportar a la comunidad de desarrolladores, para alcanzar
      la posición de “persona de referencia” a gran escala en el ámbito técnico.
    </article>
  </section>
  <section class="w-full mb-12 experience">
    <h2 class="mb-6 text-4xl text-center">Mi experiencia</h2>
    <Archive :experience-list="experience" />
  </section>
</template>

<script setup>
import Archive from '~~/components/Archive.vue';
useHead({
  title: "mhgdev - Desarrollo con cariño",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      name: "description",
      content: "Main page where you can learn anything about me professionally",
    },
  ],
});

const experience = ref([
  {
    id: 1,
    from: "04/22",
    to: "Actualmente",
    order: 30,
  },
  {
    id: 2,
    from: "03/21",
    to: "04/22",
    order: 20,
  },
  {
    id: 3,
    from: "07/20",
    to: "03/21",
    order: 10,
  },
]);
</script>
