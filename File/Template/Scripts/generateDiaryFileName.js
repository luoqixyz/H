function generateDiaryFileName (msg) {
    msg = msg.replace(/\s*/g,"");
    const subScriptOf_ = msg.indexOf('-');
    const week = msg.substr(0, subScriptOf_);
    const dateNow = msg.substr(subScriptOf_ + 1, msg.length)
    const date = new Date(Date.parse(dateNow))
    const weekName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return dateNow + ' | ' + week + '周 | ' + weekName[date.getDay()];
}
module.exports = generateDiaryFileName;