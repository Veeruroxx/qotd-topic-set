const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", ()=> {
    console.log("READY!");
});
client.on("message", message => {
    var i;
    for(i=0; i<message.content.split("\n").length; i++){
        let arg = message.content.split("\n").slice(i);
        var question = arg.join(" ");
        if(question.toLowerCase().startsWith(`q: `)) {break} else {continue};
    }
    
    const target = client.channels.get('<CHANNEL_ID>');     //CHANNEL ID

    if(message.channel.id != '<CHANNEL_ID') {return}        //CHANNEL ID
    if(question.toLowerCase().startsWith(`q: `)){
        if(question.toLowerCase().startsWith(
            `q: same` ||            //regular
            `q: *same*` ||          //italics   
            `q: **same**` ||        //bold
            `q: ***same***` ||      //bold-italics
            `q: __same__` ||        //underline
            `q: __*same*__` ||      //underline-italics
            `q: *__same__*` ||
            `q: __**same**__` ||    //underline-bold
            `q: **__same__**` ||
            `q: __***same***__` ||  //underline-bold-italics
            `q: ***__same__***` ||
            `q: ~~same~~` ||        //strikethru
            `q: ~~*same*~~` ||      //strikethru-italic
            `q: *~~same~~*` ||  
            `q: ~~**same**~~` ||    //strikethru-bold
            `q: **~~same~~**` ||
            `q: ~~***same***~~` ||  //strikethru-bold-italics
            `q: ***~~same~~***` ||
            `q: __~~same~~__` ||    //strikethru-underline
            `q: ~~__same__~~` ||    
            `q: ~~__*same*__~~`     //strikethru-underline-italic
            )){return} else(target.setTopic(question));
        };
    // if(message.content.includes(`Q: same`)){return}
    // else(console.log(question))
});

client.login(`<TOKEN>`); //TOKEN 