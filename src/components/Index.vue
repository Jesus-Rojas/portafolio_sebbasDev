<template>
  <main>
    <section class="w-full lg:w-[740px] mx-auto py-12 md:py-20 lg:py-32 text-center">
      <div class="px-28">
        <img class="rounded-full size-20 mb-4" src="/src/assets/img/sebas.jpg" alt="SebbasDEV logo" />
      </div>
      <h1
        class="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center flex-row mb-4 transition hover:scale-110">
        <span class="text-blue-600">Hey</span>, soy Sebastian
      </h1>
      <div class="flex justify-center items-center py-6">
        <BadgeVue>Disponible para trabajar</BadgeVue>
      </div>
      <h2 class="text-black dark:text-white text-sm md:text-base lg:text-lg">
        Desarrollador Web con experiencia en proyectos colaborativos.
        <span class="text-blue-600 font-bold">De Rivera, colombia </span> .
        <span class="text-blue-600 font-bold">Aunque mi trayectoria no incluye
        </span>
        experiencia formal en empresas, he contribuido significativamente como
        <span class="text-blue-600 font-bold">desarrollador Web en diversos proyectos</span>
        , tanto en el frontend como en el backend. Puedes explorar mis
        contribuciones en los
        <span class="text-blue-600 font-bold"> repositorios de GitHub</span>,
        <span class="text-blue-600 font-bold"> donde plasmo</span> mi dedicación
        y habilidades técnicas.
      </h2>

      <nav class="flex gap-4 mt-8 flex-wrap justify-center">
        <SocialPillVue href="https://github.com/sebbas-0626">
          <GitHub class="size-4 md:size-6"></GitHub>
          GitHub
        </SocialPillVue>

        <SocialPillVue>
          <LinkedInVue class="size-4 md:size-6"></LinkedInVue>
          LinkedIn
        </SocialPillVue>

        <SocialPillVue>
          <MailVue class="size-4 md:size-6"></MailVue>
          sebastiantovarchavez304@gmail.com
        </SocialPillVue>
      </nav>
    </section>
  </main>
</template>

<script>
import BadgeVue from "./icons/Badge.vue";
import GitHub from "./icons/GitHub.vue";
import LinkedInVue from "./icons/LinkedIn.vue";
import MailVue from "./icons/Mail.vue";
import SocialPillVue from "./icons/SocialPill.vue";
export default {
  components: { BadgeVue, GitHub, SocialPillVue, MailVue, LinkedInVue },
};
</script>

<style></style>
