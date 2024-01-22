<template>
  <a
    class="
      bg-white/5
      border dark:border-white/10 border-gray-300 rounded-full
      flex justify-center items-center gap-x-2
      py-1 px-2 md:py-2 md:px-4
      text-xs md:text-base
      text-black/70 dark:text-white
      transition
      hover:scale-110 hover:bg-white/10
    "
    target="_blank"
    rel="noopener noreferrer"
    href=""
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'SocialPill',
};
</script>

<style scoped>
/* Puedes añadir estilos específicos del componente aquí si es necesario */
</style>
