navigator.mediaDevices.getUserMedia({audio: true, video:false}).then((stream)=>{
    console.log(stream);
let video=document.getElementById('video');

}).catch((err)=>console.log(err))