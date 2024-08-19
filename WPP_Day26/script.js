function copyText(){
    const text = document.getElementById('textToCopy').value;
    navigator.clipboard.writeText(text).then(()=>console.log('text copied')).catch(()=>console.log('error'));
}