


data= {
    "envelop_addr_to_name": "John Chakder & Family",
    "envelop_addr_to_addr": "College Para, Alipurduar",
    "envelop_addr_from_name": "Mrs. Mita Das & Family",
    "envelop_addr_from_addr": "South Jitpur, Alipurduar",
};
btoa_str= "eyJlbnZlbG9wX2FkZHJfdG9fbmFtZSI6IkpvaG4gQ2hha2RlciAmIEZhbWlseSIsImVudmVsb3BfYWRkcl90b19hZGRyIjoiQ29sbGVnZSBQYXJhLCBBbGlwdXJkdWFyIiwiZW52ZWxvcF9hZGRyX2Zyb21fbmFtZSI6Ik1ycy4gTWl0YSBEYXMgJiBGYW1pbHkiLCJlbnZlbG9wX2FkZHJfZnJvbV9hZGRyIjoiU291dGggSml0cHVyLCBBbGlwdXJkdWFyIn0="

function get_data_from_url() {
    let url = new URL(window.location);
    if(!url) return;
    let data_str_enc = url.searchParams.get("data");
    if(!data_str_enc) return;
    let data_str= atob(data_str_enc);
    let data= JSON.parse(data_str);
    console.table(data)
    return data;
}

window.addEventListener("load", () => {
    data= get_data_from_url();
    if(!data) {
        console.error("Unable to perse URL params");
        return;
    }
    for(let key of Object.keys(data)) {
        let value= data[key];
        
        el_dat= document.getElementById(key);
        if(!el_dat) continue;
        el_dat.innerHTML= value;
    }
}, false)