import { tiktokdl } from '@bochilteam/scraper'
import fg from 'api-dylux'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0] && m.quoted && m.quoted.text) {
    args[0] = m.quoted.text
  }
  if (!args[0] && !m.quoted) throw `Give the link of the video Tiktok or quote a tiktok link`
  if (!args[0].match(/tiktok/gi)) throw `Verify that the link is from TikTok`

  let txt = 'Here your Requested video'

  try {
    const {
      author: { nickname },
      video,
      description,
    } = await tiktokdl(args[0])
    const url =
      video.no_watermark2 ||
      video.no_watermark ||
      'https://tikcdn.net' + video.no_watermark_raw ||
      video.no_watermark_hd

    if (!url) throw global.error

    conn.sendFile(m.chat, url, 'tiktok.mp4', '', m)
  } catch (err) {
    try {
      let p = await fg.tiktok(args[0])
      conn.sendFile(m.chat, p.play, 'tiktok.mp4', txt, m)
    } catch {
      m.reply('*An unexpected error occurred*')
    }
  }
}

handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i

export default handler

























/**

import { tiktokdl } from '@bochilteam/scraper';
import fg from 'api-dylux';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
 if (!args[0] && m.quoted && m.quoted.text) {
  args[0] = m.quoted.text;
}
if (!args[0] && !m.quoted) throw `Give the link of the video Tiktok or quote a tiktok link`;
 if (!args[0].match(/tiktok/gi)) throw `Verify that the link is from TikTok`;
 
 
  let txt = 'Here your Requested video';

  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]);
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
    
    if (!url) throw global.error;
    
    conn.sendFile(m.chat, url, 'tiktok.mp4', '', m);
  } catch (err) {
    try {
      let p = await fg.tiktok(args[0]);
      conn.sendFile(m.chat, p.play, 'tiktok.mp4', txt, m);
    } catch {
      m.reply('*An unexpected error occurred*');
    }
  }
};

handler.help = ['tiktok'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i;

export default handler;





**/







/**

const _0x12ab3b=_0x1ccf;function _0x1ccf(_0x2ae95a,_0x56b3e2){const _0x297f9f=_0x297f();return _0x1ccf=function(_0x1ccf33,_0x397159){_0x1ccf33=_0x1ccf33-0xb8;let _0x11a968=_0x297f9f[_0x1ccf33];return _0x11a968;},_0x1ccf(_0x2ae95a,_0x56b3e2);}function _0x297f(){const _0x35b809=['tiktokimg','command','sendMessage','8cQHjNh','apikey','985285KOICZN','result','2108016GYquPh','audio/mp4','\x0a┌─⊷\x20*𝐖𝐀𝐒𝐈-𝐌𝐃\x20𝐓𝐈𝐊𝐓𝐎𝐊\x20𝐃𝐋*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┃\x20*Likes:*\x20','\x20https://vm.tiktok.com','\x0a┃\x20*Username:*\x20','images','reply','play_count','\x0a└───────────\x0a','23817aNCCcz','11ybfYQM','6ULHULB','\x0a┌─⊷\x20*𝐖𝐀𝐒𝐈\x20𝐓𝐊\x20𝐃𝐋*\x20\x0a┃\x20*Name:*\x20','tiktok.mp3','play','❎\x20Please\x20provide\x20a\x20valid\x20tiktok\x20Link','tiktok.mp4','10869471pkPQeh','sendFile','tiktok','chat','duration','fgmods','json','❎\x20Error','\x0a┃\x20*Likes:*\x20','114pVjetR','unique_id','match','\x0a┃\x20*Views:*\x20','3285170EbcTZV','digg_count','✳️\x20Give\x20the\x20link\x20of\x20the\x20video\x20Tiktok\x20or\x20quote\x20a\x20tiktok\x20link\x0a\x0a\x20📌\x20Example:\x20','6730135MyseON','1615894ZZEvRN','title','nickname'];_0x297f=function(){return _0x35b809;};return _0x297f();}(function(_0x34d71a,_0x4d0bac){const _0xa687a=_0x1ccf,_0x43d3ad=_0x34d71a();while(!![]){try{const _0x323c57=-parseInt(_0xa687a(0xd5))/0x1+parseInt(_0xa687a(0xc5))/0x2*(-parseInt(_0xa687a(0xe0))/0x3)+-parseInt(_0xa687a(0xd7))/0x4+parseInt(_0xa687a(0xcc))/0x5+-parseInt(_0xa687a(0xe2))/0x6*(parseInt(_0xa687a(0xcd))/0x7)+parseInt(_0xa687a(0xd3))/0x8*(parseInt(_0xa687a(0xbc))/0x9)+-parseInt(_0xa687a(0xc9))/0xa*(-parseInt(_0xa687a(0xe1))/0xb);if(_0x323c57===_0x4d0bac)break;else _0x43d3ad['push'](_0x43d3ad['shift']());}catch(_0x3d8b9a){_0x43d3ad['push'](_0x43d3ad['shift']());}}}(_0x297f,0xa7a11));import _0x3d16d8 from'api-dylux';import _0x3111ae from'node-fetch';let handler=async(_0x370638,{conn:_0x15e514,text:_0x542941,args:_0x1b4d9d,usedPrefix:_0xc2be0a,command:_0x4dbb4c})=>{const _0x101c41=_0x1ccf;if(!_0x1b4d9d[0x0])throw _0x101c41(0xcb)+(_0xc2be0a+_0x4dbb4c)+_0x101c41(0xda);if(!_0x1b4d9d[0x0][_0x101c41(0xc7)](/tiktok/gi))throw _0x101c41(0xba);_0x370638['react'](rwait);try{let _0x484341=await _0x3111ae(global['API'](_0x101c41(0xc1),'/api/downloader/tiktok',{'url':_0x1b4d9d[0x0]},_0x101c41(0xd4))),_0x3b7bca=await _0x484341[_0x101c41(0xc2)]();if(!_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xdc)]){let _0x30c54b=_0x101c41(0xe3)+_0x3b7bca['result']['author'][_0x101c41(0xcf)]+_0x101c41(0xdb)+_0x3b7bca['result']['author'][_0x101c41(0xc6)]+'\x0a┃\x20*Duration:*\x20'+_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xc0)]+_0x101c41(0xc4)+_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xca)]+_0x101c41(0xc8)+_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xde)]+'\x0a┃\x20*Description:*\x20'+_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xce)]+_0x101c41(0xdf);_0x15e514[_0x101c41(0xbd)](_0x370638[_0x101c41(0xbf)],_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xb9)],_0x101c41(0xbb),_0x30c54b,_0x370638),_0x370638['react'](done);}else{let _0x5b64b1=_0x101c41(0xd9)+_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xca)]+'\x0a┃\x20*Description:*\x20'+_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xce)]+_0x101c41(0xdf);for(let _0x3305cc of _0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xdc)]){_0x15e514[_0x101c41(0xd2)](_0x370638[_0x101c41(0xbf)],{'image':{'url':_0x3305cc},'caption':_0x5b64b1},{'quoted':_0x370638});}_0x15e514['sendFile'](_0x370638[_0x101c41(0xbf)],_0x3b7bca[_0x101c41(0xd6)][_0x101c41(0xb9)],_0x101c41(0xb8),'',_0x370638,null,{'mimetype':_0x101c41(0xd8)}),_0x370638['react'](done);}}catch(_0x2d9512){_0x370638[_0x101c41(0xdd)](_0x101c41(0xc3));}};handler['help']=[_0x12ab3b(0xbe)],handler['tags']=['dl'],handler[_0x12ab3b(0xd1)]=[_0x12ab3b(0xbe),'tt',_0x12ab3b(0xd0),'tk'];export default handler;
**/
