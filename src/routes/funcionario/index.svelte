<script context="module">
    export async function preload(page, session){
        console.log("----------#########", page, session);
        const res = await this.fetch('/funcionario.json');
        const funcionario = await res.json();
        return {funcionario};
    }
</script>
<script>
    export let funcionario;
</script>
RRHH
<ul>
    {#each funcionario as item}
        <li>{item.title}</li>
    {/each}
</ul>