<template>
  <main>
    <section class="w-full lg:w-[740px] mx-auto py-44">
      <div class="px-28">
        <img class="rounded-full size-12 mb-4" src="/public/img/sebas.jpg" alt="SebbasDEV logo" />
      </div>
      <h1 class="text-white text-5xl font-bold flex justify-center flex-row ">Hey, soy Sebastian</h1>
      <div class="flex justify-center items-center py-6">
        <BadgeVue>Disponible para trabajar</BadgeVue>
      </div>
      <h2 class="text-white  ">
        Desarrollador Web con experiencia en proyectos
        colaborativos.De Rivera, colombia. Aunque mi trayectoria no incluye experiencia formal en empresas, he
        contribuido significativamente como desarrollador Web en diversos proyectos, tanto en el frontend como en el backend.
        Puedes explorar mis contribuciones en los repositorios de GitHub, donde plasmo mi dedicación y habilidades
        técnicas.</h2>

      <nav class="flex gap-4 mt-8 flex-wrap">
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
import BadgeVue from './icons/Badge.vue'
import GitHub from './icons/GitHub.vue'
import LinkedInVue from './icons/LinkedIn.vue'
import MailVue from './icons/Mail.vue'
import SocialPillVue from './icons/SocialPill.vue'
export default {
  components: { BadgeVue, GitHub,SocialPillVue,MailVue,LinkedInVue },

}
</script>

<style></style>
