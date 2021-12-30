console.log("Face Detector")

const video = document.getElementById('video')

// This is for Previewing only
const setupCamera = () => {
    navigator.mediaDevices
    .getUserMedia({
        video : {width:600 , height:400},
        // audio:true
        audio:false
    })
    .then((stream)=>{
        video.srcObject = stream;
    });
};



// This is for Recoding video then downloading it

// const setupCamera = async () => {
//     const stream = await navigator.mediaDevices
//         .getUserMedia({
//             video: { width: 600, height: 400 },
//             // audio:true
//             audio: false
//         })
//     const data = []
//     const mediaRecorder = new MediaRecorder(stream)

//     mediaRecorder.ondataavailable = (e) => {
//         data.push(e.data)
//     }
//     mediaRecorder.start()
//     mediaRecorder.onstop = (e) => {
//         video.src = URL.createObjectURL(
//             new Blob(data, {
//                 type: data[0].type
//             })
//         )
//     }

// }



setupCamera();