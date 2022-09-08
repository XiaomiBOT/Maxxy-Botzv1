const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Hai 👋
𝐈𝐧𝐢 𝐥𝐢𝐬𝐭 𝐬𝐞𝐰𝐚 𝐤𝐚𝐦𝐢 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐝𝐢𝐩𝐢𝐥𝐢𝐡

┏━━━•❅•°•❈〔 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 〕
┣★ミ Premium : 10k/Bulan
┣★ミ Premium : 15k/2bulan
┣➲ JANGAN LUPA BUKTI BAYAR🤗
┗━━━•❅•°•❈

┏━━━•❅•°•❈𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧 𝐌𝐞𝐦𝐛𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┣➲ Jadibot
┣➲ Unlock Fitur Premium
┣➲ limit didapat tiap hari dengan claim
┣➲ bisa invite bot ke grup
┗━━━•❅•°•❈
Contact person Owner:
wa.me/6285380166282 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/4a23ffd1899fcac2eb613.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🏧 Sociabuzz',
               url: 'https://youtube.com/channel/UC6GPl9xMWL61NAXQb3HBrRw'
             }

           },
               {
             callButton: {
               displayText: 'Dana',
               phoneNumber: '+62 853-8016-6282'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sewa']
handler.tags = ['donasi']
handler.command = /^sewa$/i

module.exports = handler