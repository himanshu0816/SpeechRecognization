window.SpeechRecognition=window.speechRecognition ||window.webkitSpeechRecognition

const recog=new SpeechRecognition();
recog.interimeResults=true;
recog.lang='en-US';

let p=document.createElement('p')
const words=document.querySelector('.words')
words.appendChild(p)
recog.addEventListener("result",e=>{
    const transcript=Array.from(e.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    // console.log(transcript)

    p.textContent=transcript;

    if(e.results[0].isFinal){
        p=document.createElement('p')
        words.appendChild(p)
    }
})


recog.addEventListener('end',recog.start)

recog.start()