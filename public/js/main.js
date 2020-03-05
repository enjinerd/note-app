function createNote () {
  MicroModal.init({
    onShow: modal => console.log(`${modal.id} is shown`), // [1]
    onClose: console.log('a'), // [2]
    disableScroll: true, // [5]
    disableFocus: true, // [6]
    awaitOpenAnimation: true, // [7]
    awaitCloseAnimation: false, // [8]
    debugMode: true // [9]
  });
  MicroModal.show('modal-create')
}

const deleteButton = document.getElementsByClassName('delete');

for(let i = 0; i < deleteButton.length; i++){
  deleteButton[i].addEventListener('click', e => {
    const id = e.target.attributes.name.nodeValue;
    MicroModal.show('modal-delete');
    const deleteConfirm = document.getElementById('confirm-delete');
    deleteConfirm.addEventListener('click', e => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", `/notes/${id}/remove?_method=delete`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      xhr.onload = () => {
        window.location.reload(true); 
      }
    })
  })
}
