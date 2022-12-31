


let el_inputs= document.getElementById("data_form").getElementsByTagName('input');
let el_result_area= document.getElementById("result_area");

for(let input of el_inputs) {
    console.log(input)
}



document.getElementById("get_url").addEventListener("click", e => {
    e.preventDefault();
    let data_json= {};
    for(let input of el_inputs) {
        let id= input.id.trim();
        let value= input.value.trim();
        if(!value) continue;
        data_json[id]= value;
    }
    let data_str= JSON.stringify(data_json);
    let encoded= btoa(data_str);

    let current_url= window.location.href.split("?")[0];
    let new_url= current_url.split("/");
    new_url.pop(); //removes the last element, the current page
    new_url= new_url.join("/");
    new_url= new_url+"/index.html?data="+encoded;


    el_result_area.value= new_url;

}, false)


window.addEventListener("load", () => {
    for(let input of el_inputs) {
        input.addEventListener("change", e => {
            el_result_area.value= "";
        })
    }
}, false);