"use strict";module.exports=function(t,o=.6){const r=t.replace("#","").split(/(?=(?:..)*$)/);return"#"+(Math.floor(`0x${r[0]}`*o+255*(1-a))<<16|Math.floor(`0x${r[1]}`*o+255*(1-a))<<8|Math.floor(`0x${r[2]}`*o+255*(1-a))).toString(16)};
//# sourceMappingURL=index.js.map
