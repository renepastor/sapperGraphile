<script>
  import { user, URL_GRAPH } from "./_store.js";


  let username = "";
  let password = "";

  async function submit() {
    try {
      const resul = await fetch(URL_GRAPH, {
            method: 'POST',
            headers: {
            'Accept': `application/json`,
            'Content-Type' : `application/json`
            },
            body: JSON.stringify(
            {query: `mutation{auth(input:{pUsuario:"${username}", pClave:"${password}"}) {jwt}}`})
        });
        const conten = await resul.json();
        if (conten.data.auth.jwt) {
            $user = conten.data.auth;

            window.top.location = '/';
            //setTimeout(()=>goto("admin"), 15000)
            
        } else {
            error = conten.data;
        }
    } catch (e) {
      console.log(e);
    }
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<section class="row">
  <div class="col-md-4 col-sm-0"></div>
    <div class="col-md-4 col-sm-12 border">
    <h1>Iniciar Sesión</h1>

    <form on:submit|preventDefault={submit}>
      <fieldset>
        <label for="username">
          <b>Username</b>
        </label>
        <input
          class="form-control"
          type="text"
          placeholder="Username"
          bind:value={username}
          required />
        <label for="password">
          <b>Password</b>
        </label>
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          bind:value={password}
          required />
        <div class="text-center">
          <button
            class="btn btn-sm bg-cuatro"
            type="submit"
            disabled={!username || !password}>
            Ingresar
          </button>
        </div>
      </fieldset>
    </form>

  </div>
</section>
