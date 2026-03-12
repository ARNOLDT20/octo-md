module.exports = {
    command: 'owner',
    function: async (ctx) => {
        try {
            const { Markup } = require('telegraf');

            const ownerInfo = `👑 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎* 👑

📛 Name: Octo Tech
📞 Phone: +255 789 661 031
📧 Email: octotech@example.com
🌐 Location: Tanzania

🔗 *Social Links:*
• GitHub: https://github.com/octo-md
• WhatsApp: https://wa.me/255789661031
• Telegram: @octo_md
• YouTube: Octo Tech

💡 *For support, bug reports, or feature requests, please contact the owner directly.*

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`;

            const buttons = Markup.inlineKeyboard([
                [
                    Markup.button.url('📱 WhatsApp', 'https://wa.me/255789661031'),
                    Markup.button.url('📢 Telegram', 'https://t.me/octo_md')
                ],
                [
                    Markup.button.url('⭐ GitHub', 'https://github.com/octo-md'),
                    Markup.button.url('👥 Support', 'https://t.me/octo_md_support')
                ]
            ]);

            await ctx.replyWithPhoto(
                { url: 'https://files.catbox.moe/natk49.jpg' },
                {
                    caption: ownerInfo,
                    parse_mode: 'Markdown',
                    ...buttons
                }
            );
        } catch (error) {
            await ctx.reply(`👑 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎* 👑

📛 Name: Octo Tech
📞 Phone: +255 789 661 031
📧 Email: octotech@example.com

🔗 WhatsApp: https://wa.me/255789661031

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`, { parse_mode: 'Markdown' });
        }
    }
};