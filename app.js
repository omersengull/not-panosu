   const button = document.querySelector("#addNote");
   const notesContainer = document.querySelector(".notes-container");
   let noteCounter = 0
   button.addEventListener("click", addNote);

   function addNote() {

      let note = document.createElement("div");
      let uppernote = document.createElement("div");
      let lowernote = document.createElement("div");
      let thumb = document.createElement("i");
      let pencil = document.createElement("i");
      let eraser = document.createElement("i");
      let textarea = document.createElement("textarea");

      thumb.style.color = "white";
      pencil.style.color = "white";
      eraser.style.color = "white";
      pencil.classList.add("fa-solid", "fa-pencil");
      eraser.classList.add("fa-solid", "fa-eraser");
      uppernote.appendChild(eraser);
      textarea.style.border = "none";
      textarea.style.boxSizing = "border-box";
      textarea.style.padding = "20px";
      textarea.style.outline = "none";
      textarea.style.width = "400px";
      textarea.style.height = "360px";
      textarea.style.resize = "none";
      uppernote.appendChild(pencil);
      pencil.style.float = "right";
      eraser.style.float = "right";
      thumb.classList.add("fa-solid", "fa-thumbtack");
      thumb.style.marginTop = "15px";
      thumb.style.marginLeft = "10px";
      eraser.style.marginTop = "15px";
      eraser.style.marginRight = "10px";
      pencil.style.marginTop = "15px";
      pencil.style.marginRight = "10px";
      uppernote.style.width = "400px";
      lowernote.style.width = "400px";
      uppernote.style.height = "40px";
      uppernote.style.backgroundColor = "#FF5A61";
      lowernote.style.height = "360px";
      note.style.width = "400px";
      note.style.height = "400px";
      pencil.style.cursor = "pointer";
      eraser.style.cursor = "pointer";

      note.style.marginTop = "50px";
      note.style.marginLeft = "50px";
      lowernote.style.backgroundColor = "white";
      uppernote.appendChild(thumb);
      lowernote.appendChild(textarea);
      note.appendChild(uppernote);
      note.appendChild(lowernote);
      notesContainer.appendChild(note);
      textarea.addEventListener("click", (e) => {
         e.preventDefault();
         noteCounter++;

      });
      pencil.addEventListener("click", () => {
         textarea.focus();
      });
      eraser.addEventListener("click", () => {
         textarea.value = "";
      });
      noteKey = `data_${noteCounter}`;
      textarea.dataset.noteKey = noteKey;
      textarea.addEventListener("input", event => {
         const noteKey = event.target.dataset.noteKey;
         localStorage.setItem(noteKey, JSON.stringify(event.target.value));
      });



   }