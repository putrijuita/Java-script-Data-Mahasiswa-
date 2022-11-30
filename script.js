let SeravinaButton                  = document.querySelector('.SeravinaButton');
let SeravinaOutput                  = document.querySelector('.SeravinaOutput');
let SeravinaInputNim                = document.querySelector('#SeravinaInputNim');
let SeravinaInputNama               = document.querySelector('#SeravinaInputNama');
let SeravinaInputJenisKelamin       = document.querySelector('#SeravinaInputJenisKelamin');
let SeravinaInputAgama              = document.querySelector('#SeravinaInputAgama');
let SeravinaInputJurusan            = document.querySelector('#SeravinaInputJurusan');
let SeravinaInputKomentar           = document.querySelector('#SeravinaInputKomentar');



function OutPutForm(){

    var StatusKawin                     = "";
    var StatusBelumKawin                = "";

    if (document.SeravinaForm.SeravinaInputStatus.checked == true){StatusKawin = "Kawin";}
    else {StatusBelumKawin = " Belum Kawin";}

    const TrSeravina = document.createElement ('tr');
    SeravinaOutput.appendChild(TrSeravina)

    const TdSeravina01 = document.createElement ('td');
    TdSeravina01.textContent = SeravinaInputNim.value;
    TrSeravina.appendChild(TdSeravina01)

    const TdSeravina02 = document.createElement ('td');
    TdSeravina02.textContent = SeravinaInputNama.value;
    TrSeravina.appendChild(TdSeravina02)

    const TdSeravina03 = document.createElement ('td');
    TdSeravina03.textContent = SeravinaInputJenisKelamin.value;
    TrSeravina.appendChild(TdSeravina03)

    const TdSeravina04 = document.createElement ('td');
    TdSeravina04.textContent = SeravinaInputAgama.value;
    TrSeravina.appendChild(TdSeravina04)

    const TdSeravina05 = document.createElement ('td');
    TdSeravina05.textContent =  StatusBelumKawin+ ' '+StatusKawin ;
    TrSeravina.appendChild(TdSeravina05)

    const TdSeravina06 = document.createElement ('td');
    TdSeravina06.textContent = SeravinaInputJurusan.value;
    TrSeravina.appendChild(TdSeravina06)

    const TdSeravina07 = document.createElement ('td');
    TdSeravina07.textContent = SeravinaInputKomentar.value;
    TrSeravina.appendChild(TdSeravina07)

}

SeravinaButton.addEventListener('click',OutPutForm)