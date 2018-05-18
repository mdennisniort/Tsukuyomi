

export default class Principal {
    add(file, number){ //fonction d'ajout et de remplacement de fichier d'image
        return this.fetch ('http://swiaw166.maif.local/api/library', {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            request: {
                files : this.file, 
                oldMediaId: this.number,
                updateInLayouts: 1
            } //Met tous les paramètres à jour
    }).then(res => {
            return Promise.resolve(res);
    })
  
    }
    check(response) {
        // Lève une erreur dans le cas où l'état de réponse n'est pas bon
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

}