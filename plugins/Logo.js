const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🥵",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
const config = await readEnv();
let madeMenu = `
╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
     *${pushname}* 
> *තාම මෙනු එකක් නැහැ පුලුවන්නම් හදලා දෙන්න*

*නම ගම දාන්න සේව් දාන්න* 😁

> නම : M.R NAVIYA

> ගම : ගම්පහ

> වයස : 999+

@Single_Boy
> ඉතිම් ලස්සන ලමයෝ තාම සේව් නැද්ද
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ඔයාගෙ නම ගම දාන්න සේවි දාගන්න
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
