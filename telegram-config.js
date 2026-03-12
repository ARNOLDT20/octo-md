// telegram-config.js
module.exports = {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN_HERE',
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID || '7303596375',

    // Telegram bot settings
    TELEGRAM_BOT_NAME: 'OCTO-MD Pairing Bot',
    TELEGRAM_BOT_USERNAME: 'octo_md_bot',

    // Webhook settings (optional)
    TELEGRAM_WEBHOOK_URL: process.env.TELEGRAM_WEBHOOK_URL || null,
    TELEGRAM_WEBHOOK_PORT: process.env.TELEGRAM_WEBHOOK_PORT || 3001,

    // Database for Telegram sessions
    TELEGRAM_SESSION_PATH: './database/telegram-sessions/',

    // Commands
    COMMANDS: [
        { command: 'start', description: 'Start the bot' },
        { command: 'pair', description: 'Pair WhatsApp bot' },
        { command: 'owner', description: 'Contact owner' },
        { command: 'menu', description: 'Show commands menu' },
        { command: 'status', description: 'Check bot status' },
        { command: 'help', description: 'Show help information' }
    ],

    // Messages
    MESSAGES: {
        WELCOME: `🤖 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐁𝐎𝐓 𝐏𝐀𝐈𝐑𝐈𝐍𝐆 𝐒𝐘𝐒𝐓𝐄𝐌* 🤖

👋 Welcome to the *Octo-MD WhatsApp Bot Pairing System!*

Use:
*/pair <number>*  
to connect your WhatsApp bot.`,

        HELP: `📚 *𝐎𝐂𝐓𝐎-𝐌𝐃 𝐇𝐄𝐋𝐏 𝐌𝐄𝐍𝐔*

/start - Start the bot
/pair <number> - Pair WhatsApp bot
/owner - Contact owner
/menu - Show commands menu
/status - Check bot status
/help - Show this message`,

        OWNER: `👑 *𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎*

📛 Name: Octo Tech
📞 Phone: +255 627 417 402
📧 Email: atarimo117@gmail.com

🔗 Telegram: @octo_md`
    },

    // URLs
    URLS: {
        GITHUB: 'https://github.com/octo-md/OCTO-MD',
        TELEGRAM_CHANNEL: 'https://t.me/t20classictech',
        TELEGRAM_GROUP: 'https://t.me/octo_md',
        WHATSAPP_CHANNEL: 'https://whatsapp.com/channel/0029VbAjawl9MF8vQQa0ZT32',
        SUPPORT_GROUP: 'https://chat.whatsapp.com/DJMA7QOT4V8FuRD6MpjPpt'
    }
};