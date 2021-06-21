const createBtn = document.querySelector('#create')
const contentArea = document.querySelector('.viewer')
const body = document.querySelector('body')
const form = document.querySelector('form')


createBtn.addEventListener('click',function(e)  {
    form.className=''
    e.target.className='hidden'
    contentArea.className = 'viewer hidden'
})
console.log("contentArea",contentArea)



form.addEventListener('submit', submitMovie)

function submitMovie (e) {
    e.preventDefault()
    e.target.className="hidden"

    

}
