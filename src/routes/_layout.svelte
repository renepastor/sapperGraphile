<style lang="scss" global>
    @import "../../static/styles/global.scss";
</style>

<script>
  import Nav from "../components/Nav.svelte";
  import MenuLeft from "../components/MenuLeft.svelte";
  export let segment;
  
</script>

<Nav {segment} />
<br><br><br>
<main class="container-fluid">
  <slot />
</main>

<MenuLeft></MenuLeft>
