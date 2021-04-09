<script>
    import Modal from '../../components/Modal.svelte'
    import { PlusCircleFill, PencilFill, TrashFill } from "svelte-bootstrap-icons";
    let act='', activo = '', titulo ="Este es el Titulo";
    function  modal(op='active'){
        return op;
    }
    function  closeModal(){
        act = '';
    }
    let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
    
</script>
<div class=" w-100">
    <dt class="h5">Administrar Personas</dt>
    <button class="btn " href="#modal-id" data-bs-toggle="modal" data-bs-target="#exampleModal"><PlusCircleFill/> Nuevo</button>
    <div class="list">
        <table class="table table-striped table-hover">
            <thead>
              <tr class="bg-secondary">
                <th>name</th>
                <th>genre</th>
                <th>release date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {#each cats as cat}
                    <tr>
                        <td>{cat.id}</td>
                        <td>{cat.name}</td>
                        <td>{cat.name}</td>
                        <td>
                            <button class="btn btn-action s-circle"><PencilFill/></button>
                            <button class="btn btn-action s-circle"><TrashFill/></button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
<Modal {titulo}></Modal>