if(!args[0]){
  Users.findOne({id: message.author.id}).then(user=>{
    if(!user) message.reply("Please login to get an account on RDL!\nLogin link:\nhttps://discord.rovelstars.com/login");
    else {
      message.reply("You have R$ **"+user.bal+"**");
    }
  })
}
else {
  getMention(args[0]).then(userhmm=>{
    Users.findOne({id: userhmm.id}).then(user=>{
      if(!user) message.reply("It seems as if He never logined on RDL...");
      else{
        message.reply(`${user.username}'s balance: R$ **${user.bal}**`);
      }
    })
  });
}