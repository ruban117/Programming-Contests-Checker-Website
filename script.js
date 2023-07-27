let url="https://kontests.net/api/v1/all"
let a=document.getElementById('c')
let response=fetch(url)
ihtml=""

var imgarr=["https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
,"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://media.istockphoto.com/id/1442946345/photo/software-source-code-programming-code-programming-code-on-computer-screen-developer-working.webp?b=1&s=170667a&w=0&k=20&c=Dgxt0LsK0hkrf1pk4ZdmUPWeFHgjl50JLnipRtrFrR8=",
"https://media.istockphoto.com/id/1497899857/photo/business-woman-working-through-data-looking-at-stats-and-meeting-a-deadline-while-working.webp?b=1&s=170667a&w=0&k=20&c=vAzpsdBYyB-6fg51fDB235yVGzrGG8_F9p5X9bMu0GQ="]
response.then((v)=>{
    return v.json()
}).then((response)=>{
    console.log(response)
    for(item in response){
        ihtml+=`
        <div class="card" style="width: 30rem;">
        <img class="card-img-top" src="${imgarr[Math.floor(Math.random() * imgarr.length)]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${response[item].name}</h5>
          <p class="card-text">Start Time-> ${response[item].start_time}</p>
          <p class="card-text">End Time-> ${response[item].end_time}</p>
          <p class="card-text">Duration-> ${response[item].duration}</p>
          <a href="${response[item].url}" class="btn btn-primary">Click To Visit</a>
        </div>
      </div>
        `
    }
    a.innerHTML=ihtml
})



