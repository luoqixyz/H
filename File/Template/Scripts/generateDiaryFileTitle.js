function generateDiaryFileTitle (msg) {
    msg = msg.replace(/\s*/g,"");
    const subScriptOf_ = msg.indexOf('-');
    const dateNow = msg.substr(subScriptOf_ + 1, msg.length)
    const date = new Date(Date.parse(dateNow))
    const yesterday = new Date(date.getTime() - 86400000)
    const tommrrow = new Date(date.getTime() + 86400000)

    let firstDay = new Date(date);
    firstDay.setMonth(0);//设置1月
    firstDay.setDate(1);//设置1号
    let diffDays = Math.ceil((yesterday - firstDay) / 86400000);
    let yesterdayWeek= Math.ceil(diffDays / 7);
    diffDays = Math.ceil((tommrrow - firstDay) / 86400000)
    const tommrrowWeek = Math.ceil(diffDays / 7);
    return '[[' + yesterdayWeek + ' - ' + yesterday.toISOString().substring(0, 10) + ']] | [[' + tommrrowWeek + ' - ' + tommrrow.toISOString().substring(0, 10) + ']]';
}
module.exports = generateDiaryFileTitle;
