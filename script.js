function generateUUID() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

document.getElementById('generateBtn').addEventListener('click', () => {
    document.getElementById('uuidDisplay').textContent = generateUUID();
});
document.getElementById('copyBtn').addEventListener('click', () => {
    const uuid = document.getElementById('uuidDisplay').textContent;
    if(uuid=="Click The Button"){
        alert("Generate a uuid first")
    }else{
    navigator.clipboard.writeText(uuid).then(() => {
        alert('UUID copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });}
});