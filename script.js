const videoElement =document.getElementById('video');
const button= document.getElementById('button');

// Prompt to select media stream and pass to video element

async function selectMediaStream(){
    try{
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata=() => {
            videoElement.play();
        }

    }catch(error){
        console.log("error here")
    }
}

button.addEventListener('click',async () =>{
    // Disable button
    button.disabled=true
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    button.disabled=false;

});

// On load
selectMediaStream();