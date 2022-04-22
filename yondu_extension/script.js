var voice = null;
var tuner = null;
var last_note = null;
var center = 1100;


function setupMic(){
    if (confirm("can we use your mic?"))
    {
        voice = new Wad({source : 'mic' }); // At this point, your browser will ask for permission to access your microphone.
        checkMicUse()
    }
}


function stopPitching()
{
    tuner.stopUpdatingPitch(); 
}

function checkMicUse() {
    if (voice.mediaStreamSource!=null)
    {
        start()  
    }
    else
        setTimeout(checkMicUse,2000)
}


//TODO add listen to person whistle take average of time period delete last_note global var
function recenter()
{
    center= last_note;
}

function start() 
{
    tuner = new Wad.Poly();
    tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
    tuner.add(voice);
    
    voice.play()
    tuner.updatePitch()
    var logPitch = function(){
        if (typeof tuner.pitch !== 'undefined' && typeof tuner.noteName !== 'undefined')
        if  (tuner.pitch !==null && tuner.noteName !== null)
        {
            //console.log(tuner.pitch, tuner.noteName)
            if (tuner.pitch > 500 && tuner.pitch < 3000)
            {
                last_note = tuner.pitch;
                var val = tuner.pitch - 900
                if (val <0)
                    val = val/-2
                else
                    val = val/-10



                scroll_down(val)
            }
            tuner.pitch = null;
        }   
        requestAnimationFrame(logPitch)
    };
    logPitch(); 
}

function scroll_down(scroll_amount =100){
    window.scroll(window.scrollX,window.scrollY + scroll_amount)
}



/*
voice.play(); // You must give your browser permission to access your microphone before calling play().

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.

var logPitch = function(){
    console.log(tuner.pitch, tuner.noteName)
    requestAnimationFrame(logPitch)
};
logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.

tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.
*/