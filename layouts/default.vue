<script setup lang="ts">
import { Ref } from "vue";

const sections = [
  {
    name: "Sobre mí",
    href: "#about-me"
  },
  {
    name: "Mi experiencia",
    href: "#experience"
  },
  {
    name: "Habilidades",
    href: "#skills"
  },
  {
    name: "Contact",
    href: "#contact"
  },
];

const year: Ref<number> = ref();

onBeforeMount(() => {
  year.value = new Date(Date.now()).getFullYear();
});
</script>


<template>
  <div class="flex flex-col items-center w-full h-full pt-12 bg-[#b3b292] font-victormono">
    <header class="flex flex-col items-center lg:w-6/12 md:w-8/12">
      <section class="flex flex-col items-center mb-12 title">
        <h1 class="mb-2 text-5xl">mhgdev</h1>
        <small class="text-xs">
          El movimiento se demuestra andando.- Diógenes de Sinope
        </small>
      </section>
      <nav class="mb-12">
        <span>Sobre mí</span> | <span>Mi experiencia</span> |
        <span>Habilidades</span> | <span>Contacto</span>
      </nav>
    </header>
    <main class="flex flex-col items-center h-full px-16 py-12 rounded-md lg:w-5/12 md:w-8/12 bg-[#FFFDD0]/80">
      <slot />
    </main>
    <footer class="sticky bottom-0 w-full text-center bg-[#b3b292]">
      mhgdev @{{ year }}
    </footer>
  </div>
</template>

