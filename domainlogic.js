let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

function generateDomain(){
    for(var i=0; i<adj.length;i++){
        var nextCount = i+1;
        var prevCount = 0;
        if(i<=0){
                console.log(pronoun[i]+adj[i]+noun[i]+".com")
                console.log(pronoun[i]+adj[i]+noun[nextCount]+".com");
                console.log(pronoun[i]+adj[nextCount]+noun[nextCount]+".com");
                console.log(pronoun[i]+adj[nextCount]+noun[i]+".com");
            
        }else{
            console.log(pronoun[i]+adj[prevCount]+noun[prevCount]+".com")
            console.log(pronoun[i]+adj[prevCount]+noun[prevCount]+".com")
            console.log(pronoun[i]+adj[prevCount]+noun[i]+".com")
            console.log(pronoun[i]+adj[i]+noun[i]+".com")
        }
    }
}

generateDomain();