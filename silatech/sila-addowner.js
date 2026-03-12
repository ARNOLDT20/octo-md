const { cmd, commands } = require('../momy');
const fs = require('fs');
const path = require('path');

// Define combined fakevCard 
const fakevCard = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        contactMessage: {
            displayName: "© OCTO MD",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:OCTO MD BOT\nORG:OCTO MD;\nTEL;type=CELL;type=VOICE;waid=255627417402:+255627417402\nEND:VCARD`
        }
    }
};

const getContextInfo = (m) => {
    return {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363421014261315@newsletter',
            newsletterName: 'OCTO MD',
            serverMessageId: 143,
        },
    };
};

// Creator's number
const CREATOR = '255627417402@s.whatsapp.net';

// Path to store owners
const OWNERS_FILE = path.join(__dirname, '../data', 'owners.json');

// Initialize owners file if doesn't exist
const initializeOwnersFile = () => {
    const dir = path.dirname(OWNERS_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(OWNERS_FILE)) {
        fs.writeFileSync(OWNERS_FILE, JSON.stringify([CREATOR], null, 2));
    }
};

// Get all owners
const getOwners = () => {
    try {
        initializeOwnersFile();
        const data = fs.readFileSync(OWNERS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return [CREATOR];
    }
};

// Add owner
const addOwner = (jid) => {
    try {
        initializeOwnersFile();
        const owners = getOwners();
        if (!owners.includes(jid)) {
            owners.push(jid);
            fs.writeFileSync(OWNERS_FILE, JSON.stringify(owners, null, 2));
        }
        return true;
    } catch (e) {
        return false;
    }
};

// Check if owner
const isOwner = (jid) => {
    const owners = getOwners();
    return owners.includes(jid);
};

// Normalize JID
const normalizeJid = (num) => {
    num = num.replace(/[^0-9]/g, '');
    return num + '@s.whatsapp.net';
};

cmd({
    pattern: "addowner",
    alias: ["octoowner", "setowner"],
    react: "👑",
    desc: "Add bot owner",
    category: "owner",
    filename: __filename
},
    async (conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
        try {
            // Check if sender is owner or creator
            if (!isOwner(sender)) {
                return await conn.sendMessage(from, {
                    text: `❌ Only bot owners can add owners\n\n> © Powered by BLAZE TECH`,
                    contextInfo: getContextInfo({ sender: sender })
                }, { quoted: fakevCard });
            }

            // Get the number to add
            let targetJid;

            if (mek.message.extendedTextMessage?.contextInfo?.mentionedJid?.length) {
                targetJid = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
            } else if (q && q.trim()) {
                targetJid = normalizeJid(q.trim());
            } else {
                return await conn.sendMessage(from, {
                    text: `❌ Please provide a number or mention\n\n> © Powered by BLAZE TECH`,
                    contextInfo: getContextInfo({ sender: sender })
                }, { quoted: fakevCard });
            }

            // Check if already owner
            if (isOwner(targetJid)) {
                return await conn.sendMessage(from, {
                    text: `❌ Person is already an owner\n\n> © Powered by BLAZE TECH`,
                    contextInfo: getContextInfo({ sender: sender })
                }, { quoted: fakevCard });
            }

            // Add owner
            if (addOwner(targetJid)) {
                await conn.sendMessage(from, {
                    text: `┏━❑ NEW OWNER ━━━━━━━━━
┃ ✅ New owner added
┃ 👑 ${targetJid.split('@')[0]}
┗━━━━━━━━━━━━━━━━━━━━

> © Powered by BLAZE TECH`,
                    contextInfo: getContextInfo({ sender: sender })
                }, { quoted: fakevCard });
            } else {
                await conn.sendMessage(from, {
                    text: `❌ Failed to add owner\n\n> © Powered by BLAZE TECH`,
                    contextInfo: getContextInfo({ sender: sender })
                }, { quoted: fakevCard });
            }

        } catch (e) {
            await conn.sendMessage(from, {
                text: `❌ Command failed\n\n> © Powered by BLAZE TECH`,
                contextInfo: getContextInfo({ sender: sender })
            }, { quoted: fakevCard });
            l(e);
        }
    });