function busca() {
    let cod = document.getElementById("cod").value
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")
    let bairro = document.getElementById("bairro")
    let pais = document.getElementById("pais")
    let url = "./ceps.json"
    fetch(url)
    .then(res => res.JSON())
    .then (data =>{
        for( var cep of data.ceps){
            if (cod === cep){
                cidade.value = cep.cidade
                estado.value =
                bairro.value =
                pais.value =
            }
        }

    } )

}