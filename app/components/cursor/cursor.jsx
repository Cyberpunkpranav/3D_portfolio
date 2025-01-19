'use client'

const Cursor = () => {

    if(typeof(document)!=='undefined'){
            var cursor = document.getElementById('cursor')
            document.onmousemove = function(e){
               cursor.style.left = (e.pageX-50)+'px'
               cursor.style.top = (e.pageY-50)+'px'
            }
        }
  return (
    <div id='cursor'></div>
  )
}

export default Cursor