window.onload = function() {

    const text = document.getElementById('text');
    const slider = document.getElementById('slider');
    const code = document.getElementById('color');
    const body = document.getElementById('body');
    const h1 = document.getElementById('h1');
    const div2 = document.getElementById('div2');

    document.addEventListener('input', function(e){
    text.style.backgroundColor = '#'+e.target.value;
    code.textContent = "Color Hex Code: #" + e.target.value;
    });
        
    document.addEventListener('submit', function(f){
    text.style.backgroundColor = '#'+f.target.value;
    code.textContent = "Color Hex Code: #" + f.target.value;
        });
    
    
    let label = document.createElement('label');
    let labelText = document.createTextNode('Enter a code to check its color');
    label.appendChild(labelText);
    let num = document.createElement('input');
    body.appendChild(label);
    body.appendChild(num);
    label.style.color = '#fff';
    label.style.margin = '15px';
    label.style.fontFamily = 'poppins'
    num.style.height = '40px';
    num.style.width = '60px';
    num.style.textAlign = 'center';
    num.style.textTransform = 'uppercase';
    num.style.border = 'solid 1px #000';
    num.style.borderRadius = '5px';
    
    let div = document.createElement('div');
    body.appendChild(div);
    div.appendChild(color);
    div.appendChild(slider);
    div.appendChild(label);
    div.appendChild(num);
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'center';
    div.style.backgroundColor = '#444';
    div.style.borderRadius = '5px';
    div.style.padding = '5px';
    div.style.paddingTop = '10px';
    div.style.marginTop = '-5px';
    div.style.border = 'solid 1px #999';
    div2.style.border = 'solid 1px #999';
    div2.style.padding = '15px';
    div2.appendChild(div);
    div2.style.backgroundColor = '#222';
    
    div2.style.display = 'flex';
    div2.style.flexDirection = 'column';
    div2.style.justifyContent = 'space-between';
    div2.style.alignItems = 'center';
};