let drop;

    function initiate() {

        drop = document.getElementById('dropbox');
        drop.addEventListener('dragenter', function(e){ e.preventDefault(); });
        drop.addEventListener('dragover', function(e){ e.preventDefault(); });
        drop.addEventListener('drop', dropped);

    }

    function dropped(e) {
        
        e.preventDefault();
        let files = e.dataTransfer.files;
        let list = '';

        for (let f = 0; f < files.length; f++){

            if (document.getElementById('text')) {
                document.getElementById('text').innerHTML = ''
            }
            list += `<img src="images/${files[f].name}" alt="${files[f].name}">`;

        }
        
        drop.innerHTML += list;
    }

addEventListener('load', initiate);