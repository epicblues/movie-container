function showMovie (title) {
            
    document.querySelector('.viewer').innerHTML = `
            <video width='320' height='240' controls>
                <source src='./videos/${title}' type='video/mp4'>
                blank
            </video>`
}

fetch('./list.json')
.then((res,err) => {
    return res.json();
})
.then((json) => {
    console.log(json);
    let list = '';
    for(let movie of json) {
        
        list += `<li id=${movie.id}><a onclick="
            event.preventDefault();
            showMovie('${movie.title}');
            "
            href="./videos/${movie.title}">movie${movie.id}</a></li>`
    }
    document.getElementById('movList').innerHTML = list
    
})
.catch((err) => {
    console.log(err)
})