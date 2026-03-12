module.exports = {
    command: 'menu',
    function: async (ctx) => {
        try {
            const { Markup } = require('telegraf');

            const menuMessage = `📜 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐌𝐄𝐍𝐔* 📜

🤖 *𝐁𝐀𝐒𝐈𝐂 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:*
• /start - Start the bot
• /pair <number> - Pair WhatsApp bot
• /owner - Contact owner
• /menu - Show this menu
• /ping - Check bot status
• /alive - Check if bot is alive

🔧 *𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:*
• .menu - Show WhatsApp bot menu
• .status - Check bot status
• .restart - Restart bot
• .broadcast - Broadcast message

🛡️ *𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:*
• .antilink [on/off]
• .anticall [on/off]
• .antidelete

🎵 *𝐌𝐄𝐃𝐈𝐀 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:*
• .play <song>
• .yts <query>
• .insta <url>
• .fb <url>

🧠 *𝐀𝐈 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:*
• .ai <question>
• .gpt <prompt>
• .gemini <query>
• .dalle <prompt>

📊 *𝐒𝐓𝐀𝐓𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:*
• .stats
• .ping
• .speed

🔗 *𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐋𝐈𝐍𝐊𝐒:*
• GitHub: https://github.com/octo-md/OCTO-MD
• WhatsApp Channel: https://whatsapp.com/channel/0029VafU76r3bbV9nK4nV73G
• Telegram: @octo_md

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`;

            const buttons = Markup.inlineKeyboard([
                [
                    Markup.button.url('📢 Channel', 'https://t.me/octo_md'),
                    Markup.button.url('👥 Group', 'https://t.me/octo_md_support')
                ],
                [
                    Markup.button.url('⭐ GitHub', 'https://github.com/octo-md/OCTO-MD'),
                    Markup.button.url('🤖 Try Bot', 'https://t.me/octo_md_bot')
                ]
            ]);

            await ctx.replyWithPhoto(
                { url: 'https://files.catbox.moe/natk49.jpg' },
                {
                    caption: menuMessage,
                    parse_mode: 'Markdown',
                    ...buttons
                }
            );
        } catch (error) {
            await ctx.reply(`📜 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔* 📜

🤖 *Basic Commands:*
• /start
• /pair <number>
• /owner
• /menu
• /ping
• /alive

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`, { parse_mode: 'Markdown' });
        }
    }
};