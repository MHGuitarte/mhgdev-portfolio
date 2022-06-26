<template>
  <div
    class="flex flex-col items-center w-screen h-screen pt-52 bg-secondary/50 font-victormono"
  >
    <main
      class="flex flex-col items-center w-6/12 h-screen px-16 py-6 rounded-md bg-primary/50"
    >
      <section class="flex flex-col items-center mb-12 title">
        <img
          src="https://github.com/MHGuitarte.png"
          alt="¡Este soy yo!"
          class="absolute w-56 rounded-full left-96 top-24"
        />
        <h1 class="mb-2 text-5xl">mhgdev</h1>
        <h6 class="text-xs">
          El movimiento se demuestra andando.- Diógenes de Sinope
        </h6>
      </section>
      <section class="flex flex-col justify-around h-40 text-justify">
        <article>
          Bienvenido a mi espacio propio de la web, donde lo privado y lo
          público se unen para dar vida a mi perfil técnico profesional, a la
          vez que puedes descubrir un poco más sobre mi persona.
        </article>
        <article>
          Mi nombre es Manuel (Manu) Hurtado y me dedico al desarrollo web.
        </article>
        <article>
          Si te interesa seguir conociendo sobre mí y mi trabajo, te invito a
          navegar por las secciones de mi web. ¡Disfruta!
        </article>
      </section>
    </main>
    <footer class="sticky bottom-0 w-screen text-center bg-transparent">
      mhgdev @{{ year }}
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const year: Ref<number> = ref();

onBeforeMount(() => {
  year.value = new Date(Date.now()).getFullYear();
});
</script>
