const btnInput = document.getElementById('btnCreateUrl')

function test(){
    const inputUrl = document.getElementById('inputURL')
    getQrCode(inputUrl.value)
}

async function getQrCode(url){
    try {
        const api = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`
        const response = await fetch(api)

        const div = document.getElementById('containerCreateUrl')
        const divImg = document.createElement('img')
        divImg.src = response.url

        div.appendChild(divImg)
    } catch (err) {
        console.log(`DEU ERRO ${err}`)
    }
}



