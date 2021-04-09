<script>
    export let titulo = '', modal;
    function  closeModal(){
        modal('');
    }
</script>

<div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
 
  <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
          <div class="modal-title">{titulo}</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"> 
              
              <form action="#forms">
                  <fieldset>
                  <div class="form-group">
                      <label class="form-label" for="input-example-19">Name</label>
                      <input class="form-input" type="text" id="input-example-19" placeholder="Name">
                  </div>
                  <div class="form-group">
                      <label class="form-label">Gender</label>
                      <label class="form-radio">
                      <input type="radio" name="gender">
                      <i class="form-icon"></i> Male
                      </label>
                      <label class="form-radio">
                      <input type="radio" name="gender">
                      <i class="form-icon"></i> Female
                      </label>
                  </div>
                  <div class="form-group">
                      <select class="form-select">
                      <option>Choose an option</option>
                      <option>Slack</option>
                      <option>Skype</option>
                      <option>Hipchat</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label class="form-switch">
                      <input type="checkbox">
                      <i class="form-icon"></i> Send me emails with news and tips
                      </label>
                  </div>
                  <div class="form-group">
                      <label class="form-label" for="input-example-20">Message</label>
                      <textarea class="form-input" id="input-example-20" placeholder="Textarea" rows="3"></textarea>
                  </div>
                  <div class="form-group">
                      <label class="form-checkbox">
                      <input type="checkbox">
                      <i class="form-icon"></i> Remember me
                      </label>
                  </div>
                  </fieldset>
              </form>
      </div>
      <div class="modal-footer">
          ...
      </div>
      </div>
  </div>
</div>