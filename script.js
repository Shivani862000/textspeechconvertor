 texttoAudio=()=>{
    let txt = document.getElementById("text_to_speech").value;
    
    let speech =new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text= txt;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;


speechSynthesis.speak(speech); 
}