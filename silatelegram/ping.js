module.exports = {
    command: 'ping',
    function: async (ctx) => {
        const startTime = Date.now();

        try {
            await ctx.replyWithPhoto(
                { url: 'https://files.catbox.moe/natk49.jpg' },
                {
                    caption: `🏓 *𝐏𝐈𝐍𝐆!*

🔄 Status: Active
⏱️ Latency: Calculating...
📊 Bot: OCTO-MD

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`,
                    parse_mode: 'Markdown'
                }
            ).then(async () => {
                const endTime = Date.now();
                const latency = endTime - startTime;

                await ctx.telegram.editMessageCaption(
                    ctx.chat.id,
                    ctx.message.message_id + 1,
                    null,
                    `🏓 *𝐏𝐈𝐍𝐆!*

🔄 Status: Active
⏱️ Latency: ${latency}ms
📊 Bot: OCTO-MD

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`,
                    { parse_mode: 'Markdown' }
                );
            });
        } catch (error) {
            await ctx.reply(`🏓 *𝐏𝐈𝐍𝐆!*

🔄 Status: Active
⏱️ Latency: Calculated
📊 Bot: OCTO-MD

> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐎𝐜𝐭𝐨 𝐓𝐞𝐜𝐡`, { parse_mode: 'Markdown' });
        }
    }
};