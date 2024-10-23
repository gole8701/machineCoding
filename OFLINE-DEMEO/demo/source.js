if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js').then((res)=>console.log('service worker registered', res)).catch((error)=>console.log('error registering service worker', error));
}
