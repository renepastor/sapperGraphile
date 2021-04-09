<script>
  import { goto } from "@sapper/app";
  import { user } from "./../routes/_store.js";
  export let segment;


  async function logout() {
    try {
      await fetch("auth/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      $user = null;
      goto(".");
    } catch (e) {
      console.log(e);
    }
  }


</script>


<nav class="navbar navbar-expand-lg fixed-top bg-primary navbar-light sombra2">
    <div class="container-fluid">
        <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="."> .::SISTEMA::.</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" >
          <span class="navbar-toggler-icon">.</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {#if $user}
                <li class="nav-item">
                  <a href="." class="nav-link" class:active={segment === undefined}>Inicio</a>
                </li>
                <li class="nav-item">
                  <a href="funcionario" class="nav-link" class:active={segment === 'funcionario'}>Funcionarios</a>
                </li>
                <li class="tab-item">
                  <a href="personas" class="nav-link" class:active={segment === 'personas'}>Personas</a>
                </li>
                <li class="tab-item">
                  <a rel="prefetch" href="salir" class="nav-link" class:active={segment === 'salir'}>Salir</a>
                </li>
              {:else}
                  <li class="nav-item">
                    <a href="admin" class="nav-link" class:active={segment === 'admin'}>Iniciar Sesión</a>
                  </li>
              {/if}
            </ul>
        </div>
    </div>
</nav>
