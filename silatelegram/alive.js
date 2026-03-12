module.exports = {
    command: 'alive',
    function: async (ctx) => {
        try {
            await ctx.replyWithPhoto(
                { url: 'https://files.catbox.moe/natk49.jpg' },
                {
                    caption: `🤖 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐁𝐎𝐓 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄!* 🤖

✨ Status: Active & Running
⏰ Uptime: 24/7
🔧 Version: 3.0.0
📊 Performance: Optimal

🚀 *Features:*
• WhatsApp Bot Pairing
• Auto-Follow Channels
• AI Integration
• Multi-Number Support

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`,
                    parse_mode: 'Markdown'
                }
            );
        } catch (error) {
            await ctx.reply(`🤖 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐁𝐎𝐓 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄!* 🤖

✨ Status: Active & Running
⏰ Uptime: 24/7
🔧 Version: 3.0.0
📊 Performance: Optimal

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`, { parse_mode: 'Markdown' });
        }
    }
};