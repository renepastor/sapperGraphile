<script>
    import { goto } from "@sapper/app";
    import { user,URL_GRAPH } from "./../routes/_store.js";
    import { GearFill, PersonCheckFill, PeopleFill } from "svelte-bootstrap-icons";
    import { onMount } from "svelte";

    onMount(() => {
        if (!$user) {
            goto("login");
        }
    });
    
    async function fetchData() {
        try {
            loading = true;
            const res = await fetch(URL_GRAPH, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${$user?.jwt}`
                },
                body: JSON.stringify({"query": `query{miUsuario{persId usuario cuenta alias}
                                miMenu{nodes{id nombre ruta imagen nivel orden padreId}}}`})
            });
            const data = await res.json();
            let miMenu = data.data.miMenu.nodes;
            loading = false;
            if (res.ok) {
                return miMenu;
            } else {
              throw new Error(data);
            }
        } catch (e) {
            console.log(e);
        }
    }
    let loading;
</script>

{#if $user}
<div class="offcanvas offcanvas-start p-0 m-0" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body p-0 m-0">
        <div class="accordion accordion-flush p-0 m-0" id="accordionFlushExample">
            <div class="accordion-item">
                {#if process.browser}
                    {#await fetchData() then data}
                        {#each data.filter(item=>(item.nivel==1)) as item}
                            <h2 class="accordion-header" id="flush{item.id}head">
                                <button class="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush{item.id}" aria-expanded="false" aria-controls="flush{item.id}">
                                    <GearFill /> {item.nombre}
                                </button>
                            </h2>
                            <div id="flush{item.id}" class="accordion-collapse collapse" aria-labelledby="flush{item.id}head" data-bs-parent="#accordionFlushExample">
                                <div id="list-example" class="list-group">
                                    {#each data.filter(it=>(it.padreId==item.id)) as itemNivel}
                                        <a class="list-group-item list-group-item-action" href="{itemNivel.ruta}">{itemNivel.nombre}</a>
                                    {/each}
                                </div>
                            </div>
                        {/each}
                    {/await}
                {/if}
            </div>
        </div>
    </div>
</div>
{/if}