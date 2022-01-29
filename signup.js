methods: {
    postNow(e) {
   axios.post('http://localhost:3030/api/new/post', {
     headers: {
       'Content-type': 'application/x-www-form-urlencoded',
     },
     body: this.name
    })
    e.preventDefault();
  }  ,