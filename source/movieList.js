function streamMode() {
    document.querySelector('.viewer').className='viewer';
    document.querySelector('form').className='hidden';
    document.querySelector('#create').className='';
}

function showMovie (title) {
            
    document.querySelector('.viewer').innerHTML = `
            <video width='320' height='240' controls>
                <source src='./videos/${title}' type='video/mp4'>
            </video>`
}

fetch('./list.json')
.then((res,err) => {
    return res.json();
})
.then((json) => {
    
    let list = '';
    for(let movie of json) {
        
        list += `<li id=${movie.id}><a onclick="
            event.preventDefault();
            streamMode();
            showMovie('${movie.title}');
            "
            href="./videos/${movie.title}">movie${movie.id}</a></li>`
    }
    document.getElementById('movList').innerHTML = list
    
})
.catch((err) => {
    console.log(err)
})