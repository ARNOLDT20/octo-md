const { cmd } = require('../momy');
const axios = require('axios');

// Fake vCard for Octo MD
const fakevCard = {
    key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" },
    message: {
        contactMessage: {
            displayName: "© 𝐎𝐂𝐓𝐎-𝐌𝐃",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:𝐎𝐂𝐓𝐎 𝐌𝐃 𝐁𝐎𝐓\nORG:𝐎𝐂𝐓𝐎-𝐌𝐃;\nTEL;type=CELL;type=VOICE;waid=255789661031:+255789661031\nEND:VCARD`
        }
    }
};

// Context helper
const getContextInfo = (sender) => ({
    mentionedJid: [sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363421014261315@newsletter',
        newsletterName: '© 𝐎𝐂𝐓𝐎-𝐌𝐃',
        serverMessageId: 143,
    },
});

// Axios defaults
const AXIOS_DEFAULTS = {
    timeout: 45000,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json'
    }
};

// Format AI response
const formatResponse = (text) => text.split('\n').map(l => `┃ ${l}`).join('\n');

// Call Copilot AI
const callCopilotAI = async (prompt) => {
    const apiUrl = `https://api.yupra.my.id/api/ai/copilot-think?text=${encodeURIComponent(prompt)}`;
    const { data } = await axios.get(apiUrl, AXIOS_DEFAULTS);
    if (!data) throw new Error('No response from API');
    return data.response || data.result || data.data || data.message || JSON.stringify(data);
};

// Unified AI command for Octo MD
cmd({
    pattern: "ai",
    alias: ["think", "reason", "deepthink", "analyze", "ponder", "logic"],
    react: "🧠",
    desc: "Unified AI: quick thinking or step-by-step reasoning",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply, q, args, l }) => {
    try {
        if (!q || !q.trim()) {
            return await conn.sendMessage(from, {
                text: `┏━❑ 𝐎𝐂𝐓𝐎 𝐀𝐈 ━━━━━━━━━
┃ 🧠 Usage:
┃ • .ai your question → Quick AI response
┃ • .ai reason your question → Step-by-step reasoning
┗━━━━━━━━━━━━━━━━━━━━`,
                contextInfo: getContextInfo(sender)
            }, { quoted: fakevCard });
        }

        const isReasoning = args[0]?.toLowerCase() === "reason";
        const prompt = isReasoning ? q.trim().replace(/^reason\s+/i, '') : q.trim();

        if (!prompt) return reply("❌ Please provide a valid question.", { quoted: fakevCard });

        // Show thinking indicator
        const thinkingMsg = await conn.sendMessage(from, {
            text: isReasoning
                ? "🔍 Octo MD is analyzing step by step... ⏳"
                : "🧠 Octo MD is thinking... ⏳"
        }, { quoted: mek });

        try {
            const aiResult = await callCopilotAI(isReasoning ? `Explain step by step: ${prompt}` : prompt);
            let textResponse = aiResult;
            if (textResponse.length > 4096) textResponse = textResponse.substring(0, 4090) + '...';

            const formatted = formatResponse(textResponse);
            const finalText = isReasoning
                ? `┏━❑ 𝐒𝐓𝐄𝐏-𝐁𝐘-𝐒𝐓𝐄𝐏 𝐑𝐄𝐀𝐒𝐎𝐍𝐈𝐍𝐆 ━━━━━━\n${formatted}\n┗━━━━━━━━━━━━━━━━━━━━`
                : `┏━❑ 𝐐𝐔𝐈𝐂𝐊 𝐀𝐈 𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐄 ━━━━━━\n${formatted}\n┗━━━━━━━━━━━━━━━━━━━━`;

            // Delete thinking message
            await conn.sendMessage(from, { delete: thinkingMsg.key });

            // Send AI response
            await conn.sendMessage(from, {
                text: finalText,
                contextInfo: getContextInfo(sender)
            }, { quoted: fakevCard });

        } catch (apiErr) {
            console.error('AI API error:', apiErr);
            await conn.sendMessage(from, { delete: thinkingMsg.key });
            return reply("❌ Octo AI failed to process the request. Try again later.", { quoted: fakevCard });
        }

    } catch (err) {
        console.error('AI command error:', err);
        reply("❌ An error occurred while running Octo AI.", { quoted: fakevCard });
        if (l) l(err);
    }
});