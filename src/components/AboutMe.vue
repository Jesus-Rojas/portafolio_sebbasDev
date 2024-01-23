<template>
  <section class="flex flex-col md:flex-row gap-8 justify-center items-center lg:w-[740px] mx-auto py-2 ">
    <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-400 [&>p>strong]:font-semibold text-pretty order-2 md:order-1">
      <h2 class="text-4xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80 px-28">

        <profile-check class="size-16" />
        Sobre Mi
      </h2>

      <p>

        Me llamo Sebastián Tovar Chávez, soy estudiante de ingeniería en sistemas apasionado por la programación, desde los
        19 años cuando comencé mis estudios universitarios <strong> empece el el mundo de la programación gracias a mi
          formación técnico en sistemas durante la etapa de colegio</strong>.
      </p>
      <p>
        Me caracterizo por estar en constante aprendizaje y mantener el hábito de ser autodidacta.
        <strong>
          Algunos de mis éxitos incluyen colaborar en el desarrollo de la página web de COOTRANSHUILA LTDA y participación
          en el backend como
          desarrollador web.</strong> Esta experiencia fue un gran avance me enseño sobre trabajo en equipo y
        progresodel dia a dia en el ámbito del desarrollo web.
      </p>

      <p>
        Mi objetivo es seguir aprendiendo,<strong> enfrentar nuevos desafíos y nunca rendirme, <em class="italic">incluso
            ante los obstáculos más difíciles.</em>Estoy comprometido con mi crecimiento</strong> profesional y emocionado
        por las oportunidades que el mundo del desarrollo tiene para ofrecer.
      </p>
    </div>

    <img src="/public/img/sebas.jpg" class="rounded-full size-64 order-1 md:order-2" />

  </section>
</template>

<script>
import profileCheck from './icons/profileCheck.vue'
import profileCheckVue from './icons/profileCheck.vue'
export default {
  components: { profileCheck },
  profileCheckVue

}
</script>

<style></style>
