require = function e(t, n, a) {
    function i(o, r) {
        if (!n[o]) {
            if (!t[o]) {
                var s = "function" == typeof require && require;
                if (!r && s) return s(o, !0);
                if (c) return c(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l;
            }
            var u = n[o] = { exports: {} };
            t[o][0].call(u.exports, function (e) {
                var n = t[o][1][e];
                return i(n || e);
            }, u, u.exports, e, t, n, a);
        }
        return n[o].exports;
    }
    for (var c = "function" == typeof require && require, o = 0; o < a.length; o++)i(a[o]);
    return i;
}
    ({
        scr_BGM: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "8d8c2z+e3xAIqUkxCqE4NZW", "scr_BGM"),
                cc.Class({
                    "extends":
                        cc.Component, properties:
                    {
                        BGM1: { url: cc.AudioClip, "default": null },
                        BGM2: { url: cc.AudioClip, "default": null },
                        BGM3: { url: cc.AudioClip, "default": null },
                        BGM4: { url: cc.AudioClip, "default": null }
                    }, onLoad: function () { }
                }), cc._RFpop()
        }, {}],
        scr_achieve: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "141caSLnsJIHJZ46hPGujwi", "scr_achieve"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.color = new cc.Color(115, 115, 115), a.getComponent(cc.Label).overflow = 3, a.setContentSize(630, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 50, a.getComponent(cc.Label).fontSize = 32
                }, day: function () {
                    var t = new Date, n = parseInt(t.getTime() / 36e5), a = parseInt(n - e("scr_data2").gameData[2]);
                    return a
                }, onLoad: function () {
                    var t = e("scr_data"), n = e("scr_data2"), a = e("scr_public"), c = t.publicVar2[2] + t.publicVar2[3] + t.publicVar2[4], i = t.itemNum2[17] + t.itemNum2[18] + t.itemNum2[20] + t.itemNum2[21] + t.itemNum2[22] + t.itemNum2[23] + t.itemNum2[24] + t.itemNum2[25], o = this.day(), r = t.choice[5] + t.publicVar[7], s = { 0: "【第一次】第一次击败女贼（小学生）", 1: "【dalao】声望达到99（" + t.achieve + "/99，目前版本声望系统暂未开放）", 2: "【非酋矿老板】被劫匪抢劫66次！（" + t.publicVar2[0] + "/66，包括66次以上，下同）", 3: "【非酋勘察队】前进探索999次，且啥也没找到比例超过25%！你目前一共前进探索" + c + "次，其中有" + t.publicVar2[1] + "次啥也没找到，占比" + (100 * t.publicVar2[1] / c).toFixed(1) + "%", 4: "【非酋流浪汉】捡钱被打10次（" + t.randomEvent[0] + "/10），翻垃圾被抢10次（" + t.publicVar2[13] + "/10）", 5: "【一身骚气∠( ? 」∠)＿】前进探索999次，且战斗占比超过24%！你目前一共前进探索" + c + "次，其中战斗" + t.publicVar2[2] + "次（占比" + (100 * t.publicVar2[2] / c).toFixed(1) + "%），捡道具" + t.publicVar2[3] + "次（占比" + (100 * t.publicVar2[3] / c).toFixed(1) + "%），事件" + t.publicVar2[4] + "次（占" + (100 * t.publicVar2[4] / c).toFixed(1) + "%）", 6: "【震惊！一小伙被十个阿姨轮流摸】被老奶奶摸钱10次（" + t.publicVar2[5] + "/10）！", 7: "【扶我起来，我还能跑】逃跑失败999次（" + t.publicVar2[6] + "/999）", 8: "【一个约定】“10年后，如果你还在，咱们就结婚吧！”女流氓：“嗯...”碰到女流氓49次（" + t.publicVar2[12] + "/49）！", 9: "【巨人杀手】击杀山顶巨人10只或以上（" + t.kills[3] + "/10）", 10: "【县城一霸】击败刀疤男", 11: "【残废】触发烟瘾36次（" + t.publicVar2[8] + "/36）", 12: "【对不起，我要做个坏人】罪恶值60（" + t.publicVar[0] + "/60）", 13: "【抱走晓月】晓月好感400（" + t.choice[5] + "/400）", 14: "【饥渴少女（晓月）】“老哥，我想要...”“没有！滚~”。连续30天不喂食晓月！（" + t.publicVar2[10] + "/30）", 15: "【真.爱】触发回到认识晓月前一天后，放弃认识晓月，并到达省城", 16: "【决心】击败通缉犯", 17: "【你是个好人】拥有6个人的「好人卡」（" + t.randomEvent[1] + "/6）", 18: "【珍.爱】击败草带男孩40次（" + t.kills[2] + "/40），并且被击败20次（" + t.publicVar2[7] + "/20）", 19: "【雷电法王】电疗成功21次（" + t.orderTimes[3] + "/21）", 20: "【收集癖】拥有99个收集类道具（" + i + "/99）", 21: "【就算被伤透，我依然爱着你】找工作失败49次（" + t.publicVar2[9] + "/49）", 22: "【生而为人，我很抱歉】拥有6个人的「眼泪」（" + t.itemNum[12] + "/6，最难成就 ）", 23: "【鬼武者】拥有9级黑刀和9级红夹克", 24: "【人狠话不多】打出99颗以上子弹（" + t.publicVar3[14] + "/99）", 25: "【表白女神】陈碧瑶好感600（" + t.publicVar[7] + "/600），且晓月好感等于0", 26: "【调戏女神】还没想到hiahiahia(?ω?)", 27: "【蛰居族】晓月好感+陈碧瑶达好感达1999（" + r + "/1999）", 28: "【天下第二】通关挑战副本", 29: "【真爱粉】本游戏通关6次以上（" + n.gameData[1] + "/6）", 30: "【作者亲爹妈】本游戏在你手机中存活达300小时（" + o + "/300）" }, l = {
                        0: function () { return t.randomEvent[3] > 0 }, 1: function () { var e = 100 * t.publicVar2[1] / c; return c >= 999 && e >= 24 }, 2: function () { return t.publicVar2[0] >= 66 }, 3: function () { return t.publicVar2[1] >= 999 }, 4: function () { return t.randomEvent[0] >= 10 && t.publicVar2[13] >= 10 }, 5: function () { var e = 100 * t.publicVar2[2] / c; return c >= 999 && e >= 24 }, 6: function () { return t.publicVar2[5] >= 10 }, 7: function () { return t.publicVar2[6] >= 999 }, 8: function () { return t.publicVar2[12] >= 49 }, 9: function () { return t.kills[3] >= 10 }, 10: function () { return 1 == t.publicVar[5] }, 11: function () { return t.publicVar2[8] >= 36 }, 12: function () { return t.publicVar[0] >= 60 }, 13: function () { return t.choice[5] >= 400 }, 14: function () { return (t.publicVar2[10] >= 30 || 1 == t.publicVar2[11]) && (t.publicVar2[11] = 1, a.save(), !0) }, 15: function () { return 300 == t.distance && n.gameData[0] > 0 && 0 == t.choice[5] }, 16: function () { return t.publicVar[3] > 0 }, 17: function () { return t.randomEvent[1] >= 6 }, 18: function () { return t.kills[2] >= 40 && t.publicVar2[7] >= 20 }, 19: function () { return t.orderTimes[3] >= 21 }, 20: function () { return i >= 99 }, 21: function () { return t.publicVar2[9] >= 49 }, 22: function () { return t.itemNum[12] >= 6 }, 23: function () { return t.itemNum2[10] >= 9 && t.itemNum2[11] >= 9 }, 24: function () { return t.publicVar3[14] >= 99 }, 25: function () { return t.publicVar[7] >= 600 && t.choice[5] <= 0 }, 26: function () { return t.publicVar2[9] >= 49 }, 27: function () { return r >= 1999 }, 28: function () { return t.choice[6] >= 16 }, 29: function () { return n.gameData[1] + 1 >= 6 }, 30: function () {
                            return o >= 300
                        }
                    }, u = cc.find("Canvas/Scroll/view/content");
                    s.length;
                    for (var p in s) this.creatText(u, "skill" + p, s[p]), l[p]() && (u.getChildByName("skill" + p).color = new cc.Color(0, 255, 0));
                    var d = cc.find("Canvas/Button_backMainUI");
                    d.on("touchstart", function () {
                        cc.director.loadScene("main")
                    }, d)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_public: "scr_public" }], scr_backMainUI: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "3e3ebJJTbNAf4EOh0d4HMO1", "scr_backMainUI"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    e("scr_public").save(), cc.director.loadScene("main")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, { scr_public: "scr_public" }], scr_backStartUI: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "d5fa6dHVPtCmIx1Z7ZMSeDh", "scr_backStartUI"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("start")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_backSupport: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "210d2Bb6a1Dho5//c333ltz", "scr_backSupport"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("support")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_continueButton: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "4ffa5hmUdNEyJa2jWF2c0nr", "scr_continueButton"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.director.loadScene("main")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_data2: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "77dc9QHo3RF5IGfGNhXskkd", "scr_data2"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function e(e) {
                        "undefined" == typeof e.gameData && (e.gameData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof e.gameData2 && (e.gameData2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                    }
                    var n = { initMoney: 0, dieChoice: [0, 0, 0, 0, 0], gameData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], gameData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
                    JSON.parse(cc.sys.localStorage.getItem("data2")) && (n = JSON.parse(cc.sys.localStorage.getItem("data2")), e(n)), t.exports = n
                }
            }), cc._RFpop()
        }, {}], scr_dataCopy: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "44ab5HIdTVLaYk0L5S0uxkB", "scr_dataCopy"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var e = {}; "undefined"
                        == typeof JSON.parse(cc.sys.localStorage.getItem("dataCopy")) && (e = JSON.parse(cc.sys.localStorage.getItem("userData"))), t.exports = e
                }
            }), cc._RFpop()
        }, {}], scr_data: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "cc6a6czpoJOeJjLRi9RcHDb", "scr_data"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function e(e) {
                        "undefined" == typeof e.itemNum2[18] && (e.itemNum2[18] = 0), "undefined" == typeof e.itemNum2[19] && (e.itemNum2[19] = 0), "undefined" == typeof e.itemNum2[20] && (e.itemNum2[20] = 0), "undefined" == typeof e.itemNum2[21] && (e.itemNum2[21] = 0), "undefined" == typeof e.itemNum2[22] && (e.itemNum2[22] = 0), "undefined" == typeof e.itemNum2[23] && (e.itemNum2[23] = 0), "undefined" == typeof e.itemNum2[24] && (e.itemNum2[24] = 0), "undefined" == typeof e.itemNum2[25] && (e.itemNum2[25] = 0), "undefined" == typeof e.itemNum2[26] && (e.itemNum2[26] = 0), "undefined" == typeof e.itemNum2[27] && (e.itemNum2[27] = 0), "undefined" == typeof e.ifFollow && (e.ifFollow = [0, 0]), "undefined" == typeof e.talkTimes && (e.talkTimes = [0, 0]), "undefined" == typeof e.friendSkill1 && (e.friendSkill1 = [1, 0, 0, 0, 0]), "undefined" == typeof e.friendSkill2 && (e.friendSkill2 = [1, 0, 0, 0, 0]), "undefined" == typeof e.friendSkill && (e.friendSkill = [1, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof e.choice[6] && (e.choice[6] = 0), "undefined" == typeof e.choice[7] && (e.choice[7] = 0), "undefined" == typeof e.choice[8] && (e.choice[8] = 0), "undefined" == typeof e.chioce2 && (e.chioce2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof e.plotId && (e.plotId = 0), "undefined" == typeof e.escapeExp && (e.escapeExp = 0), "undefined" == typeof e.randomEvent[11] && (e.randomEvent[11] = 0), "undefined" == typeof e.randomEvent[12] && (e.randomEvent[12] = 0), "undefined" == typeof e.randomEvent[13] && (e.randomEvent[13] = 0), "undefined" == typeof e.publicVar && (e.publicVar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof e.publicVar2 && (e.publicVar2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                            "undefined" == typeof e.publicVar3 && (e.publicVar3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof e.specialEnemy[300001] && (e.specialEnemy[300001] = { lv: 35, hp: 510, maxHp: 510, att: 0, def: 0 }), "undefined" == typeof e.specialEnemy[300002] && (e.specialEnemy[300002] = { lv: 45, hp: 1550, maxHp: 1550, att: 0, def: 0 }), "undefined" == typeof e.specialEnemy[300003] && (e.specialEnemy[300003] = { lv: 35, hp: 3270, maxHp: 3270, att: 0, def: 0 }), "undefined" == typeof e.specialEnemy[400001] && (e.specialEnemy[400001] = { lv: 100, hp: 3345, maxHp: 3345, att: 0, def: 234 }), "undefined" == typeof e.specialEnemy[400002] && (e.specialEnemy[400002] = { lv: 199, hp: 19999, maxHp: 19999, att: 0, def: 20 }), "undefined" == typeof e.specialEnemy[400003] && (e.specialEnemy[400003] = { lv: 60, hp: 2050, maxHp: 2050, att: 310, def: 121 }), "undefined" == typeof e.specialEnemy[900001] && (e.specialEnemy[900001] = { lv: 15, hp: 575, maxHp: 575, att: 59, def: 16 }), "undefined" == typeof e.specialEnemy[900002] && (e.specialEnemy[900002] = { lv: 20, hp: 998, maxHp: 998, att: 50, def: 36 }), "undefined" == typeof e.specialEnemy[900003] && (e.specialEnemy[900003] = { lv: 500, hp: 16500, maxHp: 16500, att: 1500, def: 1150 }), "undefined" == typeof e.specialEnemy[900004] && (e.specialEnemy[900004] = { lv: 1, hp: 999999, maxHp: 999999, att: 999, def: 0 }), "undefined" == typeof e.specialEnemy[900005] && (e.specialEnemy[900005] = { lv: 500, hp: 599999, maxHp: 599999, att: 0, def: 0 }), "undefined" == typeof e.specialEnemy[900006] && (e.specialEnemy[900006] = { lv: 200, hp: 299999, maxHp: 299999, att: 0, def: 0 }), "undefined" == typeof e.specialEnemy[900007] && (e.specialEnemy[900007] = { lv: 40, hp: 3900, maxHp: 3900, att: 90, def: 50 })
                    }
                    var n = { distance: 1, stayDay: [1, 1, 1, 1], role: { hp: 50, maxHp: 50, att: 10, def: 0 }, money: 5, day: 1, energy: 50, maxEnergy: 50, hunger: 100, maxHunger: 100, health: 30, achieve: 0, shopPoint: 0, enemyId: 0, publicVar: [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], publicVar2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], publicVar3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], orderTimes: [0, 0, 0, 0, 0, 0, 0, 0], randomEvent: [0, 0, 0, 0, 0, 0, 0, 99, 588, 0, 0, 0, 0, 0], choice: [2, 0, 0, 0, 0, 0, 0, 0, 0], chioce2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], kills: [0, 0, 0, 0], itemNum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], itemNum2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ifFollow: [0, 0], plotId: 0, talkTimes: [0, 0], choiceAtt: 0, button: [!0, !1, !1], figthState: 0, figthExp: [0, 0, 0], workExp: 0, winTimes: 0, escapeExp: 0, buffState: [0, 0], ifNotify: !1, skillLv: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0 }, specialEnemy: { 100001: { lv: 1, hp: 20, maxHp: 20, att: 1, def: 0 }, 100002: { lv: 25, hp: 875, maxHp: 875, att: 0, def: 0 }, 200001: { lv: 8, hp: 310, maxHp: 310, att: 20, def: 0 }, 300001: { lv: 20, hp: 510, maxHp: 510, att: 0, def: 0 }, 300002: { lv: 45, hp: 1550, maxHp: 1550, att: 0, def: 0 }, 300003: { lv: 35, hp: 3270, maxHp: 3270, att: 0, def: 0 }, 400001: { lv: 100, hp: 3345, maxHp: 3345, att: 0, def: 234 }, 400002: { lv: 199, hp: 19999, maxHp: 19999, att: 0, def: 20 }, 400003: { lv: 60, hp: 2050, maxHp: 2050, att: 310, def: 121 }, 900001: { lv: 15, hp: 575, maxHp: 575, att: 59, def: 16 }, 900002: { lv: 20, hp: 998, maxHp: 998, att: 50, def: 36 }, 900003: { lv: 500, hp: 16500, maxHp: 16500, att: 1500, def: 1150 }, 900004: { lv: 1, hp: 999999, maxHp: 999999, att: 999, def: 0 }, 900005: { lv: 500, hp: 599999, maxHp: 599999, att: 0, def: 0 }, 900006: { lv: 200, hp: 299999, maxHp: 299999, att: 0, def: 0 }, 900007: { lv: 40, hp: 3900, maxHp: 3900, att: 90, def: 50 } }, friendSkill1: [1, 0, 0, 0, 0], friendSkill2: [1, 0, 0, 0, 0], friendSkill: [1, 0, 0, 0, 0, 0, 0, 0, 0] };
                    JSON.parse(cc.sys.localStorage.getItem("userData")) && (n = JSON.parse(cc.sys.localStorage.getItem("userData")), e(n)), t.exports = n
                }
            }), cc._RFpop()
        }, {}], scr_diaryDetermine: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "12297Yy5bdDErxPgTf9kaM9", "scr_diaryDetermine"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("rest")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_diary: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "a2b8155a0tO3ILQFxW/6pRv", "scr_diary"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(3)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 60, a.getComponent(cc.Label).fontSize = 40
                }, playBGM: function (e) {
                    if ("undefined" != typeof e && "" != e) {
                        cc.audioEngine.stopAll();
                        var t = cc.game._persistRootNodes;
                        for (var n in t) var a = t[n].getComponent("scr_BGM")[e];
                        cc.audioEngine.play(a, !1, 1)
                    }
                }, ifEnd: function () {
                    var t = e("scr_data");
                    t.day > 80 && cc.director.loadScene("end")
                }, onLoad: function () {
                    function t() {
                        var t = e("scr_public").regionId(), n = c.stayDay, a = 0;
                        return 1e3 == t && (a = 1e3 + n[0]), 2e3 == t && (a = 2e3 + n[1]), 3e3 == t && (a = 3e3 + n[2]), 4e3 == t && (a = 4e3 + n[3]), c.day > 143 && (a = c.day), a
                    }
                    var n = cc.find("Canvas/skip"), a = e("scr_public");
                    n.on("touchstart", function () {
                        cc.director.loadScene("rest")
                    }, this), a.ifGameOver(), n.runAction(cc.fadeTo(3, 150));
                    var c = e("scr_data"), i = {
                        1001: ["“你不配做一个父亲！”", "“既然那么恨我！为什么要生下我！”", "“没有你我照样可以活！”", "BGM1", [c.distance, 0]], 1003: ["晚上下起了雨，", "又湿又冷，", "但是，我是不会回去的！:-)", "BGM2", []], 1005: ["16年前，1988年一个炎热的下午，", "我出生在一个小山村。", "母亲在我一岁时离家出走。", "我的童年，只有父亲醉酒后的叫骂声和远处的大山。", "BGM1", []], 1009: ["敏感、内向、偏执，", "不愿在社交上投入任何时间，", "几乎没什么朋友；", "而我唯一的亲人，", "现在也断了联系…", "我以后该怎么办?", "到了县城再去想吧...", "BGM3", []], 2007: ["我来到昨天面试的小区，", "屋里早已没了人影", "", [c.choice[1], 2]], 2021: ["未成年，没技能，不善言谈...", "如果我死了，", "会有人伤心吗？", "BGM3", []], 2022: ["今天街道上聚集了一群人，", "我凑过去一看，", "——我的父亲——正被旁人拉着，他满脸通红，对着一个年轻人大声叫骂，", "他还是一如既往的暴躁，只是头上多了些许白发。", "我没敢多看，赶紧离开了。", "我决定，明天就离开县城，待在这里迟早会被发现。", "BGM1", []], 3001: ["山里异常安静，", "晚上湿度很大，篝火没法驱散。", "我喜欢这种安静，", "——这里才是我的世界。", "BGM2", []], 3002: ["母亲出走后的第二年，", "父亲开始带一些女人回家，", "而我，就像是一个不存在的人。", "或者，", "是个累赘...", "", []], 3003: ["既不种田，也不会哄女人的父亲，", "很快就没人愿意跟着他。", "他开始变得极度暴躁，动不动就砸东西。", "", []], 3004: ["由于生活习惯极差，", "父亲患上了痛风，", "我经常听到他晚上疼得大声叫骂。", "但是，第二天他依然会喝得酩酊大醉。", "", []], 3018: ["邻村，有一个我暗恋多年的女孩", "她清澈、而又懵懂的眼睛，就像朝阳下雾气缭绕的小河。", "然而，", "今年春节，在她辍学外出打工一年后，", "我亲耳听到她对她妈吼道", "“这种破地方！我TM再也不会回来了！......”", "", []], 3027: ["月光透过树叶，映入帐篷，", "斑驳的树影，在夏虫声中轻轻摇曳。", "我，", "真的可以脱开一切关系，而独自存活吗？", "", []],
                        3028: ["世界上有这么一类人，", "即使明知某种关系不健康，", "却依然难以舍弃。", "这是亲情、爱情、无奈、还是无知呢？", "", []], 4001: ["迷宫般的大都会，让我有些彷徨。", "我把帐篷安置在城中村附近的一个桥洞里，", "桥洞已经下住着位中年大叔、一对老人和一个胖女人", "", []], 4004: ["老人和胖女人似乎是一家人。", "老奶奶上午出去，老爷爷下午和晚上出去，留下的一个在家照顾胖女人。", "胖女人要么睡觉，要么整天发呆...", "", []], 4008: ["深夜，老爷爷和胖女人吵了起来。", "“你努力一把、出去工作一下会怎样？”", "“我这样的人谁肯要！”，这是我第一次听见妇女说话。", "“我死了以后、看你怎么办！”，老爷爷大吼。", "“不知道！”，妇女反驳...", "", []], 4009: ["中年大叔，一到晚上就咳嗽得很厉害。", "但是，只要有钱，无论是苦力钱还是怜悯钱，他都会拿去买酒肉和彩票。", "呵呵，和某人，像极了", "", []], 4010: ["碧瑶每天都是早出晚归，", "睡觉时，稍有响动，她就会立即就会坐起来。", "", []], 4018: ["中年大叔对两个新伙伴的加入感到很兴奋，但是发现新来的又是两只闷葫芦后，就只能成天靠逗流浪猫打发时间。", "他聊天的内容无非是，“上过三年学，除了自己名字，一个字也不认识”，“要是中了500万，我就用钱铺张床！”，也没人愿意听。", "", []], 4019: ["“你为什么不去医院看看呢？”", "“看不得！一看一身病，不看没准还能多活几年”，中年大叔认真的说道。", "“......你这身体。以后打算怎么办？”", "“等死吧...”", []], 4022: ["胖女人几天不吃、不喝，不洗漱。", "“你到底有啥苦嘛，我啥子也不要你做，不要求你成家，只希望你能自立，你为什么要把自己搞成这样？”", "老头子一边说，一边抹眼泪。", "", []], 4023: ["“你知不知道那个女人和老人是啥关系？”", "“那个女的是老人的独生女儿，中学开始患上‘郁闷症’，直到现在一直都靠老两口养着”，中年大叔立马来了精神，", "“老人知道自己活不长，想最后拼一把，带女儿来城里看病；为了节约钱，就在桥洞下搭了个窝，一个星期去一次医院呢。”，中年大叔接嘀咕，", "“不过，我觉得她没啥病，说白点，就是懒...”", "", []], 4025: ["一年冬天，我藏在箱底，打算买书的钱，不翼而飞。", "我冲到房间，看到地上的酒瓶和昏昏沉沉的父亲，我立马就明白了。", "我使劲踢了父亲一脚，扔下一句，“你这种懒人，就不应该活着！”", "然后我逃到山里躲了三天...", "", []],
                        4026: ["懒惰、愚蠢、随性，是我很早就给父亲贴上的三个标签。", "这三个标签不断的得到证实、强化和发展，并且一次又一次的激怒着我，最终根深蒂固；我开始拒绝一切沟通，父子感情在标签的指向下，越走越远。", "我的标签是什么？冷漠？自私？孤僻？强势？我并不知道...", "", []], 4028: ["中年大叔晚上肚子疼得厉害，睡不着，把我拉起来聊天，", "“哎，咱们要是病了只能硬抗呀！去年桥下一位糖尿病老大爷，捡破烂时划伤了脚板，没管，结果伤口一直烂到大腿，送到医院没几天就死了，遗体到现在都没人来领呢。”", "我无言以对...", "", []], 4033: ["城中村道路狭窄、密集，一线青天下布满各种电线，不时还有污水滴落；地面潮湿、肮脏，墙上贴满各种小广告，空气中飘来腐败的气味和电视的声音。", "这里既有刚毕业的打工男孩，也有做着明星梦的女孩；有街头小贩，也有无人问津的油画家；有天真浪漫的小孩，也有终身未婚的孤独老人。", "这里就是永不谢幕的百态剧场。", "", []], 4036: ["吃完捡来的盒饭，中年大叔开始感到恶心呕吐，随后开始呕血，", "我急忙向附近民警求助，", "中年大叔被送往附近的医院。", "", []], 4038: ["中年大叔又回到桥下。“怎么样？”，我问道。", "\n“胃上一个大瘤子，光手术就得八千！”", "我心头一紧。中年大叔却接着平静的说道，\n“检查就花了医院不少钱，实在过意不去，就跑了出来...”", "“你赶快去救助站，那里条件比这好！”\n“不想去，反正怎么都会死，还不如死得自由点，这儿至少能有人说说话。”", "“...”", "", []], 4043: ["小时候，山里大雪。", "在挂满了冰溜子的屋檐下，我正向几小个伙伴吹嘘自己的「轻功」。", "小伙伴们嗤之以鼻，我气急败的拉着他们来到结冰的塘边；没走几步，噗通一声，我掉进了塘里；幸好被路过的叔叔救起...", "回家后，父亲一边骂我「傻子」，一边狠命的抽打", "最后，我整整在床上躺了两个星期", "", []], 4044: ["胖女人突然大发脾气、铁盆被踢得咕噜噜的响。", "“你这病，就是闲出来的！你就是没吃过苦！”，老头子涨红了脸。", "“那你让我死呀！！！”，胖女人对吼。", "老奶奶头发凌乱，哭天喊地，死死抱住女儿的大腿。", "最后，中年大叔拉住老爷爷，碧瑶不停的安慰着胖女人，这场风波才算平息。", "", []],
                        4045: ["中年大叔疼痛发作越来越频繁，有时深夜、我还能听到牙齿咬得咯吱响的声音。", "“你不想回老家吗？”，我问道。", "“晚啦！回不去啦！”", "“如果在这里就世，你会甘心？”", "“人都没了，那还管得了这些！你还年轻，我每年都要见几次这种事。”，中年大叔眼神似乎有些疑惑。", "", []], 4048: ["父亲游手好闲、脾气暴躁，像祭山、放荷灯、彩船舞，这些村里的活动，他从来都不参与，村里人对他、避而远之。", "但是他似乎不以为意，照样喝酒闹事，拿着菜刀追赶扔石头的小孩。在别人眼中，他就是个怪人。", "", []], 4051: ["此时正值九月中旬，桥边红色的梧桐落叶上、开始泛起点点露珠，桥下也开始显得阴冷起来。", "痛苦呻吟的中年大叔，心事重重的吉他女孩，迷茫的我。", "每一个活着的人都不简单，我的磨难又算得了什么？", "", []],
                        4052: ["中年大叔腹部出现积水，吃东西就胀，又时候呕吐，浑身疼痛。", "只能依靠上次剩下的止痛药，才能稍稍睡儿。", "", []], 4062: ["中年大叔原本臃肿的身材，现在已经瘦成皮包骨。发霉的床单旁放着大伙给他买的水果、零食，但是他已经完全吃不下了。", "我听见他在小声喊我，我赶忙过去，他蒙蒙脓脓的说道，", "“你还很年轻...别把青春耗在这里...赶紧回去吧...好好充实自己...做个有用的人...不要像我一样...”", "我流下了眼泪。", "", []], 4063: ["中年大叔走了。", "老爷爷请来了民警，民警看了看、通知了民政局。", "不一会儿，就来了一辆白色汽车。中年大叔遗体被装进黑色塑料袋。一分钟不到，汽车就消失在视野中。我猛然惊醒，就像做完一场梦。", "", []], 147: ["小时候，山里穷，小孩子几乎啥都吃，青蛙、蜂蛹、沙虫、茅根、覆盆子......", "不过最有趣是的晚上，邀上几个小伙伴，拿上弹弓、点着领着灯，去林子里打鸟！", "由于我家没人管，打好的鸟、小伙伴都会拿到我家来弄。", "父亲经常馋的流口水，但是没人愿意给他。有一次，我们放下烤熟的肉，去田里偷玉米，回家后被吃光了，父亲说是被狗吃了...", "", []], 148: ["胖女人突然变得高兴起来，", "一边洗碗一边哼着歌，还过来和我打招呼，让人摸不着头脑。", "莫非她真的是在装病？", "", []],
                        150: ["碧瑶开始主动找胖女人聊天、帮她梳理头发，两人似乎成了很好的朋友；如果有时间，碧瑶还会帮老两口洗脏衣服。", "突然觉得自己有些自闭，我一直习惯独来独往、不依靠任何人，从没有想过如何去建立关系网络。", "", []], 153: ["然而，事情似乎比我想得要麻烦，胖女人又开始整天昏睡，而且比原来更加严重。", "“你觉得她是在装病吗？”，我问碧瑶。", "“不是，我以前有一个好姐妹和她情况很像，情绪波动极大，一会儿要寻死，一会儿高兴得像只麻雀；最后，她被诊断出「双相障碍」，重抑郁、轻狂躁，一直靠药物稳定病情。”", "“那她现在好了没？”\n“不知道，后来她去国外了，我没再联系了...”", "", []], 156: ["“你以后有打算怎么办？”，我问碧瑶。", "“等妈妈病好后，我打算回到学校，我想做一个会吉他的英语老师，嘻嘻~”", "“欠债呢？”，我追问。", "“总会有办法的嘛~”，碧瑶似乎很乐观。", "“你将来想做啥？总不能这么混一辈子吧”，碧瑶反问。", "“我不知道...”", "", []], 159: ["除了强悍的野外求生能力，我似乎一无所有————工作技能、社交能力、身份和户口，还有最重要的、规划和理想。", "我只是一个半成品，我需要为我的无知付出代价。", "", []], 165: ["天气慢慢变冷。", "胖女人和老两口也回老家了。", "老人花光了所有积蓄，但是女儿的病依旧没有好转。", "老爷爷并不担心自己以后怎么生存，他最担心依然是自己去世后，女儿该如何安顿的问题。", "至少，目前，似乎还看不到解决的办法。", "", []], 167: ["我走出阴冷的桥洞，来到一座小桥。", "夜已深沉，繁华退去，留下的只有空荡的街道、昏暗的路灯、和翻滚的树叶。", "这里的夜晚没有星星和月亮，我突然想起老家帆布一般质朴的天空，那里才是离天空最近的地方。", "", []], 169: ["整个十月都在下雨，曾经热闹的桥洞开始变得阴冷起来。", "有时没法外出，就只能在桥洞逗逗流浪猫。", "城里开始张灯结彩，随处都能看到有人在张贴红色横幅——“热烈欢迎各位领导莅临XX市视察工作”", "", []], 171: ["整个城市开始躁动不安，到处都在打扫、清理。", "整条街道焕然一新，之前随处可见的流浪汉，都莫名的消失了，", "不知道他们都去了哪里。", "", []], 173: ["1964年，一个叫吴晓雪的女孩出身在一个普通的农家。", "女孩有极高的音乐天赋，吹、拉、弹、唱，样样都会。", "然而命运不济，她因几分之差高考落榜。", "（待续）", "", []], 174: ["1980年，女孩独自来到县城一家餐馆打工。", "一位不善言谈的同店伙计对她倍加照顾，女孩对这个年轻人非常感激。", "后来，饭店因经营不善倒闭。", "年轻人以「能找到更好的工作」为由，将女孩带回山区老家。", "（待续）", "", []], 175: ["在与世隔绝的山中，", "年轻人原形毕露，多次强迫女孩发生关系。", "女孩几次出逃，都被年轻人的父母连同全村村民找回。", "回家后，一顿毒打，并由年轻人父母轮流看管。", "（待续）", "", []], 176: ["后来，年轻人外出打工，在工地上右脚被钢筋穿透，被迫截肢，丧失了工作能力。", "1983年，陷入极度贫困的年轻一家人，在别人的介绍下、以1600元价格把女孩卖给邻省山区一个贫困的男人————大她10岁的杨世军。", "（待续）", "", []], 177: ["杨世军虽然游手好闲、手脚不干净，但是对女孩却非常好，从也不打骂。", "或许太久没有尝过温暖，女孩渐渐在大山里、安定了下来，", "开始了一段平静的生活。", "（待续）", "", []], 178: ["女孩似乎为了报答杨世军，非常努力，", "挑水、扎荆条、养猪、下田...样样都做", "杨世军在女孩反复的劝说下，也开始做些简单的农活。", "日子，开始渐渐有了起色。", "（待续）", "", []], 179: ["1988年，女孩生下一名男孩，杨世军对女孩更加喜爱。", "一年后，杨世军第一次允许女孩独自去县城。", "然而，女孩离开后，就再也没有回来过。", "直到一个月后才得知，女孩已回到\n自己老家...", "这个女孩是我的母亲。", "杨世军是我的父亲。他最常说的一句话是，", "“我不需要你们来可怜！”", "（剧终）", "", []]
                    }, o = i[t()];
                    if ("undefined" == typeof o) cc.director.loadScene("rest");
                    else {
                        var r = o.pop();
                        o.pop();
                        if (0 == r.length || r[0] >= r[1]) {
                            var s = function () { this.creatText(f, "plot" + d, o[d]), d++ }, l = function () { h.active = !0, h.runAction(cc.fadeIn(2)) }, u = o.length, p = this, d = 1, m = 3, f = cc.find("Canvas/Layout"), h = cc.find("Canvas/Determine");
                            window.setTimeout(function () {
                                p.creatText(f, "plot0", o[0])
                            }, 500), this.schedule(s, m, u - 2), this.scheduleOnce(l, m * u)
                        } else cc.director.loadScene("rest")
                    }
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_public: "scr_public" }], scr_eatButton: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "c5f14lLVmRA6r8LzGX0k1Ik", "scr_eatButton"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("eat")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_eatUI: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "d3b81KfDgxIVoCTL1xk+Q03", "scr_eatUI"), cc.Class({
                "extends": cc.Component, properties: { itemUI: { "default": null, type: cc.Prefab } }, itemContent: function a() {
                    var t = this;
                    this.data = e("scr_data");
                    var n = 3 * this.data.orderTimes[1] - this.data.orderTimes[4];
                    1 == this.data.publicVar[1] && (n = 1 * this.data.orderTimes[1] - this.data.orderTimes[4]);
                    var a = {
                        0: {
                            itemName: " 果子 ", needDes: "※拥有：" + this.data.itemNum[0], des: "※效果：饥饿+20，15%几率恢复1点健康值", ifEnough: function (t) { var n = e("scr_data"); n.itemNum[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 20, o = n.itemNum[0], r = c.maxHunger();
                                if (n.hunger < r) if (o >= 1) {
                                    var s = "饥饿+20", l = 100 * Math.random();
                                    n.itemNum[0] -= 1, n.hunger += i, n.orderTimes[5] += 1, l < 15 && (n.health += 1, s += "，健康值+1"), c.save(), a.playText("Canvas/notify", s + "！", 100), t.delayCreatItemUI1()
                                } else a.playText("Canvas/notify", "道具不足！", 100);
                                else a.playText("Canvas/notify", "已经吃不下了！", 100)
                            }
                        }, 1: {
                            itemName: " 熟肉 ", needDes: "※拥有：" + this.data.itemNum2[0], des: "※效果：饥饿+70", ifEnough: function (t) { var n = e("scr_data"); n.itemNum2[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 70, o = n.itemNum2[0], r = c.maxHunger();
                                n.hunger < r ? o >= 1 ? (n.itemNum2[0] -= 1, n.hunger += i, n.orderTimes[2] += 1, c.save(), a.playText("Canvas/notify", "饥饿+" + i + "！", 60), t.delayCreatItemUI1()) : a.playText("Canvas/notify", "道具不足！", 100) : a.playText("Canvas/notify", "已经吃不下了！", 100)
                            }
                        }, 2: {
                            itemName: " 伤药 ", needDes: "※拥有：" + this.data.itemNum2[1], des: "※效果：恢复" + (30 + this.data.orderTimes[0]) + "生命值，且每次使用恢复量永久提高1点", ifEnough: function (t) { var n = e("scr_data"); n.itemNum2[1] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 30 + n.orderTimes[0], o = n.itemNum2[1], r = n.role.hp, s = c.role.maxHp();
                                r < s ? o >= 1 ? (n.itemNum2[1] -= 1, n.role.hp += i, n.role.hp > s && (n.role.hp = s), n.orderTimes[0] += 1, c.save(), a.playText("Canvas/notify", "Hp+" + i, 60), t.delayCreatItemUI1()) : a.playText("Canvas/notify", "道具不足！", 100) : a.playText("Canvas/notify", "生命已达最大值！", 100)
                            }
                        }, 3: {
                            itemName: " 香烟 ", needDes: "※拥有：" + this.data.itemNum2[7] + "（你当前烟瘾为" + n + "%）", des: "※效果：减少1点健康。恢复全部的精力、饥饿和生命！解除【烟瘾】BUFF！(慎用)", ifEnough: function (t) { var n = e("scr_data"); n.itemNum2[7] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = (50 + n.orderTimes[1], n.itemNum2[7]);
                                1 + n.orderTimes[1];
                                i >= 1 ? (n.health -= 1, n.itemNum2[7] -= 1, n.energy = c.maxEnergy(), n.role.hp = c.role.maxHp(), n.hunger = c.maxHunger(), n.orderTimes[1] += 1, n.skillLv[4] = 0, n.itemNum[7] += 1, c.save(), a.playText("Canvas/notify", "健康-1，精力/生命/饥饿恢全恢复！获得烟头*1", 100), t.delayCreatItemUI1()) : a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }, 4: {
                            itemName: " 啤酒 ", needDes: "※拥有：" + this.data.itemNum2[12], des: "※效果：恢复30精力，并获得一个【易拉罐】。10%几率，开罐有奖！30%几率获得【暴躁】状态（伤害增加30%，战后一定几率消失）", ifEnough: function (t) { var n = e("scr_data"); n.itemNum2[12] > 0 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 30, o = n.itemNum2[12], r = 30;
                                if (o >= 1) {
                                    var s = 100 * Math.random(), l = 100 * Math.random(), u = "精力+" + i + "，获得【易拉罐】*1";
                                    n.itemNum2[12] -= 1, n.energy += i, n.itemNum[2] += 1, s >= 90 && s < 97 && (n.itemNum2[12] += 1, u += "，恭喜再来一瓶！"), s >= 97 && (n.money += 10, u += "，恭喜获得1元大奖！"), l < r && (n.buffState[0] = 1, u += "，获得【暴躁】！"), c.save(), a.playText("Canvas/notify", u, 100), t.delayCreatItemUI2()
                                } else a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }
                    };
                    return a
                }, creatPrefab: function (e, t) {
                    var n = cc.instantiate(this.itemUI), a = this.itemContent()[e], c = a.button, i = "item" + e;
                    n.name = i, n.getChildByName("button").getChildByName("name").getComponent("cc.Label").string = a.itemName, n.getChildByName("need").getComponent("cc.Label").string = a.needDes, n.getChildByName("des").getComponent("cc.Label").string = a.des, n.getChildByName("button").getChildByName("name").getComponent("cc.Button").scheduleOnce(function () {
                        n.getChildByName("button").getChildByName("name").on("touchstart", c, this)
                    }, .4), cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n), "undefined" != typeof a.ifEnough && a.ifEnough(i)
                }, creatItemUI1: function () {
                    this.initText(), cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
                    for (var e = 0; e <= 3; e++)this.creatPrefab(e, "page_1")
                }, creatItemUI2: function () {
                    this.initText(), cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
                    for (var e = 4; e <= 4; e++)this.creatPrefab(e, "page_2")
                }, creatItemUI3: function () {
                    this.initText(), cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
                    for (var e = 8; e <= 11; e++)this.creatPrefab(e, "page_3")
                }, initText: function () {
                    var t = e("scr_data"), n = e("scr_public");
                    cc.find("Canvas/hunger").getComponent("cc.Label").string = "饥饿：" + t.hunger + "/" + n.maxHunger() + "  精力：" + t.energy + "/" + n.maxEnergy() + "  生命：" + t.role.hp + "/" + n.role.maxHp()
                }, delayCreatItemUI1: function () {
                    this.scheduleOnce(this.creatItemUI1, .1)
                }, delayCreatItemUI2: function () {
                    this.scheduleOnce(this.creatItemUI2, .1)
                }, delayCreatItemUI3: function () {
                    this.scheduleOnce(this.creatItemUI3, .1)
                }, onLoad: function () {
                    this.creatItemUI1(), this.creatItemUI2()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_effect: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "25c8dKmEHlHoYjQ6qvBKaef", "scr_effect"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var e = this, n = {
                        playText: function (e, t, n) {
                            function a() {
                                if (null != cc.find(e)) if (c <= t.length) {
                                    var i = t.slice(0, c++);
                                    cc.find(e).getComponent("cc.Label").string = i, cc.game.startPlay = window.setTimeout(a, n)
                                } else cc.game.startPlay && window.clearTimeout(cc.game.startPlay)
                            } var c = 0; cc.game.startPlay && window.clearTimeout(cc.game.startPlay), a()
                        }, textZoon: function (e) { var t = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1)); cc.find(e).runAction(t) }, blink2: function (e) { var t = cc.sequence(cc.tintBy(.1, 0, -200, -200), cc.tintBy(.1, 0, 200, 200)); cc.find(e).runAction(t) }, blink: function (t) {
                            var n = 0; e.schedule(function () {
                                var e = n % 2;
                                cc.find(t).color = new cc.Color(255, 255 - 200 * e, 255 - 200 * e), n++
                            }, .06, 4)
                        }, textZoon2: function (e) { cc.find(e).setScale(0, 0); var t = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1)); cc.find(e).runAction(t) }, attackEfect1: function () {
                            var e = cc.find("Canvas/Text").children, t = cc.find("Canvas/Fight").children;
                            for (var n in e) {
                                var a = 500 * Math.random() - 300, c = 1e3 * Math.random() - 500;
                                e[n].x = a, e[n].y = c
                            }
                            for (var i in t) {
                                var o = 500 * Math.random() - 300, r = 1e3 * Math.random() - 500;
                                t[i].x = o, t[i].y = r
                            }
                        }
                    };
                    t.exports = n
                }
            }), cc._RFpop()
        }, {}], scr_end: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "0fdab+YcARFVIOBpUAMxsNQ", "scr_end"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(3)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 0, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 50, a.getComponent(cc.Label).fontSize = 36
                }, onLoad: function () {
                    function t() {
                        var e = u.choice[5] + u.publicVar[7];
                        0 == l.gameData[3] && (l.gameData[1] += 1, l.gameData[3] = 1), e >= 799 && (l.gameData[5] = 1), v.save2()
                    }
                    function n() {
                        s.creatText(d, "plot" + p, r[p]), p++
                    }
                    function a() {
                        function e() {
                            var e = {
                                2e3: function () { n() }, 5e3: function () { n() }, 8e3: function () { n() }, 11e3: function () { n() }, 15e3: function () {
                                    c()
                                }
                            };
                            t += 1e3, "undefined" != typeof e[t] && e[t]()
                        }
                        var t = (window.setInterval(e, 1e3), 0)
                    }
                    function c() {
                        m.active = !0, m.runAction(cc.fadeIn(2)), f.on("touchstart", i, this), h.on("touchstart", o, this)
                    }
                    function i() {
                        v.save2(), cc.director.loadScene("start")
                    }
                    function o() {
                        v.save2(), JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData"), cc.director.loadScene("start")
                    }
                    var r = ["正式开始全职制作游戏已有大半年，我并不担心自己的生存问题，但是对于能否长期做下去却感到有些焦虑。", "国产独立游戏的发展其实上是取决于玩家（或者说市场），而不是开发商或者平台（有市场才会有平台，有平台才会有开发商...）。虽然可能短期内不会有太大问题，但是能否长期、甚至终身坚持，我不是很确定，因为有太多难以控制的因素掺杂。不过，至少目前我会坚持下去——我的目标是打造文字游戏精品品牌。", "如果你真的喜欢独立游戏，恳求您推荐给周围的人————我真的需要你的帮助。", "我是晓风。（2017.10.1）"], s = (r.length, this), l = e("scr_data2"), u = e("scr_data"), p = 0, d = cc.find("Canvas/Show"), m = cc.find("Canvas/choice"), f = m.getChildByName("determine1"), h = m.getChildByName("determine2"), v = e("scr_public");
                    t(), e("scr_data2").gameData[4] = 0, e("scr_public").save2(), a()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_public: "scr_public" }], scr_enemy: [function (e, t, n) {
            "use strict";
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
            }
            cc._RFpush(t, "9ca7eoc05dELIgnx18JSNGI", "scr_enemy"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var n, c = e("scr_public"), i = e("scr_data"), o = { maxHp: c.role.maxHp(), att: c.role.att(), def: c.role.def() }, r = {
                        0:
                        {
                            name: "女贼", lv: 99, hp: 400, maxHp: 400, att: 0, def: 0, publicVar: 0, escapeRate: 10, enemyEscapeRate: 0, lostHealth: 30, achieve: 0, getAtt: 1, drop: [[50, 1, 2, 1], [20, 2, 1, 1], [5, 3, 1, 1], [100, 99, 1, 3]], des: "遭到怪物袭击！", skill: function () { return i.money -= 1, i.role.hp -= 1, "【你被偷走0.1元,hp-1】！" }, defSkill: void 0, winEvent: void 0, lostEvent: function () {
                                return e("scr_data").money -= 1, "被抢0.1元！"
                            }
                        }, 1:
                            { name: "小蚊", lv: 1, hp: 45, maxHp: 45, att: 0, def: 0, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[50, 0, 1, 1], [50, 1, 1, 2]], des: "遭到怪物袭击！", skill: function () { var t = Math.max(5 - o.def, 0); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 2:
                            { name: "小小兔", lv: 3, hp: 255, maxHp: 255, att: 0, def: 5, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 40, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 3, 1, 1]], des: "遭到怪物袭击！", skill: function () { var t = e("scr_data"); return this.publicVar += 1, t.itemNum[0] += 1, "【" + this.name + "向你吐出一个果子！你受到0点伤害】你获得【果子*1】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 3:
                            { name: "小小蛇", lv: 5, hp: 200, maxHp: 200, att: 23, def: 0, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[50, 3, 1, 1], [60, 1, 1, 2]], des: "遭到怪物袭击！", skill: void 0, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 4:
                            { name: "小青（精英）", lv: 8, hp: 315, maxHp: 315, att: 0, def: 0, publicVar: 0, escapeRate: 60, enemyEscapeRate: 0, lostHealth: 2, achieve: 1, getAtt: 2, drop: [[100, 3, 1, 1], [100, 1, 1, 2], [5, 27, 1, 2]], des: "发现一条翠绿色的蛇！", skill: function () { var t = Math.max(11 - o.def, 0); this.publicVar += 1; var n = t * this.publicVar; return e("scr_data").role.hp -= n, "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 21:
                            { name: "葬爱.蚊乐队", lv: 8, hp: 315, maxHp: 315, att: 0, def: 0, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[50, 0, 1, 1], [100, 1, 1, 2]], des: "vi vvi o o o", skill: function () { var t = Math.max(32 - o.def, 0); return e("scr_data").role.hp -= t, "【" + this.name + "使用「上下」，你损失" + t + "点生命】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 2, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 22:
                            { name: "小混混", lv: 11, hp: 410, maxHp: 410, att: 43, def: 0, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[50, 99, 2, 3], [100, 1, 1, 2]], des: "“你笑啥？啊？！”", skill: void 0, defSkill: function () { var e = 100 * Math.random(); return e < 25 ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999, "【" + this.name + "使用「格挡」！】") : "" }, winEvent: void 0, lostEvent: void 0 }, 23:
                        {
                            name: "丐帮304代弟子"
                            , lv: 16, hp: 575,
                            maxHp: 575, att: 63, def: 15, publicVar: 0, escapeRate: 60, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop:
                                [[50, 0, 1, 2], [100, 1, 1, 2], [5, 23, 1, 2]], des: "“兄弟，这是我们的地盘耶~”"
                            , skill:
                                void 0, defSkill:
                                function () { var t = e("scr_public"), n = t.role.att() - t.role.def(), a = 100 * Math.random(); return a < 25 ? (e("scr_data").role.hp -= n, "【" + this.name + "使用「反震」，你损失" + n + "点生命！】") : "" }, winEvent:
                                void 0, lostEvent:
                                void 0
                        }, 24:
                            { name: "恶霸（精英）", lv: 20, hp: 750, maxHp: 750, att: 0, def: 20, publicVar: 0, escapeRate: 80, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 0, 3, 3], [100, 1, 1, 2], [5, 17, 1, 2]], des: "“不批准，也敢翻垃圾桶？”", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.25 * this.hp - o.def, 0)); return t.role.hp -= n, "【" + this.name + "使用「咆哮」，你受到" + n + "点伤害】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 25:
                        {
                            name: "麻城女警", lv: 65, hp: 2145, maxHp: 2145, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 0, achieve: 0, getAtt: 1, drop: [[100, 99, 1, 3], [100, 1, 1, 2], [15, 21, 1, 2]], des: "“别跑！还不快回家喝奶去！”", skill: function () { var t = e("scr_data"), n = 100 * Math.random(), t = e("scr_data"); return this.publicVar += 1, this.publicVar <= 3 ? n < 75 ? "【" + this.name + "操起电棍，向你打来！但是被你躲开啦~】" : (t.role.hp -= 999, "【你被电棍击中！损失999点生命！】") : (this.hp -= 9999, "") }, defSkill: void 0, winEvent: function () { return "【" + this.name + "气急败坏！一棍打在自己脑门上，晕了过去\n_8(:з」∠)_】" }, lostEvent: function () {
                                var t = e("scr_data");
                                e("scr_public");
                                return t.role.hp = o.maxHp, "【你被带到警局，小姐姐给你包扎了下伤口。然后，被放了出来...生命全恢复！】"
                            }
                        }, 26:
                            { name: "煤老板", lv: 17, hp: 545, maxHp: 545, att: 0, def: 40, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 40, lostHealth: 0, achieve: 0, getAtt: 1, drop: [[100, 99, 10, 3]], des: "“我真的是一分钱也没有啊”", skill: function () { return e("scr_data").money += 1, "【" + this.name + "丢了你0.1元，准备要溜了！】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 27:
                        {
                            name: "城管104小分队", lv: 45, hp: 1535, maxHp: 1535, att: 99, def: 0, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 0, achieve: 3, getAtt: 1, drop: [[100, 11, 2, 1]], des: "“这里不许睡觉！听到没！”", skill: function () {
                                var t = e("scr_data"), n = parseInt(4.9 * Math.random());
                                if (0 == n) {
                                    var a = 2 * this.att;
                                    return t.role.hp -= a, "【城管使用「真皮皮鞋」，踢中了你的屁股，你损失" + a + "点生命！】"
                                }
                                if (1 == n) return cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 30, "【城管使用「38元皮鞋」，踢中了你的腹部，你降低30点防御！】";
                                if (2 == n) return cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 30, "【城管使用「铁鞋」，踢中了你的胳膊，你降低30点攻击！】";
                                if (3 == n) {
                                    this.publicVar += 2;
                                    var a = this.att * this.publicVar;
                                    return t.role.hp -= a, "【城管使用「碎骨鞋」，踢中了你的脸部，你的脸上开始流血，损失" + a + "点生命！】"
                                }
                                if (4 == n) {
                                    var a = 5 * this.att;
                                    return t.role.hp -= a, "【城管使用「破鞋」，踢中了你的蛋蛋，你受到" + a + "点伤害！】"
                                }
                            }, defSkill: function () { var e = parseInt(.3 * (this.maxHp - this.hp)), t = 100 * Math.random(), n = ""; return this.hp += e, t < 40 && (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999, n = "【城管使用「防爆盾」！】"), "【城管使用「急救」，恢复" + e + "点生命】" + n }, winEvent: void 0, lostEvent: function () {
                                var t = e("scr_data");
                                return t.itemNum[7] > 0 && (t.itemNum[7] -= 1), "【你被抢走1个..烟头..】"
                            }
                        }, 31:
                            { name: "皮皮猴", lv: 16, hp: 575, maxHp: 575, att: 63, def: 17, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 0, 1, 1], [100, 1, 1, 2]], des: "遭到怪物袭击！", skill: function () { var t = 100 * Math.random(), n = e("scr_data"); return t < 15 ? (this.enemyEscapeRate += 20, n.itemNum[0] >= 1 && (n.itemNum[0] -= 1, this.publicVar += 1), "【你被偷走「果子」*1】！") : "" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.itemNum[0] += this.publicVar, "【你抢回被偷的果子】" }, lostEvent: void 0 }, 32:
                        {
                            name: "野猪", lv: 24, hp: 1100, maxHp: 1100, att: 0, def: 40, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 3, 1, 1], [100, 1, 1, 2]], des: "遭到怪物袭击！", skill: function () {
                                var t = 100 * Math.random(), n = e("scr_data"), a = 120; if (t < 20) {
                                    var c = Math.max(3 * (a - o.def), 0);
                                    return n.role.hp -= c, "【野猪使用「冲撞」！你被猪撞飞啦！你损失" + c + "点生命！】"
                                } return this.hp -= a, "【野猪使用「冲撞」！撞到树上啦！野猪损失" + a + "点生命！】"
                            }, defSkill: void 0, winEvent: void 0, lostEvent: void 0
                        }, 33:
                        {
                            name: "药贩", lv: 32, hp: 999, maxHp: 999, att: 140, def: 0, publicVar: 0, escapeRate: 60, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 1, 2, 2]], des: "“嘿嘿~我家里有132种颜色哟~”", skill: function () { var t = 100 * Math.random(), n = e("scr_data"); return t < 30 && n.itemNum[1] > 0 ? (this.publicVar += 1, n.itemNum[1] -= 1, this.enemyEscapeRate += 20, "【你的伤药被偷啦！" + this.name + "准备要溜！】") : "" }, defSkill: function () {
                                var e = 30, t = 100 * Math.random(); if (e < t) {
                                    var n = parseInt(.1 * this.maxHp);
                                    return this.hp += n, this.def += 20, "【" + this.name + "使用「猥琐2」，防御+20，生命+" + n + "】"
                                } return ""
                            }, winEvent: function () { return e("scr_data").itemNum2[1] += this.publicVar, "【你抢回全部伤药】" }, lostEvent: void 0
                        }, 34:
                            { name: "流浪剑客", lv: 45, hp: 1535, maxHp: 1535, att: 0, def: 46, publicVar: 0, escapeRate: 70, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[50, 4, 2, 1], [50, 1, 2, 1], [100, 1, 2, 2], [5, 26, 1, 2]], des: "“在杀戮中，我终将绽放”", skill: function () { var t = e("scr_data"), n = parseInt(1.5 * (212 - o.def)), a = parseInt(.15 * this.hp); return this.hp -= a, t.role.hp -= n, "【" + this.name + "使用「拼命2」，你损失" + n + "点生命，" + this.name + "损失" + a + "点生命】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 35:
                            { name: "黑熊（精英）", lv: 60, hp: 2025, maxHp: 2025, att: 110, def: 60, publicVar: 0, escapeRate: 80, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 3, 2, 1], [100, 1, 2, 2]], des: "发现一只奶奶的熊！（「咆哮」：自身当前血量越高，伤害越高）", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0)); return t.role.hp -= n, "【黑熊使用「咆哮」，你受到" + n + "点伤害】" }, defSkill: function () { return this.def += 10, "【黑熊使用「霸气护体」，增加10点防御】" }, winEvent: void 0, lostEvent: void 0 }, 36:
                            { name: "果树", lv: 999, hp: 99999, maxHp: 99999, att: 0, def: 0, publicVar: 0, escapeRate: 100, enemyEscapeRate: 1, lostHealth: 0, achieve: 0, getAtt: 1, drop: [], des: "“呜呜呜~”", skill: function () { return this.publicVar += 1, 5 == this.publicVar ? (this.hp -= 999999, "【果树自杀了！】") : "【果树正在哭~】" }, defSkill: void 0, winEvent: function () { var t = this.maxHp - this.hp - 999999, n = Math.max(Math.min(Math.round(t / 500 + 1), 4), 1); return e("scr_data").itemNum[0] += n, "【果树自杀了！你对果树造成" + t + "点伤害，获得【果子】*" + n + "】" }, lostEvent: void 0 }, 41:
                            { name: "熊孩子", lv: 28, hp: 999, maxHp: 999, att: 0, def: 72, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 0, 1, 1]], des: "“大伙快来看哇——！来了个SX！”", skill: function () { this.publicVar += 1; var e = Math.pow(this.publicVar, 2), t = 20 * e, n = Math.pow(this.publicVar + 1, 2) - e; return i.role.hp -= t, this.hp += 50 * n, "【" + e + "个熊孩子向你扔石头！你损失" + t + "点生命！（" + n + "个新孩子加入战斗！）】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 42:
                        {
                            name: "阿宾", lv: 40, hp: 1370, maxHp: 1370, att: 0, def: 180, publicVar: 0, escapeRate: 60, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[80, 0, 1, 1]], des: "“我的眼睛在哪里？我给钱你，请还给我！”", skill: function () {
                                var e = 100 * Math.random(), t = 4 * Math.random() + 2; if (e < 70) {
                                    if (this.publicVar += 1, this.publicVar < t) {
                                        var n = 100 * Math.random();
                                        if (n < 50) return i.money += 1, "【阿宾给了你1毛钱！】";
                                        var a = 599 - o.def;
                                        return i.role.hp -= a, "【“还我眼睛！”。阿宾咬了你一口，你损失" + a + "点生命！】"
                                    }
                                    var a = 599 - o.def;
                                    return i.role.hp -= a, "【“还我眼睛！”。阿宾咬了你一口，你损失" + a + "点生命！】"
                                } return this.hp -= 200, "【“啊！~不要杀我！我没偷你们的东西！”。阿宾生命-200！】"
                            }, defSkill: void 0, winEvent: void 0, lostEvent: void 0
                        }, 43:
                        {
                            name: "卖片老板", lv: 50, hp: 1700, maxHp: 1700, att: 0, def: 120, publicVar: 0, escapeRate: 60, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[60, 99, 2, 3], [40, 1, 1, 2]], des: "“刚到新货，要不要来两张？”", skill: function () {
                                var e = 100 * Math.random(); if (e < 20) return i.money > 0 && (i.money -= 1), "【老板向你飞出一张《夫妻成长日记》。你损失1毛钱！】"; if (e < 80) {
                                    var t = 399 - o.def;
                                    return i.role.hp -= t, "【老板向你甩出一把「老王飞刀」。你损失" + t + "点生命！】"
                                } return i.role.hp += 99, "【老板向你飞出一张《爱拼才会赢》。你恢复99点生命！】"
                            }, defSkill: void 0, winEvent: void 0, lostEvent: void 0
                        }, 44:
                            { name: "阿龙", lv: 70, hp: 2385, maxHp: 2385, att: 0, def: 167, publicVar: 0, escapeRate: 70, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 99, 2, 3], [5, 27, 1, 2]], des: "“这里的小妹全归老子管！”", skill: function () { var e = 382; return i.role.hp -= e, "【阿龙使用「空气拳！」你损失" + e + "点生命！】" }, defSkill: function () { var e = parseInt(382 - .3 * o.att); return this.hp += e, "【阿龙使用「放气治疗！」，恢复" + e + "点生命！】" }, winEvent: void 0, lostEvent: void 0 }, 45:
                            { name: "大龄站街妹", lv: 30, hp: 1040, maxHp: 1040, att: 0, def: 99, publicVar: 0, escapeRate: 60, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 2, 3]], des: "“小伙子，来玩玩嘛，嗯~哼~”", skill: function () { if (i.money >= 1) return i.money -= 1, "【站街妹在你身上蹭了蹭，你被摸走1毛钱！】！"; var e = Math.max(600 - o.def, 0); return i.role.hp -= e, this.enemyEscapeRate += 100, "【“蛤？没钱！？...来人呀——！抓小流氓啦——！”你损失" + e + "点生命！】" }, defSkill: function () { return this.escapeRate -= 10, "【站街使用「拖拽！」你逃跑几率-10%！】！" }, winEvent: function () { return "【“我说没偷你的钱就是没偷，你想怎么着？”】！" }, lostEvent: void 0 }, 1001:
                            { name: "金环蛇", lv: 70, hp: 2385, maxHp: 2385, att: 0, def: 150, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[80, 3, 1, 1]], des: "滋溜~滋溜~", skill: function () { var t = Math.max(220 - o.def, 0) + 30; this.publicVar += 1; var n = t * this.publicVar; return e("scr_data").role.hp -= n, "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 1002:
                            { name: "铃女", lv: 90, hp: 3075, maxHp: 3075, att: 400, def: 200, publicVar: 0, escapeRate: 40, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 2, 3]], des: "“喔~~呵~呵~呵~”", skill: function () { var e = 100 * Math.random(); return e < 30 ? (cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.5 * o.att), "【铃女使用「挠痒痒」，你笑得像个二愣子，攻击下降一半！】") : e < 70 ? i.money > 0 ? (i.money -= 1, "【铃女使用「光速贴近」，你损失0.1元！】") : (this.enemyEscapeRate += 100, "【铃女使用「光溜~(光速溜走)」！】") : (this.def += 60, "【铃女使用「喵盾~」，防御+60！】") }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 1003:
                            { name: "流浪大叔", lv: 120, hp: 4035, maxHp: 4035, att: 0, def: 280, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[50, 0, 1, 2], [100, 1, 1, 2], [5, 26, 1, 2]], des: "“小伙，来热热身子？”", skill: function () { var e = Math.max(parseInt(650 + 50 * this.publicVar - .5 * o.def), 0); return i.role.hp -= e, "【大叔使用「穿心.气合」，你损失" + e + "点生命，大叔攻击提高！】" }, defSkill: function () { var t = e("scr_public"), n = t.role.att(), a = 100 * Math.random(); return a < 30 ? (i.role.hp -= n, "【大叔使用「反震.碎骨」，你损失" + n + "点生命！】") : "" }, winEvent: void 0, lostEvent: void 0 }, 2001:
                        {
                            name: "喵妹", lv: 105, hp: 3599, maxHp: 3599, att: 0, def: 250, publicVar: 0, escapeRate: 40, enemyEscapeRate: 8, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[30, 0, 1, 1], [30, 0, 1, 1], [30, 0, 1, 1], [30, 0, 1, 1], [3, 21, 1, 2]], des: "“(づ?ど)”", skill: function () { var e = parseInt(.2 * i.role.hp + 50); return i.role.hp -= e, "【喵妹使用「撩裙」，你损失" + e + "点生命(当前生命的20%)！】" }, defSkill: function () { return i.role.hp -= 233, cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 99, "【喵妹使用「比心」，你降低99点攻击，233点生命！】" }, winEvent: function () { return "“呜呜呜~我只是想找个人玩玩嘛~(?_?)”" }, lostEvent: function () {
                                return "“帅锅，记得再过来玩哈~?(^_-)”"
                            }
                        }, 2002:
                            { name: "高级金融分析师", lv: 125, hp: 8125, maxHp: 8125, att: 0, def: 297, publicVar: 0, escapeRate: 40, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 4, 3]], des: "“你好，我是从华尔街回国的数据挖掘师！”", skill: function () { return this.publicVar += 1, this.publicVar % 3 == 0 ? i.money >= 4 ? (i.money -= 4, i.itemNum[4] += 1, this.enemyEscapeRate += 30, "【分析师使用「嘴强王者」，你消费了0.4元，获得赠品「亚麻」*1！】") : (i.itemNum[4] -= 3, i.itemNum[4] < 0 && (i.itemNum[4] = 0), this.enemyEscapeRate += 100, "【“mmp，你知道我时间有多宝贵吗？把东西还给我！”。你失去「果子」*3】") : i ? (this.escapeRate -= 30, this.enemyEscapeRate += 5, "【分析师使用「抱大腿」，你逃跑率-30%！】") : void 0 }, defSkill: function () { i.itemNum[0] += 1; var e = parseInt(.1 * o.att); return cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= e, "【分析师丢给你一个果子，你获得「果子」*1，你攻击降低" + e + "！】" }, winEvent: function () { return "【“mmp！不买就算了~你的钱我不还啦~有本事你报警去呀~”】" }, lostEvent: void 0 }, 2003:
                        {
                            name: "胖虎", lv: 155, hp: 5155, maxHp: 5155, att: 0, def: 360, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[30, 7, 1, 1], [30, 1, 1, 2], [30, 1, 1, 2], [5, 17, 1, 2]], des: "“你是要挑战我胖虎？”", skill: function () {
                                if (this.publicVar += 1, this.publicVar % 3 != 0) {
                                    var e = parseInt(o.def), t = parseInt(.2 * this.def * this.publicVar);
                                    return i.role.hp -= e + t, "【胖虎使用「黑虎袭胸！」，你损失" + e + "，附加" + t + "点流血！】"
                                } var n = parseInt(this.def * this.publicVar); return i.role.hp -= n, "【胖虎使用「绝活！千年杀！」，你损失" + n + "点生命！】"
                            }, defSkill: function () { var e = parseInt(.5 * this.def); return i.role.hp -= e, this.def += 99, "【胖虎使用「白鹤起舞」，防御增加99，你受到" + e + "反弹伤害！】" }, winEvent: function () { return "“可以！论骚气，我胖虎服！”" }, lostEvent: function () {
                                return "“你能拿我胖虎怎么办？”"
                            }
                        }, 2004:
                        {
                            name: "龙啸天", lv: 195, hp: 6470, maxHp: 6470, att: 1199, def: 480, publicVar: 0, escapeRate: 40, enemyEscapeRate: 0, lostHealth: 3, achieve: 0, getAtt: 1, drop: [[50, 0, 1, 2], [10, 14, 1, 2]], des: "“新来的，保护费没交？”", skill: function () {
                                if (480 == this.def) {
                                    var e = parseInt(this.publicVar * o.att * .2 + this.att - o.def), t = parseInt(.08 * o.def);
                                    return i.role.hp -= e, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= t, "【龙傲天使用「龙啸」！你受到" + e + "点伤害，防御-" + t + "！】"
                                } return ""
                            }, defSkillfunction: function () {
                                var e = 100 * Math.random(); if (e < 25) return this.publicVar += 1, 480 == this.def ? (this.def += 480, this.att -= 480, "【龙啸天启动「防御姿态」，防御+480，攻击-480，气势+1！】") : (this.def += 480, this.att -= 680, "【龙啸天启动「战斗姿态」，防御-480，攻击+480，气势+1！】"); if (this.def > 480) {
                                    var t = parseInt(this.publicVar * o.def * .4 + .2 * this.def), n = parseInt(.08 * o.att);
                                    return i.role.hp -= t, cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= n, "【龙啸天使用「反震」！你受到" + t + "点伤害，攻击-" + n + "！】"
                                } return ""
                            }, winEvent: function () { return i.money += 5, "“大哥！以后我就跟你混了！”【获得0.5元】" }, lostEvent: function () {
                                return i.money -= parseInt(.1 * i.money), "“你永远都学不乖？”【你损失10%金钱！】"
                            }
                        }, 2005:
                        {
                            name: "排球少女", lv: 85, hp: 2850, maxHp: 2850, att: 0, def: 250, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 99, 2, 3], [6, 27, 1, 2], [6, 26, 1, 2]], des: "“我一定会进省队的！”「特注：随天数成长型对手」", skill: function () {
                                var e = i.day; if (e < 120) {
                                    var t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
                                    return i.role.hp -= n, "【少女使用「晴空霹雳.一段！」，你受到" + n + "点伤害】"
                                } if (e < 150) {
                                    var a = 2 * (i.day - 90);
                                    cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
                                    var t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
                                    return i.role.hp -= n, "【少女使用「晴空霹雳.二段！」，你受到" + n + "点伤害，防御减少" + a + "！】"
                                } var a = parseInt(.1 * o.maxHp); cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a; var c = parseInt(.1 * o.maxHp), t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t); return i.role.hp -= n, this.hp += a, "【少女使用「晴空霹雳.三段！」，你受到" + n + "点伤害，防御减少" + a + "，少女恢复" + c + "点生命！】"
                            }, defSkill: function () {
                                var e = 100 * Math.random(), t = i.day - 90; if (t < 40) return e < t ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999, "【少女使用「幻影旋风.一段！」】") : ""; if (t < 65) {
                                    if (e < t) {
                                        var n = parseInt(.3 * o.def);
                                        return this.def += n, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999, "【少女使用「幻影旋风.二段！」，少女增加" + n + "点防御！】"
                                    }
                                    return ""
                                } if (e < t) {
                                    var n = parseInt(.3 * o.def), a = parseInt(.7 * o.att);
                                    return this.def += n, i.role.hp -= a, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999, "【少女使用「幻影旋风.三段！」，少女增加" + n + "点防御！你受到" + a + "点反弹伤害！】"
                                } return ""
                            }, winEvent: function () { return "“我一定会更强的！”" }, lostEvent: void 0
                        }, 3001:
                            { name: "吸血蝙蝠", lv: 120, hp: 12e3, maxHp: 12e3, att: 360, def: 140, publicVar: 0, escapeRate: 20, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "“乌~拉！”", skill: function () { var t = Math.max(parseInt(.5 * this.att), 0); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 3002:
                            { name: "彩色蜘蛛", lv: 150, hp: 15e3, maxHp: 15e3, att: 450, def: 175, publicVar: 0, escapeRate: 10, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "", skill: function () { var e = 100 * Math.random(); return e < 30 ? (this.escapeRate -= 10, cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.25 * o.att), "【" + this.name + "使用「束缚」，你攻击降低25%，逃跑率降低10%！】") : "【" + this.name + "使用「束缚」，但是被你躲开啦！】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 3003:
                            { name: "黑头剑蛇", lv: 190, hp: 19999, maxHp: 19999, att: 599, def: 221, publicVar: 0, escapeRate: 0, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "", skill: function () { var t = parseInt(.2 * this.att), n = parseInt(.1 * o.def); this.publicVar += 1; var a = t * this.publicVar; return e("scr_data").role.hp -= a, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= n, "【毒酸：每回合损失" + a + "点生命，" + n + "点防御！】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 3004:
                        {
                            name: "变异的巨型猫", lv: 240, hp: 24865, maxHp: 24865, att: 740, def: 270, publicVar: 0, escapeRate: -10, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "", skill: function () {
                                var e = 100 * Math.random(); if (e < 30) {
                                    var t = parseInt(.2 * i.role.hp);
                                    return i.role.hp -= t, "【巨猫使用「疯狂撕咬」你损失" + t + "点生命！】"
                                } return ""
                            }, defSkill: function () { var e = 100 * Math.random(); return e < 30 ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999, "【" + this.name + "躲避你的攻击！】") : "" }, winEvent: void 0, lostEvent: void 0
                        }, 3005:
                        {
                            name: "变异的流浪狗", lv: 300, hp: 3e4, maxHp: 3e4, att: 900, def: 350, publicVar: 0, escapeRate: -20, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "", skill: function () {
                                var t = e("scr_data"), n = 100 * Math.random(); this.publicVar += 1; var a = 10 * this.publicVar + 20; if (n < a) {
                                    var c = 2 * (this.att - o.def);
                                    return t.role.hp -= c, "【" + this.name + "使用「疯狂暴击」，你损失" + c + "点生命！】"
                                } return ""
                            }, defSkill: function () { return this.att += parseInt(.1 * this.att), this.def -= parseInt(.1 * this.def), "【流浪狗狂躁，攻击提高10%，防御降低10%！】" }, winEvent: void 0, lostEvent: void 0
                        }, 3006:
                            { name: "变异的巨蜥", lv: 375, hp: 36e3, maxHp: 36e3, att: 1150, def: 434, publicVar: 0, escapeRate: -30, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "", skill: function () { return cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.08 * o.def), cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.08 * o.def), "【巨蜥使用「粘液」，你降低8%攻击，8%防御！】" }, defSkill: function () { var e = parseInt(.06 * this.maxHp); return this.hp += e, "【巨蜥使用自愈，恢复" + e + "点生命！】" }, winEvent: void 0, lostEvent: void 0 }, 3007:
                        {
                            name: "被割掉舌头的人", lv: 475, hp: 45e3, maxHp: 45e3, att: 1400, def: 599, publicVar: 0, escapeRate: -40, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "“啊~呜~呜~”", skill: function () {
                                var e = 100 * Math.random(); if (e < 50) {
                                    var t = this.att;
                                    return i.role.hp += t, "【无舌人对你使用「治疗」，你恢复" + t + "点生命】"
                                } this.publicVar += 3; var n = 3 * this.att - o.def; return i.role.hp -= n, "【无舌人对你使用「撕咬」，你损失" + n + "点生命，并附加3层毒素伤害！】"
                            }, defSkill: function () {
                                if (this.publicVar > 0) {
                                    var t = e("scr_data"), n = parseInt(.1 * this.att);
                                    this.publicVar += 1;
                                    var a = n * this.publicVar;
                                    return t.role.hp -= a, "【毒素：每回合损失" + a + "点生命】"
                                } return ""
                            }, winEvent: void 0, lostEvent: void 0
                        }, 3008:
                        {
                            name: "看守的士兵", lv: 600, hp: 6e4, maxHp: 6e4, att: 1800, def: 699, publicVar: 0, escapeRate: -50, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "“这里不准进入！”", skill: function () {
                                if (this.publicVar += 1, this.publicVar % 4 == 0) {
                                    var e = 5 * this.att;
                                    return i.role.hp -= e, "【" + this.name + "向你发射了一颗子弹！击中！你损失" + e + "点生命！】"
                                } return "【“警告！赶紧离开~不然就开枪了~”】"
                            }, defSkill: function () { var e = 100 * Math.random(); return e < 30 ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999, "【" + this.name + "使用「防爆盾」！】") : "" }, winEvent: void 0, lostEvent: void 0
                        }, 3009:
                        {
                            name: "军官", lv: 800, hp: 75e3, maxHp: 75e3, att: 2499, def: 999, publicVar: 0, escapeRate: -60, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "“你怕是没见过会用刀的人！”", skill: function () {
                                if (4 == this.publicVar) {
                                    var e = this.att * (1 + this.publicVar);
                                    return i.role.hp -= e, "【" + this.name + "使用「终结.斩杀！」，你受到" + e + "点生命！】"
                                } this.publicVar += 1; var t = this.att, n = parseInt(.1 * this.att * this.publicVar); return i.role.hp -= t + n, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def), cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att), "【" + this.name + "使用「剔骨小刀！」你受到" + t + "点伤害，附加" + n + "流血，攻防降低5%！】"
                            }, defSkill: function () { return this.att += parseInt(.05 * this.att), "【" + this.name + "使用「集中」，" + this.name + "攻击强化！】" }, winEvent: void 0, lostEvent: void 0
                        }, 3010:
                            { name: "科学家", lv: 1e3, hp: 99999, maxHp: 99999, att: 2999, def: 1199, publicVar: 0, escapeRate: -70, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 16, 1, 2], [100, 16, 1, 2]], des: "“入侵者，既然你来到这里，就不太可能出去了~”", skill: function () { this.publicVar += 1; var e = parseInt(this.att * (1 + this.publicVar / 10)); return i.role.hp -= e, this.hp += e, "【" + this.name + "喷出「靶向喷雾」你受到" + e + "点伤害。" + this.name + "恢复" + e + "点生命，并收集1点能量！】" }, defSkill: function () { if (this.publicVar % 4 == 0) return this.def = 899, "【" + this.name + "「无敌屏障」被击破！】"; if (this.publicVar % 2 == 0) return this.def = 99999, "【" + this.name + "启动「无敌屏障」！】"; var e = parseInt(o.att * (.2 + this.publicVar / 10)); return i.role.hp -= e, "【" + this.name + "开启「反射屏障」你受到" + e + "点伤害！】" }, winEvent: void 0, lostEvent: void 0 }, 100:
                            { name: "女贼(呆萌)", lv: 1, hp: 60, maxHp: 60, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 0, achieve: 0, getAtt: 1, drop: [], des: "把钱交出来<(｀^′)>", skill: function () { var t = e("scr_data"); return t.money > 0 ? (t.money -= 1, this.publicVar += 1, "【你被偷走0.1元(笑)】") : "【“哼！不跟你玩了！”】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"), n = Math.min(10, this.publicVar + 3); return t.money += n, "【你从女贼身上抢到" + (n / 10).toFixed(1) + "元】" }, lostEvent: void 0 }, 101:
                        {
                            name: "胡渣壮汉（精英）", lv: 12, hp: 485, maxHp: 485, att: 30, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 2, getAtt: 2, drop: [[100, 1, 2, 2], [100, 7, 1, 2], [100, 12, 1, 2], [100, 20, 1, 2]], des: "“给老子滚远点~！”", skill: function () { return this.att += 7, "【壮汉暴跳如雷，攻击强化！】" }, defSkill: function () { var t = e("scr_public"), n = t.role.att() - t.role.def(), a = 100 * Math.random(); return a < 35 ? (e("scr_data").role.hp -= n, "【壮汉使用「反震」，你损失" + n + "点生命！】") : "" }, winEvent: function () { return e("scr_data").choice[0] = 0, "【“你给老子等着！”】" }, lostEvent: function () {
                                var t = e("scr_data");
                                return t.itemNum2[0] -= t.itemNum2[0], t.itemNum2[7] -= t.itemNum2[7], "【你损失全部的熟肉和香烟！】【“别让老子再看到你，听见没！”】"
                            }
                        }, 102:
                        {
                            name: "西装男(精英)", lv: 10, hp: 410, maxHp: 410, att: 30, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 1, drop: [[100, 1, 4, 2], [50, 25, 1, 2]], des: "“小兄弟，过来一下”", skill: function () {
                                if (this.publicVar += 1, this.publicVar % 3 == 0) {
                                    var e = 99;
                                    return this.hp += e, this.att += 5, "【" + this.name + "使用「治疗」，恢复" + e + "点生命，攻击提高5点！】"
                                } return ""
                            }, defSkill: void 0, winEvent: function () { return e("scr_data").choice[0] = 1, "【" + this.name + "逃走了！】" }, lostEvent: function () {
                                var t = e("scr_data"), n = t.money;
                                return t.money -= n, "【你损失全部的钱！】"
                            }
                        }, 103:
                        {
                            name: "刀疤男（BOSS）", lv: 23, hp: 855, maxHp: 855, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 3, getAtt: 3, drop: [[100, 11, 1, 2]], des: "“x你x！”", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + 20, 0)), a = parseInt(.3 * n); return this.hp += a, t.role.hp -= n, "【刀疤男使用「嗜血狂魔」，你受到" + n + "点伤害,刀疤男恢复" + a + "点生命】" }, defSkill: function () { var e = 100 * Math.random(); return e < 15 ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999, "【刀疤男使用「格挡」！】") : "" }, winEvent: function () { var t = e("scr_data"); return t.choice[0] = 1, t.publicVar[5] = 1, "【" + this.name + "被人救走了！】" }, lostEvent: function () {
                                var t = e("scr_data");
                                return t.energy = 0, t.choice[0] = 2, "【你受重伤！损失全部的精力】"
                            }
                        }, 104:
                            { name: "看守者", lv: 15, hp: 540, maxHp: 540, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 11, 1, 1]], des: "“我叫你滚啦！——”", skill: function () { var t = Math.max(40 - o.def, 0); return this.hp -= 50, e("scr_data").role.hp -= t, "【看守者使用「拼命」，对你造成" + t + "点伤害，看守者损失50点生命】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.choice[3] = 2, "【你已拥有白色粉末*" + t.itemNum[11] + "】" }, lostEvent: void 0 }, 105:
                        {
                            name: "追杀者", lv: 35, hp: 1498, maxHp: 1498, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 0, getAtt: 1, drop: [[100, 11, 2, 1]], des: "“我不跟你多BB哈~杀手得有个B样！”", skill: function () {
                                var t = e("scr_data"), n = 100 * Math.random(); if (this.publicVar += 1, this.publicVar <= 20) {
                                    if (n < 85) return "【追杀者拿起铁锹，向你发射了一颗子弹！但是未命中】";
                                    var a = 699 - o.def;
                                    return t.role.hp -= a, "【追杀者拿起铁锹，向你发射了一颗子弹！击中！你损失" + a + "点生命！】"
                                } return "【追杀者拿起铁锹，但是发现没子弹啦！】"
                            }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return "【你已拥有白色粉末*" + t.itemNum[11] + "】" }, lostEvent: function () {
                                var t = e("scr_data");
                                return t.itemNum[11] = 0, "，你失去所有【白色粉末】"
                            }
                        }, 106:
                        {
                            name: "劫匪（精英）", lv: 40, hp: 1370, maxHp: 1370, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 2, achieve: 2, getAtt: 1, drop: [[100, 99, 6, 3], [50, 23, 1, 2]], des: "“别挡老子路！”", skill: function () { var t = Math.max(100 - o.def, 0); this.publicVar += 1; var n = t * this.publicVar; return e("scr_data").role.hp -= n, "【劫匪使用「放血」，每回合损失" + n + "点生命（" + this.publicVar + "层）】" }, defSkill: void 0, winEvent: function () { return "“大爷饶命啊！m(_ _)m”" }, lostEvent: function () {
                                return "“叫NM多管闲事！”"
                            }
                        }, 107:
                        {
                            name: "不干净的流浪汉（精英）", lv: 50, hp: 1700, maxHp: 1700, att: 243, def: 50, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 1, drop: [[100, 25, 1, 2], [100, 24, 1, 2], [50, 27, 1, 2]], des: "“我长啥样，心里会没个B数？”", skill: void 0, defSkill: function () { var t = e("scr_public"), n = t.role.att() - t.role.def(), a = 100 * Math.random(); return a < 40 ? (e("scr_data").role.hp -= n, "【流浪汉使用「反震」，你损失" + n + "点生命！】") : "" }, winEvent: function () { return "“你给老子等着！老子还有来的”" }, lostEvent: function () {
                                return "“老子脸上写着王八蛋？”"
                            }
                        }, 108:
                        {
                            name: "通缉犯（BOSS）", lv: 60, hp: 2199, maxHp: 2199, att: 0, def: 20, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 999, achieve: 5, getAtt: 5, drop: [[100, 11, 2, 1], [100, 8, 1, 2], [100, 27, 2, 2], [100, 17, 1, 2]], des: "“cnm！别坏老子好事！”", skill: function () { var t = e("scr_data"), n = e("scr_data2"); this.publicVar += 1; var a = 30 * this.publicVar, c = Math.max(parseInt(180 + 10 * this.publicVar - o.def - 40 * n.gameData[0]), 0); t.role.hp -= c + a; var i = parseInt(.05 * this.hp); return this.hp -= i, "【" + this.name + "使用「拼命3」，你损失" + c + "点生命，每回合损失" + a + "点生命（流血），杀人犯损失" + i + "点生命】" }, defSkill: function () { var t = e("scr_data"), n = this.def; return this.def += 20, t.role.hp -= n, "【杀人犯使用「霸气护体2」，增加20点防御，你受到" + n + "点伤害】" }, winEvent: function () { var t = e("scr_data"); return t.distance += 1, t.publicVar[3] = 1, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = e("scr_data2");
                                return t.ifFollow[0] = 0, t.plotId = Math.min(2 + n.gameData[0], 4), e("scr_public").save(), cc.director.loadScene("plot"), ""
                            }
                        }, 109:
                        {
                            name: "城中村大佬（精英）", lv: 70, hp: 2460, maxHp: 2460, att: 0, def: 141, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 1, drop: [], des: "“你是个sb？”", skill: function () { var e = parseInt(.15 * (this.maxHp - this.hp)), t = 317 + o.def; return i.role.hp -= t, "【dalao使用「穿透」，你损失" + t + "点生命，小兰使用「崇拜」，dalao恢复" + e + "点生命！】" }, defSkill: void 0, winEvent: function () { return i.publicVar2[15] += 1, 0 == i.publicVar2[27] ? (i.publicVar2[27] = 1, "你从大佬身上找到一本书，获得《坎贝尔骨科手术学》书籍（请去看书界面使用）！") : "" }, lostEvent: function () {
                                return i.money = 0, "你损失全部的金钱！！！"
                            }
                        }, 110:
                        {
                            name: "城市治安管理408分队", lv: 199, hp: 6222, maxHp: 6222, att: 405, def: 200, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 2, achieve: 1, getAtt: 1, drop: [[60, 7, 1, 2], [60, 7, 1, 2], [60, 7, 1, 2]], des: "“不许睡觉，听到没！”", skill: void 0, defSkill: void 0, winEvent: function () { return 0 == i.publicVar[8] && (i.ifFollow[1] = 0, i.publicVar[7] -= 700, i.friendSkill[1] = 0, i.friendSkill[3] = 0, i.friendSkill[4] = 0, i.friendSkill[5] = 0, i.friendSkill[6] = 0, i.friendSkill[8] = 0, c.init()), "“可以，你们两个给我等好喽！”" }, lostEvent: function () {
                                return 0 == i.publicVar[8] && (i.ifFollow[1] = 0, i.publicVar[7] -= 700, i.friendSkill[1] = 0, i.friendSkill[3] = 0, i.friendSkill[4] = 0, i.friendSkill[5] = 0, i.friendSkill[6] = 0, i.friendSkill[8] = 0), i.money -= parseInt(.5 * i.money), c.init(), "你损失一半的金钱！"
                            }
                        }, 111:
                        {
                            name: "城中村大佬（精英）", lv: 70, hp: 2460, maxHp: 2460, att: 0, def: 121, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 1, drop: [], des: "“你是个sb？”", skill: function () { var e = 317 + o.def; return i.role.hp -= e, "【大佬使用「穿透」，你损失" + e + "点生命！】" }, defSkill: function () { var e = parseInt(.15 * (o.maxHp - i.role.hp) + 50); return i.role.hp += e, "【小兰对你使用「协助」，你恢复" + e + "点生命！】" }, winEvent: function () { return i.publicVar2[15] += 1, 0 == i.publicVar2[27] ? (i.publicVar2[27] = 1, "你从大佬身上找到一本书，获得《坎贝尔骨科手术学》书籍（请去看书界面使用）！") : "" }, lostEvent: function () {
                                return "“老子打自己的女人，要你管？”"
                            }
                        }, 112:
                        {
                            name: "皮衣男（小BOSS）", lv: 199, hp: 19999, maxHp: 19999, att: 0, def: 499, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 1, drop: [], des: "“你和她啥关系？”", skill: function () {
                                var e = parseInt(699 - .5 * o.def - cc.find("Event/scr_fight").getComponent("scr_fight").correct[1]); if (4 == this.publicVar) {
                                    var t = 3 * e;
                                    return i.role.hp -= t, "【" + this.name + "使用「终结.剔骨」，你受到" + t + "点生命！】"
                                } cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def), cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att), this.publicVar += 1; var n = parseInt(49 * this.publicVar); return i.role.hp -= e + n, "【" + this.name + "使用「放血」你受到" + e + "点伤害，附加" + n + "流血，攻防降低5%！】"
                            }, defSkill: function () { var t = e("scr_public"), n = parseInt(.6 * (t.role.att() - t.role.def())), a = 100 * Math.random(); return a < 35 ? (e("scr_data").role.hp -= n, "【皮衣男使用「反震」，你损失" + n + "点生命！】") : "" }, winEvent: function () { return 0 == i.publicVar2[25] ? (i.publicVar2[25] = 1, "你从大佬身上找到一本书，获得《儿童手工DIY》书籍（请去看书界面使用）！") : "" }, lostEvent: function () {
                                return "“老子打自己的女人，要你管？”"
                            }
                        }, 113:
                        {
                            name: "皮衣男（小BOSS）", lv: 199, hp: 19999, maxHp: 19999, att: 0, def: 499, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 1, drop: [], des: "“你和她啥关系？”", skill: function () {
                                var e = parseInt(499 - .3 * o.def - .5 * cc.find("Event/scr_fight").getComponent("scr_fight").correct[1]); if (4 == this.publicVar) {
                                    var t = 3 * e;
                                    return i.role.hp -= t, "【" + this.name + "使用「终结.剔骨」，你受到" + t + "点生命！】"
                                } cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def), cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att), this.publicVar += 1; var n = parseInt(39 * this.publicVar); return i.role.hp -= e + n, "【" + this.name + "使用「放血」你受到" + e + "点伤害，附加" + n + "流血，攻防降低5%！】"
                            }, defSkill: function () { var t = e("scr_public"), n = t.role.att() - t.role.def(), a = 100 * Math.random(); return a < 35 ? (e("scr_data").role.hp -= n, "【皮衣男使用「反震」，你损失" + n + "点生命！】") : "" }, winEvent: function () { return 0 == i.publicVar2[25] ? (i.publicVar2[25] = 1, "你从大佬身上找到一本书，获得《儿童手工DIY》书籍（请去看书界面使用）！") : "" }, lostEvent: void 0
                        }, 201:
                            { name: "眼镜王蛇（精英）", lv: 15, hp: 545, maxHp: 545, att: 1, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 3, 2, 1], [100, 23, 1, 2]], des: "呼哧~呼哧~", skill: function () { var t = Math.max(60 - o.def, 0); this.publicVar += 1; var n = t * this.publicVar; return e("scr_data").role.hp -= n, "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.choice[6] += 1, "" }, lostEvent: void 0 }, 202:
                            { name: "逃犯（精英）", lv: 25, hp: 850, maxHp: 850, att: 80, def: 20, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 1, 2, 2], [100, 17, 1, 2]], des: "", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0)); return t.role.hp -= n, "【" + this.name + "使用「咆哮」，你受到" + n + "点伤害】" }, defSkillfunction: function () { var t = e("scr_public"), n = t.role.att() - t.role.def(), a = 100 * Math.random(); return a < 30 ? (e("scr_data").role.hp -= n, "【" + this.name + "使用「反震」，你损失" + n + "点生命！】") : "" }, winEvent: function () { var t = e("scr_data"); return t.choice[6] += 1, "" }, lostEvent: void 0 }, 203:
                            { name: "机械人（被害妄想症）", lv: 45, hp: 1500, maxHp: 1500, att: 0, def: 60, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 17, 1, 2], [100, 99, 6, 3], [100, 17, 1, 2]], des: "“我必需得这么走路，别人才不会害我”", skill: function () { var t = e("scr_data"), n = 100 * Math.random(); if (n < 70) return "【机械人使用「电钻！」，但是戳歪了！】"; var a = 699 - o.def; return t.role.hp -= a, "【机械人使用「电钻！」，戳中！你损失" + a + "点生命】" }, defSkill: function () { return cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40, "【机械人使用「神奇舞蹈」，太逗啦！你降低40点攻击】" }, winEvent: function () { var t = e("scr_data"); return t.choice[6] += 1, "" }, lostEvent: void 0 }, 204:
                        {
                            name: "女剑士（中二病他姐）", lv: 60, hp: 2100, maxHp: 2100, att: 310, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 27, 1, 2], [100, 99, 8, 3]], des: "“我在找一个小男孩”", skill: function () { var e = 100 * Math.random(); return e < 50 ? (cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 20, "【女剑士使用「弱点打击」，你降低20点防御】") : (cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40, "【女剑士使用「弱点打击」，你降低40点攻击】") }, defSkill: function () {
                                var t = 100 * Math.random(), n = Math.min(20 + 5 * this.publicVar, 40); if (t < n) {
                                    var a = parseInt(.5 * o.att);
                                    return e("scr_data").role.hp -= a, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999, "【" + this.name + "使用「格挡」「反弹」，你减少" + a + "点生命！】"
                                } return ""
                            }, winEvent: function () { var t = e("scr_data"); return t.choice[6] += 1, 0 == t.skillLv[18] ? (t.skillLv[18] = 1, "【激活特性「攻击强化2」】") : "" }, lostEvent: void 0
                        }, 205:
                        {
                            name: "天下第一乖（么么啾）", lv: 80, hp: 2680, maxHp: 2680, att: 0, def: 80, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 21, 1, 2], [100, 26, 2, 2]], des: "“m(_ _)m主银饶命啊！我是你的女仆(*?ω-q)? ”", skill: function () {
                                var t = e("scr_data"), n = 100 * Math.random();
                                if (n < 30) {
                                    var a = 233;
                                    return t.role.hp += a, "【么么啾给在给你捏脚，你恢复" + a + "点生命！】"
                                }
                                if (n >= 30 && n < 70) return cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 99, "【么么啾袭击了你的胸部，你降低130点防御】";
                                if (n >= 70) {
                                    var c = parseInt(3 * (660 - o.def));
                                    return t.role.hp -= c, "【么么啾使用「大铁锤」——绝后一击！你损失" + c + "点生命！】"
                                }
                            }, defSkillfunction: function () { return cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40, "【么么啾使用「萌你一脸」，你降低40点攻击！】" }, winEvent: function () { var t = e("scr_data"); return t.choice[6] += 1, "“呜呜呜，主银你不要我吗\n(?﹏?)”" }, lostEvent: void 0
                        }, 206:
                        {
                            name: "红狼"
                            , lv: 120, hp: 12e3, maxHp: 12e3, att: 360, def: 140, publicVar: 0, escapeRate:
                                -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop:
                                [[100, 9, 3, 1], [100, 23, 2, 2]], des: "“喵？”「晓风提示：从此怪开始，后续怪血量激增，但是攻防下调~」"
                            , skill:
                                function () {
                                    var t = e("scr_data"), n = 100 * Math.random(); this.publicVar += 1; var a = Math.min(20 + 4 * this.publicVar, 50); if (n < a) {
                                        var c = parseInt(1.5 * this.att - o.def);
                                        return t.role.hp -= c, "【" + this.name + "使用「暴击」，你损失" + c + "点生命！】"
                                    } return ""
                                }, defSkill:
                                function () {
                                    var e = 100 * Math.random(), t = Math.min(20 + 4 * this.publicVar, 50);
                                    return e < t ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999, "【" + this.name + "躲避了你的攻击！】") : ""
                                }, winEvent:
                                function () { return i.choice[6] += 1, "" }, lostEvent:
                                void 0
                        }, 207:
                            { name: "8号拳师", lv: 155, hp: 15155, maxHp: 15155, att: 470, def: 180, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 26, 2, 2], [100, 20, 2, 2]], des: "“已经好多年没人来过这里啦~”", skill: function () { this.publicVa += 1; var e = this.att, t = parseInt(.1 * this.att * this.publicVar); return i.role.hp -= e + t, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def), "【" + this.name + "使用「碎骨爆裂拳！」你受到" + e + "点伤害，附加" + t + "流血，防御降低5%！】" }, defSkill: function () { return this.att += parseInt(.05 * this.att), "【" + this.name + "使用「集中」，" + this.name + "攻击强化！】" }, winEvent: function () { return i.choice[6] += 1, "" }, lostEvent: void 0 }, 209:
                        {
                            name: "双枪老太婆", lv: 245, hp: 24120, maxHp: 24120, att: 0, def: 280, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 14, 6, 2], [100, 22, 2, 2]], des: "“其实我最擅长的不是枪~”", skill: function () {
                                var e = 100 * Math.random(); if (e < 50) {
                                    var t = parseInt(.25 * i.role.hp);
                                    return i.role.hp -= t, "【" + this.name + "使用「P18C手枪」！你损失" + t + "点生命(当前生命的25%)！】"
                                } var t = parseInt(.25 * (o.maxHp - i.role.hp)); return i.role.hp -= t, "【" + this.name + "使用「AKM突击枪」！你损失" + t + "点生命(已损失生命的25%)！】"
                            }, defSkill: function () { var e = 100 * Math.random(), t = 30 + 10 * this.publicVar; return e < t ? (this.publicVar += 1, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999, "【" + this.name + "闪避了你的攻击！并且下次闪避概率提升！】") : "" }, winEvent: function () { var t = e("scr_data"); return t.choice[6] += 1, t.randomEvent[3] += 1, 0 == t.skillLv[22] ? (t.skillLv[22] = 1, "【激活特性「攻击强化3」】") : "" }, lostEvent: void 0
                        }, 210:
                        {
                            name: "自爆蛋", lv: 300, hp: 99999, maxHp: 99999, att: 0, def: 350, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 13, 1, 2], [100, 25, 2, 2]], des: "惹不起~惹不起~", skill: function () { return this.def += parseInt(.1 * this.def), "【" + this.name + "就这么静静的看着你~】" }, defSkill: function () {
                                if (this.publicVar < 8) {
                                    var e = parseInt(this.def);
                                    return i.role.hp -= e, "【" + this.name + "「蛋身一震」！你受到" + e + "点反弹伤害！】"
                                } return i.role.hp -= 9999999, "【自爆！！！！】"
                            }, winEvent: function () { return i.choice[6] += 1, "" }, lostEvent: function () {
                                return "【天啦噜！自爆蛋爆炸啦啊啊啊啊！你被炸飞啦~】"
                            }
                        }, 211:
                        {
                            name: "机甲少女", lv: 380, hp: 36570, maxHp: 36570, att: 1143, def: 440, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 27, 4, 2], [100, 21, 2, 2]], des: "“(?ω?)hiahiahia”\n「碾压」技能效果：对于防御低于自身的目标造成2倍伤害", skill: function () {
                                if (o.def < this.def) {
                                    var e = 2 * (this.att - o.def);
                                    return i.role.hp -= e, "【机甲少女使用「碾压」对你造成" + e + "点伤害】"
                                } return this.def += parseInt(.3 * this.def), "【机甲少女使用「护甲强化」防御增加30%】"
                            }, defSkill: function () {
                                var e = 100 * Math.random(), t = Math.min(20 + 5 * this.publicVar, 100); if (e < t) {
                                    var n = parseInt(o.att);
                                    return i.role.hp -= n, "【机甲少女使用「机甲护体」，你受到" + n + "点弹刀伤害！（你攻击的100%）】"
                                } return this.publicVar += 1, "【机甲少女「机甲护体」触发几率提高！】"
                            }, winEvent: function () { return i.choice[6] += 1, "" }, lostEvent: void 0
                        }, 213:
                        {
                            name: "炮击少女", lv: 600, hp: 60815, maxHp: 60815, att: 1804, def: 700, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 26, 4, 2], [100, 20, 4, 2]], des: "“要来一炮吗？”", skill: function () {
                                if (this.publicVar % 3 == 0) return "【" + this.name + "使用「战争践踏！」，你被一脚剁飞啦！】"; if (this.publicVar % 3 == 1) {
                                    var e = 4 * this.att;
                                    return i.role.hp -= e, "【" + this.name + "使用「对空一击！」！你损失" + e + "点生命！】"
                                } return this.publicVar % 3 == 2 ? (this.att += parseInt(.4 * this.att), this.hp += parseInt(.3 * this.maxHp), "【" + this.name + "坐地点了一根烟，吐了一个烟圈，生命恢复30%，攻击提高40%！】") : void (this.publicVar += 1)
                            }, defSkill: void 0, winEvent: function () { return i.choice[6] += 1, "" }, lostEvent: void 0
                        }, 214:
                        {
                            name: "吾王", lv: 750, hp: 72e3, maxHp: 72e3, att: 2299, def: 999, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 10, 1, 2], [100, 11, 1, 2]], des: "“嗷嗷嗷~吃早饭咯~”\n「不屈的意志！」技能效果:如果对方生命百分比高于自身，则造成3倍无视防御的伤害！并恢复自身10%生命", skill: function () {
                                var e = i.role.hp / o.maxHp / (this.hp / this.maxHp); if (e > 1) {
                                    var t = 3 * this.att;
                                    return i.role.hp -= t, this.hp += parseInt(.1 * this.maxHp), this.publicVar -= 3, "【吾王使用「不屈的意志！」，造成" + t + "点伤害！自身恢复10%生命！吾王怒气减3】"
                                } var n = 100 * Math.random(), a = Math.min(30 + 5 * this.publicVar, 100); if (n < a) {
                                    var t = parseInt(1.2 * this.att);
                                    return i.role.hp -= t, this.publicVar -= 1, "【吾王使用「誓约胜利之剑！暴击！」，造成" + t + "点伤害！吾王怒气减1】"
                                } var t = this.att - o.def; return i.role.hp -= t, this.hp += parseInt(.1 * this.maxHp), this.publicVar += 1, "【吾王使用「誓约胜利之剑！」，造成" + t + "点伤害，并获得2点怒气（下次暴击率提高！）】"
                            }, defSkill: function () { var e = 100 * Math.random(), t = Math.min(30 + 5 * this.publicVar, 60); return e < t ? (this.att += parseInt(.05 * this.att), cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999, "【" + this.name + "使用「风王结界」，免疫伤害，攻击增加5%，！】") : (this.publicVar += 2, "【吾王获得2点怒气（下次结界触发几率提高！）】") }, winEvent: function () { return i.choice[6] += 1, "" }, lostEvent: void 0
                        }, 215:
                            { name: "晓风", lv: 999, hp: 99999, maxHp: 99999, att: 0, def: 1999, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 999, achieve: 0, getAtt: 1, drop: [[100, 15, 3, 2]], des: "", skill: void 0, defSkill: function () { var e = ["「对于国产游戏，」”", "「我始终坚信，」", "「什么样的环境孕育出什么样的作品。」", "「那些嘲讽国产游戏的人，」", "「本质上是在嘲讽自己————你低估了自己的力量。」”", "「国产游戏的未来，」", "「在你的手中，」", "「而不是开发商或者平台...」", "「一起共勉吧。晓风 2017.10.16」"], t = ""; return "undefined" != typeof e[this.publicVar] && (t = e[this.publicVar]), this.publicVar += 1, this.def -= 200, t }, winEvent: function () { return i.choice[6] += 1, "“再会吧~朋友...”" }, lostEvent: void 0 }, 401:
                        {
                            name: "城管1队", lv: 100, hp: 16e3, maxHp: 16e3, att: 199, def: 120, publicVar: 0, escapeRate: -9567, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 50, 3]], des: "", skill: function () { var e = parseInt(this.att - .3 * o.def + this.publicVar); return i.role.hp -= e, "【" + this.name + "使用「连拖带拽」！你损失" + e + "点生命！】" }, defSkill: function () { return this.publicVar += 20, "【" + this.name + "使用「抱大腿」！你降低20点防御】" }, winEvent: function () { return i.orderTimes[4] += 4, c.save(), "【奖励：烟瘾永久降低4%】“不想走是吧？可以的！”" }, lostEvent: function () {
                                return i.publicVar3[2] = 1, i.ifFollow[0] = 0, i.ifFollow[1] = 0, i.publicVar[13] = 1, c.init(), i.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】"
                            }
                        }, 402:
                        {
                            name: "城管2队", lv: 140, hp: 23333, maxHp: 23333, att: 280, def: 160, publicVar: 0, escapeRate: -9567, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[100, 99, 80, 3]], des: "", skill: function () { var e = 100 * Math.random(), t = parseInt(this.att - .3 * o.def), n = 30 + 5 * this.publicVar; return e < n ? (t = 2 * t, i.role.hp -= t, "【" + this.name + "使用「致命一击」，你损失" + t + "点生命！】") : (this.publicVar += 5, i.role.hp -= t, "【" + this.name + "使用「电棍」，你损失" + t + "点生命！】") }, defSkill: function () { var e = 100 * Math.random(); return e < 30 ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999, "【" + this.name + "使用「防爆盾」！】") : "" }, winEvent: function () { return i.money += 100, c.save(), "【奖励：10元钱】“小伙子，虽然你确实有两下子，但是你是不可能干过政府的~”" }, lostEvent: function () {
                                return i.publicVar3[2] = 1, i.ifFollow[0] = 0, i.ifFollow[1] = 0, i.publicVar[13] = 1, c.init(), i.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】"
                            }
                        }, 403:
                        {
                            name: "城管3队", lv: 200, hp: 33332, maxHp: 33332, att: 400, def: 240, publicVar: 0, escapeRate: -9567, enemyEscapeRate: 0, lostHealth: 3, achieve: 0, getAtt: 1, drop: [[100, 99, 120, 3]], des: "", skill: function () { var e = parseInt(this.att - .3 * o.def); return i.role.hp -= e, this.hp += e, "【" + this.name + "使用「强行验血」，你损失" + e + "点生命，3队恢复" + e + "点生命！】" }, defSkill: function () { return this.att += 10, "【" + this.name + "攻击+10！】" }, winEvent: function () { return i.itemNum2[12] += 10, c.save(), "【奖励：啤酒*10】“报告，你惹了一个惹不起的人！”" }, lostEvent: function () {
                                return i.publicVar3[2] = 1, i.ifFollow[0] = 0, i.ifFollow[1] = 0, i.publicVar[13] = 1, c.init(), i.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】"
                            }
                        }, 404:
                        {
                            name: "城管4队", lv: 280, hp: 48865, maxHp: 48865, att: 560, def: 330, publicVar: 0, escapeRate: -9567, enemyEscapeRate: 0, lostHealth: 4, achieve: 0, getAtt: 1, drop: [[100, 99, 170, 3]], des: "", skill: function () { var e = parseInt(this.att - .3 * o.def), t = Math.min(20 + 2 * this.publicVar, 60), n = 100 * Math.random(); return n < t ? (e = 5 * e, i.role.hp -= e, "【" + this.name + "使用「枪击」！击中！你损失" + e + "点生命！】") : "【" + this.name + "使用「枪击」，但是未命中！】" }, defSkill: function () { return this.publicVar += 1, this.att += 15, "【" + this.name + "使用集中，攻击+15，且下次枪击命中率提高！】" }, winEvent: function () { return i.itemNum2[14] += 20, c.save(), "【奖励：子弹*20】“老大要来了！”" }, lostEvent: function () {
                                return i.publicVar3[2] = 1, i.ifFollow[0] = 0, i.ifFollow[1] = 0, i.publicVar[13] = 1, c.init(), i.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】"
                            }
                        }, 405:
                        {
                            name: "陈晓（大大）", lv: 380, hp: 65865, maxHp: 65865, att: 762, def: 450, publicVar: 0, escapeRate: -9567, enemyEscapeRate: 0, lostHealth: 4, achieve: 0, getAtt: 1, drop: [[100, 99, 230, 3]], des: "“小伙，看我，帅不帅？”", skill: function () { var e = this.att + o.def, t = parseInt(.015 * (this.maxHp - this.hp)); return i.role.hp -= e, this.hp += t, "【陈晓使用「晓风.霸王拳」，对你造成" + e + "点伤害，自身恢复" + t + "点生命】" }, defSkill: function () {
                                var t = 100 * Math.random(), n = Math.min(3 * this.publicVar + 20, 60); if (t < n) {
                                    var a = parseInt(.3 * o.att);
                                    return e("scr_data").role.hp -= a, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999, "【" + this.name + "使用「格挡」「反弹」，你减少" + a + "点生命！】"
                                } return "【陈晓下次格挡概率增加！】"
                            }, winEvent: function () { return i.itemNum2[15] += 5, i.itemNum2[7] += 3, i.itemNum2[12] += 5, i.orderTimes[4] + 15, c.save(), "【奖励：烟瘾降低15%，烟*3，晓风披肩*5，啤酒*5！】“但愿你能赢过政府，虽然我是政府的狗...”" }, lostEvent: function () {
                                return i.publicVar3[2] = 1, i.ifFollow[0] = 0, i.ifFollow[1] = 0, i.publicVar[13] = 1, c.init(), i.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】"
                            }
                        }, 406:
                        {
                            name: "挖掘机（BOSS）", lv: 999, hp: 299999, maxHp: 299999, att: 0, def: 1299, publicVar: 0, escapeRate: -9567, enemyEscapeRate: -9999, lostHealth: 5, achieve: 0, getAtt: 1, drop: [[100, 12, 1, 1]], des: "“这是专门为你们这些刁民研发的隐藏武器，除了高层，世界上没有人知道，因为知道的都死了！”\n「特点：钢甲巨兽，慢热型对手；高血高防，但前期伤害较低」", skill: function () {
                                var e = 1e4 + this.enemyEscapeRate; if (this.publicVar += 1, this.publicVar % 7 == 0) {
                                    var t = Math.max(parseInt(.04 * this.def * e + 999 - o.def), 1);
                                    return i.role.hp -= t, this.hp += t, this.enemyEscapeRate += 1, "【挖掘机使用「加农炮！」你受到" + t + "点伤害！挖掘机充能+1，恢复" + t + "点生命！（回复量与挖掘机充能量/主角防御有关）】"
                                } if (this.publicVar % 4 == 0) return this.enemyEscapeRate += 4, "【挖掘机使用「机甲进化」，充能+4！】"; var n = Math.max(parseInt(.01 * this.def * e + 499 - .5 * o.def), 0); return i.role.hp -= n, "【挖掘机「喷油！灼烧」你受到" + n + "点灼烧伤害（伤害与挖掘机充能量/主角防御有关）！】"
                            }, defSkill: function () {
                                this.publicVar < 1 && (this.publicVar += 1); var t = 1e4 + this.enemyEscapeRate; if (this.publicVar % 11 == 0) {
                                    var n = parseInt(.06 * (this.maxHp - this.hp));
                                    return this.hp += n, "【挖掘机启动紧急修复！恢复已损失生命的6%（" + n + "点）】"
                                } if (this.publicVar % 5 == 0) {
                                    var a = parseInt(.2 * o.att + .2 * this.def);
                                    return e("scr_data").role.hp -= a, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999, "【挖掘机使用「荆棘钢甲」！你受到" + a + "点伤害！】"
                                } if (this.publicVar % 3 == 0) {
                                    var c = parseInt(.06 * this.def);
                                    return this.def += c, "【挖掘机启动「防御系统」！防御增加6%（" + c + "点）】"
                                } var i = 100 * Math.random(), r = Math.min(30 + 2 * t, 60); if (i < r) return this.enemyEscapeRate += 1, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999, "【挖掘机使用「电离屏障」，免疫伤害，充能+1！（触发几率与充能有关）】"; var s = 2 * t + 20; return this.def += s, "【挖掘机启动「警戒系统」，防御+" + s + "（增加量与挖掘机当前充能量有关）！】"
                            }, winEvent: function () { return "【你已战胜最终BOSS，游戏即将结束，可以看看还有啥没做完的~】" }, lostEvent: function () {
                                return i.publicVar3[2] = 1, i.ifFollow[0] = 0, i.ifFollow[1] = 0, i.publicVar[13] = 1, c.init(), i.ifFollow[0] > 0 ? "【你被驱逐出城。你与晓月失去了联系。】" : "【你桥底的窝被挖掘机铲平...你被赶出城区...】"
                            }
                        }, 501:
                        {
                            name: "晓月家大狼狗", lv: 80, hp: 2685, maxHp: 2685, att: 0, def: 187, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [], des: "emmmmmm", skill: function () {
                                if (this.publicVar += 1, this.publicVar <= 5) {
                                    var e = 99;
                                    return i.role.hp += e, "【狗狗使用「添~滋溜~滋溜~」，你恢复99点生命！】"
                                } return this.enemyEscapeRate += 100, "【狗狗有些伤心，准备要离开了！】"
                            }, defSkill: void 0, winEvent: function () { return i.chioce2[7] += 1, i.itemNum2[0] += 3, "【狗狗点了点头，开心的离开了。狗狗的祝福：获得「熟肉」*3！】" }, lostEvent: void 0
                        }, 502:
                            { name: "晓月后援1群", lv: 100, hp: 3345, maxHp: 3345, att: 0, def: 234, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [], des: "“加入我们，才能偷看喔~”", skill: function () { return this.publicVar += 1, this.publicVar <= 4 ? (cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] += 30, "【后援队使用「加油！」，你增加30点攻击！】") : (this.enemyEscapeRate += 100, "【后援队有些失望，准备要离开了！】") }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.chioce2[7] += 1, t.itemNum2[22] += 1, "【“好吧，你确实配得上我老婆，加油吧~”。粉丝的祝福：获得「女装」*1！】" }, lostEvent: void 0 }, 503:
                        {
                            name: "晓月管家", lv: 130, hp: 4335, maxHp: 4335, att: 0, def: 300, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [], des: "“不好意思，这里没大米哈~”", skill: function () { return this.publicVar += 1, this.publicVar <= 3 ? (i.money += 1, "【管家给了你1毛钱~】") : (i.role.hp -= 99999, "【“还不走？”】") }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.money -= this.publicVar, t.chioce2[7] += 1, t.money += 20, "【“现在年轻人脸皮都这么厚嘛！”。你把钱还给了管家。管家的祝福：获得2元！】" }, lostEvent: function () {
                                return i.money -= 3, "【“做人不要太贪！滚出去！”。你被轰出院子，失去3毛钱！】"
                            }
                        }, 504:
                            { name: "晓月哥", lv: 170, hp: 5650, maxHp: 5650, att: 0, def: 500, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [], des: "“想抢走我妹妹？先从我身上踏过去！”", skill: function () { var e = 100 * Math.random(), t = 999; return e < 40 ? (this.hp -= t, "【" + this.name + "使用「信心打击」，反弹，" + this.name + "受到" + t + "点伤害！】") : e < 60 ? (this.hp += 2 * t, "【" + this.name + "感觉有点口干，喝了一口水，恢复" + 2 * t + "点生命！】") : (t = parseInt(t - o.def), i.role.hp -= t, "【" + this.name + "使用「信心打击」，你受到" + t + "点伤害！】") }, defSkill: void 0, winEvent: function () { var e = Math.min(parseInt(.05 * i.choice[5] + 5), 55); return i.role.def += e, i.chioce2[7] += 1, "【“你走吧，我想静静~”。哥哥的祝福：防御永久增加" + e + "（与晓月好感有关）！】" }, lostEvent: void 0 }, 505:
                        {
                            name: "晓月妈", lv: 220, hp: 7300, maxHp: 7300, att: 0, def: 510, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [], des: "“做啥工作？工资多少？有没有买房？”", skill: void 0, defSkill: function () { var e = parseInt(.3 * i.money); return this.att += 1, this.att <= 3 ? (this.publicVar += e, i.money -= e, "【你给了晓月妈" + (e / 10).toFixed(1) + "元！】") : this.publicVar < 20 ? (i.role.hp -= 999999, "【“哈哈哈哈哈”】") : (this.hp -= 999999, "【“哈哈哈哈哈”】") }, winEvent: function () { var e = Math.min(parseInt(.5 * i.choice[5] + 50), 550); return i.role.maxHp += e, i.chioce2[7] += 1, "【“好像还有点钱嗷~”。母上大人的祝福：生命永久增加" + e + "（与晓月好感有关）！】" }, lostEvent: function () {
                                return "【“穷成这样~我敢把女儿交给你？”。你被赶出屋来！】"
                            }
                        }, 506:
                        {
                            name: "晓月爸", lv: 300, hp: 9999, maxHp: 9999, att: 1200, def: 500, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [], des: "“你要是能打败我，我就让你带走晓月”", skill: function () {
                                if (4 == this.publicVar) {
                                    var e = this.att * (1 + this.publicVar);
                                    return "【" + this.name + "使用「空手道.锁喉！」，你受到" + e + "点生命！】"
                                } this.publicVar += 1; var t = parseInt(.5 * this.att); return i.role.hp -= t, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.1 * o.def), "【" + this.name + "使用「空手道.穿心！」你受到" + t + "点伤害，防御降低10%！】"
                            }, defSkill: function () { return this.att += parseInt(.05 * this.att), "【" + this.name + "使用「空手道.蓄气！」，" + this.name + "攻击强化！】" }, winEvent: function () { var e = Math.min(parseInt(.1 * i.choice[5] + 10), 110); return i.role.att += e, i.chioce2[7] += 1, "【父亲大人的祝福：攻击永久增加" + e + "（与晓月好感有关）！】" }, lostEvent: void 0
                        }, 600:
                            { name: "毛贼", lv: 10, hp: 380, maxHp: 380, att: 0, def: 0, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 1, 1, 1], [100, 4, 1, 1]], des: "嗡嗡-嗡！", skill: function () { var t = Math.max(20 - o.def, 0); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！】" }, defSkill: void 0, winEvent: function () { return i.publicVar[10] += 1, "" }, lostEvent: void 0 }, 601:
                            { name: "精分患者", lv: 20, hp: 710, maxHp: 710, att: 0, def: 0, publicVar: 0, escapeRate: 40, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 1, 2, 1], [100, 4, 2, 1]], des: "%$#%$#%#^&^", skill: function () { var t = Math.max(60 - o.def, 0); return this.att += 10, e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！" + this.name + "攻击+10】" }, defSkill: void 0, winEvent: function () { return i.publicVar[10] += 1, "" }, lostEvent: void 0 }, 602:
                            { name: "盯谁谁怀孕大妈", lv: 35, hp: 1200, maxHp: 1200, att: 0, def: 0, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 1, 3, 1], [100, 4, 3, 1]], des: "嗡--------！", skill: function () { var t = Math.max(120 + 20 * this.publicVar - o.def, 0); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！" + this.name + "吸血能力强化！】" }, defSkill: void 0, winEvent: function () { return i.publicVar[10] += 1, "" }, lostEvent: void 0 }, 603:
                            { name: "阿龙", lv: 50, hp: 1665, maxHp: 1665, att: 0, def: 0, publicVar: 0, escapeRate: 25, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 1, 4, 1], [100, 4, 4, 1]], des: "", skill: function () { var t = Math.max(200 - o.def, 0); return this.def += 30, e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！" + this.name + "防御+30】" }, defSkill: void 0, winEvent: function () { return i.publicVar[10] += 1, "" }, lostEvent: void 0 }, 700:
                            { name: "蚊小满", lv: 10, hp: 380, maxHp: 380, att: 0, def: 0, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 1, 1, 1], [100, 4, 1, 1]], des: "嗡嗡-嗡！", skill: function () { var t = Math.max(20 - o.def, 0); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, t.randomEvent[4] += 1, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 701:
                            { name: "大毛蚊", lv: 20, hp: 710, maxHp: 710, att: 0, def: 0, publicVar: 0, escapeRate: 40, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 1, 2, 1], [100, 4, 2, 1]], des: "%$#%$#%#^&^", skill: function () { var t = Math.max(60 - o.def, 0); return this.att += 10, e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！" + this.name + "攻击+10】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, t.randomEvent[4] += 1, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 702:
                            { name: "密斯特蚊", lv: 35, hp: 1200, maxHp: 1200, att: 0, def: 0, publicVar: 0, escapeRate: 35, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 1, 3, 1], [100, 4, 3, 1]], des: "嗡--------！", skill: function () { var t = Math.max(120 + 20 * this.publicVar - o.def, 0); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！" + this.name + "吸血能力强化！】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, t.randomEvent[4] += 1, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 703:
                            { name: "阿蚊", lv: 50, hp: 1665, maxHp: 1665, att: 0, def: 0, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 1, 4, 1], [100, 4, 4, 1]], des: "", skill: function () { var t = Math.max(200 - o.def, 0); return this.def += 30, e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！" + this.name + "防御+30】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, t.randomEvent[4] += 1, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 704:
                            { name: "徐蚊强", lv: 70, hp: 2465, maxHp: 2465, att: 0, def: 0, publicVar: 0, escapeRate: 25, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 1, 5, 1], [100, 4, 5, 1]], des: "", skill: function () { var t = parseInt(Math.max((320 - o.def) * (2 - this.hp / this.maxHp), 0)); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, t.randomEvent[4] += 1, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 705:
                            { name: "女王", lv: 90, hp: 3333, maxHp: 3333, att: 0, def: 0, publicVar: 0, escapeRate: 20, enemyEscapeRate: 0, lostHealth: 1, achieve: 2, getAtt: 1, drop: [[100, 1, 10, 1], [100, 4, 10, 1], [100, 26, 1, 2]], des: "血红的肚子，如同宝石般纯净无暇！", skill: function () { var t = Math.max(520 - o.def, 0); return e("scr_data").role.hp -= t, this.hp += t, "【你被吸取" + t + "点生命！】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, "【你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 706:
                            { name: "蚊.媛", lv: 29, hp: 599, maxHp: 599, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 0, achieve: 0, getAtt: 1, drop: [[1, 12, 1, 1]], des: "%&#@*#%*%##%！", skill: function () { var t = e("scr_data"), n = 200; return t.role.hp += n, this.hp -= n, e("scr_public").ifMaxHp(), this.name + "在给你输送营养！你增加" + n + "点生命" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.kills[0] += 1, "【" + this.name + "变成了一具干尸！你已消灭" + t.kills[0] + "只蚊子】" }, lostEvent: void 0 }, 800:
                            { name: "女贼(小学生)", lv: 7, hp: 210, maxHp: 210, att: 0, def: 0, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 0, achieve: 0, getAtt: 1, drop: [], des: "..嘻嘻..(≥▽≤)y", skill: function () { var t = e("scr_data"); return this.enemyEscapeRate += 20, t.money > 0 ? (t.money -= 1, this.publicVar += 1, "【你被偷走0.1元，女贼想要溜(￣﹏￣)】") : "【“穷成这B样也敢出来？”】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"), n = this.publicVar + 5; return t.money += n, t.randomEvent[3] += 1, "【获得" + (n / 10).toFixed(1) + "元！】【“呜呜呜，我告诉我姐去”】" }, lostEvent: void 0 }, 801:
                        {
                            name: "女贼她姐", lv: 16, hp: 575, maxHp: 575, att: 0, def: 0, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 4, 3]], des: "( ' – ' )你就那个怪蜀黍？", skill: function () { var t = 15, n = Math.max(20 - o.def + t * this.publicVar, 0), a = e("scr_data"); return this.publicVar += 1, a.role.hp -= n, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= t, "【" + this.name + "使用「泰山压顶（130kg）」，你受到" + n + "点伤害！你感觉喘呼吸困难！防御降低" + t + "点！】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.randomEvent[3] += 1, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                                return t.money -= n, "【你损失20%的钱！】"
                            }
                        }, 802:
                        {
                            name: "女贼她小姨", lv: 20, hp: 700, maxHp: 700, att: 80, def: 0, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 6, 3]], des: "来嘛！过来玩会儿~", skill: function () { cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 25; var t = e("scr_data"), n = Math.max(30 - o.def, 5); this.publicVar += 1; var a = this.publicVar * n; return t.money -= this.publicVar, t.role.hp -= a, t.money < 0 && (t.money = 0), "【" + this.name + "用身体在你身上蹭了蹭，你攻击减少25，生命减少" + a + "，金钱减少" + (this.publicVar / 10).toFixed(1) + "元】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.money += Math.min(this.publicVar, 10), t.randomEvent[3] += 1, "【你抢回被偷的钱！】" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
                                return t.money -= n, "【你损失15%的钱！】"
                            }
                        }, 803:
                            (n = {
                                name: "女贼她妈", lv: 35, hp: 1200, maxHp: 1200, att: 150, def: 36, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 8, 3]], des: "快把钱交出来！", skill: function () {
                                    var e = parseInt(.03 * o.maxHp);
                                    return cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 30, "【" + this.name + "使用色诱，你的攻击降低30点，生命减少" + e + "】"
                                }, defSkill: void 0, winEvent: void 0
                            }, a(n, "winEvent", function () {
                                var t = e("scr_data");
                                return t.randomEvent[3] += 1, ""
                            }), a(n, "lostEvent", function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
                                return t.money -= n, "【你损失10%的钱！】"
                            }), n), 804:
                        {
                            name: "女贼她奶奶", lv: 45, hp: 1500, maxHp: 1500, att: 0, def: 30, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 10, 3]], des: "打劫(〃'▽'〃)！", skill: function () { var t = 80; this.publicVar += 1; var n = t * this.publicVar; return e("scr_data").role.hp -= n, "【放血：每回合损失" + n + "点生命（" + this.publicVar + "层）】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.randomEvent[3] += 1, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
                                return t.money -= n, "【你损失10%的钱！】"
                            }
                        }, 805:
                        {
                            name: "女贼集团总裁（精英）", lv: 60, hp: 1999, maxHp: 1999, att: 310, def: 50, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 2, drop: [[100, 99, 12, 3]], des: "快把钱交出来！", skill: function () { var t = 100; this.publicVar += 1; var n = t * this.publicVar; return e("scr_data").role.hp -= n, "【流血：每回合损失" + n + "点生命（" + this.publicVar + "层）】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.randomEvent[3] += 1, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
                                return t.money -= n, "【你损失15%的钱！】"
                            }
                        }, 806:
                        {
                            name: "贼女王（精英）", lv: 80, hp: 2700, maxHp: 2700, att: 0, def: 60, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 1, achieve: 2, getAtt: 3, drop: [[100, 99, 15, 3], [100, 99, 15, 3], [100, 27, 1, 2]], des: "嘿嘿(o﹃o?)，咱们来玩cosplay吧~", skill: function () {
                                var t = 100, n = e("scr_data"); if (this.publicVar += 1, this.publicVar % 3 == 0) {
                                    var a = 400 + 100 * this.publicVar - o.def, c = 20 * this.publicVar;
                                    return n.role.hp -= a, cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= c, "【女王使用「黑色高跟鞋」，你损失" + a + "点生命，并降低" + c + "点攻击】"
                                } return n.role.hp += 2 * t, "【女王使用「皮鞭」，你恢复" + 2 * t + "点生命，降低" + t + "点防御】"
                            }, defSkill: function () { var e = 200; return this.hp += e, "【女王有点小兴奋，恢复" + e + "点生命】" }, winEvent: function () { return i.randomEvent[3] += 1, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
                                return t.money -= n, "【你损失15%的钱！】"
                            }
                        }, 807:
                        {
                            name: "吸毒男（BOSS）", lv: 120, hp: 3999, maxHp: 3999, att: 760, def: 120, publicVar: 0, escapeRate: 20, enemyEscapeRate: 0, lostHealth: 2, achieve: 3, getAtt: 3, drop: [[100, 11, 2, 1]], des: "“没错，她就是为了我才当贼女王的...我是个废物..”", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n); return this.hp += a, t.role.hp -= n, "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】" }, defSkill: function () { var t = e("scr_data"), n = 200; this.publicVar += 1; var a = n * this.publicVar; return t.role.hp -= a, "【中毒：每回合损失" + a + "点生命】" }, winEvent: function () { return i.randomEvent[3] += 1, "“也许，死是一种解脱吧...再见了...我的女王...”" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                                return t.money -= n, "【你损失20%的钱！】"
                            }
                        }, 808:
                        {
                            name: "吸毒男2阶（BOSS）", lv: 180, hp: 5980, maxHp: 5980, att: 1087, def: 418, publicVar: 0, escapeRate: 10, enemyEscapeRate: 0, lostHealth: 2, achieve: 3, getAtt: 3, drop: [[100, 11, 2, 1]], des: "“我是不会死的，我一定要为她报仇！”", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n); return this.hp += a, t.role.hp -= n, "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】" }, defSkill: function () { var t = e("scr_data"), n = parseInt(.2 * this.att); this.publicVar += 1; var a = n * this.publicVar; return t.role.hp -= a, "【中毒：每回合损失" + a + "点生命】" }, winEvent: function () { return i.randomEvent[3] += 1, "“...不甘心...啊...”" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                                return t.money -= n, "【你损失20%的钱！】"
                            }
                        }, 809:
                        {
                            name: "吸毒男3阶（BOSS）", lv: 300, hp: 9999, maxHp: 9999, att: 1800, def: 700, publicVar: 0, escapeRate: 0, enemyEscapeRate: 0, lostHealth: 2, achieve: 3, getAtt: 3, drop: [[100, 11, 2, 1]], des: "“就算没手，我还有脚！”", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n); return this.hp += a, t.role.hp -= n, "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】" }, defSkill: function () { var t = e("scr_data"), n = parseInt(.2 * this.att); this.publicVar += 1; var a = n * this.publicVar; return t.role.hp -= a, "【中毒：每回合损失" + a + "点生命】" }, winEvent: function () { return i.randomEvent[3] += 1, "“啊！我的脚！”" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                                return t.money -= n, "【你损失20%的钱！】"
                            }
                        }, 881:
                        {
                            name: "吸毒男4阶（BOSS）", lv: 500, hp: 16520, maxHp: 16520, att: 3e3, def: 1200, publicVar: 0, escapeRate: -10, enemyEscapeRate: 0, lostHealth: 2, achieve: 3, getAtt: 3, drop: [[100, 11, 2, 1]], des: "“就算没手没脚，我还有嘴！”", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n); return this.hp += a, t.role.hp -= n, "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】" }, defSkill: function () { var t = e("scr_data"), n = parseInt(.2 * this.att); this.publicVar += 1; var a = n * this.publicVar; return t.role.hp -= a, "【中毒：每回合损失" + a + "点生命】" }, winEvent: function () { return i.randomEvent[3] += 1, "..e..e.e..e..a..a" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                                return t.money -= n, "【你损失20%的钱！】"
                            }
                        }, 882:
                        {
                            name: "吸毒男5阶（BOSS）", lv: 999, hp: 32995, maxHp: 32995, att: 6e3, def: 2400, publicVar: 0, escapeRate: -20, enemyEscapeRate: 0, lostHealth: 2, achieve: 3, getAtt: 3, drop: [[100, 11, 2, 1]], des: "哧溜~哧溜~毒男拖着半截身子爬了过来~", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n); return this.hp += a, t.role.hp -= n, "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】" }, defSkill: function () { var t = e("scr_data"), n = parseInt(.2 * this.att); this.publicVar += 1; var a = n * this.publicVar; return t.role.hp -= a, "【中毒：每回合损失" + a + "点生命】" }, winEvent: function () { return "毒男化成一缕青烟，飘散在蓝天白云中..." }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                                return t.money -= n, "【你损失20%的钱！】"
                            }
                        }, 810:
                            { name: "流浪汉(懒)", lv: 5, hp: 215, maxHp: 215, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 0, achieve: 0, getAtt: 1, drop: [[100, 99, 1, 3]], des: "“求求你放过我吧，我两天没吃饭啦~(ㄒoㄒ)”", skill: function () { var t = e("scr_data"); return cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 10, this.enemyEscapeRate += 15, t.money >= 1 ? (t.money -= 1, this.publicVar += 1, "【" + this.name + "使用「求饶」，你的攻击下降10点，并给了对方0.1元】") : (this.escapeRate += 100, "【流浪汉发现你根本没钱，打算要溜了！】") }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.money += this.publicVar, t.randomEvent[10] += 1, "【你拿回" + (this.publicVar / 10).toFixed(1) + "元】【“你们全是没同情心的坏人！”】" }, lostEvent: void 0 }, 811:
                        {
                            name: "流浪汉(宅)", lv: 12, hp: 445, maxHp: 445, att: 0, def: 9999, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 2, 3]], des: "“没看见我在玩手机吗！”", skill: function () { var t = 100 * Math.random(); return t < 50 ? (this.hp -= 99, "【" + this.name + "使用「嘴遁」，但是被你反弹，" + this.name + "受到99点伤害！】") : (e("scr_data").role.hp -= 99, "【" + this.name + "使用「嘴遁」，你受到99点伤害！】") }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.randomEvent[10] += 1, "【“老子特么就服你！”】" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
                                return t.money -= n, "【你损失10%的钱！】"
                            }
                        }, 812:
                        {
                            name: "流浪汉(女)", lv: 20, hp: 775, maxHp: 775, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 0, getAtt: 1, drop: [[100, 22, 1, 2]], des: "“我真的没偷你的钱！不信你搜啊！”", skill: function () { var t = 100 * Math.random(), n = 20 * this.publicVar; return this.publicVar += 1, t < n ? (e("scr_data").role.hp -= 9999, "【你被吃瓜群众围殴，损失9999点生命！】") : "【" + this.name + "在大声呼救！】" }, defSkill: function () {
                                var t = 100 * Math.random(), n = e("scr_public"), a = e("scr_data"); if (t <= 40) {
                                    var c = 50 - o.def;
                                    return a.role.hp -= c, "【你从" + this.name + "身上搜到发霉的男式内衣，你损失" + c + "点生命！】"
                                } return t > 40 && t <= 60 ? (a.money += 1, "【你从" + this.name + "身上搜到0.1元！】") : t > 60 ? (this.hp -= n.role.att(), "【你碰到一个奇怪的东西...】") : void 0
                            }, winEvent: function () { var t = e("scr_data"); return t.randomEvent[10] += 1, "【“(?_?)有人耍流氓哇”】" }, lostEvent: function () {
                                return "【你被吃瓜群众围殴，损失9999点生命！】"
                            }
                        }, 813:
                        {
                            name: "流浪汉(暴)", lv: 32, hp: 1150, maxHp: 1150, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 5, 3]], des: "快把钱交出来，就饶你一命！", skill: function () { var t = Math.random(), n = Math.max(parseInt(400 * t - o.def), 0); return e("scr_data").role.hp -= n, "【" + this.name + "使用「疯狂」，你受到" + n + "点伤害】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.randomEvent[10] += 1, "【你抢回被偷的钱！】" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                                return t.money -= n, "【你损失20%的钱！】"
                            }
                        }, 814:
                            { name: "流浪汉(失业)", lv: 46, hp: 1670, maxHp: 1670, att: 0, def: 99999, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 3, drop: [[100, 0, 6, 1]], des: "求求你给我找一份工作吧！(?﹏?)~哇！哇~哇——！", skill: function () { var t = (233 - o.def) * (this.publicVar + 1), n = 233 * (this.publicVar + 1), a = e("scr_data"); return a.role.hp -= t, this.hp -= n, this.publicVar += 1, "【你和流浪一起抱头痛哭，你损失" + t + "点生命，流浪汉损失" + n + "点生命】" }, defSkill: function () { var t = (e("scr_data"), 66 * this.publicVar); return this.hp += t, "【你在安慰流浪汉，流浪汉恢复了" + t + "点生命】" }, winEvent: function () { var t = e("scr_data"); return t.randomEvent[10] += 1, "" }, lostEvent: void 0 }, 815:
                        {
                            name: "流浪汉(赌)", lv: 66, hp: 2300, maxHp: 2300, att: 0, def: 60, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 9, 3]], des: "如果你赢啦我给你1毛钱，输啦我剁你一根手指，如何？", skill: function () {
                                var t = e("scr_data"), n = 100 * Math.random(), a = 20 + 20 * this.publicVar; if (n < a) {
                                    var c = 3 * (353 - o.def);
                                    return t.role.hp -= c, "【你输啦，损失" + c + "点生命】"
                                } return this.publicVar += 1, t.money += 1, "【你赢啦，获得0.1元！】"
                            }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.randomEvent[10] += 1, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.25 * t.money + this.publicVar, 0));
                                return t.money -= n, "【你损失全部赢得钱，和自己25%的钱！】"
                            }
                        }, 816:
                        {
                            name: "流浪汉(毒)", lv: 92, hp: 3080, maxHp: 3080, att: 0, def: 92, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 2, getAtt: 2, drop: [[100, 11, 2, 1]], des: "！", skill: function () { var t = e("scr_data"), n = 560 - o.def, a = 60; this.publicVar += 1; var c = a * this.publicVar; return t.role.hp -= n + c, "【流浪汉使用「撕咬」，你受到" + n + "点伤害，每回合损失" + c + "点生命（" + this.publicVar + "层）】" }, defSkill: function () { var t = e("scr_data"), n = 60; this.publicVar += 1; var a = n * this.publicVar; return t.role.hp -= a, "【中毒：每回合损失" + a + "点生命（" + this.publicVar + "层）】" }, winEvent: function () { var t = e("scr_data"); return t.randomEvent[10] += 1, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.3 * t.money, 0));
                                return t.money -= n, "【你损失30%的钱！】"
                            }
                        }, 900:
                        {
                            name: "电锯男", lv: 35, hp: 1200, maxHp: 1200, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 0, achieve: 2, getAtt: 2, drop: [[100, 4, 1, 2]], des: "“站好喽~别动啊~”", skill: function () { var t = e("scr_data"); return t.role.hp -= 9999, "【电锯男使用「电锯！」，你损失9999点生命！】" }, defSkill: void 0, winEvent: void 0, lostEvent: function () {
                                var t = e("scr_data"), n = 2 * t.randomEvent[13] + 2;
                                return t.money += n, t.randomEvent[13] = 0, "【“哎呀~舒服了~舒服了”。你获得" + (n / 10).toFixed(1) + "元】"
                            }
                        }, 901:
                            { name: "受伤的火狐", lv: 20, hp: 200, maxHp: 1e3, att: 10, def: 0, publicVar: 0, escapeRate: 0, enemyEscapeRate: 0, lostHealth: 3, achieve: 0, getAtt: 1, drop: [[100, 9, 1, 1]], des: "火狐周身散发着火红的光芒！", skill: function () { var e = 60; return this.hp += e, "【火狐正在自愈！恢复自身" + e + "点生命】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 902:
                        {
                            name: "再生虫"
                            , lv: 1, hp: 5, maxHp: 5, att: 0, def: 0, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 20, achieve: 0, getAtt: 1, drop:
                                [[100, 9, 1, 1]], des: "散发着彩色光芒的蝴蝶"
                            , skill:
                                function () {
                                    var t = e("scr_data"), n = e("scr_public"), a = t.kills[1]; if (0 == a) {
                                        var c = 200;
                                        return t.role.hp += c, t.role.hp > n.role.maxHp() && (t.role.hp = n.role.maxHp()), "【" + this.name + "在给你治疗！你回复" + c + "点生命】"
                                    } this.publicVar += 2; var i = 200 * a * this.publicVar; return t.role.hp -= i, "【剧毒：每回合损失" + i + "点生命】"
                                }, defSkill:
                                void 0, winEvent:
                                function () {
                                    var t = e("scr_data");
                                    t.kills[1] += 1;
                                    var n = t.kills[1];
                                    if (1 == n) return "「我知道，这是我无法逃脱的宿命。但是啊，愚蠢的人类，你将为此付出代价！」";
                                }, lostEvent:
                                void 0
                        }, 903:
                        {
                            name: "恶狗", lv: 6, hp: 250, maxHp: 250, att: 15, def: 0, publicVar: 0, escapeRate: 35, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 3, 2, 1]], des: "“%&cnm#@*”", skill: function () {
                                var t = e("scr_data"), n = 100 * Math.random(); this.publicVar += 1; var a = 20 * this.publicVar; if (n < a) {
                                    var c = 2 * this.att;
                                    return t.role.hp -= c, "【" + this.name + "使用「疯咬」，你损失" + c + "点生命！】"
                                } return ""
                            }, defSkill: void 0, winEvent: void 0, lostEvent: void 0
                        }, 904:
                            { name: "孩子她妈", lv: 8, hp: 315, maxHp: 315, att: 10, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[30, 7, 1, 2], [50, 12, 1, 2]], des: "“N——M——B——！”", skill: function () { var t = e("scr_data"), n = 100 * Math.random(); if (n < 50) return "【" + this.name + "使用「红色高跟鞋」，但是被你躲开啦！】"; var a = 4 * this.att - o.def; return t.role.hp -= a, "【" + this.name + "使用「红色高跟鞋」，正中靶心，你损失" + a + "点生命！】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 907:
                        {
                            name: "勒索二人组", lv: 20, hp: 710, maxHp: 710, att: 85, def: 10, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 99, 5, 3]], des: "来人呀！！！抓小偷啦！————", skill: void 0, defSkill: void 0, winEvent: void 0, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
                                return t.money -= n, "【你损失一半的钱！】"
                            }
                        }, 908:
                            { name: "银环蛇（精英）", lv: 6, hp: 210, maxHp: 210, att: 1, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 2, drop: [[100, 3, 3, 1]], des: "~嘶~嘶！~", skill: function () { var t = Math.max(7 - o.def, 0); this.publicVar += 1; var n = t * this.publicVar; return e("scr_data").role.hp -= n, "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 909:
                            { name: "醉汉（精英）", lv: 15, hp: 545, maxHp: 545, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 2, drop: [[100, 20, 1, 2]], des: "“不还酒，就别想走！”", skill: function () { var t = Math.max(120 - o.def, 0); return this.hp -= 99, e("scr_data").role.hp -= t, "【醉汉使用「拼命」，你损失" + t + "点生命，醉汉损失99点生命！】" }, defSkill: void 0, winEvent: void 0, lostEvent: void 0 }, 910:
                            { name: "大肚男（幕后操手）", lv: 200, hp: 6645, maxHp: 6645, att: 1200, def: 450, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 2, achieve: 1, getAtt: 2, drop: [[100, 99, 60, 3]], des: "“滚开！敢打老子女人的注意？”", skill: void 0, defSkill: void 0, winEvent: function () { return e("scr_data").chioce2[6] += 1, "" }, lostEvent: void 0 }, 911:
                            { name: "大肚男（幕后操手）", lv: 200, hp: 6645, maxHp: 6645, att: 1200, def: 450, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 2, achieve: 1, getAtt: 2, drop: [[100, 99, 60, 3]], des: "“滚开！敢打老子女人的注意？”", skill: void 0, defSkill: void 0, winEvent: function () { return e("scr_data").chioce2[6] += 1, "" }, lostEvent: void 0 }, 996:
                        {
                            name: "蒙面人", lv: 99, hp: 99999, maxHp: 99999, att: 0, def: 9999, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 0, 4, 1], [10, 4, 1, 2]], des: "“想知道我是谁？那是不可能的！”", skill: function () { var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n); return t.role.hp -= a, "【蒙面人使用「闷棍Max」，你损失" + a + "点生命！】" }, defSkill: void 0, winEvent: void 0, lostEvent: function () {
                                var t = e("scr_data"), n = e("scr_public");
                                return t.ifFollow[0] = 0, t.distance = 300, t.button[0] = !1, t.button[1] = !0, t.button[2] = !0, n.ifNotify = !0, n.save(), n.init(), "【你被蒙面人打晕，趴光衣服被丢在了省城门口！】"
                            }
                        }, 997:
                        {
                            name: "蒙面人", lv: 99, hp: 9999, maxHp: 9999, att: 0, def: 9999, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 0, 4, 1], [10, 4, 1, 2]], des: "“想知道我是谁？那是不可能的！”", skill: function () { var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n); return t.role.hp -= a, "【蒙面人使用「闷棍Max」，你损失" + a + "点生命！】" }, defSkill: void 0, winEvent: void 0, lostEvent: function () {
                                var t = e("scr_data");
                                return t.distance = 99, "【你被蒙面人打晕，食物全丢，趴光衣服被丢在了县城门口！】"
                            }
                        }, 998:
                        {
                            name: "游戏作者", lv: 999, hp: 9999, maxHp: 9999, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 999, achieve: 0, getAtt: 1, drop: [], des: "“哈哈哈哈哈哈！你是想抵抗神的旨意么？”", skill: function () { var t = e("scr_data"), n = parseInt(.3 * o.maxHp); return t.role.hp -= n, e("scr_effect").attackEfect1(), "【啊哈哈哈你的游戏数据正在被作者删除啊哈哈哈游戏已损坏游戏已损坏】" }, defSkill: function () { return "【啊哈哈哈你的游戏数据正游戏已损坏啊哈哈哈你的游戏数据正】" }, winEvent: function () { var t = e("scr_data"); return t.itemNum[12] += 1, "获得【MMP】*1【眼泪】*1（用于解锁隐藏剧情，你已拥有" + t.itemNum[12] + "）" }, lostEvent: function () {
                                var t = e("scr_data2");
                                return JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData"), t.initMoney = 50, t.gameData[0] = 0, e("scr_public").save2(), cc.director.loadScene("start"), "你的存档已被作者清除，游戏即将自动关闭"
                            }
                        }, 999:
                        {
                            name: "游戏GM", lv: 999, hp: 999999, maxHp: 999999, att: 9999, def: 9999, publicVar: 0, escapeRate: 0, enemyEscapeRate: 0, lostHealth: 0, achieve: 0, getAtt: 1, drop: [[100, 0, 4, 1], [10, 4, 1, 2]], des: "“你好，你已经被我盯上了哟~”", skill: function () { var t = e("scr_data"), n = parseInt(.2 * o.maxHp); return t.role.hp -= n, "【“叫你丫的刷！啊！还刷不刷？！”】" }, defSkill: function () { var t = e("scr_data"), n = parseInt(.2 * o.hp); return t.role.hp -= n, "【“你丫还敢还手？你还敢还手！”】" }, winEvent: void 0, lostEvent: function () {
                                var t = e("scr_data");
                                return t.health = -9999, ""
                            }
                        }, 100001:
                        {
                            name: "草带男孩（中二病）", lv: 1, hp: 30, maxHp: 30, att: 1, def: 1, publicVar: 0, escapeRate: 30, enemyEscapeRate: 0, lostHealth: 0, achieve: 0, getAtt: 1, drop: [[10, 26, 1, 2]], des: "“我是要成为第一剑豪的男人！”", skill: function () {
                                var t = e("scr_data"), n = 10 * t.kills[2], a = 100 * Math.random(); if (a < n) {
                                    var c = 2 * this.att - o.def, i = this.def;
                                    return t.role.hp -= c, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= i, "【男孩使用「啊拖勒啊可痛！」，你受到" + c + "点伤害，并降低" + i + "点防御！】"
                                } return ""
                            }, defSkill: function () { var t = e("scr_data"), n = 100 * Math.random(), a = Math.min(5 * t.kills[2], 75); return n < a ? (cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999, "【男孩使用「侯塞给！」】") : "" }, winEvent: function () { var t = e("scr_data"), n = t.kills[2], a = "【“我是不会认输的！\n(▼ヘ▼#)”】"; return t.specialEnemy[100001].lv += 3, t.specialEnemy[100001].att += 15, t.specialEnemy[100001].hp += 80, t.specialEnemy[100001].maxHp += 80, t.specialEnemy[100001].def += 6, t.kills[2] += 1, 2 == n && (t.itemNum[0] += 2, a = "【男孩留下2个「果子」！然后逃走了！】你获得「果子」*2"), 6 == n && (t.itemNum2[1] += 3, a = "【男孩留下3个「伤药」！然后逃走了！】你获得「伤药」*3"), 12 == n && (t.itemNum2[20] += 1, a = "【男孩留下一块「板砖」！然后逃走了！】你获得「板砖」*1"), 20 == n && (t.itemNum2[18] += 1, a = "【男孩留下一个「装避鞋」！然后逃走了！】你获得「装避鞋」*1"), a }, lostEvent: function () {
                                return e("scr_data").publicVar2[7] += 1, "【︿(￣︶￣)︿】"
                            }
                        }, 100002:
                            { name: "泰坦巨蟒（特殊）", lv: 25, hp: 875, maxHp: 875, att: 0, def: 0, publicVar: 0, escapeRate: 80, enemyEscapeRate: 0, lostHealth: 1, achieve: 3, getAtt: 3, drop: [[100, 3, 3, 1]], des: "特注：战斗结束后巨蟒不会回满血！！！", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp - o.def, 0)); return t.role.hp -= n, "【" + this.name + "使用「缠绕」，你受到" + n + "点伤害】" }, defSkill: function () { var t = e("scr_data"); return t.specialEnemy[100002].hp = this.hp, "" }, winEvent: void 0, lostEvent: void 0 }, 200001:
                        {
                            name: "女流氓", lv: 8, hp: 315, maxHp: 315, att: 20, def: 0, publicVar: 0, escapeRate: 40, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[20, 7, 1, 2], [10, 21, 1, 2], [100, 1, 1, 2]], des: "“小帅哥，要不要跟姐姐玩玩呀”", skill: function () { var t = e("scr_data"), n = parseInt(this.att), a = parseInt(.1 * this.att), c = parseInt(.2 * this.att); return cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a, cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= c, t.role.hp -= n, "【" + this.name + "使用「壁咚」，你受到" + n + "点伤害，攻击下降" + c + "点，防御下降" + a + "点！】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[200001].lv += 20, t.specialEnemy[200001].att += 80, t.specialEnemy[200001].hp += 520, t.specialEnemy[200001].maxHp += 520, t.specialEnemy[200001].def += 40, t.orderTimes[7] = 0, "【姐姐有点小兴奋了呢\n(*/ω＼*)】" }, lostEvent: function () {
                                var t = e("scr_data");
                                return t.orderTimes[7] += 2, "【“￣へ￣！非要逼姐姐？”】"
                            }
                        }, 300001:
                        {
                            name: "火狐." + e("scr_data").kills[1] + "转（稀有）", lv: 35, hp: 510, maxHp: 510, att: 0, def: 0, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 9, 1, 1]], des: "发现一只全身散发红色光芒的狐狸！", skill: function () {
                                var t = e("scr_data"), n = 10 * t.kills[1] + 40, a = 100 * Math.random(); if (a < n) {
                                    var c = parseInt(.12 * t.role.hp + 5 + 10 * t.kills[1]);
                                    return t.role.hp -= c, this.hp += c, "【火狐使用「灵魂摄取」，你损失12%的当前生命值（" + c + "），火狐恢复" + c + "点生命！】"
                                } return ""
                            }, defSkill: function () {
                                var t = e("scr_data"), n = 100 * Math.random(), a = 10 * t.kills[1] + 40; if (n < a) {
                                    var c = parseInt(.12 * (this.maxHp - this.hp) + 5 + 10 * t.kills[1]);
                                    return this.hp += c, t.role.hp -= c, "【火狐使用「红灵护体」，恢复自身12%已损失的生命！(" + c + "点)，并对你造成" + c + "点伤害！】"
                                } return ""
                            }, winEvent: function () { var t = e("scr_data"); t.kills[1]; return t.specialEnemy[300001].lv += 5, t.specialEnemy[300001].att += 35, t.specialEnemy[300001].hp += 210, t.specialEnemy[300001].maxHp += 210, t.specialEnemy[300001].def += 10, t.kills[1] += 1, "" }, lostEvent: void 0
                        }, 300002:
                            { name: "山岭巨人（稀有）", lv: 45, hp: 2275, maxHp: 2275, att: 0, def: 0, publicVar: 0, escapeRate: 50, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 8, 1, 1]], des: "特注：战斗结束后巨人不会回满血！！！", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.1 * this.hp - o.def + this.def, 0)); return t.role.hp -= n, "【" + this.name + "使用「咆哮」，你受到" + n + "点伤害】" }, defSkill: function () { var t = e("scr_data"); return t.specialEnemy[300002].hp = this.hp, this.def += 10, t.role.hp -= this.def, "【巨人使用「石化皮肤」「强化反甲」，防御+10，你损失" + this.def + "点生命】" }, winEvent: function () { var t = e("scr_data"); return t.kills[3] += 1, t.specialEnemy[300002].lv += 5, t.specialEnemy[300002].def += 15, t.specialEnemy[300002].maxHp += 400, t.specialEnemy[300002].hp = this.hp, c.save(), 0 == t.skillLv[16] && this.lv >= 55 ? (t.skillLv[16] = 1, "【激活特性「防御强化2」】") : "" }, lostEvent: void 0 }, 300003:
                            { name: "深渊巨蟒", lv: 35, hp: 875, maxHp: 875, att: 0, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 3, drop: [[100, 3, 3, 1], [100, 26, 1, 2]], des: "特注：战斗结束后巨蟒不会回满血！！！", skill: function () { var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp - o.def, 0)); return t.role.hp -= n, "【" + this.name + "使用「缠绕」，你受到" + n + "点伤害】" }, defSkill: function () { var t = e("scr_data"); return t.specialEnemy[300003].hp = this.hp, "" }, winEvent: function () { var t = e("scr_data"); return t.choice[6] += 1, "" }, lostEvent: void 0 }, 400001:
                        {
                            name: "走私团伙" + parseInt(899 * Math.random() + 100) + "队", lv: 100, hp: 3345, maxHp: 3345, att: 0, def: 234, publicVar: 0, escapeRate: 40, enemyEscapeRate: 0, lostHealth: 2, achieve: 0, getAtt: 1, drop: [[30, 11, 1, 1]], des: "“你知不知道好奇能让人疯掉？”", skill: function () {
                                var t = e("scr_data"), n = 100 * Math.random(), a = this.lv / 5; if (this.publicVar += 1, this.publicVar <= 10) {
                                    if (n < a) {
                                        var c = 9 * this.lv - o.def;
                                        return t.role.hp -= c, "【走私团伙，向你发射了一颗子弹！击中！你损失" + c + "点生命！】"
                                    }
                                    return "【走私团伙，向你发射了一颗子弹！但是未命中】"
                                } return "【走私团伙没子弹啦！】"
                            }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[400001].lv += 20, t.specialEnemy[400001].hp += 500, t.specialEnemy[400001].maxHp += 500, t.specialEnemy[400001].def += 40, "【“你给老子等着！”】" }, lostEvent: void 0
                        }, 400002:
                            { name: "古树", lv: 199, hp: 19999, maxHp: 19999, att: 0, def: 20, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 0, 10, 1], [100, 1, 10, 1]], des: "......", skill: void 0, defSkill: function () { var t = e("scr_data"); return t.specialEnemy[400002].hp = this.hp, this.def += 20, t.role.hp -= this.def, "【反弹！你损失" + this.def + "点生命】" }, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[400002].lv += 100, t.specialEnemy[400002].def += 20, t.specialEnemy[400002].maxHp += 1e4, t.specialEnemy[400002].hp = this.hp, c.save(), "" }, lostEvent: void 0 }, 400003:
                        {
                            name: "杀.破.狼", lv: 60, hp: 2025, maxHp: 2025, att: 310, def: 121, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 3, 2, 1], [20, 9, 1, 1]], des: "“嗷嗷嗷~”", skill: function () {
                                var t = e("scr_data"), n = 100 * Math.random(); this.publicVar += 1; var a = 20 * this.publicVar; if (n < a) {
                                    var c = 2 * this.att - o.def;
                                    return t.role.hp -= c, "【" + this.name + "使用「暴击」，你损失" + c + "点生命！】"
                                } return ""
                            }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[400003].lv += 20, t.specialEnemy[400003].att += 150, t.specialEnemy[400003].hp += 620, t.specialEnemy[400003].maxHp += 620, t.specialEnemy[400003].def += 50, this.lv >= 160 && 0 == t.skillLv[20] ? (t.skillLv[20] = 1, "【激活特性「防御强化3」！】") : "" }, lostEvent: void 0
                        }, 900001:
                        {
                            name: "壮汉（精英）", lv: 15, hp: 575, maxHp: 575, att: 60, def: 0, publicVar: 0, escapeRate: 10, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 1, 2, 2], [30, 23, 1, 2]], des: "“老子的钱，你也敢捡？”", skill: function () { return this.att += parseInt(.1 * this.att), "【壮汉使用「狂暴」，壮汉攻击增加】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[900001].lv += 30, t.specialEnemy[900001].att += 180, t.specialEnemy[900001].hp += 1e3, t.specialEnemy[900001].maxHp += 1e3, t.specialEnemy[900001].def += 60, "" }, lostEvent: function () {
                                var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
                                return t.money -= n, "【你损失一半的钱！】"
                            }
                        }, 900002:
                            { name: "女(流浪)汉子", lv: 20, hp: 998, maxHp: 998, att: 50, def: 36, publicVar: 0, escapeRate: 10, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 0, 2, 1], [30, 22, 1, 2]], des: "“(╬￣皿￣)=○这是我先看到的”", skill: function () { var e = parseInt(.3 * this.def), t = parseInt(.1 * this.hp); return cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= e, this.hp += t, "【女汉子使用「王之怒视」，你降低" + e + "点防御，女汉子很开心，恢复了" + t + "点生命】" }, defSkill: void 0, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[900002].lv += 40, t.specialEnemy[900002].att += 120, t.specialEnemy[900002].hp += 1400, t.specialEnemy[900002].maxHp += 1400, t.specialEnemy[900002].def += 90, "" }, lostEvent: void 0 }, 900003:
                        {
                            name: "陈晓（大大）", lv: 500, hp: 16500, maxHp: 16500, att: 1500, def: 1150, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 14, 6, 2], [100, 7, 1, 2]], des: "“小伙，过来抽根烟？”", skill: function () { var e = this.att + o.def, t = parseInt(.2 * (this.maxHp - this.hp)); return i.role.hp -= e, this.hp += t, "【陈晓使用「晓风.霸王拳」，对你造成" + e + "点伤害，自身恢复" + t + "点生命】" }, defSkill: function () {
                                var t = 100 * Math.random(), n = Math.min(this.lv / 50 + 20, 80); if (t < n) {
                                    var a = parseInt(.5 * o.att);
                                    return e("scr_data").role.hp -= a, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999, "【" + this.name + "使用「格挡」「反弹」，你减少" + a + "点生命！】"
                                } return ""
                            }, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[900003].lv += 500, t.specialEnemy[900003].att += 1500, t.specialEnemy[900003].hp += 16e3, t.specialEnemy[900003].maxHp += 16e3, t.specialEnemy[900003].def += 1150, "" }, lostEvent: function () {
                                var t = e("scr_data");
                                return t.itemNum2[19] -= 1, "【枪被抢走一把！你损失「枪」*1！】"
                            }
                        }, 900004:
                        {
                            name: "？？？？", lv: 1, hp: 999999, maxHp: 999999, att: 300, def: 0, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 3, achieve: 1, getAtt: 1, drop: [], des: "", skill: function () {
                                if (this.att < 2 * o.att && (this.att += 20, this.lv += 1, i.specialEnemy[900004].att = this.att), i.specialEnemy[900004].hp = this.hp, this.lv > 30) {
                                    var e = 2 * Math.max(this.att - o.def, 0);
                                    return i.role.hp -= e, "【？使用「学习.暴击」你受到" + e + "点伤害！】"
                                } if (this.lv > 100) {
                                    var e = 2 * this.att;
                                    return i.role.hp -= e, "【？使用「学习.破防」你受到" + e + "点伤害！】"
                                } if (this.lv > 200) {
                                    var e = 2 * this.att, t = parseInt(.2 * e);
                                    return this.hp += t, i.role.hp -= e, "【？使用「学习.吸血」你受到" + e + "点伤害，？恢复" + t + "点生命！】"
                                } if (this.lv > 500) {
                                    this.publicVar += 1;
                                    var e = 2 * this.att, t = parseInt(.2 * e), n = parseInt(.2 * this.att * this.publicVar);
                                    return this.hp += t, i.role.hp -= e + n, cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def), "【？使用「进化.毒暴」你受到" + e + "点伤害，附加" + n + "点毒性伤害，防御降低5%。？恢复" + t + "点生命！】"
                                } return ""
                            }, defSkill: function () {
                                if (this.def < 2 * o.def && (this.def += 10, this.lv += 1, i.specialEnemy[900004].def = this.def, i.specialEnemy[900004].lv = this.lv), i.specialEnemy[900004].hp = this.hp, this.lv > 150) {
                                    var e = parseInt(.5 * this.def);
                                    return i.role.hp -= e, "【？使用「学习.反弹」你受到" + e + "点伤害！】"
                                } if (this.lv > 700) {
                                    var e = 2 * this.att;
                                    return i.role.hp -= e, cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= parseInt(.4 * o.att), "【？使用「进化.离子护甲」，格挡40%伤害，你受到" + e + "点反弹伤害！】"
                                } return ""
                            }, winEvent: function () { var t = e("scr_data"); return t.specialEnemy[900004].lv += 999, t.specialEnemy[900004].maxHp += 999999, t.specialEnemy[900004].hp = this.hp, c.save(), "“如果我不存在...整个世界将会陷入混乱...”" }, lostEvent: void 0
                        }, 900005:
                        {
                            name: "晓风基因计划", lv: 500, hp: 599999, maxHp: 599999, att: 0, def: 0, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 1, achieve: 1, getAtt: 1, drop: [[100, 17, 4, 2]], des: "「晓风：由于基因计划属于研发失败的产品，有些功能并不完善，目前还不具备自动修复能力；但是在这个世界的某处，还沉睡着一个来自同一胚胎、即将完工的伟大作品！」", skill: function () {
                                if (this.att < 1500 && (this.att += 4, this.lv += 1, i.specialEnemy[900005].att = this.att), i.specialEnemy[900005].hp = this.hp, this.lv > 580) {
                                    this.publicVar += 1;
                                    var e = this.att, t = parseInt(.05 * this.att * this.publicVar);
                                    return i.role.hp -= e + t, "【基因计划使用「进化.感染」你受到" + e + "点伤害，附加" + t + "点生化伤害！】"
                                } return ""
                            }, defSkill: function () {
                                if (this.def < 600 && (this.def += 2, this.lv += 1, i.specialEnemy[900005].def = this.def, i.specialEnemy[900005].lv = this.lv), i.specialEnemy[900005].hp = this.hp, this.lv > 530) {
                                    var e = Math.max(this.def - 28, 0);
                                    return i.role.hp -= e, "【基因计划使用「模仿.反弹」你受到" + e + "点伤害！】"
                                } return "【基因计划静静的看着你...】"
                            }, winEvent: function () { return i.choice[6] += 1, "" }, lostEvent: void 0
                        }, 900006:
                            { name: "一块黑色的石头", lv: 200, hp: 299999, maxHp: 299999, att: 0, def: 0, publicVar: 0, escapeRate: 100, enemyEscapeRate: 0, lostHealth: 1, achieve: 0, getAtt: 1, drop: [[100, 8, 6, 1]], des: "「特注：这真的是块石头！」", skill: function () { return i.specialEnemy[900006].hp = this.hp, "" }, defSkill: function () { this.def < 300 && (this.def += 1, i.specialEnemy[900006].def = this.def), i.specialEnemy[900006].hp = this.hp; var e = 2 * this.def; return i.role.hp -= e, "【你受到" + e + "点反弹伤害！】" }, winEvent: function () { return i.choice[6] += 1, "" }, lostEvent: void 0 }, 900007:
                        {
                            name: "暴走的流浪汉", lv: 40, hp: 3900, maxHp: 3900, att: 90, def: 50, publicVar: 0, escapeRate: -9999, enemyEscapeRate: 0, lostHealth: 2, achieve: 1, getAtt: 1, drop: [], des: "“？NM~敢抢老子东西？”", skill: function () {
                                if (4 == this.publicVar) {
                                    var e = this.att * (1 + this.publicVar);
                                    return i.role.hp -= e, "【" + this.name + "使用「叫尼玛抢！还敢不敢抢？」，你损失" + e + "点生命！】"
                                } this.publicVar += 1; var t = this.att, n = parseInt(.1 * this.att * this.publicVar); return i.role.hp -= t + n, cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att), "【" + this.name + "使用「连推带踹！」你受到" + t + "点伤害，附加" + n + "流血，攻击降低5%！】"
                            }, defSkill: function () { return this.att += parseInt(.05 * this.att), "【" + this.name + "使用「暴跳如雷」，流浪汉攻击强化！】" }, winEvent: function () { var t = e("scr_data"); t.specialEnemy[900007].lv += 20, t.specialEnemy[900007].att += 63, t.specialEnemy[900007].hp += 2e3, t.specialEnemy[900007].maxHp += 2e3, t.specialEnemy[900007].def += 23; var n = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").randomItemNum || 3; return t.itemNum[2] += n, "【获得「易拉罐」*" + n + "！】" }, lostEvent: function () {
                                var t = e("scr_data");
                                return t.money -= parseInt(.3 * t.money), "【你被抢走30%的金钱！】"
                            }
                        }
                    };
                    t.exports = r
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_eventData: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "2944e+wEixMS7sVFHLOkrHX", "scr_eventData"), cc.Class({ "extends": cc.Component, properties: {}, onLoad: function () { } }), cc._RFpop()
        }, {}], scr_eventDetermine: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "9e235Y/Ke9BkbMuLhAsJW6/", "scr_eventDetermine"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("main")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_event: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "00b3c6RjfdHPbEfl8GaNNla", "scr_event"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(2)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 60, a.getComponent(cc.Label).fontSize = 40
                }, event: function a() {
                    function t(t) {
                        cc.find("Canvas/Determine");
                        e("scr_public").save(), cc.find("Canvas/Choice").active = !1, cc.find("Canvas/EventText").active = !1, cc.find("Canvas/Notify2").active = !1, e("scr_effect").playText("Canvas/Notify", t, 80), n.scheduleOnce(function () {
                            cc.find("Canvas/Determine").active = !0, cc.find("Canvas/Determine").runAction(cc.fadeIn(2))
                        }, 2)
                    }
                    var n = this, c = e("scr_data"), i = e("scr_data2"), o = e("scr_public"), r = e("scr_effect"), a = {
                        1:
                        {
                            text: ["来到破旧的小区，", "一位热情的小姐姐将我带到一个房间，\n寒暄一番后，她认真的介绍道，", "“我们的工作内容是向附近居民推广净水器。\n公司要统一着装，\n入职前需交1块钱的服装费，\n交完费明天就可上班，\n日薪2元加提成，你看咋样？”", "我没钱", "交1块钱"], BGM: "", require: [c.distance, 0], choice1: function () { c.enemyId = 102, t("“来人啦，看看他身上到底有没有钱！”") }, choice2: function () {
                                c.money >= 10 ? (c.choice[1] = 2, c.money -= 10, t("“很好，明天过来上班吧”")) : r.playText("Canvas/notify2", "钱不够！", 60)
                            }
                        }, 2:
                        {
                            text: ["“很好，", "今后少侠只需将蚊子尸体封在这八卦炉中，”", "说完怪人掏出一个罐头瓶，", "“在下会定期前来收尸，", "每只一毛。", "在此拜谢！！”", "", "…(⊙_⊙;)…"], BGM: "", require: [], choice1: function () { }, choice2: function () {
                                var e = c.kills[0], n = (e / 10).toFixed(1);
                                c.money += e, c.kills[0] = 0;
                                var a = "“你本次一共消灭" + e + "只蚊子，\n这是" + n + "元，请务必收下！日后自会再见！告辞！”，\n怪人飞一般的逃跑了...\n【你获得" + n + "元】";
                                t(a)
                            }
                        }, 3:
                        {
                            text: ["我敲了敲门，没反应", "又敲了敲，门开了，是一位白发老爷爷", "我解释来意，老人似乎听不太清，但是执意让我进屋，", "家里散乱的堆放着各种垃圾袋，", "弥漫着一股尿臭味。", "雨停了，屋里非常的安静，老人一直呆坐着，他已经记不起来自己孩子的名字。", "【临走时，你选择...】", "帮忙打扫下卫生（消耗全部精力）", "帮忙打扫也无济于事，自然而然吧"], BGM: "", require: [], choice1: function () { c.energy = 0, c.choice[2] = 2, c.randomEvent[1] += 1, t("你帮忙打扫了房间，离开时老爷爷也没有说声谢谢...获得「好人卡」*1") }, choice2: function () {
                                t("雨停了，你离开了，静谧的天空上升起一道彩霞，屋内传来电视广告的声音...")
                            }
                        }, 4:
                        {
                            text: ["   妇女用颤抖的手、赶紧点了一根烟，开始讲述她的故事，也不管你是否想听。", "   她46岁，无子女，中学时就学会了抽烟。因为长得漂亮，嫁了一位有钱人。", "   后来丈夫因肺癌去世，而自己无任何工作技能，生活直转急下，每份工作都是做几天，要么被辞退，要么嫌累。", "中间谈过几次恋爱，因性格不合，最后都以分手告终。", "现在房子也卖了，住在一个5平米的出租屋中，已经两天没吃饭了...", "", "......"], BGM: "BGM3", require: [], choice1: function () { }, choice2: function () {
                                t("“我现在一身疾病，也没人要，就等着去见我的老公呢”，临走时，她淡淡的说道。\n【皮衣等级+1！】")
                            }
                        }, 5:
                        {
                            text: ["洞底的一幕让我有些惊讶，", "一位老太太正帮一位中年男抓虱子，", "中年男正是——灭蚊堂九堂主！", "堂主立马认出了你，像孩子一样手舞足蹈起来。", "老奶奶执意要留你吃饭，", "她讲起了堂主的往事。", "", "继续"], BGM: "", require: [], choice1: function () { }, choice2: function () {
                                n.eventId = 6, n.ifTriggerEvent()
                            }
                        }, 6:
                        {
                            text: ["“堂主是附近镇上一位小老板，", "一天，他载着3岁儿子外出钓鱼，", "天气炎热，车窗未关", "...五小时后，他才想起车内的孩子，", "等他赶到时，孩子全身发烫，气息微弱，全身是包", "最后孩子感染乙脑死亡", "妻子离他而去，人也变得疯疯癫癫", "现在几乎完全失去了自理能力...”", "临走时，你选择", "把身上所有钱留给堂主", "算了，听天由命吧"], BGM: "", require: [], choice1: function () { var e = c.kills[0], n = c.money, a = 5 * e + n; c.kills[0] = 0, c.money = 0, c.role.maxHp += a, c.choice[7] += 1, t("【祝福】你的最大生命值提高" + a + "点\n（提高量与捐钱数和灭蚊数有关，你已击杀" + e + "只蚊子，捐出" + (n / 10).toFixed(1) + "元）") }, choice2: function () {
                                t("你走出山洞，已是早晨，蔚蓝的天空中漂浮着朵朵白云")
                            }
                        }, 7:
                        {
                            text: ["跟随着小姐姐，在蛛网般的城中村、拐弯无数次，", "我来到一个简陋的出租屋。", "突然一个男人破门而入，大骂，“敢碰老子的女人！啊！”", "", "逃走..."], BGM: "", require: [c.distance, 0], choice1: function () { }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 109, o.save(), cc.director.loadScene("main")
                            }
                        }, 8:
                        {
                            text: ["中年大叔老家在西北的一个乡村，曾经当过兵，做过工人。早年与妻子离异后，女儿跟着前妻。", "92年独自南下打工，身体不好，也没什么技能，找工作处处碰壁，只能做点零活，赚的一点苦力钱全部用来买彩票和酒了…", "最终无处落脚，没钱、也没脸回家，流落至此…", "", "..."], BGM: "", require: [], choice1: function () { }, choice2: function () {
                                c.energy += 60, c.hunger = o.maxHunger(), c.role.hp = o.role.maxHp(), t("精力+60，饥饿全恢复，生命全恢复！")
                            }
                        }, 9:
                        {
                            text: ["晓月迫不及待的把我拉到墙角，眉飞色舞的讲述回家后的经历。", "比如离家后父母如何找翻天，她回家后如何没有受到一句批评，现在家人是如何把她当女皇养着...", "临走时晓月让你选一个礼物，你选择...", "晓月的贴身衣物", "食物和钱"], BGM: "", require: [], choice1: function () { c.itemNum2[27] += 1, c.itemNum2[22] += 1, c.itemNum2[21] += 1, t("获得【女装】*1，【小裤裤】*1，【晓月手链】*1") }, choice2: function () {
                                c.money += 40, c.itemNum[0] += 20, t("获得4元钱！【果子】*20")
                            }
                        }, 10:
                        {
                            text: ["“那你这唱歌的钱够还吗？”\n“还行吧，现在一天可以赚三四块，多的时候十几块。现在只想把我妈治好，还钱的事我还没想好...”", "“想过做点别的吗？”，我问。\n“呵~上学时光顾着打架，买上一个三本大学，现在大二，不过休学了\n，啥也不会，只能端盘子、做服务员，但是那点钱根本不够...”", "“你不是会吉他么，可以去教小孩呀！”\n“这只是以前自己瞎玩的，也是个半吊子，那够教学生呀~”", "", "..."], BGM: "", require: [], choice1: function () { }, choice2: function () {
                                n.eventId = 11, n.ifTriggerEvent()
                            }
                        }, 11:
                        {
                            text: ["“不过我有一个主意，一直都想和你说来着”，碧瑶突然有点兴奋的说道。", "“啥点子？”", "“我发现你的生存能力很强，像魔术师一样，会无中生有！我想咱们可以结合一下，你收集一些稀奇的东西，我负责卖出去！怎么样？”", "", "哇~太棒了！你真的聪明~"], BGM: "", require: [], choice1: function () { }, choice2: function () {
                                n.eventId = 12, n.ifTriggerEvent()
                            }
                        }, 12:
                        {
                            text: ["提示：从现在开始你可以进入山洞副本，每天收集的特殊道具，系统会自动出售（出售金额可在每日的结算界面查看）", "最后，你需要选择分成比例。\n（举例：假设今天卖出10块，选择7成就意味着你可以拿到7块，碧瑶拿3块；选择3成，则反过来）\n（作者：不要问我为啥不能五五开。我不会去设置这种容易选择的保守选项！）", "我最辛苦，应该我拿大头（拿7成）", "我应该帮帮她，我拿小头吧（拿3成）"], BGM: "", require: [], choice1: function () { c.publicVar2[21] = 7, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                c.publicVar2[21] = 3, o.save(), cc.director.loadScene("main")
                            }
                        }, 13:
                        {
                            text: ["碧瑶急忙向我跑过来，脸色苍白的说道，", "“我得回家了，我的东西就你拿去用吧，我也带不走。\nemmmm....我也不知道该说啥。总之，加油吧，一起！”", "\n说完碧瑶就匆匆跑开了，坐上民警的巡逻车，消失温暖的阳光中...", "", "确定"], BGM: "", require: [], choice1: function () { }, choice2: function () {
                                var e = Math.max(parseInt(c.publicVar[7] / 50), 1), n = Math.min(Math.max(parseInt(c.publicVar[7] / 100), 1), 6);
                                c.money += 4 * e, c.money += 10 * e, c.itemNum2[26] += n, c.itemNum2[27] += n, c.publicVar[7] >= 600 ? (c.itemNum2[10] += 1, c.itemNum2[11] += 1, t("你获得【金钱】*" + (10 * e / 10).toFixed(1) + ",【果子】*" + 4 * e + "，【黑刀】*1，【红夹克】*1，【幸运石】*" + n + "，【晓月手链】*" + n + "！\n【说明：奖励与碧瑶最终的好感有关】")) : c.publicVar[7] >= 400 ? (c.itemNum2[10] += 1, c.itemNum2[9] += 1, t("你获得【金钱】*" + (10 * e / 10).toFixed(1) + ",【果子】*" + 4 * e + "，【黑刀】*1，【皮衣】*1，【幸运石】*" + n + "，【晓月手链】*" + n + "！\n【说明：奖励与碧瑶最终的好感有关】")) : (c.itemNum2[8] += 1, c.itemNum2[9] += 1, t("你获得【金钱】*" + (10 * e / 10).toFixed(1) + ",【果子】*" + 4 * e + "，【匕首】*1，【皮衣】*1，【幸运石】*" + n + "，【晓月手链】*" + n + "！\n【说明：奖励与碧瑶最终的好感有关】"))
                            }
                        }, 1003:
                        {
                            text: ["早上，我正在睡觉，", "突然被铁罐滚落的声音惊醒，", "是否要出帐篷看看？", "是", "否"], BGM: "", require: [], choice1: function () { c.enemyId = 100, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 1007:
                        {
                            text: ["遭到不明物体袭击！！！", "是否迎战?", "是", "否"], BGM: "", require: [], choice1: function () { c.enemyId = 908, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 2002:
                        {
                            text: ["一大早，我正在睡觉，", "突然被几个流浪汉踢醒，", "其中一个满脸胡渣的大汉，骂道，", "“老子注意你半天了，他娘的在这里睡觉，给谁打招呼了？”", "不理他", "赶紧递根烟"], BGM: "", require: [], choice1: function () { 0 == e("scr_data2").gameData[4] ? (c.role.hp = o.role.maxHp(), c.enemyId = 101, o.save(), cc.director.loadScene("main")) : (c.money += 20, t("“开玩笑的嘛，来，拿着买点吃的，早点回去吧孩子~”。获得2元~")) }, choice2: function () {
                                0 == e("scr_data2").gameData[4] ? c.itemNum2[7] >= 1 ? (c.itemNum2[7] -= 1, t("胡渣大汉接过烟，说道，\n“还算有点聪明气。不过，你最好给我滚远点，要不大家都没饭吃，明白没？”")) : cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没有烟..." : (c.itemNum2[7] += 1, c.itemNum2[12] += 2, t("“开玩笑的嘛，来，抽根烟压压惊~”。获得【香烟】*1，【啤酒】*2"))
                            }
                        }, 2004:
                        {
                            text: ["早上，一位小男孩，", "远远看了我好久；", "我浑身不自在，刚想起身，", "小男孩在地上放了个东西，一溜烟跑了。", "我走近一看，是半根棒棒糖！", "", "(≥﹏ ≤)"], BGM: "BGM1", require: [], choice1: function () { cc.director.loadScene("main") }, choice2: function () {
                                c.hunger = o.maxHunger(), c.energy += o.maxEnergy(), c.role.hp = o.role.maxHp(), t("感觉自己元气满满哒！\n（状态全恢复+爆满！）")
                            }
                        }, 2006:
                        {
                            text: ["电线杆一张纸条上写道，", "“急招大量临时工：日薪2元！年龄不限！学历不限！无需身份证！工资日结。\n地址：杨湖小区5楼603”，", "你要去看看吗？", "去", "不去"], BGM: "", require: [], choice1: function () { n.eventId = 1, n.ifTriggerEvent() }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 2009:
                        {
                            text: ["“少侠请留步”", "一个奇装异服，蓬头垢面的人走过来说道，", "“在下灭蚊堂九堂主，", "立志杀尽天下蚊子,", "近日，在下跟踪多日，", "少侠武功了得，所到之处，蚊尸遍野，", "在下实在佩服，", "不知是否愿帮我完成一个心愿?”", "", "蛤?"], BGM: "", require: [], choice1: function () { }, choice2: function () {
                                n.eventId = 2, n.ifTriggerEvent()
                            }
                        }, 2011:
                        {
                            text: ["一个醉汉说你偷了他的啤酒，非要你还酒，", "给不给?", "不给", "给（需啤酒*1）"], BGM: "", require: [], choice1: function () { c.role.hp = o.role.maxHp(), c.enemyId = 909, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                c.itemNum2[12] >= 1 ? (c.itemNum2[12] -= 1, t("“我就说是你偷的嘛！还不承认？你这种小孩就喜欢偷东西。”")) : cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没啤酒..."
                            }
                        }, 2014:
                        {
                            text: ["一位浑身散发着异味的中年妇女走过来，说道，", "“小帅哥，麻烦你个事儿，”", "说完她拿出一件旧皮衣。", "“这本来是留着过冬的衣服，还是新的，你看能不能换你几根烟抽抽？”", "换（需香烟*1）", "不换"], BGM: "", require: [], choice1: function () { c.itemNum2[7] >= 1 ? (c.itemNum2[7] -= 1, c.itemNum2[9] += 1, n.eventId = 4, cc.audioEngine.stopAll(), cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1), n.ifTriggerEvent()) : cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没有那么多烟..." }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 2016:
                        {
                            text: ["流浪汉之间的竞争变得日益激烈，", "很多流浪汉不得不早晨4点、蹲守在各种小饭店和垃圾点...", "这一天，你总算领先了一个长期蹲守据点的老奶奶，几分钟", "你选择", "开左边的垃圾箱", "开右边的垃圾箱"], BGM: "", require: [], choice1: function () { c.itemNum2[27] += 1, c.itemNum2[24] += 1, t("获得【晓月手链】*1，【滑稽裤】*1") }, choice2: function () {
                                c.itemNum[0] += 4, c.itemNum[1] += 4, c.itemNum[4] += 3, c.itemNum2[1] += 3, c.money += 8, t("获得【木材】*4【亚麻】*4【果子】*3【伤药】*3【金钱】*0.8")
                            }
                        }, 2017:
                        {
                            text: ["“你tm还没走？”", "“不知道这是老子的地？”", "", "我在等你！"], BGM: "", require: [c.choice[0], 1], require2: [i.gameData[4], 0], choice1: function () { }, choice2: function () {
                                c.enemyId = 101, c.role.hp = o.role.maxHp(), o.save(), cc.director.loadScene("main")
                            }
                        }, 2019:
                        {
                            text: ["我正在林荫道下小憩，", "一位小女孩好奇的看着我，似乎想要过来，", "年轻的妈妈慌忙拉住她，然后从钱包抽出2元钱，丢在我的身上，说道，", "“有手有脚的，怎么不去找个活干？”", "把钱收起来，离开", "把钱还给她"], BGM: "BGM1", require: [], choice1: function () { c.money += 20, t("好吧...\n我就是个乞丐\n【获得2元钱！】") }, choice2: function () {
                                t("是啊，有手有脚，怎么就活不下去呢？为啥？")
                            }
                        }, 2020:
                        {
                            text: ["“CNM！", "给老子起来！”", "我的感觉头部受到猛烈一击，鲜血流了下来。", "一个满身肥膘的大汉，凶狠的蹬着我，他的身后是前几天的那几个流浪汉，", "“敢在老子地盘上撒野的就是你小子？”", "是", "不是"], BGM: "BGM1", require: [], choice1: function () { 0 == i.gameData[4] ? (c.skillLv[4] = 0, c.enemyId = 103, c.role.hp = o.role.maxHp(), o.save(), cc.director.loadScene("main")) : (c.itemNum2[11] += 1, t("“哈哈哈哈哈~果然是条硬汉！小伙子有前途。拿上老子的战袍，征服宇宙吧！”。获得【红夹克】*1")) }, choice2: function () {
                                0 == i.gameData[4] ? (c.enemyId = 103, c.role.hp = o.role.maxHp(), o.save(), cc.director.loadScene("main")) : (c.itemNum2[11] += 1, t("“哈哈哈哈哈~果然是条硬汉！小伙子有前途。拿上老子的战袍，征服宇宙吧！”。获得【红夹克】*1"))
                            }
                        }, 3006:
                        {
                            text: ["早上，山里下起了暴雨，", "帐篷里全部湿透，我慌忙逃窜，寻找避雨的地方，", "突然发现山脚有间民房", "【你要进去避雨吗？】", "去", "不去"], require: [c.distance, 0], choice1: function () { n.eventId = 3, n.ifTriggerEvent() }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 3007:
                        {
                            text: ["来到一个小村庄，", "门口两个抽烟的年轻人，挡住去路，", "不让通行。", "硬闯", "绕道而行"], require: [c.distance, 0], choice1: function () { c.role.hp = o.role.maxHp(), c.enemyId = 104, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 3008:
                        {
                            text: ["我正在路边小解，", "突然，一辆黑色轿车疾驰而来，", "我本能一跃，滚落沟底，", "正在此时，车上下来两个拿着铁锹的农民！", "", "刚正面！"], require: [c.choice[3], 2], choice1: function () { }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 105, o.save(), cc.director.loadScene("main")
                            }
                        }, 3010:
                        {
                            text: ["早上我被一阵阵大哭声和大笑声吵醒，", "我钻出帐篷一看————", "路边，一个叉腿坐地、短发、身着中学校服的妹子，喝着啤酒，一会大笑，一会大哭...", "过去问问", "算了，还是不要生事的好"], require: [], choice1: function () { 0 == i.gameData[4] ? c.choice[5] += 1 : c.choice[5] += 66, t("女孩（晓月，游戏伙伴之一）瞟了你一眼，并没有理你....") }, choice2: function () {
                                c.role.hp -= 1, t("女孩（晓月，游戏伙伴之一）向你扔了块石头，\n<(｀^′)>\n你损失1点生命")
                            }
                        }, 3011:
                        {
                            text: ["晚上，我正在帐篷里睡觉", "一个柔软的身体钻了进来，", "“(；′д｀)ゞ~老哥你好~", "有没有啥吃的a~，", "我两天没吃过东西啦\n(?_?)”", "有哇", "流氓——呀————！"], require: [c.choice[5], 1], choice1: function () { c.choice[5] += 3, c.itemNum[0] = 0, c.itemNum2[0] = 0, c.itemNum2[12] -= parseInt(.5 * c.itemNum2[12]), c.ifFollow[0] = 1, t("...“哈哈哈哈哈哈哈哈哈——嗝————谢谢老哥！\n(*≧▽≦)ツ┻━┻！\n哈哈哈，那就麻烦老哥带我回省城啦！”\n【你损失所有的果子/熟肉和一半的啤酒！！！晓月跟随！】") }, choice2: function () {
                                t("你一脚把女孩（晓月）踹出了帐篷...")
                            }
                        }, 3013:
                        {
                            text: ["“嘿~老哥，做早饭咧~(｀?ω?′)", "我做饭可厉害啦(*￣︶￣)，", "让我试试呗( ? ?ω?? )?~", "让她试", "不让她试"], require: [c.ifFollow[0], 1], choice1: function () { c.choice[5] < 35 ? (c.role.hp = 1, c.choice[5] += 3, t("...你喝了一大盆「黯然销魂十杂大补汤」\n【生命全损失，晓月好感+4】")) : (c.itemNum2[0] += 1, t("获得【熟肉】*1")) }, choice2: function () {
                                c.choice[5] -= 3, t("哼！￣へ￣\n【晓月好感-4】")
                            }
                        }, 3015:
                        {
                            text: ["发现一个山洞，", "洞里有两条路，", "一条似乎有点亮光，", "一条布满青苔，黑不见底", "你走哪条？", "有亮光的", "幽黑的"], require: [], choice1: function () { n.eventId = 5, n.ifTriggerEvent() }, choice2: function () {
                                c.itemNum2[18] += 1, t("你找了一个【装避鞋】！拿了赶紧溜了~")
                            }
                        }, 3016:
                        {
                            text: ["“老哥(?﹏?)，", "刚才打雷啦，听见没，太吓人啦(′???)σ，", "emmm..那个..我..能睡你旁边吗？\n(︶.?︶?)”", "可以哇", "不行！"], require: [c.ifFollow[0], 1], choice1: function () { c.energy = 0, c.choice[5] += 10, t("由于晓月晚上说梦话（偷笑）、蹬人，你一晚没睡！\n【精力0恢复！晓月好感+10】") }, choice2: function () {
                                c.choice[5] -= 4, t("￣へ￣\n【晓月好感-4】")
                            }
                        }, 3017:
                        {
                            text: ["有人喊抓贼，", "是否帮忙？", "是", "算了吧"], require: [], choice1: function () { c.role.hp = o.role.maxHp(), c.enemyId = 106, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 3022:
                        {
                            text: ["一个驻地大半年的地质勘察队、执意要请你去基地吃口饭。", "【你去吗？】", "去", "不去"], require: [], choice1: function () { c.hunger = o.maxHunger(), c.itemNum[0] += 3, c.itemNum2[13] += 1, c.chioce2[0] = 1, t("地质队，请你吃了一顿饭。一位中年男托你送一个生日礼物给他的女儿。\n【饥饿全恢复！获得「果子」*3！获得委托礼物「┑(=^ω^=)┑」*1】") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 3024:
                        {
                            text: ["你在一个隐蔽的草丛中发现一套水手服，", "似乎是有人故意放在这里的", "你要用它替换掉晓月身上的脏衣服吗？", "换换换！", "想想就行了(o﹃o?)"], require: [c.ifFollow[0], 1], choice1: function () { c.choice[5] > 400 ? (c.choice[5] += 23, t("(/ω＼)好害羞...不过只要你喜欢我就穿...\no(*////▽////*)q\n晓月好感+23")) : (c.role.hp = 1, t("动~感~少~女~拳——！\n（╬￣皿￣）=○＃（￣＃）３￣）\n你损失全部生命")) }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 3025:
                        {
                            text: ["一个可怜的流浪汉要求和你一起做个伴，", "你是否同意？", "同意", "拒绝"], require: [], choice1: function () { c.money = 0, t("....第二天一大早，流浪汉早就不见踪影。\n【你损失全部金钱！】") }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 107, o.save(), t("“cnm！老子弄死你！”")
                            }
                        }, 3032:
                        {
                            text: ["“哥...那啥...e....\n?(????ω????)?", "到了省城后，你要不来我家玩吧”", "好呀", "算了，你父母肯定不会同意的"], require: [c.ifFollow[0], 1], choice1: function () { t("“耶————！\n(’?’)シ┳━┳掀桌（开心）\n。。。。\n┬—┬ノ('-'ノ)摆好摆好”") }, choice2: function () {
                                t("晓月似乎很伤心...")
                            }
                        }, 4003:
                        {
                            text: ["中年大叔对于新伙伴似乎很感兴趣，几次想过来搭话。", "最后终于憋不住，", "“兄弟，我琢磨了好几天，发现了一个天大的秘密！”", "他似乎很激动，", "“能不能借我一块钱，这次稳中大奖！跑不了！中了奖咱们一人一半！怎么样？”", "借", "不借"], require: [], choice1: function () { c.money >= 10 ? (c.publicVar2[14] = 1, t("中年大叔抢过钱，一溜烟，不见了...")) : cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你兜里有几个钱，心里没点数？" }, choice2: function () {
                                t("“哎~难受哇~看着钱，就没了...”")
                            }
                        }, 4006:
                        {
                            text: ["我正在在街上捡垃圾，突然一个20上下，穿着短裙、高跟鞋的小姐姐，拉住我的衣服小声说，", "“小帅哥，要不要来玩会儿，只要5毛哟~”", "不去！", "好呀(°_°) "], require: [], choice1: function () { cc.director.loadScene("main") }, choice2: function () {
                                c.publicVar2[15] += 1, n.eventId = 7, n.ifTriggerEvent()
                            }
                        }, 4007:
                        {
                            text: ["中年大叔不知道哪里弄了点回锅肉和啤酒，", "非要叫你过去吃两口，", "当然去呀！", "算了，不想和他有什么瓜葛"], require: [c.publicVar2[14], 1], choice1: function () { n.eventId = 8, n.ifTriggerEvent() }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 4008:
                        {
                            text:
                                ["这天，桥底下搬来一个吉他女孩（陈碧瑶），", "单马尾、白体恤、牛仔裤，怎么看都不像是流浪汉。", "她似乎有些腼腆，面对中年大叔的质问，只是莞尔一笑", "不行，太特么奇怪了，我也得去问个究竟", "暗中观察一段时间再说"], action:
                                function () { var t = e("scr_data"), n = e("scr_data2"); 0 == n.gameData[4] && (t.publicVar[7] = -49), t.publicVar2[17] = 1, o.save() }, require:
                                [], choice1:
                                function () { c.publicVar[7] -= 10, t("碧瑶好感-10！") }, choice2:
                                function () {
                                    cc.director.loadScene("main");
                                }
                        }, 4012:
                        {
                            text: ["三个身穿制服的胖子来到桥下，", "一脚踢开脚边的水壶，大声叫到，", "“不许在这里搭帐篷，听到没！”", "正面刚", "赶紧递烟（需烟*3，金钱*3）"], require: [], choice1: function () { c.role.hp = o.role.maxHp(), c.enemyId = 110, 0 == c.publicVar[8] ? (c.ifFollow[1] = 1, c.publicVar[7] += 700, c.friendSkill[1] = 1, c.friendSkill[3] = 1, c.friendSkill[4] = 1, c.friendSkill[5] = 1, c.friendSkill[6] = 1, c.friendSkill[8] = 1, t("碧瑶加入战斗！")) : (o.save(), cc.director.loadScene("main")) }, choice2: function () {
                                c.itemNum2[7] >= 3 && c.money >= 30 ? (c.itemNum2[7] -= 3, c.money -= 30, t("“一个星期内，给我搬走，听见没！”")) : cc.find("Canvas/Notify2").getComponent("cc.Label").string = "尴尬，烟不够..."
                            }
                        }, 4014:
                        {
                            text: ["经过几天的寻找，", "总算找到地质队长描述的小区，", "是否要将委托礼物（┑(=^ω^=)┑）归还呢？", "归还", "自己留着"], require: [c.chioce2[0], 1], choice1: function () { c.itemNum2[13] -= 1, c.chioce2[0] = 2, t("队长的女儿，中学生模样，扎着双马尾，非常可爱。不过她似乎对礼物没啥兴趣，扔到一边，就进屋去了...\n年轻的妈妈邀我进去，我担心弄脏了地板，慌忙推辞...走出小区，恍若隔世...") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 4015:
                        {
                            text: ["八月盛夏，林荫路上，我意外的遇到了碧瑶，", "她带着鸭舌帽，似乎不想被人认出；一把吉他，落寞地独唱着。", "虽然围观的人很多，但是da赏的几乎没有，", "“这么漂亮还出来乞讨？是在炒作？！”，有人摸着下巴，大声「嘀咕」", "da赏自己一半的钱", "算啦，这是她自己的事"], require: [], choice1: function () {
                                if (c.money > 0) {
                                    var e = parseInt(.5 * c.money + 1), n = parseInt(.5 * e + 4), a = (e / 10).toFixed(1);
                                    c.money -= e, c.publicVar[7] += n, t("碧瑶看了你一眼，低下头继续唱着歌...\n【你本次给出" + a + "元，碧瑶存款+" + a + "元，好感+" + n + "】")
                                } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上一分钱也没有！"
                            }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 4017:
                        {
                            text: ["“(?ω?)hiahiahia！", "老哥，可算找到你啦！", "就差这里的垃圾箱没找啦！(╥╯^╰╥)", "上次忘了说了，给，这是我家地址，记得过来玩哈(^_?)☆”", "", "(#?Д?)"], action: function () { c.publicVar[9] = 1, o.save() }, require: [c.publicVar[3], 1], choice1: function () { }, choice2: function () {
                                n.eventId = 9, n.ifTriggerEvent()
                            }
                        }, 4018:
                        {
                            text: ["这天，我在街上游荡，", "意外的碰到了晓月！", "她全是干干净净，依旧留在短发", "我感觉脸颊发烫，刚想找个地方避开，但是还是被发现，", "“hi~老哥~好久不见呀”", "“对不起，我...”", "“啊~~你走了之后，那个大叔就放开了我，还把我送回了家，什么事也没发生┐(′?｀)┌。我先上学去了，拜拜~”", "", "....."], require: [c.choice[5], 1], require2: [c.publicVar[3], 0], choice1: function () { }, choice2: function () {
                                t("那个奇怪的大叔是谁？是她爸爸的恶作剧？")
                            }
                        }, 4019:
                        {
                            text: ["这天，我在街上游荡，", "意外的碰到了那天的短发女孩（晓月）。", "她全是干干净净，简直像是换了一个人！", "是否过去打招呼？", "是", "算了，这么漂亮的妹子怎可能喜欢我"], require: [], require2: [c.choice[5], 0], choice1: function () { c.publicVar[9] = 2, t("“喔~是你呀~我认得你！要是有啥困难，可以来找我喔︿(￣︶￣)︿”，女孩的热情，让我鼻子一酸，这是我第一次有这种感受...") }, choice2: function () {
                                t("注孤生————作者留言")
                            }
                        }, 4021:
                        {
                            text: ["街上有个男人在对一个女人拳打脚踢，", "我仔细一看，这个女人正是刚来省城时，叫我去玩玩的小姐姐！", "你是否帮她？", "帮忙", "算了，这是她自找的"], require: [], choice1: function () { c.role.hp = o.role.maxHp(), c.publicVar2[15] += 1, c.enemyId = 111, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 4030:
                        {
                            text: ["一辆白色面包车开到桥下，", "中年大叔兴奋的跑过来喊道，“快快快，天上掉馅饼啦，一瓶血，2块钱！我体检不过关，不然我全捐喽！”", "献血！（生命上限-70，钱+2元）", "不献！"], action: function () { cc.find("Canvas/Choice/label").getComponent("cc.Label").string = "【申明】此处为游戏效果，不等于真实情况，千万别误解" }, require: [], choice1: function () { c.role.maxHp -= 70, c.money += 20, o.save(), t("生命上限-70，获得2元。") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 4032:
                        {
                            text: ["一帮凶恶的男人将碧瑶团团围住，其中一个皮衣男叫到，", "“念你死去爹的面子，老子一再忍让。给你10天时间，再不还钱，你就给我做小姐去！”", "朦胧夜色下，看不清碧瑶脸上的表情，不过，她一个字也没说。", "帮忙解围（BOSS级对手）", "切莫冲动，以免搞砸，先观察几天再说"], require: [], choice1: function () { c.role.hp = o.role.maxHp(), c.enemyId = 112, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                var e = parseInt(.3 * c.publicVar2[18]), n = (e / 10).toFixed(1);
                                c.publicVar2[18] -= e, t("皮衣男把碧瑶背包翻了一个遍。【碧瑶存款减少" + n + "元！碧瑶存款还剩下" + (c.publicVar2[18] / 10).toFixed(1) + "】")
                            }
                        }, 4033:
                        {
                            text: ["我在城中村边晃荡，", "一个女人突然冲过来，把一包东西塞到怀里，然后头也不回的跑开了。", "看背影和服装，应该正是小兰", "", "打开包裹"], require: [c.publicVar2[15], 2], choice1: function () { }, choice2: function () {
                                c.itemNum[0] += 10, c.itemNum2[23] += 1, c.itemNum2[25] += 1, t("获得【果子】*10，【创口贴】*1，【护身符】*1")
                            }
                        }, 4034:
                        {
                            text: ["碧瑶极为节俭，她每天晚上回来前，都会去附近一个面包店，购买当天卖剩的、折扣面包。", "这天，看着她背着吉他远远过来了，我决定和她开个玩笑，我冲到面包店里，指着她经常购买的面包，喊道，", "“老板！这种面包我全要了！”（需2元）", "“哎呀，手抽筋了！不好意哈——哈~哈~哈”"], require: [], choice1: function () { c.money >= 20 ? (c.money -= 20, c.publicVar[7] += 20, c.hunger += parseInt(2 * o.maxHunger()), t("买完面包，我在门口慢悠悠吃着。不一会儿碧瑶过来了，她看了看我，我吃惊的看着她，塞了一大口面包，她立马转头看别的去了。不一会儿，碧瑶就从店里出来了，涨红了脸问道，“e...，能不能卖我几个面包”，“哦？这个呀？可以呀，一起回去吃吧，嘿嘿~”。【饥饿值爆满，碧瑶好感+20】")) : cc.find("Canvas/Notify2").getComponent("cc.Label").string = "店长：“没钱装啥逼，蛤?”" }, choice2: function () {
                                t("你被赶了出来...")
                            }
                        }, 4040:
                        {
                            text: ["中年大叔拿着之前民警给的几块钱，买了一些啤酒、卤肉，喊你过去吃两口。", "去还是不去呢？", "", "去", "不去"], require: [], choice1: function () { c.publicVar2[16] = parseInt(99 * Math.random() + 1), c.hunger = o.maxHunger(), t("吃完饭，中年大叔兴高采烈的抽出两张彩票，给了你一张。获得【彩票】（明晚开奖）！饥饿全恢复！") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 4041:
                        {
                            text: ["中年大叔拿着报纸、挺着圆鼓鼓的肚子，气喘吁吁回来桥下。", "俩人激动得不行！", "", "开奖啦！好紧张！"], require: [c.publicVar2[16], 1], choice1: function () { }, choice2: function () {
                                var e = c.publicVar2[16];
                                e < 90 ? (c.energy = 10 * parseInt(.05 * c.energy), t("...\n......\n.........\n没有中奖\n你气得一晚上没睡好\n精力恢复减半...")) : (c.money += 10, c.energy = 10 * parseInt(.05 * c.energy), t("...\n......\n.........\n恭喜中得1元大奖！\n你兴奋得一晚上没睡好\n精力恢复减半...获得1元...")), c.publicVar2[16] = 0
                            }
                        }, 4042:
                        {
                            text: ["皮衣男一伙再次来到桥下，围住碧瑶问道：", "“怎么样？赚的钱呢？你不是在卖唱么？”", "“那是给我妈治病的，你的钱我一定会还的。”，碧瑶有点惊恐。", "“这是你自己的事，我不关心。我只是让你还钱！”，皮衣男拉高了嗓门", "【你要怎么办？】", "先稳住皮衣男，把身上所有钱给他（必须大于2元）", "...这种事，我无能为力"], require: [], choice1: function () {
                                if (c.money >= 20) {
                                    var e = c.money, n = parseInt(.5 * e + 5), a = (e / 10).toFixed(1);
                                    c.money -= e, c.publicVar2[18] += e, c.publicVar[7] += n, t("“哦？这么快就找到男朋友啦？虽然不够塞牙缝。不过我也不是那么不通情达理，我就给「你们」多点时间。”，说完皮衣男离开了。\n【你本次给出" + a + "元，碧瑶存款+" + a + "元，好感+" + n + "】")
                                } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "这点钱恐怕会激怒对方..."
                            }, choice2: function () {
                                var e = parseInt(.5 * c.publicVar2[18]), n = (e / 10).toFixed(1);
                                c.publicVar2[18] -= e, t("几个跟班上前围住碧瑶，皮衣男从吉他包里搜出" + n + "元，说道，“我也不是那么不通情达理，我先拿一些，回去好交差，下次可没这么便宜了。”【碧瑶存款减少" + n + "元！碧瑶存款还剩下" + (c.publicVar2[18] / 10).toFixed(1) + "】")
                            }
                        }, 4047:
                        {
                            text: ["“小哥，请问下哪里比较容易捡到罐子？”，一天胖女人过来问道，她的手在不停的颤抖。", "告诉她", "不理她"], require: [], choice1: function () { c.publicVar2[19] += 50, t("“捡罐子得早上五点前去，不然会被其他人捡走。小饭店、旅馆、活动场多点，运气好可以捡到零食、盒饭...”\n【你获得易拉罐的概率降低3%！】") }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 4050:
                        {
                            text: ["由于人们大量捕杀蚊子，蚊子已经濒临灭绝，一些投机商人纷纷囤积蚊子尸体，哄抬物价。", "这不，一个暗中观察我好几天的商人，终于憋不住了，", "“我这里全球最高价，每只三毛！别掖着啦，过几天天气转凉，就不值这个价喽~”", "出售所有蚊子尸体", "不卖！坐等升值！"], require: [], choice1: function () { var e = c.kills[0], n = 3 * e, a = (n / 10).toFixed(1); c.money += n, c.kills[0] = 0; var i = "你一共出售" + e + "只蚊子，获得" + a + "元！"; t(i) }, choice2: function () {
                                t("“阔以！你就掖着，等发霉吧！”，蚊子商人气愤的走了。")
                            }
                        }, 4054:
                        {
                            text: ["这天，你发现一个还未「开启」的「宝箱」（垃圾箱）。", "不过，你远远看到老奶奶和胖女人正向这边走来。", "你是否要「开启」宝箱", "凭本事发现的宝箱，为啥要让给别人，开！", "算了，作为对她成功迈出第一步的鼓励，留给她吧！"], require: [c.publicVar2[19], 1], choice1: function () { c.itemNum[2] += 10, c.itemNum2[27] += 1, c.itemNum2[21] += 1, t("获得【易拉罐】*10，【晓月手链】*1，【小裤裤】*1") }, choice2: function () {
                                c.publicVar2[19] += 50, t("不一会儿母女俩就走了过来，妇女牵着塑料袋，老奶奶在垃圾箱中掏了半天，妇女有点不耐烦，“快点呀！好臭！手都快断了！”。老奶奶笑眯眯的安慰道，“再坚持会儿！回去后、你一定可以让老头子大吃一惊的！”。妇女没再说什么了。")
                            }
                        }, 4056:
                        {
                            text: ["碧瑶，渐渐卸下了防御，我们的话也慢慢多了起来。", "“你欠那些人多少钱？”，我问道。", "“额，两万多吧...”\n“...怎么会这么多！”，我有点吃惊。\n“我爸公司倒闭，借的六千，翻到现在的两万...”\n“那你爸妈呢？”，这个问题我一直都想问。\n“爸爸自杀了，后来妈妈病倒了，现在寄居在乡下亲戚家...”", "", "......."], require: [], choice1: function () { }, choice2: function () {
                                n.eventId = 10, n.ifTriggerEvent()
                            }
                        }, 4059:
                        {
                            text: ["晚上，天气微凉，我买了几个热腾腾的馒头给碧瑶送了过去。", "我背着吉他，一起走在回家的路上。", "宁静的秋夜，皓月如洗，树影婆娑......", "【你是否要尝试牵下碧瑶的手呢？】", "试一试！死了也值！（成功率不固定，根据好感值计算概率！）", "算了吧，我拿什么去谈一场恋爱？别连朋友也没得做！"], require: [], choice1: function () {
                                var e = c.publicVar[7]; if (e < 300) {
                                    var n = parseInt(.1 * (300 - e));
                                    c.publicVar[7] -= n, t("我缓缓靠近，假装不经意间勾了一下她的手，她本能般的缩回了手，拉开距离。【陈碧瑶戒备增加，好感-" + n + "！】")
                                } else c.publicVar[7] += 40, t("我缓缓靠近，假装不经意间勾了一下她的手，她轻微的缩了一下手，不过立即就安静下来，我顺势勾起她的指头，捏住她的手，一路都没有说话，但是我感觉我的都快跳出来啦，她的手心温暖而湿润。【陈碧瑶好感+40】")
                            }, choice2: function () {
                                cc.director.loadScene("main")
                            }
                        }, 146:
                        {
                            text: ["我捡完垃圾，回到桥下，皮衣男把碧瑶按到墙上，说道，", "“你别怪我，不就是让他在女儿面前脱光衣服吗，这点承受能力都没有，做个毛的老板！你怕是没见过高级的要债方法哟~”", "战斗！", "给他钱（需10元）~"], action: function () { e("scr_data").enemyId = 113, o.save() }, require: [], choice1: function () { c.role.hp = o.role.maxHp(), c.enemyId = 113, o.save(), cc.director.loadScene("main") }, choice2: function () {
                                c.money >= 100 ? (c.money -= 100, c.publicVar2[18] += 100, c.publicVar[7] += 60, c.enemyId = 0, t("“哦？不错，小伙子挺懂事的，以后就多麻烦你了啊~”，说完皮衣男离开了。碧瑶好感+60。")) : cc.find("Canvas/Notify2").getComponent("cc.Label").string = "对于胃口增的人，没个十几块，恐怕难以打发"
                            }
                        }, 163:
                        {
                            text: ["一个妇女和民警来到桥下，见到碧瑶后立马坐倒在地，大哭，", "“瑶儿哇~你妈快不行了~”。碧瑶呆住了。", "妇女往碧瑶身后瞅了瞅，突然停止哭泣，问，“你平时就住这儿？”。\n碧瑶没出声。\n妇女接着大哭道，“我苦命的孩子呀，从小都是住别墅，现在要和这些流浪汉住一起，你到底吃了多少苦头哇~...”", "", "..."], action: function () { e("scr_data").ifFollow[1] = 0, c.publicVar2[17] = 0, o.save() }, require: [], choice1: function () { }, choice2: function () {
                                n.eventId = 13, n.ifTriggerEvent()
                            }
                        }, 174:
                        {
                            text: ["“上头有领导要来，城里不准乱搭帐篷啦，我只是奉命行事，对不住啦，小兄弟，听明白没？”", "几个身着制服的男开着巡逻车来到桥下叫道。", "知道了，我马上搬走（放弃抵抗）", "我就不走！（战斗）"], action: function () { c.enemyId = 401, o.save() }, require: [], require2: [c.publicVar3[2], 0], choice1: function () { c.enemyId = 0, c.publicVar3[2] = 1, n.ifTriggerEvent("你搬离了桥洞...") }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 401, o.save(), cc.director.loadScene("main")
                            }
                        }, 175:
                        {
                            text: ["“听说你很拽？”，新来了几个制服男...", "我马上搬走（放弃抵抗）", "是的，我就是不走！（战斗）"], action: function () { c.enemyId = 402, o.save() }, require: [], require2: [c.publicVar3[2], 0], choice1: function () { c.enemyId = 0, c.publicVar3[2] = 1, n.ifTriggerEvent("你搬离了桥洞...") }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 402, o.save(), cc.director.loadScene("main")
                            }
                        }, 176:
                        {
                            text: ["“你好，请问下那个钉子户是不是你？”，又来了几个制服男...", "不是的，我刚来，我这就搬走（放弃抵抗）", "是的（战斗）"], action: function () { c.enemyId = 403, o.save() }, require: [], require2: [c.publicVar3[2], 0], choice1: function () { c.enemyId = 0, c.publicVar3[2] = 1, n.ifTriggerEvent("你搬离了桥洞...") }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 403, o.save(), cc.director.loadScene("main")
                            }
                        }, 177:
                        {
                            text: ["“听说你在找屎？”，几个大块头制服男问道...", "没没没！这就走（放弃抵抗）", "是的，你要吗？（战斗）"], action: function () { c.enemyId = 404, o.save() }, require: [], require2: [c.publicVar3[2], 0], choice1: function () { c.enemyId = 0, c.publicVar3[2] = 1, n.ifTriggerEvent("你搬离了桥洞...") }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 404, o.save(), cc.director.loadScene("main")
                            }
                        }, 178:
                        {
                            text: ["“要最帅警官亲自出马的就是你小子？”，一位长着小胡茬的怪蜀黍问道。", "哪敢！这就走！哈哈（放弃抵抗）", "哦~是吗？（战斗）"], action: function () { c.enemyId = 405, o.save() }, require: [], require2: [c.publicVar3[2], 0], choice1: function () { c.enemyId = 0, c.publicVar3[2] = 1, n.ifTriggerEvent("你搬离了桥洞...") }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 405, o.save(), cc.director.loadScene("main")
                            }
                        }, 179:
                        {
                            text: ["“轰隆隆~轰隆隆”，一辆挖掘机开到了桥下...", "尼玛！我走还不成嘛！（放弃抵抗）", "我已成仙，法力无边！（战斗）"], action: function () { c.enemyId = 406, o.save() }, require: [], require2: [c.publicVar3[2], 0], choice1: function () { c.enemyId = 0, c.publicVar3[2] = 1, n.ifTriggerEvent("你搬离了桥洞...") }, choice2: function () {
                                c.role.hp = o.role.maxHp(), c.enemyId = 406, o.save(), cc.director.loadScene("main")
                            }
                        }
                    };
                    return a
                }, calculateEventId: function () {
                    var t = e("scr_public").regionId(), n = e("scr_data").stayDay, a = e("scr_data"), c = 0;
                    return 1e3 == t && (c = 1e3 + n[0]), 2e3 == t && (c = 2e3 + n[1]), 3e3 == t && (c = 3e3 + n[2]), 4e3 == t && (c = 4e3 + n[3]), a.day > 143 && (c = a.day), c
                }, ifTrigger: function () {
                    function e() {
                        var e = t.require2[0], n = t.require2[1];
                        return "undefined" == typeof t.require2 || e == n
                    }
                    var t = this.eventData(), n = t.require[0], a = t.require[1];
                    return ("undefined" == typeof n || n >= a) && ("undefined" == typeof t.require2 || e())
                }, eventData: function c() {
                    var e = this.eventId || this.calculateEventId(), c = this.event()[e];
                    return c
                }, triggerEvent: function () {
                    function t() {
                        this.creatText(d, "plot" + l, i[l]), l++
                    }
                    function n() {
                        var e = c.choice1, t = c.choice2, n = cc.find("Canvas/Choice/Choice1"), a = cc.find("Canvas/Choice/Choice2");
                        n.getChildByName("choiceText").getComponent("cc.Label").string = r, a.getChildByName("choiceText").getComponent("cc.Label").string = o, "" == r ? (n.active = !1, cc.find("Canvas/Choice/label").active = !1) : n.active = !0, cc.find("Canvas/Choice").runAction(cc.fadeIn(2)), n.on("touchstart", e, this), a.on("touchstart", t, this)
                    }
                    var a = e("scr_data"), c = this.eventData(), i = c.text, o = i.pop(), r = i.pop(), s = i.length, l = 1, u = a.publicVar[6] || 2, p = parseInt(.25 * u * 1e3), d = cc.find("Canvas/EventText"), m = this;
                    c.BGM || ""; "undefined"
                        != typeof c.action && c.action(), this.initUI(), window.setTimeout(function () {
                            m.creatText(d, "plot0", i[0])
                        }, p), this.schedule(t, u, s - 2), this.scheduleOnce(n, u * s)
                }, initUI: function () {
                    var e = cc.find("Canvas/Choice");
                    e.stopAllActions(), e.opacity = 0, cc.find("Canvas/EventText").removeAllChildren(), e.getChildByName("Choice1").targetOff(this), e.getChildByName("Choice2").targetOff(this)
                }, ifTriggerEvent: function () {
                    var e = this.eventData(); "undefined"
                        == typeof e ? cc.director.loadScene("main") : this.ifTrigger() ? this.triggerEvent() : cc.director.loadScene("main")
                }, onLoad: function () {
                    this.ifTriggerEvent()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_explore: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "aac8eR1m+lE25FoXnDRrcRr", "scr_explore"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var t = cc.find("Canvas/Button/button_forward").getComponent("scr_forwardButton"), n = t.constructor, a = new n, c = new n, i = new n, o = new n, r = this, s = e("scr_data");
                    switch (this.node.runAction(cc.tintTo(.3, 255, 255, 255)), a.addDistance = function () { }, c.addDistance = function () { }, i.addDistance = function () { }, o.addDistance = function () {
                        e("scr_data").publicVar3[1] += 1
                    }, a.shieldButton = function () {
                        r.node.off("touchstart", a.callBack, a), r.node.runAction(cc.tintTo(.3, 114, 199, 255)), r.scheduleOnce(r.onLoad, .7)
                    }, c.shieldButton = function () {
                        r.node.off("touchstart", c.callBack, c), r.node.runAction(cc.tintTo(.3, 114, 199, 255)), r.scheduleOnce(r.onLoad, .7)
                    }, i.shieldButton = function () {
                        r.node.off("touchstart", i.callBack, i), r.node.runAction(cc.tintTo(.3, 114, 199, 255)), r.scheduleOnce(r.onLoad, .7)
                    }, o.shieldButton = function () {
                        r.node.off("touchstart", o.callBack, o), r.node.runAction(cc.tintTo(.3, 114, 199, 255)), r.scheduleOnce(r.onLoad, .7)
                    }, a.getItemNum = function () {
                        return 1
                    }, c.getItemNum = function () {
                        return 1
                    }, i.getItemNum = function () {
                        return 2
                    }, o.getItemNum = function () {
                        var t = Math.min(parseInt(e("scr_data").publicVar3[1] / 100 + 1), 4);
                        return t
                    }, a.dryUp = function () {
                        var t = e("scr_public").regionId(), n = e("scr_data");
                        return 2e3 == t && n.day >= 42 || 3e3 == t && n.day >= 80
                    }, a.playBGM = function () { }, a.stopForward = function () {
                        a.forward()
                    }, c.getEnemyRate = function () {
                        var e = [[0, 0], [30, 1001], [50, 1002], [70, 1003], [80, 400002], [95, 300001], [100, 100001]];
                        return e
                    }, i.getEnemyRate = function () {
                        var e = [[0, 0], [20, 2001], [40, 2002], [60, 2003], [75, 2004], [100, 2005]];
                        return e
                    }, o.getFigthId = function () {
                        var t = Math.min(parseInt(e("scr_data").publicVar3[1] / 50), 9), n = [3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010], a = n[t];
                        return "undefined" == typeof a && (a = 900004), a
                    }, c.getDrop = function () {
                        var e = [[16, 0, 2, 1], [25, 1, 2, 1], [25, 4, 2, 1], [19, 5, 1, 1], [6, 6, 1, 1]];
                        return e
                    }, i.getDrop = function () {
                        var e = [[97, 2, 1, 1], [20, 2, 1, 1], [25, 99, 2, 3], [15, 7, 1, 1]];
                        return e
                    }, o.getDrop = function () {
                        var e = [[60, 16, 1, 2], [20, 16, 1, 2], [8, 8, 1, 1]];
                        return e
                    }, c.regionEventId = function () {
                        var e = [0, 20, 40, 60, 80, 100], t = 7e3 + c.randomId(e);
                        return t
                    }, i.regionEventId = function () {
                        var e = [0, 25, 50, 75, 100], t = 8e3 + i.randomId(e);
                        return t
                    }, o.regionEventId = function () {
                        var e = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], t = 9e3 + o.randomId(e);
                        return t
                    }, o.regionEventId = function () {
                        return 0
                    }, o.event = function () {
                        var t = 100 * Math.random(), n = e("scr_data"), a = e("scr_public"), c = e("scr_effect");
                        t < 10 ? (n.role.hp = a.role.maxHp(), c.playText("Canvas/Text/txt_notify", "生命全恢复！", 60)) : t < 25 ? (n.publicVar3[4] += 10, c.playText("Canvas/Text/txt_notify", "攻击+10！（持续1天）", 60)) : t < 40 ? (n.publicVar3[10] += 10, c.playText("Canvas/Text/txt_notify", "防御+10！（持续1天）", 60)) : t < 50 ? (n.publicVar3[16] += 50, n.role.hp += 50, c.playText("Canvas/Text/txt_notify", "生命上限+50！（持续1天）", 60)) : t < 60 ? (n.publicVar3[5] += 1, c.playText("Canvas/Text/txt_notify", "全属性（攻防血）提高1%！（效果随天数缓慢衰减）", 60)) : t < 70 ? (n.publicVar3[11] += 6, c.playText("Canvas/Text/txt_notify", "逃跑率+6%！（持续1天）", 60)) : t < 80 ? (n.publicVar3[17] += 1, c.playText("Canvas/Text/txt_notify", "「晓月手链」等级+1！（效果持续1天）", 60)) : t < 90 ? (n.publicVar3[18] += 1, c.playText("Canvas/Text/txt_notify", "「幸运石」等级+1！（效果持续1天）", 60)) : (n.publicVar3[9] += 1, c.playText("Canvas/Text/txt_notify", "「放大镜」等级+1！（效果持续1天）", 60)), a.save()
                    }, s.publicVar[13]) {
                        case 0:
                            this.node.on("touchstart", a.callBack, a);
                            break;
                        case 1:
                            this.node.on("touchstart", c.callBack, c);
                            break;
                        case 2:
                            this.node.on("touchstart", i.callBack, i);
                            break;
                        case 3:
                            this.node.on("touchstart", o.callBack, o)
                    }
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_fightState: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "c4f80DG6eFB/bvHazsL2je9", "scr_fightState"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function t() {
                        var e = c[i.figthState];
                        r.string = e
                    }
                    function n() {
                        0 == i.skillLv[5] ? o.node.active = !1 : o.node.active = !0
                    }
                    function a() {
                        1 == i.skillLv[9] && 0 == i.skillLv[14] && (i.figthState += 1, i.figthState > 1 && (i.figthState = 0), t()), 1 == i.skillLv[9] && 1 == i.skillLv[14] && (i.figthState += 1, i.figthState > 2 && (i.figthState = 0), t())
                    }
                    var c = ["平  衡", "拼  命", "猥  琐"], i = e("scr_data"), o = this, r = this.node.getChildByName("text").getComponent("cc.Label");
                    t(), n(), this.node.on("touchstart", a, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data" }], scr_fight: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "e0873SPr91PW4GARejADMmt", "scr_fight"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t), c = (a.addComponent(cc.Label), cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1)));
                    a.parent = e, a.color = new cc.Color(0, 0, 0), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(630, 200), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 60, a.getComponent(cc.Label).fontSize = 36, a.setScale(0, 0), a.runAction(c)
                }, getItem: function (t) {
                    for (var n = "", a = t.length, c = e("scr_public"), i = e("scr_data"), o = 0; o < a; o++) {
                        var r = 100 * Math.random();
                        if (r < t[o][0]) {
                            var s = t[o][1], l = t[o][2], u = t[o][3];
                            if (2 == u) {
                                var p = c.itemName2;
                                i.itemNum2[s] += l, n = n + "【" + p[s] + "】*" + l
                            }
                            if (1 == u) {
                                var p = c.itemName;
                                i.itemNum[s] += l, n = n + "【" + p[s] + "】*" + l
                            }
                            3 == u && (i.money += l, n = n + "【金钱】*" + (l / 10).toFixed(1))
                        }
                    }
                    return "" == n && (n = "没发现道具"), c.save(), n
                }, fight: function (t) {
                    function n() {
                        z.hp > 0 && D.role.hp > 0 && a(), z.hp > 0 && D.role.hp > 0 && J.getComponent("cc.Button").scheduleOnce(l, 1)
                    }
                    function a() {
                        var e = "你使用【普攻】", n = "", a = "", l = "", u = "", p = "", d = "", m = "";
                        q.publicVar = 0;
                        var f = D.figthState;
                        if (1 == D.skillLv[25]) {
                            var h = 100 * Math.random();
                            if (h < 10) {
                                var v = parseInt(.03 * se.maxHp);
                                q.publicVar += z.def, D.role.hp += v, D.role.hp > se.maxHp && (D.role.hp = se.maxHp), l = "。【霸气】无视防御，生命恢复" + v
                            }
                        }
                        if ("undefined" != typeof z.defSkill && (p = z.defSkill()), r()) {
                            var y = parseInt(.1 * se.maxHp), g = parseInt(.03 * se.att);
                            D.role.hp += y, q.correct[0] += g, D.role.hp > se.maxHp && (D.role.hp = se.maxHp), d = "【声援：生命+" + y + "，攻击+" + g + "】"
                        }
                        var b = parseInt(Math.max(se.att + q.correct[0] + q.publicVar - z.def * (1 - 2 * D.itemNum2[15] / 100), 0));
                        if (0 == f && (b = parseInt(b * (1 + ne[0] / 500)), te[0] += 1), 1 == f) {
                            var _ = parseInt(.08 * se.maxHp);
                            b = parseInt(b * (1.32 + ne[1] / 200)), D.role.hp -= _, te[1] += 1, u = "「拼命：你损失" + _ + "点生命」"
                        }
                        if (2 == f && (b = parseInt(.7 * b), te[2] += 1), 1 == ae[0] && (b = parseInt(1.3 * b)), D.itemNum2[10] > 0) {
                            $ += 1, $ > 20 && ($ = 20);
                            var C = parseInt(4 * D.itemNum2[10] * $);
                            b = parseInt(b * (C / 100 + 1)), e = e.replace("普攻", "割裂"), a = "，伤害加成" + C + "%"
                        }
                        if (i() && (b = parseInt(1.5 * b), e += "，触发【暴击】", ie = 0, M()), D.itemNum2[19] > 0 && D.itemNum2[14] > 0 && D.publicVar[4] > 0 && (D.itemNum2[14] -= 1, D.publicVar3[14] += 1, b = parseInt(b * (D.itemNum2[19] + 1)), e = e.replace(/普攻|割裂/, "枪击"), /暴击/.test(e) && (e = e.replace(/暴击/, "爆头"))), o()) {
                            var y = parseInt(.21 * b), v = new RegExp("触发");
                            D.role.hp += y, D.role.hp > se.maxHp && (D.role.hp = se.maxHp), e += v.test(e) ? "【嗜血】" : "，触发【嗜血】", n = "，恢复" + y + "点生命"
                        }
                        1 == D.ifFollow[1] && (m = s()), z.hp -= b, 100002 == t && (p = z.defSkill()), e = e + "，对" + z.name + "造成" + b + "点伤害" + n + a + l + u + p + d + m, L(), q.creatText(Q, "roleNotify", e), c(), B(), V(), w(), x()
                    }
                    function c() {
                        y(), X.getComponent("cc.Label").string = "", O.textZoon2("Canvas/Fight/enemyHp")
                    }
                    function i() {
                        var e = 2 * D.itemNum2[3] + ce, t = 100 * Math.random();
                        return t < e || 1 == ie
                    }
                    function o() {
                        var e = 2 * D.itemNum2[8], t = 100 * Math.random();
                        return t < e
                    }
                    function r() {
                        if (1 == D.ifFollow[0] && 1 == D.friendSkill1[2]) {
                            var e = parseInt(D.choice[5] / 4), t = 100 * Math.random();
                            return t < e
                        }
                        return !1
                    }
                    function s() {
                        var e = "。碧瑶使用【普攻】", t = "", n = "", a = 100 * Math.random(), c = oe.att - z.def + q.publicVar;
                        if (c = Math.max(c, 0), a < oe.crit) {
                            if (c = parseInt(1.5 * c), e = e.replace(/普攻/, "暗杀"), D.friendSkill[3] > 0) {
                                var i = parseInt(.1 * c * oe.bleedNum), o = parseInt(.1 * z.def);
                                z.hp -= i, z.def -= o, oe.bleedNum += 1, n = n + "，附加" + i + "流血，减防" + o
                            }
                            if (D.friendSkill[4] > 0) {
                                var r = parseInt(.25 * c);
                                se.hp += r, n = n + "。你恢复" + r + "生命"
                            }
                            D.friendSkill[6] > 0 && (ie = 1, n += "，你下次攻击必定暴击！")
                        }
                        return D.friendSkill[8] > 0 && oe.attackTimes % 3 == 0 && (c = parseInt(2.5 * c), e = /暗杀/.test(e) ? e.replace(/暗杀/, "终结.蝶舞") : e.replace(/普攻/, "终结")), z.hp -= c, oe.attackTimes += 1, t = "，造成" + c + "点伤害", e = e + t + n
                    }
                    function l() {
                        var e = z.enemyEscapeRate;
                        if (0 != e) {
                            var t = 100 * Math.random();
                            if (t < e - 5 * D.itemNum2[15]) return void h()
                        }
                        var n = z.name + "攻击", a = new RegExp("触发"), c = "", i = "", o = "", r = D.figthState;
                        if (d()) {
                            ee += 1, $ > 20 && ($ = 20);
                            var s = 20 * ee, l = Math.round(.05 * se.maxHp);
                            se.def = Math.round(le * (s / 100 + 1)), D.role.hp += l, D.role.hp > se.maxHp && (D.role.hp = se.maxHp), n += "。【火狐之灵】触发", c = "，生命恢复" + l + "，防御加成" + s + "%"
                        }
                        var f = parseInt(Math.max(z.att - q.correct[1] - se.def, 0));
                        if (0 == r && (f = parseInt(f * (1 - ne[0] / 500))), 2 == r) {
                            var v = 10 + ne[2];
                            f = parseInt(f * (.7 - ne[2] / 600))
                        }
                        if (p() && (f = 0, a.test(n) ? n = n.replace("触发", "【格挡】触发") : n += "。【格挡】触发"), m()) {
                            var y = Math.max(se.def - q.correct[1], 0);
                            f -= y, f < 0 && (f = 0), z.hp -= y, a.test(n) ? n = n.replace("触发", "【反弹】触发") : n += "。【反弹】触发", i = "，" + y + "点伤害反弹给" + z.name
                        }
                        if (D.role.hp -= f, 2 == r) {
                            var v = parseInt(20 + ne[2]);
                            D.role.hp += v, D.role.hp > se.maxHp && (D.role.hp = se.maxHp), o = "「猥琐：你恢复" + v + "点生命」"
                        }
                        n = n + "，你受到" + f + "点伤害" + i + c + o, "undefined" != typeof z.skill && (n = n + "！" + z.skill()), q.creatText(Q, "enemyNotify", n), U(), u(), w(), V(), x()
                    }
                    function u() {
                        y(), M(), X.getComponent("cc.Label").string = "", O.textZoon2("Canvas/Fight/roleHp"), O.textZoon2("Canvas/Fight/escapeRate")
                    }
                    function p() {
                        var e = Math.min(2 * D.itemNum2[4], 60), t = 100 * Math.random();
                        return t < e
                    }
                    function d() {
                        var e = 2 * D.itemNum2[11], t = 100 * Math.random();
                        return t < e
                    }
                    function m() {
                        var e = 2 * D.itemNum2[9], t = 100 * Math.random();
                        return t < e
                    }
                    function f() {
                        var e = v(), t = 100 * Math.random();
                        if (D.skillLv[14] > 0 && (D.figthState = 2), cc.find("Canvas/Fight/state/text").getComponent("cc.Label").string = pe[D.figthState], B(), t > e) z.hp > 0 && D.role.hp > 0 ? J.getComponent("cc.Button").scheduleOnce(l, .7) : w(), D.publicVar2[6] += 1, L(), O.playText("Canvas/Fight/notify2", "逃跑失败！", 60);
                        else {
                            var n = 1 + D.itemNum2[18];
                            D.escapeExp += n, O.playText("Canvas/Text/txt_notify", "逃跑成功！\n逃跑技术+" + n + "（累计" + D.escapeExp + "）", 80), E(), C()
                        }
                    }
                    function h() {
                        B(), O.playText("Canvas/Text/txt_notify", z.name + "逃跑啦！", 80), C()
                    }
                    function v() {
                        var e = Math.round(100 * (1 - z.hp / z.maxHp)), t = (z.escapeRate + e + D.escapeExp / 10 + 2 * D.itemNum2[24] + D.publicVar3[11]).toFixed(1);
                        return t < 0 && (t = 0), t = Math.min(t, 100)
                    }
                    function y() {
                        Y.getComponent("cc.Label").string = "HP" + D.role.hp + "/" + se.maxHp, W.getComponent("cc.Label").string = z.name + "LV" + z.lv + "\nHP" + z.hp, j.getComponent("cc.Label").string = v() + "%", D.publicVar[4] > 0 && _()
                    }
                    function g() {
                        var e = cc.find("Canvas/Fight");
                        cc.find("Canvas/Button").setScale(0, 0), e.active = !0, e.scale = 0, e.runAction(cc.scaleTo(.5, 1)), cc.find("Canvas/Text/txt_notify").opacity = 0, U(), b(), Y.scale = 1, j.scale = 1
                    }
                    function b() {
                        if (D.itemNum2[19] > 0) {
                            var e = cc.find("Canvas/Fight/gunButton");
                            e.active = !0, _(), e.targetOff(e), e.on("touchstart", function () {
                                0 == D.publicVar[4] ? D.publicVar[4] = 1 : D.publicVar[4] = 0, _()
                            }, e)
                        }
                    }
                    function _() {
                        var e = cc.find("Canvas/Fight/gunButton"), t = ["关", "开"];
                        e.getComponent("cc.Label").string = "（" + D.itemNum2[14] + "）\n【" + t[D.publicVar[4]] + "】"
                    }
                    function x() {
                        P.save(), P.init()
                    }
                    function C() {
                        var e = cc.find("Canvas/Button"), t = cc.find("Canvas/Text/txt_notify");
                        if (D.role.hp <= 0) {
                            if (D.skillLv[24] > 0) {
                                var n = 100 * Math.random(), a = Math.min(Math.max(parseInt(D.publicVar3[12] / 5), 20), 40);
                                n < a && z.escapeRate != -9567 ? (D.role.hp = P.role.maxHp(), O.playText("Canvas/Text/txt_notify", "【圣斗士：我又回来啦！~】", 80)) : D.role.hp = 1 + parseInt(50 * D.itemNum2[25] + .03 * P.role.maxHp() * D.itemNum2[25])
                            } else D.role.hp = 1 + parseInt(50 * D.itemNum2[25] + .03 * P.role.maxHp() * D.itemNum2[25]);
                            D.day <= 3 && (D.role.hp = P.role.maxHp(), D.health += z.lostHealth, O.playText("Canvas/Text/txt_notify", "【作者的守护：游戏前3天战斗失败不会受到惩罚，并且帮你补满血，请开心点玩游戏吧~】", 80))
                        }
                        cc.find("Canvas/Fight").runAction(cc.scaleTo(.3, 0)), e.active = !0, e.runAction(cc.scaleTo(.3, 1)), t.opacity = 255, D.enemyId = 0, I(), L(), x()
                    }
                    function E() {
                        D.enemyId = 0, x()
                    }
                    function I() {
                        if (D.buffState[0] > 0) {
                            var e = 100 * Math.random();
                            e < 50 && (D.buffState[0] = 0)
                        }
                    }
                    function V() {
                        if (z.hp <= 0) {
                            B();
                            var e = z.drop, t = "", n = "战斗胜利！\n获得", a = q.getItem(e), c = H();
                            1 == D.skillLv[5] && (t = R());
                            var i = S(), o = N(e), r = T(e), s = k(e);
                            D.winTimes += 1, "没发现道具" == a && (n = n.replace("获得", "")), n = s + o + r + n + a + i + t + c, "undefined" != typeof z.winEvent && (n = n + "！\n" + z.winEvent()), E(), q.scheduleOnce(function () {
                                O.playText("Canvas/Text/txt_notify", n, 80), C()
                            }, 1.2)
                        }
                    }
                    function N(e) {
                        if (1 == D.ifFollow[0] && 1 == D.friendSkill1[3]) {
                            var t = 100 * Math.random();
                            if (t < 30) {
                                var n = q.getItem(e);
                                return "【捡漏：" + n + "】"
                            }
                            return ""
                        }
                        return ""
                    }
                    function T(e) {
                        if (1 == D.publicVar[1]) {
                            var t = D.day + 20, n = 100 * Math.random();
                            if (n < t) {
                                var a = q.getItem(e);
                                return "【修罗：" + a + "】"
                            }
                            return ""
                        }
                        return ""
                    }
                    function k(e) {
                        if (D.itemNum2[26] > 0) {
                            var t = 100 * Math.random(), n = D.itemNum2[26] + D.publicVar3[18];
                            if (t < n) {
                                var a = q.getItem(e);
                                return "【幸运石：" + a + "】"
                            }
                            return ""
                        }
                        return ""
                    }
                    function S() {
                        var e = z.getAtt, t = 100 * Math.random();
                        return t < 20 ? (D.role.def += e, "。防御提高" + e + "点！") : t < 60 ? (D.role.att += e, "。攻击提高" + e + "点！") : (D.role.maxHp += 5 * e, "。最大生命值提高" + 5 * e + "点！")
                    }
                    function H() {
                        var e = "", t = z.achieve;
                        return 0 != t && "undefined" != typeof t && (D.achieve += t, e = "。声望+" + t), e
                    }
                    function R() {
                        var e = ["【平衡架势】", "【拼命架势】", "【猥琐架势】"], t = te.indexOf(Math.max.apply(Math, te));
                        return D.figthExp[t] += 1, D.figthExp[t] > 150 ? (D.figthExp[t] = 150, "。" + e[t] + "熟练度已达最大值") : "。" + e[t] + "熟练度+1"
                    }
                    function w() {
                        if (D.role.hp <= 0) {
                            var e = "";
                            B(), Y.stopAllActions(), j.stopAllActions();
                            var t = z.lostHealth || 0;
                            e = D.day < 20 ? "战斗失败！健康-" + t + "（健康为0时游戏结束）" : "战斗失败！健康-" + t, D.health -= t, "undefined" != typeof z.lostEvent && (e = e + "！\n" + z.lostEvent()), D.publicVar3[12] += 1, E(), q.scheduleOnce(function () {
                                O.playText("Canvas/Text/txt_notify", e, 80), C()
                            }, 1.2)
                        }
                    }
                    function M() {
                        var e = [[4, 0], [0, 0], [-4, 0], [0, 0], [4, 0], [0, 0]], t = 0;
                        q.schedule(function () {
                            cc.find("Canvas").parent.setPosition(e[t][0], e[t][1]), t++
                        }, .05, 5)
                    }
                    function L() {
                        Q.removeAllChildren(!0)
                    }
                    function B() {
                        Y.scale = 0, j.scale = 0, J.scale = 0, Z.scale = 0, K.scale = 0
                    }
                    function U() {
                        J.scale = 1, Z.scale = 1, K.scale = 1
                    }
                    function A() {
                        if (6 == t.toString().length) {
                            D.specialEnemy[t].hp <= 0 && (D.specialEnemy[t].hp = D.specialEnemy[t].maxHp);
                            var e = D.specialEnemy[t];
                            z.lv = e.lv, z.hp = e.hp, z.maxHp = e.maxHp, z.att = e.att, z.def = e.def
                        }
                    }
                    function F() {
                        if (D.publicVar[1] == -1) z.hp = parseInt(.5 * z.hp), z.maxHp = parseInt(.5 * z.maxHp);
                        else if (1 == D.publicVar[1]) {
                            var e = D.day, n = e / 40 + 1, a = parseInt(Math.pow(e, 1.5) / 6);
                            if (6 == t.toString().length) {
                                var c = D.specialEnemy[t];
                                z.hp == z.maxHp && (z.hp = parseInt(c.hp * n)), z.maxHp = parseInt(c.maxHp * n), z.att += 2 * a, z.def += a
                            } else z.hp = parseInt(z.hp * n), z.maxHp = parseInt(z.maxHp * n), z.att += 2 * a, z.def += a
                        }
                    }
                    var D = e("scr_data"), P = e("scr_public"), O = e("scr_effect"), q = this, G = e("scr_enemy")[t], z = {}, J = cc.find("Canvas/Fight/fight"), Z = cc.find("Canvas/Fight/escape"), K = cc.find("Canvas/Fight/state"), X = cc.find("Canvas/Fight/notify2"), Y = cc.find("Canvas/Fight/roleHp"), W = cc.find("Canvas/Fight/enemyHp"), j = cc.find("Canvas/Fight/escapeRate"), Q = cc.find("Canvas/Fight/notify"), $ = 0, ee = 0, te = [0, 0, 0], ne = D.figthExp, ae = (D.skillLv[4], D.buffState), ce = 0, ie = 0, oe = { att: parseInt(D.publicVar[7] + 600), crit: 10 + 25 * D.friendSkill[5], bleedNum: 1, attackTimes: 1 };
                    D.publicVar[4] = 0, this.correct = [0, 0], this.publicVar = 0;
                    for (var re in G) z[re] = G[re];
                    var se = { maxHp: P.role.maxHp(), att: P.role.att(), def: P.role.def() };
                    A(), F();
                    var le = se.def, ue = z.des, pe = ["平  衡", "拼  命", "猥  琐"];
                    J.targetOff(J), Z.targetOff(Z), J.on("touchstart", n, J), Z.on("touchstart", f, Z), y(), g(), O.playText("Canvas/Fight/notify2", ue, 80)
                }, ifBeAttacked: function () {
                    var t = e("scr_data").enemyId;
                    t && this.fight(t)
                }, onLoad: function () {
                    this.ifBeAttacked()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_enemy: "scr_enemy", scr_public: "scr_public" }], scr_forwardButton: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "7e6b7ZHdulNI6LuPQKyXMkr", "scr_forwardButton"), cc.Class({
                "extends": cc.Component, properties: {}, fight: function () {
                    var t = this.getFigthId();
                    e("scr_data").enemyId = t, e("scr_public").save(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(t)
                }, getFigthId: function () {
                    for (var e = this.getEnemyRate(), t = 100 * Math.random(), n = e.length, a = 0; a <= n - 2; a++)if (t > e[a][0] && t <= e[a + 1][0]) return e[a + 1][1]
                }, getEnemyRate: function () {
                    var t = (e("scr_data"), []), n = e("scr_public").regionId();
                    return 1e3 == n ? t = [[0, 0], [20, 1], [35, 2], [60, 3], [70, 4], [85, 100001], [95, 100002], [100, 706]] : 2e3 == n ? t = [[0, 0], [25, 21], [45, 22], [65, 23], [75, 24], [85, 25], [92, 26], [99, 100001], [100, 27]] : 3e3 == n ? t = [[0, 0], [25, 31], [40, 32], [50, 33], [60, 34], [70, 35], [80, 36], [88, 300001], [95, 300002], [100, 100001]] : 4e3 == n && (t = [[0, 0], [20, 41], [40, 42], [60, 43], [70, 44], [85, 45], [95, 400001], [100, 100001]]), t
                }, getItemNum: function () {
                    return 2
                }, getItem: function () {
                    function t() {
                        var t = e("scr_data"), n = t.itemNum2[17] + t.publicVar3[9], a = 100 * Math.random(), c = "";
                        return a < n && (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(i), c = "没发现道具" != c ? "\n【放大镜：发现" + c + "】" : "\n【放大镜：什么也没有发现！】"), c
                    }
                    function n() {
                        var t = e("scr_data"), n = "";
                        if (1 == t.publicVar[1]) {
                            var a = t.day + 20, c = 100 * Math.random();
                            c < a && (n = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(i), n = "没发现道具" != n ? "\n【修罗：发现" + n + "】" : "\n【修罗：什么也没有发现！】")
                        }
                        return n
                    }
                    function a() {
                        var t = e("scr_data"), n = 5 * (t.itemNum2[27] + t.publicVar3[17]), a = 100 * Math.random(), c = "";
                        return a < n && (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(i), "没发现道具" != c ? c = "\n【晓月手链：发现" + c + "】" : (t.money += 1, c = "\n【晓月手链：发现0.1元！】")), c
                    }
                    var c = (e("scr_public").regionId(), e("scr_data")), i = this.getDrop(), o = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(i), r = t(), s = n();
                    if ("没发现道具" != o) o = r + s + "发现" + o;
                    else {
                        var l = a();
                        c.publicVar2[1] += 1, o = l + r + s + "什么也没有找到！", c.skillLv[23] > 0 && (c.money += 1, o += "【逆袭：金钱+0.1】"), c.day <= 3 && (c.itemNum[5] += 2, o += "【作者的呵护：获得「艾草」*2（游戏前3天有效）】")
                    }
                    e("scr_effect").playText("Canvas/Text/txt_notify", o, 60)
                }, getDrop: function () {
                    var t = [], n = this.getItemNum(), a = e("scr_public").regionId();
                    return 1e3 == a && (t = [[20, 0, n, 1], [30, 1, n, 1], [30, 4, n, 1], [20, 5, n, 1], [7, 6, n, 1], [2, 8, 1, 1]]), 2e3 == a && (t = [[75, 2, n, 1], [22, 99, n, 3], [15, 10, n, 1], [16, 7, n, 1]]), 3e3 == a && (t = [[15, 0, n, 1], [35, 1, n, 1], [35, 4, n, 1], [15, 5, n, 1], [5, 6, n, 1], [2, 8, 1, 1]]), 4e3 == a && (t = [[75, 2, n, 1], [25, 99, n, 3], [20, 10, n, 1], [10, 99, 2, 3]]), t
                }, randomId: function (e) {
                    for (var t = 1, n = 100 * Math.random(), a = e.length, c = 0; c <= a - 2; c++)if (n > e[c] && n <= e[c + 1]) return t = c + 1
                }, event: function () {
                    var e = 1, t = [0, 10, 20, 25, 35, 45, 60, 70, 80, 90, 100], n = 100 * Math.random(), a = this.eventPartitionRate();
                    e = n <= a ? this.randomId(t) : this.regionEventId(), cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(e)
                }, eventPartitionRate: function () {
                    var t = e("scr_public").regionId();
                    return 1e3 == t ? 60 : 2e3 == t ? 30 : 3e3 == t ? 50 : 4e3 == t ? 50 : void 0
                }, regionEventId: function () {
                    var t = 1, n = e("scr_public").regionId(), a = [0, 25, 50, 75, 100], c = [0, 10, 20, 40, 50, 90, 100], i = [0, 15, 25, 35, 50, 65, 80, 100], o = [0, 10, 25, 55, 75, 100];
                    return 1e3 == n && (t = 1e3 + this.randomId(a)), 2e3 == n && (t = 2e3 + this.randomId(c)), 3e3 == n && (t = 3e3 + this.randomId(i)), 4e3 == n && (t = 4e3 + this.randomId(o)), t
                }, forward: function () {
                    var t = 100 * Math.random(), n = e("scr_data");
                    this.reduceRes(), this.recoveryHp(), this.reduceHealth(), t <= 20 ? n.distance <= 3 ? (n.publicVar2[3] += 1, this.getItem()) : (n.publicVar2[2] += 1, this.fight()) : t <= 80 ? (n.publicVar2[3] += 1, this.getItem()) : n.distance <= 5 ? (n.publicVar2[3] += 1, this.getItem()) : (n.publicVar2[4] += 1, this.event())
                }, reduceHealth: function () {
                    var t = e("scr_data"), n = e("scr_public").autoEat();
                    if (n && t.hunger <= 0) {
                        var a = 100 * Math.random();
                        a < 50 && (t.health -= 1, e("scr_effect").textZoon("Canvas/Text/txt_health"))
                    }
                }, recoveryHp: function () {
                    var t = e("scr_data"), n = e("scr_public"), a = (4 + 8 * t.skillLv[3] + 36 * t.skillLv[17] + 2 * t.itemNum2[23]) * (1 + t.skillLv[21]), c = n.role.maxHp();
                    t.role.hp += a, t.role.hp > c && (t.role.hp = c)
                }, reduceRes: function () {
                    var t = e("scr_data");
                    e("scr_effect");
                    this.addDistance(), this.switchForwardButton(), t.energy -= this.Energy, t.hunger > 0 && (t.hunger -= 5)
                }, addDistance: function () {
                    var t = e("scr_data");
                    t.distance += 1, e("scr_effect").textZoon("Canvas/Text/txt_distance")
                }, switchForwardButton: function () {
                    var t = e("scr_data"), n = (e("scr_effect"), e("scr_public"));
                    100 == t.distance && 1 == t.stayDay[1] && (t.button[0] = !1, t.button[1] = !0, t.button[2] = !0, n.ifNotify = !0), 101 == t.distance && (t.button[1] = !1)
                }, playBGM: function () {
                    cc.audioEngine.stopAll();
                    var e = cc.game._persistRootNodes;
                    for (var t in e) var n = e[t].getComponent("scr_BGM").BGM4;
                    cc.audioEngine.play(n, !1, 1)
                }, callBack: function () {
                    var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), c = "", i = this.dryUp();
                    a.ifGameOver(), this.Energy = 10, t.energy >= this.Energy && 0 == i ? t.day >= 180 ? this.end() : 290 == t.distance && 1 == t.ifFollow[0] ? (t.plotId = 1, t.enemyId = 108, a.save(), cc.director.loadScene("plot")) : 299 == t.distance ? 1 == t.ifFollow[0] ? (t.button[0] = !1, t.button[1] = !0, t.button[2] = !0, a.init(), 0 == t.ifFollow[0], t.plotId = 5, a.save(), cc.director.loadScene("plot")) : (t.button[0] = !1, t.button[1] = !0, t.button[2] = !0, t.distance += 1, a.save(), a.init(), n.playText("Canvas/Text/txt_notify", "你已到达省城！", 60)) : this.forward() : t.energy < this.Energy ? n.playText("Canvas/Text/txt_notify", "精力不足！" + c, 60) : 100 == t.distance ? (t.button[0] = !0, n.playText("Canvas/Text/txt_notify", "再待下去迟早会被发现，还是去省城看看吧！", 60)) : t.distance < 300 && t.distance > 100 && n.playText("Canvas/Text/txt_notify", "还是先去省城整顿一下吧！", 60),
                        t.distance < 100 ? cc.find("Game/scr_mainUIinit").getComponent("scr_mainUIinit").showButton() : a.init(), t.distance > 300 && (t.distance = 300), a.autoEat(), a.init(), a.save(), this.shieldButton()
                }, end: function () {
                    var t = e("scr_effect"), n = e("scr_data"), a = e("scr_public"), c = {
                        0: function () { n.energy = 1e3, n.publicVar[13] = 2, n.publicVar3[3] += 1, a.save(), t.playText("Canvas/Text/txt_notify", "整个城市被大雾笼罩，身边的人影开始慢慢消失，周围没有一点声音...", 60) }, 1: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "一个男人的身影缓缓浮现，一步步向我走了过来...", 60) }, 2: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“欢迎你的到来，我的朋友；这里是游戏的终点，我是这个游戏的作者”", 60) }, 3: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“虽然你可能有很多疑问，但是我并不想在这里回答你；我到这里来，只是想收获我的游戏成果”", 60) }, 4: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“但是在此之前，有些东西我需要向你交代一下。”", 60) }, 5: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“首先，在这个游戏里，只有两个真正的角色————你和我”", 60) }, 6: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“其他角色，只不过是我所创造的虚拟角色”", 60) },
                        7: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“这个世界中既不存在「父亲」，也没有「刀疤男」和「通缉犯」”", 60) }, 8: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“我并不关心这些虚拟角色的「命运」，我只在意你体验完游戏后，获得了什么”", 60) }, 9: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“希望你能认真的回答我几个问题，我将根据问题的答案、和你在游戏中的所有选择，给出我的个人评价”", 60) }, 10: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“如果评价没有达到我的预期，你的游戏存档将会被我删除，那么请开始答题吧~”", 60) }, 11: function () { cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(10001) }, 111: function () { cc.find("Canvas/Text/txt_notify").y = 277, n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”", 60) }, 112: function () { var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent"); n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“游戏评分为" + e.gamePoint + "（满分52，与你在游戏中的选择有关）。\n这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）”", 60) }, 113: function () { cc.find("Canvas/Text/txt_notify").y = 577; var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent"); n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“属性评分为" + e.attPoint + "（满分18，攻防血属性越「低」分数越高！）\n这里很有必要解释下为何、要这么设计：\n第一，我想让你注重培养伙伴、被动技和某些道具，而不仅是仅用属性碾压 \n第二，低属性通关比可能比高属性通关更具挑战性！”", 60) }, 114: function () { var a = 59 - 10 * e("scr_data2").gameData[4]; cc.find("Canvas/Text/txt_notify").y = 77; var c = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent"); n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“总分为" + c.totalPoint + "，低于通关所需分数（" + a + "分）。”", 60) }, 115: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“你的存档即将被我删除。”", 60) },
                        116: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“但是，被我删档后，重新开始游戏，会有部分NPC保留对你的记忆，并且通关所需评分将至49分。”", 60) }, 117: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“我会在这里等着你，再会吧~”", 60) }, 118: function () { e("scr_data2").gameData[4] = 1, e("scr_public").save2(), JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData"), cc.director.loadScene("start") }, 211: function () { cc.find("Canvas/Text/txt_notify").y = 277, n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”", 60) }, 212: function () { var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent"); n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“游戏评分为" + e.gamePoint + "（满分52，与你在游戏中的选择有关）。\n这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）”", 60) }, 213: function () { cc.find("Canvas/Text/txt_notify").y = 577; var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent"); n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“属性评分为" + e.attPoint + "（满分18，攻防血属性越「低」分数越高！）\n这里很有必要解释下为何、要这么设计：\n第一，我想让你注重培养伙伴、被动技和某些道具，而不仅是仅用属性碾压 \n第二，低属性通关比可能比高属性通关更具挑战性！”", 60) }, 214: function () { var a = 59 - 10 * e("scr_data2").gameData[4]; cc.find("Canvas/Text/txt_notify").y = 77; var c = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent"); n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“总分为" + c.totalPoint + "，高于通关所需分数（" + a + "分）。你可以过关啦~”", 60) },
                        215: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "“不过你想看到一个什么样的结局，将由你自己去选择。我需要指出的是，无论你如何选择，游戏都将结束。请做出你的选择。”", 60) }, 216: function () { cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(20001) }, 311: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "听说中年大叔遗体被人领走啦，被一个中年妇女。（地点：省城。结局：安息吧，痛苦）", 60) }, 312: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "落满枫叶的小路上，晓月正和几位同学手舞足蹈的说着些什么，不知道她是否还记得那个安静的少年呢？（地点：省城。结局：两个世界）", 60) }, 313: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "再次碰到小兰时，她衣着端庄，在一家化妆品店做销售，她说，“还是自立过得舒坦呀，虽然没啥钱...”（地点：省城。结局：从零开始）", 60) }, 314: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "我再也没有等到碧瑶的消息，她能还清那些巨额的债款吗？”（地点：省城。结局：懵懂的青春）", 60) }, 315: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "老爷爷，你还好吗？（地点：省城。结局：无奈的人生）", 60) },
                        316: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "与世隔绝的大山中，地质队长正在台灯下撰写报告；而在另一头，她的女儿正准备在论坛上通宵怼那些侮辱她偶像的人。（地点：山脉。结局：隔阂）", 60) }, 317: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "堂主的母亲突发脑溢血过世，他像孤魂一样终日在山间游荡着...（地点：山脉。结局：游荡的灵魂）", 60) }, 318: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "那个可疑的村庄已被警察封锁。（地点：山脉。结局：封锁的造毒窝点）", 60) }, 319: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "老人的房子前已长满杂草，房内早已空荡荡...（地点：山脉。结局：天空的流星）", 60) }, 320: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "年轻的妈妈和小女孩依旧在河边散步，小女孩对着一个流浪汉做了一个鬼脸...（地点：县城。结局：榜样）", 60) }, 321: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "抽烟的中年女人找到一个胖嘟嘟的男友。“虽然经常挨打，但是总算不是一个人了”，女人抽着烟，淡淡的说道。（地点：县城。结局：可怜还是可恨？）", 60) }, 322: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "送糖的小男孩，作文拿到全县第一名，梦里笑醒的妈妈、大半夜跑到便利店给他买了一大盒五颜六色的棒棒糖...等待着儿子的苏醒。（地点：县城。结局：甜甜的男孩）", 60) }, 323: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "三个流浪汉已经三分县城，各自守着自己的地盘...（地点：县城。结局：扩散的黑暗）", 60) }, 324: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "呆萌的女贼打算放弃原来的职业，因为她找到了更稳定的生存方法————捡塑料瓶...（地点：山脉。结局：孤儿的挣扎）", 60) }, 325: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "推开栅栏，院子里长满了杂草，似乎很久没人居住...（地点：家）", 60) }, 326: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "门是开着的，屋里没有灯火，静悄悄的；青灰色的屋顶、几颗新绿色的嫩芽，在夕阳的余晖下，显得格外的安静。一只猫咪在门前的阳光下打着哈欠（地点：家）", 60) }, 327: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "一个满头白发的老人，忽然呆在了门口....", 60) }, 328: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "...全剧终...", 60) }, 329: function () { n.publicVar3[3] += 1, t.playText("Canvas/Text/txt_notify", "「感谢您能陪我看到最后！我是晓风，再会啦~」", 60) }, 330: function () { e("scr_data2").gameData[4] = 0, e("scr_public").save2(), cc.director.loadScene("end") }, 411: function () { n.plotId = 1001, a.save(), cc.director.loadScene("plot") }, 412: function () { n.plotId = 1002, a.save(), cc.director.loadScene("plot") }, 413: function () {
                            n.plotId = 1003, a.save(), cc.director.loadScene("plot")
                        }
                    };
                    c[n.publicVar3[3]](), a.save(), a.init()
                }, dryUp: function () {
                    return !1
                }, shieldButton: function () {
                    this.node.off("touchstart", this.callBack, this), this.node.runAction(cc.tintTo(.3, 114, 199, 255)), this.scheduleOnce(this.onLoad, .7)
                }, autoEat: function () {
                    function t() {
                        var e = 100 * Math.random();
                        e < 15 && (n.health += 1)
                    }
                    var n = e("scr_data"), a = e("scr_public");
                    return n.hunger <= 0 && (n.itemNum[0] >= 1 ? (n.itemNum[0] -= 1, n.orderTimes[5] += 1, n.hunger += 20, t(), a.save(), a.textZoon("Canvas/Button/txt_state"), !0) : !(n.itemNum2[0] >= 1) || (n.itemNum2[0] -= 1, n.orderTimes[2] += 1, n.hunger += 70, a.save(), a.textZoon("Canvas/Button/txt_state"), !0))
                }, onLoad: function () {
                    this.endActionId = 0, this.node.runAction(cc.tintTo(.3, 255, 255, 255)), this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_friendSkillJudge1: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "fc5f8Ub5xdFcbVtSTj8STEm", "scr_friendSkillJudge1"), cc.Class({
                "extends": cc.Component, properties: {}, skillJugge: function a() {
                    var t = e("scr_data"), n = e("scr_public"), c = t.friendSkill1, a = {
                        1: function () { 0 == c[1] && t.choice[5] >= 30 && (c[1] = 1) }, 2: function () { 0 == c[2] && t.choice[5] >= 60 && (c[2] = 1) }, 3: function () { 0 == c[3] && t.choice[5] >= 120 && (c[3] = 1) }, 4: function () {
                            0 == c[4] && t.choice[5] >= 240 && (c[4] = 1)
                        }
                    };
                    for (var i in a) a[i]();
                    n.save()
                }, onLoad: function () {
                    this.skillJugge()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_public: "scr_public" }], scr_friendSkillUI1: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "0992cbWpqJNPIJFvroUyU98", "scr_friendSkillUI1"), cc.Class({
                "extends": cc.Component, properties: {}, skillDes: function a() {
                    var t = e("scr_data"), a = ["【女汉子】给主角增加" + parseInt(t.choice[5] / 4 + 10) + "点攻击，增加幅度与好感有关。天生自带，无需激活！", "【小伙伴】精力上限+20，好感达到30激活！", "【声援】每回合，" + Math.min(parseInt(t.choice[5] / 4), 100) + "%几率给主角恢复10%生命，并增加主角3%攻击（可无限叠加），触发概率与好感相关，好感达到60激活！", "【捡漏王】胜利后，30%几率再获得一次奖励，全怪物有效，好感达到120激活！", "【元气少女】睡觉时，健康恢复效果翻倍，生命恢复效果翻倍，精力额外再恢复20！好感达到240激活！"];
                    return a
                }, showDes: function () {
                    for (var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill1, c = this.skillDes(), i = c.length, o = cc.find("Canvas/Show"), r = 0; r <= i - 1; r++)n.showText2(o, "skill" + r, c[r], 60), a[r] > 0 && (o.getChildByName("skill" + r).color = new cc.Color(0, 255, 0))
                }, onLoad: function () {
                    this.showDes(), cc.find("Canvas/back").on("touchstart", function () {
                        cc.director.loadScene("friend1")
                    }, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_public: "scr_public" }], scr_friendSkillUI2: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "d0387ZXPPtJs4Lfy6jPllmL", "scr_friendSkillUI2"), cc.Class({
                "extends": cc.Component, properties: {}, skillDes: function a() {
                    var t = e("scr_data"), a = ["【独立】碧瑶会与主角并肩作战（攻击" + parseInt(t.publicVar[7] + 600) + "，随好感提升）", "【暗杀】碧瑶每次攻击暴击提高5%！需30好感", "【爱心】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 25), 25) + "%几率获得碧瑶总存款的2%（碧瑶存款为" + (t.publicVar2[18] / 10).toFixed(1) + "元，你能到手的零钱为" + (.02 * t.publicVar2[18] / 10).toFixed(1) + "元），触发几率随好感提升。需60好感", "【刺杀】碧瑶暴击后，附加给目标一层流血效果，降低目标10%防御。需100好感", "【保护】碧瑶暴击后，伤害的50%用于治疗主角。需160好感", "【冷静】碧瑶基础暴击率+25%。需240好感", "【双飞】碧瑶暴击后，主角下次攻击必定触发暴击！需340好感", "【监督】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 20), 20) + "%几率降低主角1%烟瘾，触发几率随好感提升。需460好感", "【终结】碧瑶每间隔两次攻击，触发一次「终结」技。需600好感"];
                    return a
                }, showDes: function () {
                    for (var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill, c = this.skillDes(), i = c.length, o = cc.find("Canvas/Show"), r = 0; r <= i - 1; r++)n.showText2(o, "skill" + r, c[r], 50), a[r] > 0 && (o.getChildByName("skill" + r).color = new cc.Color(0, 255, 0))
                }, onLoad: function () {
                    this.showDes(), cc.find("Canvas/goods").getComponent("cc.Label").string = "当前好感：" + e("scr_data").publicVar[7], cc.find("Canvas/back").on("touchstart", function () {
                        cc.director.loadScene("main")
                    }, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_public: "scr_public" }], scr_friendUI1: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "871fc61bpBNRLPJHo54vOLw", "scr_friendUI1"), cc.Class({
                "extends": cc.Component, properties: {}, dialog: function a() {
                    var a = ["“我叫晓月，今年17，在省城三中读书”", "“暑假开头的、三天母女保温期一过，我妈就成天说我懒，还贪吃。\n(?_?)”", "“骗我，不让我吃太多肉，说对身体不好，合着我就是捡来的。\n╮(╯﹏╰）╭”", "“如果不能吃肉，只吃草，那活着有啥意思呢？对吧。”", "“如是，我打算出来闯闯，做一个持酒闯江湖的女侠，哈~哈——哈！\nヽ(?Д?)?”", "“我偷偷爬上一辆货车，一觉醒来，就在山里。\n(*′?ｖ?)”", "“趁着老司机方便，我溜下车，准备去路边的村子弄点吃的。\n︿(￣︶￣)︿”", "“结果碰到一只巨丑无比的大黑狗，我一路狂奔，啥也不管了。\n(;′??Д??`)”", "“猿后，我也不知道到了那里。\n(?_?)”", "“我想随便采几个蘑菇充充饥，结果发现没带火（幸好没带...）。\n(??ω??)”", "“不过呢，我聪明啊，我沿着货车路，捡到几罐喝剩的啤酒。\n︿(￣︶￣)︿”", "“我躲在路边，暗中观察那些、光着膀子开车的老司机，准备拦一个可靠点的。\n( ? ?ω?? )?”", "“结果，选中了你，你说我选得对吗？\n(*/ω＼*)”", "“其实哇，你打招呼后，我已经跟踪你一天了，嘿嘿~\n(??ω??)”"];
                    return a
                }, randomDialog: function c() {
                    var c = ["“(?ω?)hiahiahia....嗝~”", "“跟你讲我可是很厉害的哦???!\n(??????)??”", "“游戏里都是骗人的，哪有什么果子、野兔，全是荆棘和虫子\n(╥╯^╰╥)”", "“偷偷告诉你...这个游戏作者没有女朋友\n(?ω?)hiahiahia”", "“偷偷告诉你...长得漂亮的女孩子大多都平胸，但是反过来，就不好说啦╮(╯﹏╰）╭”", "“我跟你讲哈！那些一个人、背着双肩包旅游的女孩子，最好别去搭讪=￣ω￣=”", "“啊嘞嘞~这样真让人头疼呢╮(￣▽￣)╭”", "“人家天生就不怎么会撒娇呢\n(?ω?)hiahiahia”", "“嘿嘿(o﹃o?)，放心放心姐姐不是什么好人~”", "“听说这个游戏的最终BOSS是个变态╮(￣▽￣)╭”"];
                    return c
                }, initUI: function () {
                    var t = e("scr_data");
                    cc.find("Canvas/inf/good").getComponent("cc.Label").string = "晓月好感：" + t.choice[5]
                }, initUI2: function () {
                    var t = e("scr_data");
                    cc.find("Canvas/inf/good").getComponent("cc.Label").string = "碧瑶好感：" + t.publicVar[7]
                }, eat: function () {
                    var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
                    t.itemNum[0] > 0 || t.itemNum2[0] > 0 ? (t.itemNum[0] > 0 ? (t.publicVar2[10] = 0, t.publicVar[2] = 1, t.itemNum[0] -= 1, t.choice[5] += 1, this.initUI(), cc.find("Canvas/Show").removeAllChildren(), n.playText("Canvas/notify", "果子-1，晓月好感+1", 80)) : t.itemNum2[0] > 0 && (t.publicVar2[10] = 0, t.publicVar[2] = 1, t.itemNum2[0] -= 1, t.choice[5] += 3, this.initUI(), cc.find("Canvas/Show").removeAllChildren(), n.playText("Canvas/notify", "熟肉-1，晓月好感+3", 80)), a.save()) : (cc.find("Canvas/Show").removeAllChildren(), n.playText("Canvas/notify", "吃光光啦！", 80))
                }, takePill: function () {
                    var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
                    t.itemNum2[1] > 0 ? (t.choice[5] += 2, t.itemNum2[1] -= 1, this.initUI(), a.save(), cc.find("Canvas/Show").removeAllChildren(), n.playText("Canvas/notify", "“张嘴，吃药~”\n“啊~~~~emmmmm~”\n晓月好感+2", 80)) : (cc.find("Canvas/Show").removeAllChildren(), n.playText("Canvas/notify", "没药啦~！", 80))
                }, talk: function () {
                    var t = e("scr_data"), n = e("scr_effect");
                    if (t.energy >= 10) {
                        var a = this.dialog(), c = e("scr_public"), i = t.talkTimes[0], o = cc.find("Canvas/Show"), r = a[i];
                        if ("undefined" == typeof r) {
                            var s = this.randomDialog(), l = s.length, u = parseInt(Math.max(Math.random() * l - .1));
                            r = s[u]
                        }
                        i % 3 == 0 && o.removeAllChildren(), c.showText(o, "plot" + i, r, 60), t.talkTimes[0] += 1, t.energy -= 10, t.choice[5] += 1, this.initUI(), c.save()
                    } else cc.find("Canvas/Show").removeAllChildren(), n.playText("Canvas/notify", "精力不足！", 80)
                }, onLoad: function () {
                    var t = (e("scr_data"), e("scr_public"), this), n = cc.find("Canvas/button");
                    cc.find("Canvas/close").on("touchstart", function () {
                        e("scr_public").save(), cc.director.loadScene("main")
                    }, this), this.initUI(), n.getChildByName("button1").on("touchstart", t.talk, this), n.getChildByName("button2").on("touchstart", t.eat, this), n.getChildByName("button4").on("touchstart", t.takePill, this), n.getChildByName("button3").on("touchstart", function () {
                        cc.director.loadScene("friendSkill1")
                    }, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_home: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "82a35cQvNJE9LzHff6utW/P", "scr_home"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function t() {
                        Y.getChildByName("back").on("touchstart", function () {
                            e("scr_public").save(), cc.director.loadScene("main")
                        }, this), Z.publicVar2[17] > 0 ? ee.on("touchstart", n, ee) : ee.on("touchstart", L, ee), te.on("touchstart", function () {
                            e("scr_data").energy >= 10 ? cc.director.loadScene("notice2") : cc.director.loadScene("diary")
                        }, this), ne.on("touchstart", a, this), ae.on("touchstart", c, this), oe > 0 ? ce.on("touchstart", i, this) : ce.on("touchstart", L, this), Z.stayDay[3] > 12 ? ie.on("touchstart", o, this) : ie.on("touchstart", L, this), W.getChildByName("choice1").on("touchstart", r, this), W.getChildByName("choice2").on("touchstart", s, this), W.getChildByName("choice3").on("touchstart", l, this), j.getChildByName("choice1").on("touchstart", u, this), j.getChildByName("choice2").on("touchstart", p, this), j.getChildByName("choice3").on("touchstart", d, this), 0 != Z.publicVar2[23] && Q.getChildByName("choice7").on("touchstart", m, this), 0 != Z.publicVar2[24] && Q.getChildByName("choice6").on("touchstart", f, this), 0 != Z.publicVar2[25] && Q.getChildByName("choice5").on("touchstart", h, this), 0 != Z.publicVar2[26] && Q.getChildByName("choice4").on("touchstart", v, this), 0 != Z.publicVar2[27] && Q.getChildByName("choice3").on("touchstart", y, this), 0 != Z.publicVar2[28] && Q.getChildByName("choice2").on("touchstart", g, this), 0 != Z.publicVar2[29] && Q.getChildByName("choice1").on("touchstart", b, this), $.getChildByName("choice1").on("touchstart", _, this), $.getChildByName("choice2").on("touchstart", x, this), Z.stayDay[3] < 30 || $.getChildByName("choice3").on("touchstart", C, this), 0 != Z.publicVar2[21] && $.getChildByName("choice4").on("touchstart", E, this), 1 == Z.publicVar[9] ? $.getChildByName("choice5").on("touchstart", I, this) : 2 == Z.publicVar[9] && $.getChildByName("choice5").on("touchstart", V, this), W.getChildByName("back").on("touchstart", function () {
                            A(), U()
                        }, this), j.getChildByName("back").on("touchstart", function () {
                            D(), U()
                        }, this), Q.getChildByName("back").on("touchstart", function () {
                            O(), U()
                        }, this), $.getChildByName("back").on("touchstart", function () {
                            G(), U()
                        }, this)
                    }
                    function n() {
                        function e() {
                            var e = (Z.publicVar[7], parseInt(Z.publicVar2[20] + 2 * Z.publicVar[20])), t = 100 * Math.random();
                            if (t < e) {
                                var n = parseInt(7.9 * Math.random()), a = ["liao ♂ 得不错", "“瑶酱~今天也要元气满满喔~”", "“嘿~嘿嘿~”", "“(????)??嗨！~上午好呀！”", "一波调戏", "一波求教", "“早上好呀！”", "“卡哇咿滴斯勒” “？”"];
                                Z.publicVar[7] += 1, Z.publicVar2[20] += parseInt(3 * Math.random() + 1), K.playText("Canvas/notify", a[n] + "，好感+1\n（当前好感：" + Z.publicVar[7] + "）\n（下次成功率为" + Z.publicVar2[20] + "%+" + 2 * Z.publicVar[20] + "）", 60)
                            } else {
                                var n = parseInt(5.9 * Math.random()), a = ["寒暄", "吹逼", "赞美", "沉默", "鸡汤", "分析"];
                                Z.publicVar2[20] -= parseInt(3 * Math.random() + 1), K.playText("Canvas/notify", "一顿" + a[n] + "，好感+0\n（下次聊天成功率" + Z.publicVar2[20] + "%+" + 2 * Z.publicVar[20] + "%）", 60)
                            }
                            Z.energy -= 10, k()
                        }
                        Z.energy >= 10 ? e() : K.playText("Canvas/notify", "精力不足！", 60)
                    }
                    function a() {
                        B(), F(), H()
                    }
                    function c() {
                        B(), P(), R()
                    }
                    function i() {
                        B(), q(), w()
                    }
                    function o() {
                        B(), z(), M()
                    }
                    function r() {
                        function e() {
                            var e = Z.publicVar[14] + Z.publicVar[19], t = 100 * Math.random();
                            t < e ? (Z.publicVar[15] += 20, K.playText("Canvas/notify", "训练成功！最大生命值+2%！你感觉气血通畅，神清气爽！", 60)) : K.playText("Canvas/notify", "训练失败！你感觉头晕眼花，四肢无力！怕是要升天喽~", 60), Z.energy -= 10, Z.hunger -= 20, Z.publicVar[14] -= 5, k(), H()
                        }
                        X.autoEat(), Z.energy >= 10 && Z.hunger >= 20 ? e() : Z.energy < 10 ? K.playText("Canvas/notify", "精力不足！", 60) : K.playText("Canvas/notify", "饥饿值不足！", 60)
                    }
                    function s() {
                        function e() {
                            var e = Z.publicVar[14] + Z.publicVar[19], t = 100 * Math.random();
                            t < e ? (Z.publicVar[16] += 20, K.playText("Canvas/notify", "训练成功！防御提高2%！你感觉气身体变得更加柔软了呢(?ω?)！再也不怕挨揍啦！", 60)) : K.playText("Canvas/notify", "训练失败！“哎呀！扭到腰了~(′???)σ”。", 60), Z.energy -= 10, Z.hunger -= 20, Z.publicVar[14] -= 5, k(), H()
                        }
                        X.autoEat(), Z.energy >= 10 && Z.hunger >= 20 ? e() : Z.energy < 10 ? K.playText("Canvas/notify", "精力不足！", 60) : K.playText("Canvas/notify", "饥饿值不足！", 60)
                    }
                    function l() {
                        function e() {
                            var e = Z.publicVar[14] + Z.publicVar[19], t = 100 * Math.random();
                            t < e ? (Z.publicVar[17] += 10, K.playText("Canvas/notify", "训练成功！攻击提高1%！“哇！~乌拉————！”。", 60)) : K.playText("Canvas/notify", "训练失败！“哎呦~砸到了脚啦！”。", 60), Z.energy -= 10, Z.hunger -= 20, Z.publicVar[14] -= 5, k(), H()
                        }
                        X.autoEat(), Z.energy >= 10 && Z.hunger >= 20 ? e() : Z.energy < 10 ? K.playText("Canvas/notify", "精力不足！", 60) : K.playText("Canvas/notify", "饥饿值不足！需20点", 60)
                    }
                    function u() {
                        var e = 3 * Z.publicVar[18] + 40;
                        Z.money >= e ? (Z.publicVar[18] += 1, Z.money -= e, K.playText("Canvas/notify", "升级成功！最大精力+10（累计增加" + 10 * Z.publicVar[18] + "）", 60)) : K.playText("Canvas/notify", "没钱！", 60), R()
                    }
                    function p() {
                        var e = 2 * Z.publicVar[19] + 2;
                        Z.money >= e ? (Z.publicVar[19] += 1, Z.money -= e, K.playText("Canvas/notify", "升级成功！锻炼成功率永久增加1%（累计增加" + Z.publicVar[19] + "%）", 60)) : K.playText("Canvas/notify", "没钱！", 60), R()
                    }
                    function d() {
                        var e = 1 * Z.publicVar[20] + 1;
                        Z.money >= e ? (Z.publicVar[20] += 1, Z.money -= e, K.playText("Canvas/notify", "升级成功！碧瑶对话成功率永久增加2%（累计增加" + 2 * Z.publicVar[20] + "%）", 60)) : K.playText("Canvas/notify", "没钱！", 60), R()
                    }
                    function m() {
                        X.autoEat(), 0 == Z.publicVar2[23] ? K.playText("Canvas/notify", "你还没有获得本书！", 60) : Z.publicVar2[23] >= 101 ? K.playText("Canvas/notify", "本书已看完！", 60) : Z.energy >= 10 && Z.hunger >= 10 ? (Z.energy -= 10, Z.hunger -= 10, Z.publicVar2[23] += 1, Z.publicVar2[30] += 1, T(), w(), K.playText("Canvas/notify", "“搜嘎~搜嘎~”。阅历+1！\n（阅历用于提高基础工资）", 60)) : K.playText("Canvas/notify", "状态不好，学不进去！（需10点精力，10点饥饿）", 60)
                    }
                    function f() {
                        if (0 == Z.publicVar2[24]) K.playText("Canvas/notify", "你还没有获得本书！", 60);
                        else if (Z.publicVar2[24] >= 101) K.playText("Canvas/notify", "本书已看完！", 60);
                        else if (Z.hunger >= 5) {
                            var e = ["【长期负性情绪会导致大脑功能或结构改变】", "【睡眠是一个极为复杂的大脑活动，任何一个环节出现问题，都会导致睡眠障碍】", "【抑郁症发病原因，1/3为自身性格，1/3为客观环境，1/3为遗传】", "【慢性失眠的本质是大脑功能或者结构出现紊乱】", "【户外活动可能能够缓解负性情绪，并帮助大脑功能的缓慢修复】", "【抑郁症终身患病率为8%（中国），女性患病几率为男性两倍】", "【失眠/早醒、食欲下降/体重减轻、头晕头痛/便秘/腰肩酸痛、思想迟缓/易疲劳，可能是抑郁的危险信号】", "【大量随机对照试验证实、认知行为疗法对多种心理疾病有效】", "【接受思想——无条件接受自身缺陷——可能是一种快速治疗的方法】", "【外貌、身高、性取向是父母给的，既不用自卑也无需炫耀】", "【无论你多么「垃圾」，总会存在适合自己的目标，只是极为隐蔽】", "【获得成就感（哪怕只是打扫卫生、起床走走），可能是行为疗法的核心】", "【旅游、美食、打游戏，不能治疗心理问题（即便是用来分散注意，也有限，并且可能导致新的问题）】", "【任何让你感到痛苦的事，都可以找到对应的不合理认知————认知疗法】"], t = e.length, n = parseInt(Math.random() * (t - 1.01)), a = 10 * parseInt(X.maxEnergy() / 20);
                            Z.hunger -= 10, Z.publicVar2[24] += 10, Z.energy += a, T(), w(), K.playText("Canvas/notify", "精力+" + a + "！" + e[n], 60)
                        } else K.playText("Canvas/notify", "肚子饿了，不想看！（需10点饥饿）", 60)
                    }
                    function h() {
                        0 == Z.publicVar2[25] ? K.playText("Canvas/notify", "你还没有获得本书！", 60) : Z.publicVar2[25] >= 101 ? K.playText("Canvas/notify", "本书已看完！", 60) : Z.energy >= 10 ? (Z.publicVar2[25] += 1, Z.energy -= 10, 3 == Z.publicVar2[25] ? (Z.publicVar[7] += 6, K.playText("Canvas/notify", "研发出「辣激蘑菇汤」。碧瑶：“咕噜噜~咕噜噜~”。碧瑶好感+6！", 60)) : 7 == Z.publicVar2[25] ? (Z.role.hp += X.role.maxHp(), Z.hunger += X.maxHunger(), K.playText("Canvas/notify", "研发出「急支糖浆拌饭」。“美滋滋~美滋滋~”。饥饿/生命爆满！", 60)) : 17 == Z.publicVar2[25] ? (Z.maxHunger += 30, K.playText("Canvas/notify", "研发出「晓风牌健胃片」。“嘎吱~嘎吱~”。饥饿值上限提高30点！", 60)) : 33 == Z.publicVar2[25] ? (Z.maxEnergy += 10, K.playText("Canvas/notify", "研发出「兴奋剂」。“哇~乌拉——！”。精力上限提高10点！", 60)) : 55 == Z.publicVar2[25] ? (Z.itemNum[11] += 4, K.playText("Canvas/notify", "研发出「白色粉末」。获得【白色粉末】*4！", 60)) : 101 == Z.publicVar2[25] ? (Z.role.att += 30, Z.role.def += 15, Z.role.maxHp += 150, K.playText("Canvas/notify", "研发出「生长激素」！攻击+40，防御+20，生命+200！（以上属性为永久性增加）", 60)) : K.playText("Canvas/notify", "一脸懵逼，啥也没学会！", 60), T(), w()) : K.playText("Canvas/notify", "精力不足（需10点）！", 60)
                    }
                    function v() {
                        if (X.autoEat(), 0 == Z.publicVar2[26]) K.playText("Canvas/notify", "你还没有获得本书！", 60);
                        else if (Z.publicVar2[26] >= 101) K.playText("Canvas/notify", "本书已看完！", 60);
                        else if (Z.energy >= 10 && Z.hunger >= 10) {
                            var e = parseInt(5 * (2.99 * Math.random() + 1)), t = ["【每日限制红肉摄入（不高于100g）】", "【每日推荐主食摄入量250~400g】", "【每日推荐蔬果摄入量500~850g】", "【每日推荐鱼禽蛋奶摄入量150~250g】", "【每日食盐摄入不超过6g】", "【每日推荐6000步，或等量活动】", "【每周推荐150分钟以上运动】", "【每日饮水不低于1500ml（7杯）】", "【一瓶可乐215大卡（相当于一碗饭或两斤蔬菜的能量）】", "【在各年龄阶段都应避免超重】", "【肥胖，是隐藏在心血管疾病、癌症背后的真凶】", "【中国44%死于心脑血管疾病，22%死于癌症】", "【90%心脑血管疾病可以通过改变生活习惯预防】", "【70%癌症可以通过改变生活习惯预防】", "【对于超重的人，哪怕丢失少量体重，也可使健康获益】", "【在日常生活中额外做些活动，不管强度如何，都将获益】", "【选择全谷类食物而不是精加工食物】", "【学会阅读食品标签】", "【减肥必须运动+饮食，单独一项很难成功（容易反弹）】", "【100g薯片能量相当于两大碗饭，或者跑步一小时】", "【蔬果的健康获益机制主要在于、可以帮助我们减少能量摄入...】", "【健康人补充复合维生素片，并不能使健康获益】", "【没有证据证明补充抗氧化剂可以预防癌症】", "【终身维持健康体重极为重要】"], n = t.length, a = parseInt(Math.random() * (n - 1.01));
                            Z.energy -= 10, Z.hunger -= 10, Z.publicVar2[26] += 2, Z.role.maxHp += e, T(), w(), K.playText("Canvas/notify", "最大生命值提高" + e + "！" + t[a], 60)
                        } else K.playText("Canvas/notify", "状态不够！（需10点精力，10点饥饿）", 60)
                    }
                    function y() {
                        if (X.autoEat(), 0 == Z.publicVar2[27]) K.playText("Canvas/notify", "你还没有获得本书！", 60);
                        else if (Z.publicVar2[27] >= 101) K.playText("Canvas/notify", "本书已看完！", 60);
                        else if (Z.energy >= 10 && Z.hunger >= 10) {
                            var e = parseInt(2.99 * Math.random() + 1);
                            Z.energy -= 10, Z.hunger -= 10, Z.publicVar2[27] += 2, Z.role.def += e, T(), w(), K.playText("Canvas/notify", "防御提高" + e + "！", 60)
                        } else K.playText("Canvas/notify", "状态不够！（需10点精力，10点饥饿）", 60)
                    }
                    function g() {
                        if (X.autoEat(), 0 == Z.publicVar2[28]) K.playText("Canvas/notify", "你还没有获得本书！", 60);
                        else if (Z.publicVar2[28] >= 101) K.playText("Canvas/notify", "本书已看完！", 60);
                        else if (Z.energy >= 10 && Z.hunger >= 10) {
                            var e = parseInt(2.99 * Math.random() + 1);
                            Z.energy -= 10, Z.hunger -= 10, Z.publicVar2[28] += 2, Z.role.att += e, T(), w(), K.playText("Canvas/notify", "攻击提高" + e + "！", 60)
                        } else K.playText("Canvas/notify", "状态不够！（需10点精力，10点饥饿）", 60)
                    }
                    function b() {
                        0 == Z.publicVar2[29] ? K.playText("Canvas/notify", "你还没有获得本书！", 60) : Z.publicVar2[29] >= 101 ? K.playText("Canvas/notify", "本书已看完！", 60) : Z.publicVar3[15] >= 3 ? K.playText("Canvas/notify", "适当怡情，沉迷伤身呐~", 60) : (Z.publicVar2[29] += 5, Z.publicVar3[4] += 80, Z.publicVar3[15] += 1, Z.role.hp = X.role.maxHp(), X.save(), w(), K.playText("Canvas/notify", "脸红耳燥，血脉膨胀。生命值全恢复！攻击+80！（睡觉后加攻状态消失）", 60))
                    }
                    function _() {
                        Z.publicVar[13] = 0, X.save(), cc.director.loadScene("main", function () {
                            e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达城中村，可以开始探索啦~", 60)
                        })
                    }
                    function x() {
                        Z.energy >= 10 ? (Z.publicVar[13] = 1, Z.energy -= 10, X.save(), cc.director.loadScene("main", function () {
                            e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达郊外，可以开始探索啦~", 60)
                        })) : K.playText("Canvas/notify", "精力不足！", 60)
                    }
                    function C() {
                        Z.energy >= 20 ? (Z.publicVar[13] = 2, Z.energy -= 20, X.save(), cc.director.loadScene("main", function () {
                            e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达市中心，可以开始探索啦~", 60)
                        })) : K.playText("Canvas/notify", "精力不足！", 60)
                    }
                    function E() {
                        Z.energy >= 30 ? (Z.publicVar[13] = 3, Z.energy -= 30, X.save(), cc.director.loadScene("main", function () {
                            e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达山洞，可以开始探索啦~", 60)
                        })) : K.playText("Canvas/notify", "精力不足！", 60)
                    }
                    function I() {
                        if (Z.energy >= 10) if (Z.chioce2[7] <= 5) {
                            var e = Z.chioce2[7], t = [501, 502, 503, 504, 505, 506];
                            Z.energy -= 10, Z.enemyId = t[e], X.save(), cc.director.loadScene("main")
                        } else Z.plotId = 99, X.save(), cc.director.loadScene("plot");
                        else K.playText("Canvas/notify", "精力不足！", 60)
                    }
                    function V() {
                        0 == Z.ifFollow[0] ? (Z.plotId = 99, X.save(), cc.director.loadScene("plot")) : 1 == Z.ifFollow[0] && K.playText("Canvas/notify", "晓月已成为伙伴！", 60)
                    }
                    function N() {
                        Z.publicVar[7] > 0 && 0 == Z.publicVar[8] && (Z.plotId = 98, X.save(), cc.director.loadScene("plot"))
                    }
                    function T() {
                        cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + Z.energy
                    }
                    function k() {
                        Z.publicVar2[17] > 0 ? ee.getChildByName("text").getComponent("cc.Label").string = "找碧瑶唠嗑（成功率" + (Z.publicVar2[20] + 2 * Z.publicVar[20]) + "%）" : ee.getChildByName("text").getComponent("cc.Label").string = "？？？？", ne.getChildByName("text").getComponent("cc.Label").string = "锻炼（成功率" + (Z.publicVar[14] + Z.publicVar[19]) + "%）", cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + Z.energy
                    }
                    function S() {
                        Y.active = !0, W.active = !0, j.active = !0, Q.active = !0, $.active = !0, W.scale = 0, j.scale = 0, Q.scale = 0, $.scale = 0, 0 == oe && (ce.getChildByName("text").getComponent("cc.Label").string = "？？？？"), Z.stayDay[3] > 12 && (ie.getChildByName("text").getComponent("cc.Label").string = "外出")
                    }
                    function H() {
                        cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "饥饿 " + Z.hunger, cc.find("Canvas/UI2/rate").getComponent("cc.Label").string = "成功率 " + (Z.publicVar[14] + Z.publicVar[19]) + "%（" + Z.publicVar[14] + "%+" + Z.publicVar[19] + "%）", cc.find("Canvas/UI2/choice1/text").getComponent("cc.Label").string = "修仙（生命上限+" + (Z.publicVar[15] / 10).toFixed(0) + "%）", cc.find("Canvas/UI2/choice2/text").getComponent("cc.Label").string = "第八套广播体操（防御+" + (Z.publicVar[16] / 10).toFixed(0) + "%）", cc.find("Canvas/UI2/choice3/text").getComponent("cc.Label").string = "举轮胎（攻击+" + (Z.publicVar[17] / 10).toFixed(0) + "%）"
                    }
                    function R() {
                        cc.find("Canvas/UI3/money").getComponent("cc.Label").string = "金钱 " + (Z.money / 10).toFixed(1), cc.find("Canvas/UI3/choice1/text").getComponent("cc.Label").string = "居住区（LV" + Z.publicVar[18] + " 提升需" + ((3 * Z.publicVar[18] + 40) / 10).toFixed(1) + "元）", cc.find("Canvas/UI3/choice2/text").getComponent("cc.Label").string = "运动区（LV" + Z.publicVar[19] + " 提升需" + ((2 * Z.publicVar[19] + 2) / 10).toFixed(1) + "元）", cc.find("Canvas/UI3/choice3/text").getComponent("cc.Label").string = "流浪猫篷（LV" + Z.publicVar[20] + " 提升需" + ((1 * Z.publicVar[20] + 1) / 10).toFixed(1) + "元）"
                    }
                    function w() {
                        var e = Q.getChildByName("choice7").getChildByName("text").getComponent("cc.Label"), t = Q.getChildByName("choice6").getChildByName("text").getComponent("cc.Label"), n = Q.getChildByName("choice5").getChildByName("text").getComponent("cc.Label"), a = Q.getChildByName("choice4").getChildByName("text").getComponent("cc.Label"), c = Q.getChildByName("choice3").getChildByName("text").getComponent("cc.Label"), i = Q.getChildByName("choice2").getChildByName("text").getComponent("cc.Label"), o = Q.getChildByName("choice1").getChildByName("text").getComponent("cc.Label");
                        0 == Z.publicVar2[23] ? e.string = "？？？？" : e.string = "《搬砖，从入门到放弃》（已看" + Math.max(Z.publicVar2[23] - 1) + "%，阅历" + Z.publicVar2[30] + "）", 0 == Z.publicVar2[24] ? t.string = "？？？？" : t.string = "《伯恩斯情绪疗法》（已看" + Math.max(Z.publicVar2[24] - 1) + "%）", 0 == Z.publicVar2[25] ? n.string = "？？？？" : n.string = "《儿童手工DIY》（已看" + Math.max(Z.publicVar2[25] - 1) + "%）", 0 == Z.publicVar2[26] ? a.string = "？？？？" : a.string = "《中国居民膳食指南1997版》（已看" + Math.max(Z.publicVar2[26] - 1) + "%）", 0 == Z.publicVar2[27] ? c.string = "？？？？" : c.string = "《坎贝尔骨科手术学》（已看" + Math.max(Z.publicVar2[27] - 1) + "%）", 0 == Z.publicVar2[28] ? i.string = "？？？？" : i.string = "《如来神掌》（已看" + Math.max(Z.publicVar2[28] - 1) + "%）", 0 == Z.publicVar2[29] ? o.string = "？？？？" : o.string = "《少妇白洁》（已看" + Math.max(Z.publicVar2[29] - 1) + "%）", cc.find("Canvas/UI4/hunger").getComponent("cc.Label").string = "饥饿 " + Z.hunger
                    }
                    function M() {
                        Z.stayDay[3] < 30 && (cc.find("Canvas/UI5/choice3/text").getComponent("cc.Label").string = "？？？？"), 0 == Z.publicVar2[21] && (cc.find("Canvas/UI5/choice4/text").getComponent("cc.Label").string = "？？？？"), 0 == Z.publicVar[9] && (cc.find("Canvas/UI5/choice5/text").getComponent("cc.Label").string = "？？？？")
                    }
                    function L() {
                        K.playText("Canvas/notify", "暂未满足开启条件！加油吧~", 60)
                    }
                    function B() {
                        Y.runAction(cc.scaleTo(.3, 0))
                    }
                    function U() {
                        J(), Y.runAction(cc.scaleTo(.3, 1))
                    }
                    function A() {
                        X.save(), W.runAction(cc.scaleTo(.3, 0))
                    }
                    function F() {
                        J(), W.runAction(cc.scaleTo(.3, 1))
                    }
                    function D() {
                        X.save(), j.runAction(cc.scaleTo(.3, 0))
                    }
                    function P() {
                        J(), j.runAction(cc.scaleTo(.3, 1))
                    }
                    function O() {
                        X.save(), Q.runAction(cc.scaleTo(.3, 0))
                    }
                    function q() {
                        J(), Q.runAction(cc.scaleTo(.3, 1))
                    }
                    function G() {
                        X.save(), $.runAction(cc.scaleTo(.3, 0))
                    }
                    function z() {
                        J(), $.runAction(cc.scaleTo(.3, 1))
                    }
                    function J() {
                        cc.find("Canvas/notify").getComponent("cc.Label").string = ""
                    }
                    var Z = e("scr_data"), K = e("scr_effect"), X = e("scr_public"), Y = cc.find("Canvas/UI1"), W = cc.find("Canvas/UI2"), j = cc.find("Canvas/UI3"), Q = cc.find("Canvas/UI4"), $ = cc.find("Canvas/UI5"), ee = Y.getChildByName("choice1"), te = Y.getChildByName("choice2"), ne = Y.getChildByName("choice3"), ae = Y.getChildByName("choice4"), ce = Y.getChildByName("choice5"), ie = Y.getChildByName("choice6"), oe = Z.publicVar2[23] + Z.publicVar2[24] + Z.publicVar2[25] + Z.publicVar2[26] + Z.publicVar2[27] + Z.publicVar2[28] + Z.publicVar2[29];
                    t(), k(), S(), N()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_initData: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "c335afOsddDPoVdzNq+7r/A", "scr_initData"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var t = e("scr_data"), n = e("scr_data2");
                    "undefined" == typeof t.itemNum2[18] && (t.itemNum2[18] = 0),
                        "undefined" == typeof t.itemNum2[19] && (t.itemNum2[19] = 0), "undefined" == typeof t.itemNum2[20] && (t.itemNum2[20] = 0), "undefined" == typeof t.itemNum2[21] && (t.itemNum2[21] = 0), "undefined" == typeof t.itemNum2[22] && (t.itemNum2[22] = 0), "undefined" == typeof t.itemNum2[23] && (t.itemNum2[23] = 0), "undefined" == typeof t.itemNum2[24] && (t.itemNum2[24] = 0), "undefined" == typeof t.itemNum2[25] && (t.itemNum2[25] = 0), "undefined" == typeof t.itemNum2[26] && (t.itemNum2[26] = 0), "undefined" == typeof t.itemNum2[27] && (t.itemNum2[27] = 0), "undefined" == typeof t.ifFollow && (t.ifFollow = [0, 0]), "undefined" == typeof t.talkTimes && (t.talkTimes = [0, 0]), "undefined" == typeof t.friendSkill1 && (t.friendSkill1 = [1, 0, 0, 0, 0]), "undefined" == typeof t.friendSkill2 && (t.friendSkill2 = [1, 0, 0, 0, 0]), "undefined" == typeof t.friendSkill && (t.friendSkill = [1, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof t.choice[6] && (t.choice[6] = 0), "undefined" == typeof t.choice[7] && (t.choice[7] = 0), "undefined" == typeof t.choice[8] && (t.choice[8] = 0), "undefined" == typeof t.chioce2 && (t.chioce2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof t.plotId && (t.plotId = 0), "undefined" == typeof t.escapeExp && (t.escapeExp = 0), "undefined" == typeof t.randomEvent[11] && (t.randomEvent[11] = 0), "undefined" == typeof t.randomEvent[12] && (t.randomEvent[12] = 0), "undefined" == typeof t.randomEvent[13] && (t.randomEvent[13] = 0), "undefined" == typeof t.publicVar && (t.publicVar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof t.publicVar2 && (t.publicVar2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof t.publicVar3 && (t.publicVar3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof t.specialEnemy[300001] && (t.specialEnemy[300001] = { lv: 20, hp: 710, maxHp: 710, att: 0, def: 20 }),
                        "undefined" == typeof t.specialEnemy[300002] && (t.specialEnemy[300002] = { lv: 45, hp: 2470, maxHp: 2470, att: 0, def: 40 }), "undefined" == typeof t.specialEnemy[300003] && (t.specialEnemy[300003] = { lv: 35, hp: 3270, maxHp: 3270, att: 0, def: 0 }), "undefined" == typeof t.specialEnemy[400001] && (t.specialEnemy[400001] = { lv: 100, hp: 3345, maxHp: 3345, att: 0, def: 234 }), "undefined" == typeof t.specialEnemy[400002] && (t.specialEnemy[400002] = { lv: 199, hp: 19999, maxHp: 19999, att: 0, def: 20 }), "undefined" == typeof t.specialEnemy[400003] && (t.specialEnemy[400003] = { lv: 60, hp: 2050, maxHp: 2050, att: 310, def: 121 }), "undefined" == typeof t.specialEnemy[900001] && (t.specialEnemy[900001] = { lv: 15, hp: 575, maxHp: 575, att: 59, def: 16 }), "undefined" == typeof t.specialEnemy[900002] && (t.specialEnemy[900002] = { lv: 20, hp: 998, maxHp: 998, att: 50, def: 36 }), "undefined" == typeof t.specialEnemy[900003] && (t.specialEnemy[900003] = {
                            lv: 500, hp: 16500,
                            maxHp: 16500, att: 1500, def: 1150
                        }), "undefined" == typeof t.specialEnemy[900004] && (t.specialEnemy[900004] = { lv: 1, hp: 999999, maxHp: 999999, att: 999, def: 0 }), "undefined" == typeof t.specialEnemy[900005] && (t.specialEnemy[900005] = { lv: 500, hp: 599999, maxHp: 599999, att: 0, def: 0 }), "undefined" == typeof t.specialEnemy[900006] && (t.specialEnemy[900006] = { lv: 200, hp: 299999, maxHp: 299999, att: 0, def: 0 }), "undefined" == typeof t.specialEnemy[900007] && (t.specialEnemy[900007] = { lv: 40, hp: 3900, maxHp: 3900, att: 90, def: 50 }), "undefined" == typeof n.gameData && (n.gameData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "undefined" == typeof n.gameData2 && (n.gameData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2" }], scr_initGame: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "6ef62YkKgVEPbATA/Rgpij9", "scr_initGame"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var t = e("scr_data"), n = e("scr_data2"), a = e("scr_public");
                    if (0 != n.initMoney && (t.money += n.initMoney, n.initMoney = 0), n.gameData[2] < 9999) {
                        var c = new Date, i = parseInt(c.getTime() / 36e5);
                        n.gameData[2] = i
                    }
                    n.gameData[3] = 0, t.publicVar[6] = 2, a.save(), a.save2()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_public: "scr_public" }], scr_liveModeMain: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "b3dbdX/PEZG2b06UXyCtd3Z", "scr_liveModeMain"), cc.Class({ "extends": cc.Component, properties: {}, onLoad: function () { } }), cc._RFpop()
        }, {}], scr_logo: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "a828bjfK8lPi6WqkkH2XVy2", "scr_logo"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var e = cc.find("Canvas/zwsf"), t = [cc.p(-100, 0), cc.p(100, 0), cc.p(0, 0)];
                    cc.bezierTo(1, t), cc.jumpBy(2, cc.p(300, 0), 50, 4);
                    this.scheduleOnce(function () {
                        cc.director.loadScene("start")
                    }, 2), cc.find("Canvas/zwsf").runAction(cc.fadeTo(2, 255)), e.runAction(cc.jumpBy(1.5, cc.p(300, 0), 50, 3)), cc.find("Canvas/load").runAction(cc.fadeTo(2, 255))
                }
            }), cc._RFpop()
        }, {}], scr_mainUIEvent: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "449f7/pnslKIp1sHAfscrPC", "scr_mainUIEvent"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(1)), a.color = new cc.Color(0, 0, 0), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 50, a.getComponent(cc.Label).fontSize = 40
                }, event: function a() {
                    function t() {
                        var t = 59 - 10 * e("scr_data2").gameData[4];
                        i.skillLv[4] = 0, c.gamePoint = 3 * i.choice[2] + 6 * i.choice[7] + 6 * i.publicVar2[14] + 2 * (10 - i.publicVar2[21]) + 5 * i.publicVar[9] - Math.max(Math.min((4 * i.orderTimes[1] - i.orderTimes[4]) / 10, 10), 0), c.gamePoint += parseInt(3 * i.publicVar2[19] / 50) + 3 * i.publicVar2[15], c.attPoint = parseInt(21 - 6 * o.role.maxHp() / 1e4 - 6 * o.role.att() / 2e3 - 6 * o.role.def() / 1e3), c.attPoint = Math.min(Math.max(c.attPoint, 0), 18), c.totalPoint = c.gamePoint + c.attPoint + i.publicVar[11], c.totalPoint < t ? (i.publicVar3[3] = 111, c.closeUI("......")) : (i.publicVar3[3] = 211, c.closeUI("......"))
                    }
                    function n() {
                        var t = e("scr_data");
                        t.hunger <= 20 && (t.itemNum2[0] >= 1 ? (t.itemNum2[0] -= 1, t.orderTimes[2] += 1, t.hunger += 60) : t.itemNum[0] >= 1 && (t.itemNum[0] -= 1, t.orderTimes[5] += 1, t.hunger += 20))
                    }
                    var c = this, i = e("scr_data"), o = e("scr_public"), r = (e("scr_effect"), parseInt(9 * Math.random() + 1));
                    this.randomItemNum = parseInt(7 * Math.random() + 1), this.stealMoney = parseInt(10 * Math.random() + 1), this.stealRate = parseInt(100 * Math.random());
                    var s = [["女装", 22, 1, 1], ["创口贴", 23, 1, 1], ["护身符", 25, 1, 1], ["滑稽裤", 24, 1, 1], ["晓月手链", 27, 1, 1], ["幸运石", 26, 1, 1], ["板砖", 20, 1, 1], ["放大镜", 17, 1, 1], ["小裤裤", 21, 1, 1]];
                    c.drawDiscount = parseInt(9 * Math.random() + 1), this.changeItemId2 = parseInt(8.99 * Math.random()), this.changeItemId3 = parseInt(3.99 * Math.random());
                    var a = {
                        1: {
                            text: ["路上发现0.2元钱，是否要捡起来？", "捡", "不捡"], choice1: function () { var e = 100 * Math.random(); e < 25 ? (i.randomEvent[0] += 1, c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(900001)) : (i.money += 2, c.closeUI("获得0.2元！")) }, choice2: function () {
                                c.closeUI()
                            }
                        }, 2: {
                            text: ["一个女流氓拦住了去路...", "你要怎么做？", "刚正面！", "给" + Math.min(1 + i.orderTimes[7], 6) + "毛钱"], choice1: function () { i.publicVar2[12] += 1, c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(200001) }, choice2: function () {
                                var e = Math.min(1 + i.orderTimes[7], 6);
                                i.money >= e ? (i.publicVar2[12] += 1, i.money -= e, i.orderTimes[7] += 1, c.closeUI("女流氓蹦蹦跳跳的离开了...")) : cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "你怕是没那么多钱哦！"
                            }
                        }, 3: {
                            text: ["“收药惹~”，一位小贩喊道，是否过去瞄瞄？", "瞄瞄", "算了"], choice1: function () { cc.director.loadScene("shop4") }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还！）")
                            }
                        }, 4: {
                            text: ["钱被贼抢啦！", "是否要追赶？", "追！", "算了..."], choice1: function () { var e = i.randomEvent[10], t = [810, 811, 812, 813, 814, 815, 816], n = t[e]; i.publicVar2[0] += 1, "undefined" == typeof n ? (i.money += 5, c.closeUI("劫匪见你追来，吓晕了过去！你从身上搜得5毛钱！")) : (c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(n)) }, choice2: function () {
                                i.publicVar2[0] += 1;
                                var e = 1 + i.randomEvent[3];
                                e > 3 && (e = 3), i.money <= 0 && (e = 0), i.money -= e, i.money < 0 && (i.money = 0), c.closeUI("损失" + (e / 10).toFixed(1) + "元")
                            }
                        }, 5: {
                            text: ["前边一人，" + (this.stealMoney / 10).toFixed(1) + "元钱露出了裤袋，", "然鹅他似乎并没有觉察。是否顺走？", "顺走！活命要紧（成功率" + this.stealRate.toFixed(1) + "%）", "算了！名声要紧"], choice1: function () { var e = 100 * Math.random(), t = c.stealRate; e < t ? (i.money += c.stealMoney, i.publicVar[0] += 10, c.closeUI("偷窃成功！获得" + (c.stealMoney / 10).toFixed(1) + "元。罪恶+10（累计" + i.publicVar[0] + "，高罪恶值会导致失眠）")) : (i.role.hp = 1, c.closeUI("偷窃失败！你被吃瓜群众一顿狂殴，损失全部生命！")), c.stealMoney = parseInt(10 * Math.random() + 1), c.stealRate = parseInt(100 * Math.random()) }, choice2: function () {
                                c.stealMoney = parseInt(10 * Math.random() + 1), c.stealRate = parseInt(100 * Math.random()), c.closeUI()
                            }
                        }, 6: {
                            text: ["发现一个垃圾箱！", "是否开启？", "是", "算了"], choice1: function () {
                                function e() {
                                    var e = 100 * Math.random();
                                    if (e <= 20) {
                                        var t = 5 * parseInt(o.maxHunger() / 10);
                                        i.hunger += t, c.closeUI("找到一些剩饭！饥饿恢复50%（" + t + "点）！")
                                    }
                                    if (e > 20) {
                                        var n = parseInt(1.9 * Math.random() + 1);
                                        i.itemNum2[1] += n, c.closeUI("找到一些伤药！获得【伤药】*" + n)
                                    }
                                } var t = 100 * Math.random(); t < 75 ? e() : (i.publicVar2[13] += 1, c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(900002))
                            }, choice2: function () {
                                c.closeUI()
                            }
                        }, 7: {
                            text: ["路上碰到一位摔倒的老奶奶，", "是否要去扶起来？", "扶", "不扶"], choice1: function () {
                                if (i.randomEvent[6] += 1, 20 == i.randomEvent[6]) i.randomEvent[1] += 1, c.closeUI("老奶奶送给你一个「好人卡」，你获得「好人卡」*1");
                                else {
                                    var e = 100 * Math.random();
                                    if (e <= 15) i.publicVar2[5] += 1, i.money > 0 ? (i.money -= parseInt(.5 * i.money), c.closeUI("你被摸走一半的钱！")) : c.closeUI("cao！你以为一大把年纪，趟地上很容易？耍老娘？呸！");
                                    else {
                                        var t = 100 * Math.random();
                                        i.publicVar[0] -= 1, t <= 20 && (i.itemNum[0] += 2, c.closeUI("老奶奶送给你【果子】*2。罪恶值减1（你目前罪恶" + i.publicVar[0] + "）")), t > 20 && t <= 80 && (i.itemNum2[1] += 1, c.closeUI("老奶奶送给你【伤药】*1。罪恶值减1（你目前罪恶" + i.publicVar[0] + "）")), t > 80 && (i.itemNum[4] += 2, c.closeUI("老奶奶送给你【亚麻】*2。罪恶值减1（你目前罪恶" + i.publicVar[0] + "）"))
                                    }
                                }
                            }, choice2: function () {
                                c.closeUI("你假装没看见，走开了")
                            }
                        }, 8: {
                            text: ["发现一个乘凉的好地方", "小憩（精力+20）", "疗伤（生命全恢复）"], choice1: function () { i.energy += 20, c.closeUI("精力恢复20点！") }, choice2: function () {
                                i.role.hp += parseInt(o.role.maxHp()), c.closeUI("恢复全部生命值！")
                            }
                        }, 9: {
                            text: ["“小伙子，我看你印堂发黑，一看就是老烟枪，", "要不要来发电疗？酥酥麻麻的，很虚服哦~”", "来一发!（3毛，成功率" + Math.max(100 - 5 * i.orderTimes[3], 20) + "%）", "滚滚滚！"], choice1: function () {
                                if (i.money >= 3) {
                                    var e = 100 * Math.random(), t = Math.max(100 - 5 * i.orderTimes[3], 20);
                                    i.money -= 3, e < t ? (i.orderTimes[4] += 1, i.orderTimes[3] += 1, c.closeUI("电疗成功！烟瘾减少1%")) : (i.role.hp = 1, c.closeUI("电疗失败！你损失全部生命！"))
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ˉ▽ˉ；)"
                            }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还！）")
                            }
                        }, 10: {
                            text: ["“收烟喽~", s[c.changeItemId2][3] + "个烟换" + s[c.changeItemId2][2] + "个「" + s[c.changeItemId2][0] + "」”", "换换换！", "没烟(｀_′)"], choice1: function () {
                                var e = s[c.changeItemId2][3]; if (i.itemNum2[7] >= e) {
                                    var t = c.changeItemId2, n = s[t];
                                    i.itemNum2[7] -= e, i.itemNum2[n[1]] += n[2], c.closeUI("获得【" + n[0] + "】*" + n[2] + "！"), c.changeItemId2 = parseInt(5.99 * Math.random())
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "确实没烟！( ˉ▽ˉ；)"
                            }, choice2: function () {
                                i.energy += 10, c.changeItemId2 = parseInt(4.99 * Math.random()), c.closeUI("精力+10（消耗返还！）")
                            }
                        }, 1001: {
                            text: ["一个听歌骑车的妹子，不小心把你擦了一下！", "你要怎么处理？", "要她肉偿！", "要她赔药！"], choice1: function () { i.itemNum[3] += 1, c.closeUI("获得【生肉】*1！") }, choice2: function () {
                                i.itemNum2[1] += 1, c.closeUI("获得【伤药】*1！")
                            }
                        }, 1002: {
                            text: ["前边出现两条路：", "右边是树林，左边是草地", "你走那边?", "树林", "草地"], choice1: function () { i.itemNum[1] += 2, i.itemNum[4] += 2, c.closeUI("获得【木材】*2【亚麻】*2！") }, choice2: function () {
                                i.itemNum[0] += 2, i.itemNum[5] += 2, c.closeUI("获得【果子】*2【艾草】*2！")
                            }
                        }, 1003: {
                            text: ["一个小孩正在吃棒棒糖...", "抢了赶紧溜！", "继续赶路"], choice1: function () {
                                var t = 100 * Math.random();
                                if (t < 25) c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(904);
                                else {
                                    var n = e("scr_data");
                                    n.hunger += 40, c.closeUI("恢复40点饥饿！")
                                }
                            }, choice2: function () {
                                c.closeUI("你拍了拍肚皮，继续赶路")
                            }
                        }, 1004: {
                            text: ["你被一只恶狗穷追不舍，", "你要怎么做？", "正面刚！", "丢个果子？！"], choice1: function () { c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(903) }, choice2: function () {
                                i.itemNum[0] >= 1 ? (i.itemNum[0] -= 1, c.closeUI("你丢了一个果子，恶狗高兴的捡果子去啦！")) : cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "果子不够！( ˉ▽ˉ；)"
                            }
                        }, 2001: {
                            text: ["路上发现5毛钱！捡不捡？", "捡", "不捡"], choice1: function () { c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(907) }, choice2: function () {
                                c.closeUI()
                            }
                        }, 2002: {
                            text: ["有一群流浪汉在树底下押宝，", "是否去试下手气？", "试", "不试"], choice1: function () {
                                var t = e("scr_data"); if (t.money > 0) {
                                    var n = 100 * Math.random(), a = Math.min(t.money, 100);
                                    n < 45 ? (t.money += a, c.closeUI("手气不错，金钱翻倍！")) : (t.money = 0, c.closeUI("你输光了所有的钱！"))
                                } else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "没钱！( ˉ▽ˉ；)"
                            }, choice2: function () {
                                c.closeUI("")
                            }
                        }, 2003: {
                            text: ["“好消息，好消息！本店即将拆迁，全场疯狂大甩卖", "每件" + r + "毛！件件" + r + "毛！", "买不买没关系，进来看一哈，瞧一哈。”", "路边一小贩拿着大喇叭喊道。", "挑一个看看", "走喽~"], choice1: function () {
                                if (i.money >= r) {
                                    var e = 100 * Math.random();
                                    i.money -= r, e <= 30 && (i.itemNum2[1] += 1, c.closeUI("获得【伤药】*1")), e > 30 && e <= 55 && (i.itemNum2[12] += 1, c.closeUI("获得【啤酒】*1")), e > 55 && e <= 80 && (i.itemNum2[0] += 1, c.closeUI("获得【熟肉】*1")), e > 80 && e <= 95 && (i.itemNum2[22] += 1, c.closeUI("获得【女装】*1")), e > 95 && e <= 100 && (i.itemNum2[25] += 1, c.closeUI("获得【护身符】*1"))
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ˉ▽ˉ；)"
                            }, choice2: function () {
                                c.closeUI()
                            }
                        }, 2004: {
                            text: ["一位正襟危坐、武士模样的男子，", "身旁立着一把寒光凛冽的黑色太刀", "地上一张白布上写道，", "“慈父重病，无钱医治，现出售传家之宝，售价" + (i.randomEvent[7] / 10).toFixed(1) + "！”", "买了", "溜了溜了~"], choice1: function () { i.money >= i.randomEvent[7] ? (i.money -= i.randomEvent[7], i.itemNum2[10] += 1, i.choice[4] += 1, c.closeUI("获得【黑刀】！"), i.randomEvent[7] = 99 + 100 * i.choice[4]) : cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ˉ▽ˉ；)" }, choice2: function () {
                                i.randomEvent[7] -= 10, i.randomEvent[7] <= 59 && (i.randomEvent[7] = 59), c.closeUI()
                            }
                        }, 2005: {
                            text: ["发现一份搬砖（LV.1）的零工，", "是否去试试？", "是（需20饥饿,成功率" + Math.min(70 + i.workExp, 100) + "%）", "算了"], action: function () { cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^" }, choice1: function () {
                                var t = e("scr_public"); if (n(), i.hunger >= 0) {
                                    var a = i.workExp, o = 100 * Math.random(), r = 70 + a;
                                    if (i.hunger -= 20, t.autoEat(), o < r) {
                                        var s = 4, l = 1;
                                        i.money += s, i.workExp += l, c.closeUI("应聘成功，面试经验+1！\n获得" + (s / 10).toFixed(1) + "元！")
                                    } else i.publicVar2[9] += 1, i.workExp += 1, c.closeUI("面试经验+1\n【“不好意思，我们可不敢乱用没身份证的小孩，你还是去找找其他工作吧”】")
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！"
                            }, choice2: function () {
                                c.closeUI()
                            }
                        }, 2006: {
                            text: ["发现一份服务生（LV.2）的临时工，", "是否去试试？", "是（需20饥饿,成功率" + Math.min(20 + i.workExp, 100) + "%）", "算了"], action: function () { cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^" }, choice1: function () {
                                var t = e("scr_public"); if (n(), i.hunger >= 20) {
                                    var a = i.workExp, o = 100 * Math.random(), r = 20 + a;
                                    if (i.hunger -= 20, t.autoEat(), o < r) {
                                        var s = 6, l = 1;
                                        i.money += s, i.workExp += l, c.closeUI("应聘成功，面试经验+1！获得" + (s / 10).toFixed(1) + "元！")
                                    } else i.publicVar2[9] += 1, i.workExp += 1, c.closeUI("“面试经验+1\n【“你太内向，对别人评价又很敏感；\n我不建议你做这种需要频繁和各种人、打交道的工作，\n你还是找点技术活做做吧。”】")
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！"
                            }, choice2: function () {
                                c.closeUI()
                            }
                        }, 3001: {
                            text: ["远处有一个小商店", "过去看看", "算啦，太累，还不如小睡一下呢"], choice1: function () { cc.director.loadScene("shop") }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10")
                            }
                        }, 3002: {
                            text: [Math.min(i.randomEvent[5] + 1, 7) + "只流浪狗，眼巴巴的看着你，", "是否给点【果子？】？", "给！（需果子*" + Math.min(i.randomEvent[5] + 1, 7) + ")", "不给！"], choice1: function () {
                                var e = Math.min(i.randomEvent[5] + 1, 7); if (i.itemNum[0] >= e) {
                                    var t = Math.max(Math.round(e / 2), 1);
                                    i.randomEvent[5] += 1, i.publicVar[0] -= t, i.itemNum[0] -= e, 3 == i.randomEvent[5] ? (i.itemNum2[26] += 1, c.closeUI("流浪狗把你带到一个地方，你找到一个「幸运石」。罪恶值减" + t + "（你目前罪恶" + i.publicVar[0] + "）")) : 7 == i.randomEvent[5] ? (i.itemNum2[8] += 1, c.closeUI("流浪狗把你带到一堆白骨前，你找到一个「匕首」。罪恶值减" + t + "（你目前罪恶" + i.publicVar[0] + "）")) : 10 == i.randomEvent[5] ? (i.randomEvent[1] += 1, c.closeUI("流浪狗送了你一张「好人卡」（用于解锁特殊剧情）！罪恶值减" + t + "（你目前罪恶" + i.publicVar[0] + "）")) : c.closeUI("流浪狗似乎从来没吃过这么好吃的东西...罪恶值减" + t + "（你目前罪恶" + i.publicVar[0] + "）")
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "道具不足！"
                            }, choice2: function () {
                                c.closeUI("你把流浪狗轰走了")
                            }
                        }, 3003: {
                            text: ["前边有两条路，", "左边看起来很好走，", "右边看起来很危险！", "你走哪边?", "左边", "右边"], choice1: function () { i.itemNum[1] += 2, i.itemNum[0] += 2, c.closeUI("获得【木材】*2【果子】*2！") }, choice2: function () {
                                i.enemyId = 300002, c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(300002)
                            }
                        }, 3004: {
                            text: ["“有奖套圈喽，", "小伙要不要试下手气，", "2毛一次！", "试试", "溜了溜了"], choice1: function () {
                                function e() {
                                    var e = 100 * Math.random();
                                    e <= 40 && (i.itemNum[0] += 5, c.closeUI("获得【果子】*4，扔圈熟练度+1")), e > 40 && e <= 50 && (i.money += 10, c.closeUI("获得【1元】大奖！扔圈熟练度+1")), e > 50 && e <= 70 && (i.itemNum2[12] += 1, c.closeUI("获得【啤酒】*1，扔圈熟练度+1")), e > 70 && e <= 90 && (i.itemNum2[7] += 1, c.closeUI("获得【香烟】*1，扔圈熟练度+1")), e > 90 && e <= 95 && (i.itemNum2[27] += 1, c.closeUI("获得【晓月手链】*1，扔圈熟练度+1")), e > 95 && (i.itemNum2[21] += 1, c.closeUI("获得【小裤裤】*1，扔圈熟练度+1"))
                                } if (i.money >= 2) {
                                    var t = 100 * Math.random(), n = 20 + 10 * i.randomEvent[12];
                                    i.money -= 2, t < n ? (i.randomEvent[12] += 1, e()) : (i.randomEvent[12] += 1, c.closeUI("你扔空了，啥也没圈到，扔圈熟练度+1"))
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！"
                            }, choice2: function () {
                                c.closeUI("")
                            }
                        }, 3005: {
                            text: ["“兄弟，", "你若能让我砍一刀，我就给你" + (2 * i.randomEvent[13] + 2) + "毛钱”", "一个流浪汉拉着你说道", "行，来呀！", "啊！！！我呸！"], choice1: function () { c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(900) }, choice2: function () {
                                i.randomEvent[13] += 1, c.closeUI("")
                            }
                        }, 3006: {
                            text: ["前边有俩村子，", "东边锣鼓喧天，鞭炮齐鸣;", "西边哭天喊地，神号鬼泣！", "你去哪边?", "东边", "西边"], choice1: function () { var e = 100 * Math.random(); e < 90 && (i.money += 2, c.closeUI("抢到【0.2元】红包！")), e >= 90 && (i.money += 10, c.closeUI("抢到【1元】红包！")) }, choice2: function () {
                                i.itemNum2[0] += 1, c.closeUI("获得【熟肉】*1！")
                            }
                        }, 3007: {
                            text: ["发现一个可疑的地方，", "是否挖挖看？", "是（需20饥饿,成功率" + (40 + 3 * i.randomEvent[11]) + "%）", "算了"], choice1: function () {
                                function t() {
                                    var e = 100 * Math.random();
                                    if (e < 20) i.itemNum[8] += 1, c.closeUI("挖到【黑曜石】*1");
                                    else if (e < 60) i.itemNum[9] += 1, c.closeUI("挖到出一个盒子，打开一看，发现【火狐皮】*1");
                                    else if (e < 63) i.itemNum2[17] += 1, c.closeUI("挖到出一个宝箱，打开一看，发现【放大镜】*1");
                                    else if (e < 100) {
                                        var t = parseInt(5 * Math.random() + 1);
                                        i.money += t, c.closeUI("挖到一些硬币，获得" + (t / 10).toFixed(1) + "元！")
                                    }
                                } var a = e("scr_public"); if (n(), i.hunger >= 20) {
                                    var o = 100 * Math.random(), r = 40 + 3 * i.randomEvent[11];
                                    i.hunger -= 20, a.autoEat(), i.randomEvent[11] += 1, o < r ? t() : c.closeUI("忙活半天，啥也没挖到，挖掘技术+1")
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不够！"
                            }, choice2: function () {
                                c.closeUI("")
                            }
                        }, 4001: {
                            text: ["一位衣服褴褛、武士模样的男子，", "在地上写道，", "“爱父重病。王八蛋哥哥，输光所有捐款，欠下万元巨债，现出售绝世武学一本，只要" + (Math.max(parseInt(i.day + i.publicVar2[28] * i.publicVar3[19] - 40), 29) / 10).toFixed(1) + "元，活动特价，仅此一本！”", "哇~活动价~赶紧买！", "......"], choice1: function () { var e = Math.max(parseInt(i.day + i.publicVar2[28] * i.publicVar3[19] - 40), 29); i.money >= e ? (i.money -= e, i.publicVar2[28] = 1, i.publicVar3[19] += 1, c.closeUI("获得《如来神掌》！请到看书界面使用。如果再次购买此书，此书使用次数将重置，但贼贵！")) : cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ˉ▽ˉ；)" }, choice2: function () {
                                i.energy += 10, c.closeUI("精力恢复10点（消耗返还！）")
                            }
                        }, 4002: {
                            text: ["“兄弟，这儿有市场上买不到的东西，要不要过来看看？”", "过去看看", "算了~"], choice1: function () { cc.director.loadScene("shop2") }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还！）")
                            }
                        }, 4003: {
                            text: ["发现一份贴小广告的工作，是否去试试？", "是（需20饥饿）", "算了"], action: function () { cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^" }, choice1: function () {
                                var t = e("scr_public"); if (n(), i.hunger >= 0) {
                                    var a = parseInt(3 + i.publicVar2[30] / 15);
                                    i.money += a, i.hunger -= 20, t.autoEat(), c.closeUI("获得报酬" + (a / 10).toFixed(1) + "元")
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！"
                            }, choice2: function () {
                                c.closeUI()
                            }
                        }, 4004: {
                            text: ["碰到一位烤红薯的老人，是否买点尝尝？", "买（2毛）", "算了"], choice1: function () {
                                if (i.money >= 2) {
                                    var e = Math.min(3 * i.chioce2[4], 50), t = 100 * Math.random();
                                    i.money -= 2, t < e ? (i.chioce2[4] += 1, i.hunger += 80, c.closeUI("“啊吧~啊吧~”，不会说话的老人额外送给你一个红薯，饥饿+80！")) : (i.chioce2[4] += 1, i.hunger += 40, c.closeUI("香喷喷烤红薯，饥饿+40"))
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！"
                            }, choice2: function () {
                                c.closeUI()
                            }
                        }, 4005: {
                            text: ["路上发现" + c.randomItemNum + "个踩扁的易拉罐，四周无人，捡不捡？", "捡", "不捡"], choice1: function () { var e = 100 * Math.random(); e < 50 ? (c.closeUI(), cc.find("Canvas/Button").stopAllActions(), i.enemyId = 900007, cc.find("Event/scr_fight").getComponent("scr_fight").fight(900007)) : (i.itemNum[2] += c.randomItemNum, c.closeUI("获得" + c.randomItemNum + "个易拉罐！")) }, choice2: function () {
                                c.closeUI()
                            }
                        }, 7001: {
                            text: ["又逛到那个可疑的地方，是否接着挖？", "是（需30饥饿，当前深度" + i.chioce2[3] + "）", "算了，留着肚子干点别的"], choice1: function () {
                                function t() {
                                    var e = i.chioce2[3];
                                    2 == e ? (i.money += 4, c.closeUI("挖到两枚银币，获得0.4元！")) : 6 == e ? (i.itemNum[8] += 2, c.closeUI("挖到两个黑色石头，获得【黑曜石】*2")) : 12 == e ? (i.itemNum2[26] += 2, c.closeUI("挖到一个幸运石，获得【幸运石】*2")) : 20 == e ? (i.itemNum[9] += 6, c.closeUI("挖到出一个宝箱，打开一看，发现火狐皮，获得【火狐皮】*6！")) : 32 == e ? (i.itemNum2[27] += 2, c.closeUI("挖到出一个宝箱，打开一看，发现晓月手链，获得【晓月手链】*2！")) : 50 == e ? (i.itemNum[8] += 10, c.closeUI("挖到大量黑色石头，获得【黑曜石】*10！！！")) : c.closeUI("啥也没挖到！")
                                } function n() {
                                    var t = e("scr_data");
                                    t.hunger <= 30 && (t.itemNum2[0] >= 1 ? (t.itemNum2[0] -= 1, t.orderTimes[2] += 1, t.hunger += 60) : t.itemNum[0] >= 1 && (t.itemNum[0] -= 1, t.orderTimes[5] += 1, t.hunger += 20))
                                } var a = e("scr_public"); n(), n(), i.hunger >= 30 ? (i.hunger -= 30, a.autoEat(), i.chioce2[3] += 1, t()) : cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "你怕是会晕死在洞底哦~"
                            }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还！）")
                            }
                        }, 7002: {
                            text: ["“我的梦想是成为天下第一飞刀手，所以能请你帮个忙个么？”，一个年轻小伙真诚的问道。", "可以呀（报酬0.5元，但有风险）", "...我是sb？"], choice1: function () { var e = 100 * Math.random(), t = Math.min(20 + 5 * i.chioce2[5], 60); i.chioce2[5] += 1, e < t ? (i.money += 5, c.closeUI("“走你！...蛤蛤！完美！”。获得0.5元报酬，小伙飞刀技术提升！")) : (i.money += 10, i.role.hp = 1, i.health -= 3, c.closeUI("“走你！...哎呀！不好意思，手滑了下...多给你5毛，拿去买些药吧~”。生命全损失，健康-3，获得1元报酬，小伙飞刀技术提升！")) }, choice2: function () {
                                i.chioce2[5] -= 1, c.closeUI("由于小伙子迟迟没有训练，所以飞镖技术退化了...")
                            }
                        }, 7003: {
                            text: ["你碰到" + parseInt(i.specialEnemy[400003].lv / 20) + "匹狼，要怎么做？", "干！", "丢块肉..."], choice1: function () { c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(400003) }, choice2: function () {
                                i.itemNum[3] >= 1 ? (i.itemNum[3] -= 1, c.closeUI("丢块生肉，赶紧溜~(?˙o˙)?")) : cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "没生肉！( ˉ▽ˉ；)"
                            }
                        }, 7004: {
                            text: ["路过一片小河环绕的小树林，是弄点吃的还是捡点材料呢？", "弄吃的", "弄材料"], choice1: function () { var e = parseInt(4 * Math.random() + 1), t = parseInt(3 * Math.random() + 1); i.itemNum[0] += e, i.itemNum[3] += t, c.closeUI("获得【果子】*" + e + "【生肉】*" + t + "！") }, choice2: function () {
                                var e = parseInt(4 * Math.random() + 1), t = parseInt(4 * Math.random() + 1);
                                i.itemNum[1] += e, i.itemNum[4] += t, c.closeUI("获得【木材】*" + e + "【亚麻】*" + t + "！")
                            }
                        }, 7005: {
                            text: ["“在下施半仙，要不要来抽个签呀？现在公司搞活动，限时折扣价！咋样？”", "好呀（" + c.drawDiscount + "折，" + c.drawDiscount + "毛钱）", "算了"], choice1: function () {
                                var e = c.drawDiscount; if (i.money >= e) {
                                    i.money -= e;
                                    var t = 100 * Math.random();
                                    t < 25 ? (i.publicVar3[9] += 30, c.closeUI("“嗯~今天你更容易捡到东西哟~”（再次获得道具几率+30%，持续1天）”")) : t < 50 ? (i.publicVar3[4] += 99, c.closeUI("“嗯~今天适合怼！怼！怼！~”（攻击+99，持续1天）”")) : t < 75 ? (i.publicVar3[10] += 99, c.closeUI("“嗯~今天适合冈！冈！冈！~”（防御+99，持续1天）”")) : (i.publicVar3[11] += 100, c.closeUI("“嗯~今天适合装逼呢~”（逃跑率+100%，持续1天）”"))
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "“没钱！”"
                            }, choice2: function () {
                                c.closeUI("")
                            }
                        }, 8001: {
                            text: ["在一个在建筑工地找到一份送水泥的临时工作，做不做呢？", "做（需20饥饿）", "算了"], action: function () { cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^" }, choice1: function () {
                                var t = e("scr_public"); if (n(), i.hunger >= 0) {
                                    var a = parseInt(5 + i.publicVar2[30] / 15);
                                    i.money += a, i.hunger -= 20, t.autoEat(), c.closeUI("获得报酬" + (a / 10).toFixed(1) + "元")
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！"
                            }, choice2: function () {
                                c.closeUI()
                            }
                        }, 8002: {
                            text: ["一位长发、外表清纯的妹子，抱膝而坐，身旁几个清秀的粉笔字，“旅游至此，钱包手机被偷，求" + (2 + 2 * i.chioce2[6]) + "毛路费回家...”", "被骗了也值！给！", "溜了~"], choice1: function () {
                                var e = 2 + 2 * i.chioce2[6]; if (i.chioce2[6] > 10) {
                                    var t = o.role.maxHp();
                                    i.role.hp += parseInt(.5 * t), i.role.hp > t && (i.role.hp = t), c.closeUI("妹子拒绝接受你的钱...并帮你清理伤口，生命恢复50%！")
                                } else i.money < e ? cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱~" : 5 == i.chioce2[6] ? (c.closeUI(), cc.find("Canvas/Button").stopAllActions(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(910)) : 10 == i.chioce2[6] ? (i.money -= e, i.publicVar2[24] += 1, i.chioce2[6] += 1, c.closeUI("妹子送给你一本书，小声说了句「对不起」，跑开了。获得《伯恩斯情绪疗法》！")) : (i.money -= e, i.chioce2[6] += 1, c.closeUI("妹子小声说了句谢谢..."))
                            }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还）")
                            }
                        }, 8003: {
                            text: ["“有奖套圈...咦？小伙子，咋看起有些面熟呀...", "4毛一次，要不要来一发？", "试试（" + Math.min(2 * i.randomEvent[12] + 20, 80) + "%套中）", "溜了溜了"], choice1: function () {
                                function e() {
                                    var e = 100 * Math.random();
                                    e <= 40 && (i.money += 10, c.closeUI("获得【1元】，扔圈熟练度+1（累计" + i.randomEvent[12] + "）")), e > 40 && e <= 50 && (i.itemNum2[12] += 1, c.closeUI("获得【啤酒】*1，扔圈熟练度+1（累计" + i.randomEvent[12] + "）")), e > 50 && e <= 70 && (i.itemNum2[17] += 1, c.closeUI("获得【放大镜】*1，扔圈熟练度+1（累计" + i.randomEvent[12] + "）")), e > 70 && e <= 90 && (i.itemNum2[22] += 1, c.closeUI("获得【女装】*1，扔圈熟练度+1（累计" + i.randomEvent[12] + "）")), e > 90 && e <= 95 && (i.itemNum2[27] += 1, c.closeUI("获得【晓月手链】*1，扔圈熟练度+1（累计" + i.randomEvent[12] + "）")), e > 95 && (i.itemNum2[26] += 1, c.closeUI("获得【幸运石】*1，扔圈熟练度+1（累计" + i.randomEvent[12] + "）"))
                                } if (i.money >= 4) {
                                    var t = 100 * Math.random(), n = Math.min(2 * i.randomEvent[12] + 20, 80);
                                    i.money -= 4, t < n ? (i.randomEvent[12] += 1, e()) : (i.randomEvent[12] += 1, c.closeUI("你扔空了，啥也没圈到，扔圈熟练度+1（累计" + i.randomEvent[12] + "）"))
                                } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！"
                            }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还）")
                            }
                        }, 8004: {
                            text: ["发现一个有点闪眼的大楼！要进去看看吗？", "去", "不去"], choice1: function () { cc.director.loadScene("shop3") }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还）")
                            }
                        }, 90001: {
                            text: ["“欢迎光临，你要做点什么呢？”", "找妹子", "喝点酒（1元）"], choice1: function () { }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还）")
                            }
                        }, 90002: {
                            text: ["请问你找哪位？", "", ""], choice1: function () { }, choice2: function () {
                                i.energy += 10, c.closeUI("精力+10（消耗返还）")
                            }
                        }, 10001: {
                            text: ["在导致流浪的主要原因是：\n（这里仅对比这两类，不讨论身体缺陷问题）", "懒/愚蠢（自身因素）", "精神/心理疾病（客观因素）"], choice1: function () { i.publicVar[11] > 0 && (i.publicVar[11] = 0), i.publicVar[11] += 3, c.closeUI(), c.startEvent(10002) }, choice2: function () {
                                i.publicVar[11] > 0 && (i.publicVar[11] = 0), i.publicVar[11] += 3, c.closeUI(), c.startEvent(10002)
                            }
                        }, 10002: {
                            text: ["你是否认为内向是一种性格缺陷？", "是的", "不是的"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10003) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10003)
                            }
                        }, 10003: {
                            text: ["你认为包容可以解决矛盾吗？", "可以", "不可以"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10004) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10004)
                            }
                        }, 10004: {
                            text: ["你认为哪种东西更重要？", "个人能力和健康的身体", "良好的人际关系和美满的家庭"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10005) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10005)
                            }
                        }, 10005: {
                            text: ["你认为那种想法更加不利于人际交往？", "“我有缺陷...我有问题...”", "“我身边的人都应该喜欢我！”"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10006) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10006)
                            }
                        }, 10006: {
                            text: ["你更需要：", "自己认可自己", "别人认可自己"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10007) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10007)
                            }
                        }, 10007: {
                            text: ["你认为人活着需要理由吗？", "需要", "不需要"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10008) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10008)
                            }
                        }, 10008: {
                            text: ["你是否有想过愚蠢和缺乏自制力的人应该都死掉？", "想过", "没想过"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10009) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10009)
                            }
                        }, 10009: {
                            text: ["在回答以上问题时，你是否有想过这些问题与游戏的联系、或者去揣测作者的意图？", "有", "没有"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), c.startEvent(10010) }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), c.startEvent(10010)
                            }
                        }, 10010: {
                            text: ["以上问题你是如实回答的吗？（没有为了通关而去刻意选择答案）", "是的", "不是的"], choice1: function () { i.publicVar[11] += 3, c.closeUI(), t() }, choice2: function () {
                                i.publicVar[11] += 3, c.closeUI(), t()
                            }
                        }, 20001: {
                            text: ["你愿意回家吗？", "愿意", "不愿意"], choice1: function () { i.publicVar3[3] = 311, c.closeUI("“回家吧~少年”") }, choice2: function () {
                                i.ifFollow[0] > 0 ? (i.publicVar3[3] = 412, i.plotId = 1002, o.save(), cc.director.loadScene("plot")) : i.publicVar[7] >= 999 ? (i.publicVar3[3] = 413, i.plotId = 1003, o.save(), cc.director.loadScene("plot")) : (i.publicVar3[3] = 411, i.plotId = 1001, o.save(), cc.director.loadScene("plot"))
                            }
                        }
                    };
                    return a
                }, startEvent: function (e) {
                    function t() {
                        var e = c.choice1, t = c.choice2, n = u.getChildByName("Choice1"), a = u.getChildByName("Choice2");
                        n.getChildByName("choiceText").getComponent("cc.Label").string = r, a.getChildByName("choiceText").getComponent("cc.Label").string = o, "" == r && (n.opacity = 0, u.getChildByName("label").opacity = 0), n.on("touchstart", e, n), a.on("touchstart", t, a)
                    }
                    function n() {
                        u.runAction(cc.scaleTo(.5, 1))
                    }
                    var a = this.event(), c = a[e], i = c.text, o = i.pop(), r = i.pop(), s = i.length, l = 1, u = cc.find("Canvas/Event/Choice");
                    cc.find("Canvas/Event/EventText").removeAllChildren(), cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "你选择...", "undefined" != typeof c.action && c.action(), this.showUI(), this.printEventDes(i), this.scheduleOnce(n, s * l), t()
                }, printEventDes: function (e) {
                    function t() {
                        i.creatText(o, "plot" + a, e[a]), a++
                    }
                    var n = e.length, a = 1, c = 1, i = this, o = cc.find("Canvas/Event/EventText");
                    cc.find("Event/scr_mainUIEvent");
                    this.creatText(o, "plot0", e[0]), this.schedule(t, c, n - 2)
                }, showUI: function () {
                    cc.find("Canvas/Text/txt_notify").opacity = 0, cc.find("Canvas/Text/txt_notify").getComponent("cc.Label").string = "", cc.find("Canvas/Event").scale = 1, cc.find("Canvas/Event/Choice").scale = 0, cc.find("Canvas/Button").runAction(cc.scaleTo(.3, 0))
                }, closeUI: function (t) {
                    var n = cc.find("Canvas/Button"), a = e("scr_public"), c = cc.find("Canvas/Event/Choice/Choice1"), i = cc.find("Canvas/Event/Choice/Choice2");
                    cc.find("Canvas/Text/txt_notify").opacity = 255, cc.find("Canvas/Event/EventText").removeAllChildren(), c.targetOff(c), i.targetOff(i), cc.find("Canvas/Event").scale = 0, n.runAction(cc.scaleTo(.3, 1)), t = t || "", e("scr_effect").playText("Canvas/Text/txt_notify", t, 60), a.save(), a.init()
                }, onLoad: function () { }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_mainUIinit: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "63b63kuwo9N7JpekGEK/q7S", "scr_mainUIinit"), cc.Class({
                "extends": cc.Component, properties: {}, skillShow: function () {
                    var t = 0, n = e("scr_data").skillLv;
                    for (var a in n) n[a] > 0 && t++;
                    return t
                }, initSkillShow: function () {
                    cc.find("Canvas/Text/txt_skillNum").getComponent("cc.Label").string = "特性  " + this.skillShow() + "/27"
                }, whichShow: function (t, n) {
                    for (var a = e("scr_data").distance, c = cc.find(n).children, i = t.length, o = 0; o <= i; o++)a >= t[o] ? c[o].active = !0 : c[o].active = !1
                }, showButton: function () {
                    var t = [6, 4, 7, 23];
                    this.whichShow(t, "Canvas/Button"), e("scr_public").init()
                }, showfriendButton: function () {
                    var t = e("scr_data"), n = cc.find("Canvas/Button/button_friend");
                    1 == t.ifFollow[0] || 1 == t.ifFollow[1] ? n.active = !0 : n.active = !1
                }, onButton: function () {
                    var t = e("scr_data"), n = cc.find("Canvas/Button"), a = n.getChildByName("button_dekaron"), c = this;
                    t.day > 45 && t.publicVar[1] >= 0 ? a.on("touchstart", c.dekaronButton, this) : a.active = !1, 1 == t.ifFollow[0] ? n.getChildByName("button_friend").on("touchstart", function () {
                        cc.director.loadScene("friend1")
                    }, this) : 1 == t.ifFollow[1] && n.getChildByName("button_friend").on("touchstart", function () {
                        cc.director.loadScene("friendSkill2")
                    }, this)
                }, dekaronButton: function () {
                    function t() {
                        var e = n.choice[6], t = [201, 202, 300003, 203, 204, 205, 206, 207, 900006, 209, 210, 211, 900005, 213, 214, 215], i = t[e]; "undefined"
                            == typeof i ? c.playText("Canvas/Text/txt_notify", "什么都没有...", 60) : (n.energy -= 10, a.save(), cc.find("Event/scr_fight").getComponent("scr_fight").fight(i))
                    }
                    var n = e("scr_data"), a = e("scr_public"), c = e("scr_effect");
                    n.energy >= 10 ? t() : c.playText("Canvas/Text/txt_notify", "挑战需10点精力！", 60)
                }, hideUI: function () {
                    var e = cc.find("Canvas/Button").children, t = cc.find("Canvas/Text").children, n = cc.find("Canvas/Button/button_explore");
                    for (var a in e) e[a].active = !1;
                    for (var c in t) t[c].active = !1;
                    cc.find("Canvas/UI").active = !1, cc.find("Canvas/Text/txt_notify").active = !0, n.active = !0, n.x = 7, n.y = 164
                }, onLoad: function () {
                    function t() {
                        if (300 == a.distance && a.stayDay[3] > 1 && 0 == a.publicVar3[2]) {
                            var t = cc.find("Canvas/Button/button_rest");
                            t.getChildByName("text").getComponent("cc.Label").string = "桥  洞", t.on("touchstart", function () {
                                cc.director.loadScene("home")
                            }, t)
                        } else {
                            var t = cc.find("Canvas/Button/button_rest");
                            t.on("touchstart", function () {
                                e("scr_data").energy >= 10 ? cc.director.loadScene("notice2") : cc.director.loadScene("diary")
                            }, t)
                        }
                    }
                    var n = e("scr_public"), a = e("scr_data");
                    t(), this.showButton(), this.initSkillShow(), this.onButton(), this.showfriendButton(), n.autoEat(), a.role.hp < 0 && (a.role.hp = 1), n.init(), cc.find("Canvas/Fight").active = !1, cc.find("Canvas/Button").active = !0, a.day >= 180 && this.hideUI()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_makeButton: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "fbf64sNmm5MYp/UrY57mFiI", "scr_makeButton"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("make")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_makeUI: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "65413JSLq1B/LWVXwKnjL2L", "scr_makeUI"), cc.Class({
                "extends": cc.Component, properties: { itemUI: { "default": null, type: cc.Prefab } }, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, -300), a.color = new cc.Color(0, 255, 0), a.getComponent(cc.Label).overflow = 3, a.setContentSize(530, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 80, a.getComponent(cc.Label).fontSize = 40
                }, itemContent: function a() {
                    this.data = e("scr_data");
                    var t = this, n = e("scr_effect"), a = {
                        0:
                        {
                            itemName: " 熟肉 ", needDes: "※需【生肉】" + this.data.itemNum[3] + "/1【木材】" + this.data.itemNum[1] + "/1", des: "※获得【熟肉】（已拥有" + this.data.itemNum2[0] + "）", ifEnough: function (e) { t.data.itemNum[3] >= 1 && t.data.itemNum[1] >= 1 && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public");
                                n.itemNum[3] >= 1 && n.itemNum[1] >= 1 ? (n.itemNum[3] -= 1, n.itemNum[1] -= 1, n.itemNum2[0] += 1, c.save(), a.playText("Canvas/notify", "获得【熟肉】*1", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 1:
                        {
                            itemName: " 伤药 ", needDes: "※需【艾草】" + this.data.itemNum[5] + "/2", des: "※获得【伤药】（拥有" + this.data.itemNum2[1] + "）", ifEnough: function (e) { t.data.itemNum[5] >= 2 && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 2, o = n.itemNum[5];
                                o >= i ? (n.itemNum[5] -= i, n.itemNum2[1] += 1, c.save(), a.playText("Canvas/notify", "获得【伤药】*1", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 2:
                        {
                            itemName: "帐篷LV"
                                + this.data.itemNum2[2], needDes: "※需【木材】"
                                    + this.data.itemNum[1] + "/" + (1 + this.data.itemNum2[2]) + "【亚麻】" + this.data.itemNum[4] + "/" + (4 + 2 * this.data.itemNum2[2]), des: "※精力上限增加"
                                        + 10 * this.data.itemNum2[2] + "点", ifEnough:
                                function (e) {
                                    t.data.itemNum[1] >= 1 + t.data.itemNum2[2] && t.data.itemNum[4] >= 4 + 2 * t.data.itemNum2[2] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
                                }, button:
                                function () {
                                    var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 1 + n.itemNum2[2], o = n.itemNum[1], r = 4 + 2 * n.itemNum2[2], s = n.itemNum[4];
                                    o >= i && s >= r ? (n.itemNum[1] -= i, n.itemNum[4] -= r, n.itemNum2[2] += 1, c.save(), a.playText("Canvas/notify", "精力上限+10！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                                }
                        }, 3:
                        {
                            itemName: "木棍LV" + this.data.itemNum2[3], needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (4 + 2 * this.data.itemNum2[3]), des: "※增加" + 10 * this.data.itemNum2[3] + "点攻击。【暴击】" + 2 * this.data.itemNum2[3] + "%几率触发暴击", ifEnough: function (e) { t.data.itemNum[1] >= 4 + 2 * t.data.itemNum2[3] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 4 + 2 * n.itemNum2[3], o = n.itemNum[1];
                                o >= i ? (n.itemNum[1] -= i, n.itemNum2[3] += 1, c.save(), a.playText("Canvas/notify", "攻击+10！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 4:
                        {
                            itemName: "麻布衣LV" + this.data.itemNum2[4], needDes: "※需【亚麻】" + this.data.itemNum[4] + "/" + (4 + 2 * this.data.itemNum2[4]), des: "※增加" + 50 * this.data.itemNum2[4] + "点生命上限。" + Math.min(2 * this.data.itemNum2[4], 60) + "%几率触发【格挡】", ifEnough: function (e) { t.data.itemNum[4] >= 4 + 2 * t.data.itemNum2[4] && (cc.find("Canvas/Page/view/content/page_2/" + e + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 4 + 2 * n.itemNum2[4], o = n.itemNum[4];
                                o >= i ? (n.itemNum[4] -= i, n.itemNum2[4] += 1, c.save(), a.playText("Canvas/notify", "生命上限+50！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 5:
                        {
                            itemName: "驱蚊工具LV" + this.data.itemNum2[6], needDes: "※需【艾草】" + this.data.itemNum[5] + "/" + (8 + 2 * this.data.itemNum2[6]), des: "※睡觉时恢复" + 30 * this.data.itemNum2[6] + "点生命值", ifEnough: function (t) { var n = e("scr_data"); n.itemNum[5] >= 8 + 2 * n.itemNum2[6] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 8 + 2 * n.itemNum2[6], o = n.itemNum[5];
                                o >= i ? (n.itemNum[5] -= i, n.itemNum2[6] += 1, c.save(), a.playText("Canvas/notify", "讨厌的蚊子减少啦~", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 6:
                        {
                            itemName: "陷阱LV" + this.data.itemNum2[5], needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (4 + 2 * this.data.itemNum2[5]), des: "※每天30%几率随机获得一种素材，升级提升获得数量", ifEnough: function (t) { var n = e("scr_data"); n.itemNum[1] >= 4 + 2 * n.itemNum2[5] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 4 + 2 * n.itemNum2[5], o = n.itemNum[1];
                                o >= i ? (n.itemNum[1] -= i, n.itemNum2[5] += 1, c.save(), a.playText("Canvas/notify", "升级成功！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 7:
                        {
                            itemName: "  香烟  ", needDes: "※需【烟草】" + this.data.itemNum[6] + "/4 或者【烟头】" + this.data.itemNum[7] + "/8", des: "※获得【香烟】。游戏中重要的“软货币”，也可自己使用", ifEnough: function (t) { var n = e("scr_data"); (n.itemNum[6] >= 4 || n.itemNum[7] >= 8) && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 4, o = 8, r = n.itemNum[6], s = n.itemNum[7];
                                r >= i ? (n.itemNum[6] -= i, n.itemNum2[7] += 1, c.save(), a.playText("Canvas/notify", "获得【香烟】*1！", 100), t.delayCreatItemUI()) : s >= o ? (n.itemNum[7] -= o, n.itemNum2[7] += 1, c.save(), a.playText("Canvas/notify", "获得【香烟】*1！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 8:
                        {
                            itemName: "啤酒", needDes: "※需【50ml啤酒】" + this.data.itemNum[10] + "/5", des: "※获得一罐【啤酒】！", ifEnough: function (t) { var n = e("scr_data"); n.itemNum[10] >= 5 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 5, o = n.itemNum[10];
                                o >= i ? (n.itemNum[10] -= i, n.itemNum2[12] += 1, c.save(), a.playText("Canvas/notify", "获得【啤酒】*1！", 100), t.delayCreatItemUI3()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 9:
                        {
                            itemName: "匕首LV" + this.data.itemNum2[8], needDes: "※可通过购买，或者打怪掉落提高等级", des: "※增加" + 20 * this.data.itemNum2[8] + "点攻击。【嗜血】攻击时，" + 2 * this.data.itemNum2[8] + "%概率恢复伤害21%的生命", button: function () {
                                n.playText("Canvas/notify", "请去商店购买！", 100)
                            }
                        }, 10:
                        {
                            itemName: "皮衣LV" + this.data.itemNum2[9], needDes: "※可通过购买，或者打怪掉落提高等级", des: "※增加" + 10 * this.data.itemNum2[9] + "点防御。【反弹】受击时，" + 2 * this.data.itemNum2[9] + "%几率减免「100%*自身防御」点伤害，并且将伤害反弹给对方", button: function () {
                                n.playText("Canvas/notify", "请去商店购买！", 100)
                            }
                        }, 11:
                        {
                            itemName: "┑(=^ω^=)┑LV" + this.data.itemNum2[13], needDes: "※获得方法未知", des: "※每天自动获得「0.1*LV」元", button: function () {
                                n.playText("Canvas/notify", "喵~", 100)
                            }
                        }, 12:
                            { itemName: "幸运石LV" + (this.data.itemNum2[26] + this.data.publicVar3[18]), needDes: "※收集类道具", des: "※增加" + (this.data.itemNum2[26] + this.data.publicVar3[18]) + "%的额外掉落奖励", button: function () { } }, 13:
                        {
                            itemName: "晓月手链LV" + (this.data.itemNum2[27] + this.data.publicVar3[17]), needDes: "※收集类道具", des: "※如果前进/探索时未发现道具，则有" + 5 * (this.data.itemNum2[27] + this.data.publicVar3[17]) + "%概率（LV*5%）再一次获得奖励", button: function () {
                                n.playText("Canvas/notify", "晓月手链触发时，必定获得奖励，且可以与「非酋逆袭」特性同时触发", 100)
                            }
                        }, 14:
                        {
                            itemName: "黑刀LV" + this.data.itemNum2[10], needDes: "※需【黑曜石】" + this.data.itemNum[8] + "/" + (10 + 2 * this.data.itemNum2[10]), des: "※增加" + 30 * this.data.itemNum2[10] + "点攻击。【割裂】每次攻击伤害提高" + 4 * this.data.itemNum2[10] + "%，最多叠加20次", ifEnough: function (t) { var n = e("scr_data"); n.itemNum[8] >= 10 + 2 * n.itemNum2[10] && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 10 + 2 * n.itemNum2[10], o = n.itemNum[8];
                                o >= i ? (n.itemNum[8] -= i, n.itemNum2[10] += 1, c.save(), a.playText("Canvas/notify", "获得【黑刀】*1！", 100), t.delayCreatItemUI4()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 15:
                        {
                            itemName: "红夹克LV" + this.data.itemNum2[11], needDes: "※需【火狐皮】" + this.data.itemNum[9] + "/" + (10 + 2 * this.data.itemNum2[11]), des: "※增加" + 150 * this.data.itemNum2[11] + "点生命上限，" + 15 * this.data.itemNum2[11] + "点防御。【火狐之灵】受击时，" + 2 * this.data.itemNum2[11] + "%概率提高20%防御（最多叠加20次），并且恢复自身5%的生命", ifEnough: function (t) { var n = e("scr_data"); n.itemNum[9] >= 10 + 2 * n.itemNum2[11] && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(0, 255, 0)) }, button: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 10 + 2 * n.itemNum2[11], o = n.itemNum[9];
                                o >= i ? (n.itemNum[9] -= i, n.itemNum2[11] += 1, c.save(), a.playText("Canvas/notify", "获得【红夹克】*1！", 100), t.delayCreatItemUI4()) : a.playText("Canvas/notify", "材料不足！", 100)
                            }
                        }, 16:
                        {
                            itemName: "晓风披肩LV" + this.data.itemNum2[15], needDes: "※用于增加自信。", des: "※每级增加1%全战斗属性（攻防血）。【帅呆】每级减少敌方2%防御！【拉风】每级减少敌方5%逃跑率！", button: function () {
                                n.playText("Canvas/notify", "听说穿上这件披肩的人，最后都被打死了...", 100)
                            }
                        }, 17:
                        {
                            itemName: "放大镜LV" + (this.data.itemNum2[17] + this.data.publicVar3[9]), needDes: "※收集类道具", des: "※前进/探索时，" + (this.data.itemNum2[17] + this.data.publicVar3[9]) + "%几率额外获得一次奖励！", button: function () {
                                n.playText("Canvas/notify", "(O_o)", 100)
                            }
                        }, 18:
                        {
                            itemName: "装避鞋LV" + this.data.itemNum2[18], needDes: "※收集类道具", des: "※逃跑技术增加速度+1！（你目前逃跑技术为" + this.data.escapeExp + "）", button: function () {
                                n.playText("Canvas/notify", "装了比就跑，真特么刺激", 100)
                            }
                        }, 19:
                        {
                            itemName: "枪LV" + this.data.itemNum2[19], needDes: "※白色粉末（拥有" + this.data.itemNum[11] + "）兑换，可能会招来麻烦！", des: "※造成「枪等级+1」倍伤害，每次消耗1颗子弹（已有" + this.data.itemNum2[14] + "）。点击战斗界面右下角文字可以打开/关闭枪效果！", button: function () {
                                var t = e("scr_data");
                                t.itemNum2[19] > 0 ? n.playText("Canvas/notify", "点击战斗界面右下角（逃跑率右边）【开/关】才会生效哦~", 100) : n.playText("Canvas/notify", "你还没有枪！", 100)
                            }
                        }, 20:
                        {
                            itemName: "板砖LV" + this.data.itemNum2[20], needDes: "※收集类道具", des: "※每级增加5点攻击！", button: function () {
                                n.playText("Canvas/notify", "听说集齐21块可以召唤城管哦~", 100)
                            }
                        }, 21:
                        {
                            itemName: "小裤裤LV" + this.data.itemNum2[21], needDes: "※收集类道具", des: "※每级增加5点防御！", button: function () {
                                n.playText("Canvas/notify", "有股淡淡的清香呢~(?ω?)~", 100)
                            }
                        }, 22:
                        {
                            itemName: "女装LV" + this.data.itemNum2[22], needDes: "※收集类道具", des: "※每级增加25点生命！", button: function () {
                                n.playText("Canvas/notify", "听说集齐18件可以变成女人哦~", 100)
                            }
                        }, 23:
                        {
                            itemName: "创可贴LV" + this.data.itemNum2[23], needDes: "※收集类道具", des: "※每级提高2点前进/探索时生命回复量！", button: function () {
                                n.playText("Canvas/notify", "“老鼠药~蟑螂药~臭脚克星...”", 100)
                            }
                        }, 24:
                        {
                            itemName: "滑稽裤LV" + this.data.itemNum2[24], needDes: "※收集类道具", des: "※每级增加2%逃跑几率！", button: function () {
                                var e = 100 * Math.random();
                                e < 30 ? n.playText("Canvas/notify", "(→_→) (↑_↑) (←_←) (↓_↓)", 100) : e < 60 ? n.playText("Canvas/notify", "(→_→) (←_←)(→_→)(←_←)", 100) : n.playText("Canvas/notify", "(↑_↑) (→_→) (↑_↑) (←_←)", 100)
                            }
                        }, 25:
                        {
                            itemName: "护身符LV" + this.data.itemNum2[25], needDes: "※收集类道具", des: "※战败后，保留" + parseInt(1 + 50 * this.data.itemNum2[25] + .03 * e("scr_public").role.maxHp() * this.data.itemNum2[25]) + "点生命！", button: function () {
                                n.playText("Canvas/notify", "上边似乎画着一个性感的二次元妹子~", 100)
                            }
                        }
                    };
                    return a
                }, creatPrefab: function (e, t) {
                    var n = cc.instantiate(this.itemUI), a = this.itemContent()[e], c = a.button, i = "item" + e;
                    n.name = i, n.getChildByName("button").getChildByName("name").getComponent("cc.Label").string = a.itemName, n.getChildByName("need").getComponent("cc.Label").string = a.needDes, n.getChildByName("des").getComponent("cc.Label").string = a.des, n.getChildByName("button").getChildByName("name").getComponent("cc.Button").scheduleOnce(function () {
                        n.getChildByName("button").getChildByName("name").on("touchstart", c, this)
                    }, .4), cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n), "undefined" != typeof a.ifEnough && a.ifEnough(i)
                }, creatItemUI1: function () {
                    cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
                    for (var e = 0; e <= 3; e++)this.creatPrefab(e, "page_1")
                }, creatItemUI2: function () {
                    cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
                    for (var e = 4; e <= 7; e++)this.creatPrefab(e, "page_2")
                }, creatItemUI3: function () {
                    var t = e("scr_data");
                    if (t.distance >= 100) {
                        cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
                        for (var n = 8; n <= 11; n++)this.creatPrefab(n, "page_3")
                    } else this.creatText(cc.find("Canvas/Page/view/content/page_3"), "notify", "※第3页内容，将在到达县城后解锁！")
                }, creatItemUI4: function () {
                    var t = e("scr_data");
                    if (t.distance >= 100) {
                        cc.find("Canvas/Page/view/content/page_4").removeAllChildren();
                        for (var n = 12; n <= 15; n++)this.creatPrefab(n, "page_4")
                    } else this.creatText(cc.find("Canvas/Page/view/content/page_4"), "notify", "※第4页内容，将在到达县城后解锁！")
                }, creatItemUI5: function () {
                    var t = e("scr_data");
                    if (t.distance >= 100) {
                        cc.find("Canvas/Page/view/content/page_5").removeAllChildren();
                        for (var n = 16; n <= 19; n++)this.creatPrefab(n, "page_5")
                    } else this.creatText(cc.find("Canvas/Page/view/content/page_5"), "notify", "※第5页内容，将在到达县城后解锁！")
                }, creatItemUI6: function () {
                    var t = e("scr_data");
                    if (t.distance >= 100) {
                        cc.find("Canvas/Page/view/content/page_6").removeAllChildren();
                        for (var n = 20; n <= 23; n++)this.creatPrefab(n, "page_6")
                    } else this.creatText(cc.find("Canvas/Page/view/content/page_6"), "notify", "※第6页内容，将在到达县城后解锁！")
                }, creatItemUI7: function () {
                    var t = e("scr_data");
                    if (t.distance >= 100) {
                        cc.find("Canvas/Page/view/content/page_7").removeAllChildren();
                        for (var n = 24; n <= 25; n++)this.creatPrefab(n, "page_7")
                    } else this.creatText(cc.find("Canvas/Page/view/content/page_7"), "notify", "※第7页内容，将在到达县城后解锁！")
                }, delayCreatItemUI: function () {
                    var e = this;
                    this.scheduleOnce(function () {
                        e.creatItemUI1(), e.creatItemUI2()
                    }, .2)
                }, delayCreatItemUI1: function () {
                    this.scheduleOnce(this.creatItemUI1, .2)
                }, delayCreatItemUI2: function () {
                    this.scheduleOnce(this.creatItemUI2, .2)
                }, delayCreatItemUI3: function () {
                    this.scheduleOnce(this.creatItemUI3, .2)
                }, delayCreatItemUI4: function () {
                    this.scheduleOnce(this.creatItemUI4, .2)
                }, delayCreatItemUI5: function () {
                    this.scheduleOnce(this.creatItemUI5, .2)
                }, delayCreatItemUI6: function () {
                    this.scheduleOnce(this.creatItemUI6, .2)
                }, delayCreatItemUI7: function () {
                    this.scheduleOnce(this.creatItemUI7, .2)
                }, onLoad: function () {
                    this.creatItemUI1(), this.creatItemUI2(), this.creatItemUI3(), this.creatItemUI4(), this.creatItemUI5(), this.creatItemUI6(), this.creatItemUI7()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_newGame: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "116b0dQK4RNd6tA1hozVnWG", "scr_newGame"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    JSON.parse(cc.sys.localStorage.getItem("userData")) ? cc.director.loadScene("notice") : cc.director.loadScene("choice")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_notice2: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "5d6b1w/rEpC5bWSm2L4xLZt", "scr_notice2"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var t = cc.find("Canvas/button");
                    cc.find("Canvas/button/button1").on("touchstart", function () {
                        cc.director.loadScene("main")
                    }, this), cc.find("Canvas/button/button2").on("touchstart", function () {
                        cc.director.loadScene("diary")
                    }, this), e("scr_effect").playText("Canvas/text", "系统检测到你还有没用完的精力，你确定要睡觉吗？", 80), t.opacity = 0, this.scheduleOnce(function () {
                        t.runAction(cc.fadeIn(2))
                    }, 2)
                }
            }), cc._RFpop()
        }, { scr_effect: "scr_effect" }], scr_notice: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "8a8f3K8uShD74FI50VPMkWg", "scr_notice"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var t = cc.find("Canvas/button");
                    cc.find("Canvas/button/button1").on("touchstart", function () {
                        cc.sys.localStorage.removeItem("userData"), cc.director.loadScene("choice")
                    }, this), cc.find("Canvas/button/button2").on("touchstart", function () {
                        cc.director.loadScene("start")
                    }, this), e("scr_effect").playText("Canvas/text", "新开会删除旧存档，你确定要新开吗？", 80), t.opacity = 0, this.scheduleOnce(function () {
                        t.runAction(cc.fadeIn(2))
                    }, 2)
                }
            }), cc._RFpop()
        }, { scr_effect: "scr_effect" }], scr_open: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "72e60aF4atJaJ3b2ZL0hIlb", "scr_open"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(3)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 50, a.getComponent(cc.Label).fontSize = 40
                }, onLoad: function () {
                    function e() {
                        a.creatText(i, "plot" + c, n[c]), c++
                    }
                    function t() {
                        var t = {
                            500: function () { e() }, 3500: function () { e() }, 6500: function () { e() }, 9500: function () { e() }, 12500: function () { e() }, 17500: function () { var e = i.children; for (var t in e) e[t].runAction(cc.fadeOut(2)) }, 2e4: function () {
                                window.clearInterval(r), cc.director.loadScene("main")
                            }
                        };
                        s += 500, "undefined" != typeof t[s] && t[s]()
                    }
                    var n = ["昨天，", "和父亲大吵一架后，", "我双手空空的逃了出来。", "我决定离开这个家，", "再也不回去了..."], a = (n.length, this), c = 0, i = cc.find("Canvas/Layout"), o = cc.find("Canvas/skip"), r = window.setInterval(t, 500), s = 0;
                    o.on("touchstart", function () {
                        r && window.clearTimeout(r), cc.director.loadScene("main")
                    }, this), this.scheduleOnce(function () {
                        o.active = !0, o.runAction(cc.fadeTo(3, 60))
                    }, 8)
                }
            }), cc._RFpop()
        }, {}], scr_over2_1: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "62e498iaclK8KXOlDUYWsAs", "scr_over2_1"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(3)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 70, a.getComponent(cc.Label).fontSize = 40
                }, onLoad: function () {
                    function t() {
                        h.creatText(m, "plot" + p, l[p]), console.log(l[p]), p++
                    }
                    function n() {
                        f.active = !0, f.runAction(cc.fadeIn(2))
                    }
                    function a() {
                        JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData"), cc.director.loadScene("start")
                    }
                    function c() {
                        o.initMoney = v, o.dieChoice[3] += 0, r.save2(), a()
                    }
                    function i() {
                        o.dieChoice[3] += 1, r.save2(), cc.director.loadScene("over")
                    }
                    var o = (e("scr_data"), e("scr_data2")), r = e("scr_public"), s = ["很好，", "你可能有点轻微的强迫症，", "但是我还是决定给你一点补偿,", "虽然我认为你接受的可能性只有\n20%，", "但是，你也没办法寄刀片给我\n(｀?ω?′)", "因为我是一个虚拟现实角色！"], l = s;
                    console.log(l);
                    var u = l.length, p = 0, d = 3, m = cc.find("Canvas/Show"), f = cc.find("Canvas/Determine"), h = this, v = Math.min(20 + 10 * o.dieChoice[3], 40);
                    cc.find("Canvas/Determine/choice1/text").getComponent("cc.Label").string = "带着作者给的" + parseInt(v / 10) + "元钱，重新开始", f.active = !1, f.opacity = 0, this.schedule(t, d, u - 1), this.scheduleOnce(n, d * (u + 1)), f.getChildByName("choice1").on("touchstart", c, this), f.getChildByName("choice2").on("touchstart", i, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_public: "scr_public" }], scr_over2: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "aca905dFBlPoYq+iajnsZIA", "scr_over2"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(3)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 60, a.getComponent(cc.Label).fontSize = 40
                }, onLoad: function () {
                    function t() {
                        y.creatText(h, "plot" + m, p[m]), m++
                    }
                    function n() {
                        v.active = !0, v.runAction(cc.fadeIn(2))
                    }
                    function a() {
                        s.health = 30, s.role.hp = l.role.maxHp(), s.hunger = l.maxHunger(), l.save(), cc.director.loadScene("main")
                    }
                    function c() {
                        var e = s.role, t = .04;
                        e.maxHp -= parseInt(l.role.maxHp() * t), e.def -= parseInt(l.role.def() * t), e.att -= parseInt(l.role.att() * t), a()
                    }
                    function i() {
                        s.maxEnergy -= 10, a()
                    }
                    function o() {
                        s.money >= 80 || s.itemNum2[7] >= 8 || s.itemNum2[12] >= 16 ? (s.money >= 80 ? s.money -= 80 : s.itemNum2[7] >= 8 ? s.itemNum2[7] -= 8 : s.itemNum2[12] >= 16 && (s.itemNum2[12] -= 16), a()) : cc.find("Canvas/Determine/choice3/text").getComponent("cc.Label").string = "你怕是一个条件都不满足喔（笑）！"
                    }
                    function r() {
                        cc.director.loadScene("over2_1")
                    }
                    var s = e("scr_data"), l = e("scr_public"), u = ["由于一些人的吐槽，\n(；′⌒`)", "从现在开始，\n→_→", "神一般存在的作者可以将你复活，\n︿(￣︶￣)︿", "但是，你必须放弃一样东西！\n(╬￣皿￣)", "——请做出你的选择！\n(●｀エ′)"], p = u, d = p.length, m = 0, f = 2.5, h = cc.find("Canvas/Show"), v = cc.find("Canvas/Determine"), y = this;
                    v.active = !1, v.opacity = 0, this.schedule(t, f, d - 1), this.scheduleOnce(n, f * (d + 1)), v.getChildByName("choice1").on("touchstart", c, this), v.getChildByName("choice2").on("touchstart", i, this), v.getChildByName("choice3").on("touchstart", o, this), v.getChildByName("choice4").on("touchstart", r, this), 4e3 == l.regionId() && (v.getChildByName("choice4").active = !1)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_public: "scr_public" }], scr_over: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "6d161adbZhGOIo8GmNaz6i6", "scr_over"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(3)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 50, a.getComponent(cc.Label).fontSize = 40
                }, onLoad: function () {
                    function t() {
                        d.creatText(u, "plot" + s, i[s]), s++
                    }
                    function n() {
                        p.active = !0, p.runAction(cc.fadeIn(2))
                    }
                    function a() {
                        JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData"), cc.director.loadScene("start")
                    }
                    var c = [["几天后，", "你在草丛中被人发现，", "全身浮肿，面目全非。", "结局——", "【客死他乡】"], ["几天后，", "你在草丛中被人发现，", "奄奄一息，身上散发着难闻的味道。", "你立刻被送往救助站。", "父亲当晚从老家赶来，", "你的流浪生涯就此结束。", "结局——", "【无奈的人生】"]], i = "", o = e("scr_public").regionId();
                    i = o < 4e3 ? c[0] : c[1];
                    var r = i.length, s = 0, l = 2, u = cc.find("Canvas/Show"), p = cc.find("Canvas/Determine"), d = this;
                    this.schedule(t, l, r - 1), this.scheduleOnce(n, l * (r + 1)), p.on("touchstart", a, this)
                }
            }), cc._RFpop()
        }, { scr_public: "scr_public" }], scr_plot: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "22594SzhLdDFIhFu3G4ZURs", "scr_plot"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.opacity = 0, a.runAction(cc.fadeIn(2)), a.color = new cc.Color(255, 255, 255), a.getComponent(cc.Label).overflow = 3, a.getComponent(cc.Label).horizontalAlign = 1, a.setContentSize(600, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 60, a.getComponent(cc.Label).fontSize = 40
                }, plotData: function () {
                    var t = e("scr_data"), n = e("scr_public"), a = (e("scr_effect"), {
                        0: { text: ["你好，我是本游戏作者，", "你可能现在一脸懵逼。", "我现在要给你两个选项，", "因为我想知道你接下来会怎么处理。", "回到认识晓月之前", "不管她，把我复活，继续赶路"], BGM: "", choice1: function () { }, choice2: function () { } }, 1: {
                            text: ["安静的午后，", "一阵剧烈的尖叫声划破天际，", "我慌忙赶到，", "一个光膀子大汉正将晓月按在身下！", "", "我要杀了他！"], BGM: "", choice1: function () { }, choice2: function () {
                                0 == e("scr_data2").gameData[4] ? (t.skillLv[4] = 0, t.enemyId = 108, t.role.hp = n.role.maxHp(), n.save(), cc.director.loadScene("main")) : cc.director.loadScene("main", function () {
                                    e("scr_data").itemNum2[10] += 1, e("scr_public").save(), e("scr_effect").playText("Canvas/Text/txt_notify", "“美女没摔到吧~”，大汉担心的说道，“这荒郊野外的，走路也不当心点！摔伤倒是小事，你这么漂亮，要是碰到流氓可咋整？这样，我送你一把小刀，留着防身用哈~”。获得【黑刀】*1", 60)
                                })
                            }
                        }, 2: {
                            text: ["你好，欢迎来到小黑屋，", "虽然你可能现在是一脸懵逼", "但是事实就是这么不讲道理——", "如果你无法通过挑战，你就不能拥有晓月", "我要回到认识晓月的前一天，我再试试", "我选择放弃晓月"], BGM: "", choice1: function () {
                                var t = e("scr_data"), a = e("scr_data2");
                                a.gameData[0] += 1, t = JSON.parse(cc.sys.localStorage.getItem("dataCopy")), cc.sys.localStorage.setItem("userData", JSON.stringify(t)), n.save2(), cc.director.loadScene("main")
                            }, choice2: function () {
                                t.health += 999, t.distance += 1, t.enemyId = 0, t.role.hp = n.role.maxHp(), n.save(), cc.director.loadScene("main", function () {
                                    e("scr_data").itemNum[12] += 1, e("scr_public").save(), e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60)
                                })
                            }
                        }, 3: {
                            text: ["“如果你不能给她呵护和未来，", "那么，请放手。”", "“也许，从一开始就选择不认识，才是对她真正的保护”", "回到认识晓月之前", "好吧，我放弃"], BGM: "", choice1: function () {
                                var t = e("scr_data"), a = e("scr_data2");
                                a.gameData[0] += 1, t = JSON.parse(cc.sys.localStorage.getItem("dataCopy")), cc.sys.localStorage.setItem("userData", JSON.stringify(t)), n.save2(), cc.director.loadScene("main", function () {
                                    e("scr_data").itemNum[12] += 1, e("scr_public").save(), e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60)
                                })
                            }, choice2: function () {
                                t.health += 999, t.distance += 1, t.enemyId = 0, t.role.hp = n.role.maxHp(), n.save(), cc.director.loadScene("main", function () {
                                    e("scr_data").itemNum[12] += 1, e("scr_public").save(), e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60)
                                })
                            }
                        }, 4: {
                            text: ["“不是你喜欢，", "所以就应该得到。”", "“你太过偏执，才容易遍体鳞伤”", "作者，我要杀了你", "把我复活"], BGM: "", choice1: function () {
                                t.enemyId = 998, t.health += 999, t.role.hp = n.role.maxHp(), n.save(), cc.director.loadScene("main")
                            }, choice2: function () {
                                t.health += 999, t.distance += 1, t.enemyId = 0, t.role.hp = n.role.maxHp(), n.save(), cc.director.loadScene("main", function () {
                                    e("scr_data").itemNum[12] += 1, e("scr_public").save(), e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60)
                                })
                            }
                        }, 5: {
                            text: ["虽然很不舍，", "但是晓月也需要回家报告平安了...", "摸摸头，道别", "拍拍肩膀，道别"], BGM: "", choice1: function () {
                                t.distance += 1, t.ifFollow[0] = 0, n.save(), cc.director.loadScene("main", function () {
                                    e("scr_effect").playText("Canvas/Text/txt_notify", "晓月依依不舍的离开了", 60)
                                })
                            }, choice2: function () {
                                t.distance += 1, t.choice[5] += 10, t.ifFollow[0] = 0, n.save(), cc.director.loadScene("main", function () {
                                    e("scr_effect").playText("Canvas/Text/txt_notify", "“我还会来找你玩的！( ? ?ω?? )?”", 60)
                                })
                            }
                        }, 98: {
                            text: ["陈碧瑶好感已满足要求，是否邀请碧瑶成为伙伴？（如果碧瑶成为伙伴，其它伙伴将会被顶掉，且无法再邀请其它伙伴；如果你拒绝邀请，以后则不会再有机会邀请碧瑶，请考虑清楚！）", "是", "算了"], BGM: "", choice1: function () {
                                t.ifFollow[0] = 0, t.ifFollow[1] = 1, t.publicVar[8] = 1, n.save(), cc.director.loadScene("home", function () {
                                    e("scr_effect").playText("Canvas/notify", "陈碧瑶成为伙伴！请好好珍惜吧~", 60)
                                })
                            }, choice2: function () {
                                t.publicVar[8] = 1, cc.director.loadScene("home")
                            }
                        }, 99: {
                            text: ["是否邀请晓月成为伙伴？（如果晓月成为伙伴，其它伙伴将会被顶掉，且无法再邀请其它伙伴，请考虑清楚）", "是", "算了"], BGM: "", choice1: function () {
                                t.ifFollow[0] = 1, t.ifFollow[1] = 0, n.save(), cc.director.loadScene("home", function () {
                                    e("scr_effect").playText("Canvas/notify", "晓月成为伙伴！请好好珍惜吧~", 60)
                                })
                            }, choice2: function () {
                                cc.director.loadScene("home")
                            }
                        }, 1001: {
                            text: ["五十年后，在城中村、一间充满恶臭的破旧出租屋内，几名带着消毒面具的消防人员正在清理地上的垃圾。", "房间很小，阴暗而潮湿，墙角堆满了酒瓶和没来得及处理的烟头。", "一位中年消防员拍了拍一个年轻消防员的肩膀责备道，“别看啦，该干活了”。“知道啦。没想到这位奇怪的老人还有这么一段往事啊~”，说完，年轻人把手中发黄的日记本\n丢进了焚烧箱...", "", "...全剧终..."], BGM: "", choice1: function () { }, choice2: function () {
                                cc.director.loadScene("end")
                            }
                        }, 1002: {
                            text: ["一年后，在一座人迹罕至的深山中，一间新建的小木屋旁，淡青色的花朵在清晨的阳光下、轻盈地跳起了舞蹈。", "这是房子的男主人，给一位短发女孩精心修建的小花园。", "他对女孩说，“我们在这里相守一辈子吧~”", "...待续...", "", "本游戏已完结，后续待开发"], BGM: "", choice1: function () { }, choice2: function () {
                                cc.director.loadScene("end")
                            }
                        }, 1003: {
                            text: ["半年后，冬日的夜幕悄悄降临；在一所大学门口，嬉笑的学生三三两两的走出校门。", "橘黄色的路灯下，一个穿着破旧军大衣的男孩、安静的等在门口，丝毫不在意旁人异样的眼光。", "不一会儿，一个干干净净、梳着单马尾的女孩，焦急的跑出校门，她停在男孩旁边，微笑着拉起他的手，一起消失在寒冬的夜幕中...", "...全剧终...", "", "本游戏已完结，后续待定..."], BGM: "", choice1: function () { }, choice2: function () {
                                cc.director.loadScene("end")
                            }
                        }
                    });
                    return a
                }, startPlot: function () {
                    function t() {
                        this.creatText(m, "plot" + p, r[p]), p++
                    }
                    function n() {
                        var e = o.choice1, t = o.choice2, n = cc.find("Canvas/Choice/Choice1"), a = cc.find("Canvas/Choice/Choice2");
                        n.getChildByName("choiceText").getComponent("cc.Label").string = l, a.getChildByName("choiceText").getComponent("cc.Label").string = s, "" == l && (n.active = !1, cc.find("Canvas/Choice/label").active = !1), cc.find("Canvas/Choice").runAction(cc.fadeIn(2)), n.on("touchstart", e, this), a.on("touchstart", t, this)
                    }
                    function a() {
                        var e = cc.find("Canvas/Choice");
                        e.stopAllActions(), e.opacity = 0, cc.find("Canvas/EventText").removeAllChildren(), e.getChildByName("Choice1").targetOff(this), e.getChildByName("Choice2").targetOff(this)
                    }
                    var c = e("scr_data"), i = (e("scr_public"), this.plotId || c.plotId), o = this.plotData()[i], r = o.text, s = r.pop(), l = r.pop(), u = r.length, p = 0, d = 2.5, m = cc.find("Canvas/EventText");
                    a(), this.schedule(t, d, u - 1), this.scheduleOnce(n, d * (u + 1))
                }, onLoad: function () {
                    this.startPlot()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_public: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "4bdd0LrXWhLypzYw/KwkeQ9", "scr_public"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var n = {
                        itemName: ["果子", "木材", "易拉罐", "生肉", "亚麻", "艾草", "烟草", "烟头", "黑曜石", "火狐皮", "50ml啤酒", "白色粉末", "眼泪"], itemName2: ["熟肉", "伤药", "帐篷", "木棍", "麻布衣", "陷阱", "驱蚊工具", "香烟", "匕首", "皮衣", "黑刀", "红夹克", "啤酒", "┑(=^ω^=)┑", "子弹", "晓风披肩", "漂亮石头", "放大镜", "装避鞋", "枪", "板砖", "小裤裤", "女装", "创口贴", "滑稽裤", "护身符", "幸运石", "晓月手链"], ifNotify: !1, init: function () { var t = cc.find("Canvas/Text"), n = e("scr_data"); t.getChildByName("txt_day").getComponent("cc.Label").string = this.regionName() + n.day + "天", t.getChildByName("txt_energy").getComponent("cc.Label").string = n.energy + "/" + this.maxEnergy(), t.getChildByName("txt_hunger").getComponent("cc.Label").string = n.hunger + "/" + this.maxHunger(), t.getChildByName("txt_health").getComponent("cc.Label").string = "健康  " + n.health, t.getChildByName("txt_hp").getComponent("cc.Label").string = "生命  " + n.role.hp + "/" + this.role.maxHp(), t.getChildByName("txt_att").getComponent("cc.Label").string = "攻击  " + this.role.att(), t.getChildByName("txt_def").getComponent("cc.Label").string = "防御  " + this.role.def(), t.getChildByName("txt_money").getComponent("cc.Label").string = "金钱  " + (n.money / 10).toFixed(1), t.getChildByName("txt_distance").getComponent("cc.Label").string = "离家  " + n.distance + "km", t.getChildByName("txt_item1").getComponent("cc.Label").string = "伤药  " + n.itemNum2[1], t.getChildByName("txt_item2").getComponent("cc.Label").string = "食物  " + n.itemNum[0] + "+" + n.itemNum2[0], this.mainUITextColor(), this.buttonState(), this.showPlace() }, mainUITextColor: function () { var t = e("scr_data"), n = cc.find("Canvas/Button"), a = ""; t.hunger <= 0 && (a += "【饥饿】"), t.skillLv[4] >= 1 && (a += "【烟瘾】"), t.buffState[0] >= 1 && (a += "【暴躁】"), n.getChildByName("txt_state").getComponent("cc.Label").string = a }, showPlace: function () {
                            var t = e("scr_data");
                            if (300 == t.distance) {
                                var n = cc.find("Canvas/Button/txt_place").getComponent("cc.Label");
                                0 == t.publicVar[13] ? n.string = "「城中村」" : 1 == t.publicVar[13] ? n.string = "「郊外」" : 2 == t.publicVar[13] ? n.string = "「市中心」" : 3 == t.publicVar[13] && (n.string = "「山洞" + t.publicVar3[1] + "米」")
                            }
                        }, buttonState: function () { var t = e("scr_data"), n = cc.find("Canvas/Button"), a = n.getChildByName("button_forward"), c = n.getChildByName("button_shop"), i = n.getChildByName("button_explore"); t.button[0] ? a.active = !0 : a.active = !1, t.button[1] && 0 == t.publicVar3[3] ? c.active = !0 : c.active = !1, t.button[2] ? i.active = !0 : i.active = !1 }, save: function () { var t = e("scr_data"); cc.sys.localStorage.setItem("userData", JSON.stringify(t)) }, save2: function () { var t = e("scr_data2"); cc.sys.localStorage.setItem("data2", JSON.stringify(t)) }, saveCopy: function () { var t = e("scr_dataCopy"); cc.sys.localStorage.setItem("dataCopy", JSON.stringify(t)) }, creatText: function (e, t, n, a, c, i) { var o = new cc.Node(t); o.addComponent(cc.Label); o.parent = e, o.setPosition(n, a), o.setContentSize(600, 300), o.setAnchorPoint(.5, .5), o.getComponent(cc.Label).overflow = 3, o.getComponent(cc.Label).string = c, o.getComponent(cc.Label).lineHeight = 60, o.getComponent(cc.Label).fontSize = 40 }, role: {
                            maxHp: function a() { var t = e("scr_data"), a = t.role.maxHp + 50 * t.itemNum2[4] + 150 * t.itemNum2[11] + 50 * t.skillLv[2] + 100 * t.skillLv[15] + 150 * t.skillLv[19] + 25 * t.itemNum2[22] + t.publicVar3[16]; return a = Math.round(a * (1 + t.publicVar[15] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100)) }, att: function c() { var t = e("scr_data"), n = 1; 1 == t.publicVar && (n = 1); var c = t.role.att + 10 * t.itemNum2[3] + 20 * t.itemNum2[8] + 30 * t.itemNum2[10] + 10 * t.skillLv[11] + 20 * t.skillLv[18] + 30 * t.skillLv[22] + 5 * t.itemNum2[20] + t.publicVar3[4]; return "undefined" != typeof t.ifFollow[0] && 1 == t.ifFollow[0] && (c += parseInt(t.choice[5] / 4 + 10)), c = Math.round(c * (1 - t.skillLv[4] * n) * (1 + t.publicVar[17] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100)) }, def: function i() {
                                var t = e("scr_data"), n = 1;
                                1 == t.publicVar && (n = 1);
                                var i = t.role.def + 10 * t.itemNum2[9] + 15 * t.itemNum2[11] + 10 * t.skillLv[8] + 20 * t.skillLv[16] + 30 * t.skillLv[20] + 5 * t.itemNum2[21] + t.publicVar3[10];
                                return i = Math.round(i * (1 - t.skillLv[4] * n) * (1 + t.publicVar[16] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100))
                            }
                        }, ifMaxHp: function () { var t = e("scr_data"), n = this.role.maxHp(); t.role.hp > n && (t.role.hp = n) }, creatNode: function () {
                            var e = this, t = "button1"; cc.loader.loadRes(t, cc.SpriteFrame, function (t, n) {
                                var a = new cc.Node("NewSprite"), c = a.addComponent(cc.Sprite);
                                c.spriteFrame = n, a.parent = e.node
                            })
                        }, regionId: function () { var t = 0, n = e("scr_data"), a = [100, 300], c = n.distance; return c < a[0] && (t = 1e3), c == a[0] && (t = 2e3), c > a[0] && c < a[1] && (t = 3e3), c == a[1] && (t = 4e3), t }, regionName: function () { var t = 0, n = e("scr_data"), a = [100, 300], c = n.distance; return c < a[0] && (t = "荒野."), c == a[0] && (t = "县城."), c > a[0] && c < a[1] && (t = "山脉."), c == a[1] && (t = "省城."), t }, maxEnergy: function o() { var t = e("scr_data"), n = t.skillLv, o = t.maxEnergy + 10 * n[1] + 20 * n[7] + 30 * n[12] + 10 * t.itemNum2[2] + t.friendSkill1[1] * t.ifFollow[0] * 20 + 10 * t.publicVar[18]; return o }, maxHunger: function r() { var t = e("scr_data"), n = t.skillLv, r = t.maxHunger + 50 * n[13]; return r }, autoEat: function () {
                            function t() {
                                var e = 100 * Math.random();
                                e < 15 && (n.health += 1)
                            } var n = e("scr_data"); return n.hunger <= 0 && (n.itemNum[0] >= 1 ? (n.itemNum[0] -= 1, n.orderTimes[5] += 1, n.hunger += 20, t(), this.save(), !0) : !(n.itemNum2[0] >= 1) || (n.itemNum2[0] -= 1, n.orderTimes[2] += 1, n.hunger += 70, this.save(), !0))
                        }, playBGM: function (e) { cc.audioEngine.stopAll(); var t = cc.game._persistRootNodes; for (var n in t) var a = t[n].getComponent("scr_BGM")[e]; cc.audioEngine.play(a, !1, 1) }, ifGameOver: function () {
                            if (e("scr_data").health <= 0) {
                                var t = this.regionId();
                                1e3 == t && cc.director.loadScene("over"), t > 1e3 && cc.director.loadScene("over2")
                            }
                        }, showText: function (e, t, n, a) { var c = new cc.Node(t); c.addComponent(cc.Label); c.parent = e, c.setPosition(0, 0), c.opacity = 0, c.runAction(cc.fadeIn(3)), c.color = new cc.Color(255, 255, 255), c.getComponent(cc.Label).overflow = 3, c.getComponent(cc.Label).horizontalAlign = 1, c.setContentSize(600, 300), c.getComponent(cc.Label).string = n, c.getComponent(cc.Label).lineHeight = a || 40, c.getComponent(cc.Label).fontSize = 40 }, showText2: function (e, t, n, a) {
                            var c = new cc.Node(t);
                            c.addComponent(cc.Label);
                            c.parent = e, c.setPosition(0, 0), c.color = new cc.Color(115, 115, 115), c.getComponent(cc.Label).overflow = 3, c.setContentSize(630, 300), c.getComponent(cc.Label).string = n, c.getComponent(cc.Label).lineHeight = a, c.getComponent(cc.Label).fontSize = 32
                        }
                    };
                    t.exports = n
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_dataCopy: "scr_dataCopy" }], scr_quitGame: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "b8981TVaLZEQZriw0Ikoosd", "scr_quitGame"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var e = this;
                    cc.eventManager.addListener({
                        event: cc.EventListener.KEYBOARD, onKeyPressed: function (e, t) {
                            e === cc.KEY.back && cc.director.end()
                        }
                    }, e.node)
                }
            }), cc._RFpop()
        }, {}], scr_readConfession: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "edbeey5ue9CDZU2M2ziBjld", "scr_readConfession"), cc.Class({
                "extends": cc.Component, properties: {}, read: function () {
                    var t = ["1111111", "我是个失败的人", "aaa", "bbb", "ccc"], n = e("scr_effect"), a = e("scr_data").achieve, c = Math.random(), i = t.length, o = parseInt(a / 100);
                    o > i - 5 && (o = i - 5);
                    var r = Math.round(4 * Math.random() + o);
                    c > .5 ? n.playText("Canvas/Text/txt_confession", "我该做点什么呢？", 120) : n.playText("Canvas/Text/txt_confession", t[r], 120)
                }, onLoad: function () {
                    this.schedule(this.read, 30)
                }
            }), cc._RFpop();
        }, { scr_data: "scr_data", scr_effect: "scr_effect" }], scr_restDetermine: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "64f6f/B7StMlZJx3Vgs0Rn/", "scr_restDetermine"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("event")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_rest: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "6fbc4dkoxJCWoP/GvoxW/9l", "scr_rest"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t) {
                    var n = new cc.Node(e);
                    n.addComponent(cc.Label);
                    n.parent = cc.find("Canvas/SkillShow"), n.setPosition(0, 0), n.color = new cc.Color(255, 255, 255), n.getComponent(cc.Label).overflow = 3, n.getComponent(cc.Label).horizontalAlign = 0, n.setContentSize(600, 300), n.getComponent(cc.Label).string = t, n.getComponent(cc.Label).lineHeight = 60, n.getComponent(cc.Label).fontSize = 40
                }, restMain: function () {
                    function t() {
                        S.publicVar2[20] = parseInt(100 * Math.random() - 40), S.publicVar[14] = parseInt(50 * Math.random()), S.publicVar3[4] = 0, S.publicVar3[9] = 0, S.publicVar3[10] = 0, S.publicVar3[11] = 0, S.publicVar3[16] = 0, S.publicVar3[17] = 0, S.publicVar3[18] = 0, 0 == S.publicVar3[2] ? S.publicVar[13] = 0 : S.publicVar[13] = 1, S.publicVar3[15] = 0, S.plotId = 0
                    }
                    function n() {
                        S.day += 1, cc.find("Canvas/Day").getComponent("cc.Label").string = "第" + S.day + "天"
                    }
                    function a() {
                        var e = 3 * S.orderTimes[1] - S.orderTimes[4], t = 100 * Math.random();
                        1 == S.publicVar[1] && (e = S.orderTimes[1] - S.orderTimes[4]), t < e ? (S.publicVar2[8] += 1, S.skillLv[4] = 1, w.creatText("smoke", "【烟瘾】发作！")) : S.skillLv[4] = 0
                    }
                    function c() {
                        var e = (cc.find("Canvas/energy/text"), 0), t = H.maxEnergy();
                        S.energy += t, S.energy > t && (S.energy = t), _() && (e = 20, S.energy += e), cc.find("Canvas/AttrShow/energy/text").getComponent("cc.Label").string = "精力 +" + (t + e) + "（" + S.energy + "/" + t + "）"
                    }
                    function i() {
                        var e = 20;
                        100 * Math.random();
                        S.hunger <= 0 && (e = 0), S.hunger -= e, cc.find("Canvas/AttrShow/hunger/text").getComponent("cc.Label").string = "饥饿 -" + e + "（" + S.hunger + "/" + H.maxHunger() + "）"
                    }
                    function o() {
                        if (S.itemNum2[6] > 0) {
                            var e = 30 * S.itemNum2[6];
                            H.role.maxHp();
                            _() && (e = 2 * e), S.role.hp += e, H.ifMaxHp(), cc.find("Canvas/AttrShow/hp/text").getComponent("cc.Label").string = "生命 +" + e + "（" + S.role.hp + "/" + H.role.maxHp() + "）"
                        } else cc.find("Canvas/AttrShow/hp").active = !1
                    }
                    function r() {
                        var e = H.regionId();
                        1e3 == e && (S.stayDay[0] += 1), 2e3 == e && (S.stayDay[1] += 1), 3e3 == e && (S.stayDay[2] += 1), 4e3 == e && (S.stayDay[3] += 1)
                    }
                    function s() {
                        var e = 100 * Math.random();
                        if (e < 20) {
                            var t = l();
                            0 != t && (S.enemyId = t)
                        }
                    }
                    function l() {
                        function e() {
                            var e = S.randomEvent[4], t = [700, 701, 702, 703, 704, 705, 0];
                            a = t[e]
                        }
                        var t = 100 * Math.random(), n = H.regionId(), a = 800, c = 10 * (S.itemNum2[19] - 1) + 1;
                        if (t < 70) {
                            var i = S.randomEvent[3], o = [800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 881, 882, 0];
                            a = o[i]
                        } else if (4e3 == n) {
                            var i = S.randomEvent[3], o = [800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 881, 882, 0];
                            a = o[i]
                        } else e();
                        return S.day >= 21 && 1e3 == n && (a = 997), S.day >= 83 && 3e3 == n && (a = 996), t < c && (a = 900003), S.day >= 178 && (a = 0), a
                    }
                    function u() {
                        p()
                    }
                    function p() {
                        100 == S.distance && S.stayDay[1] >= 23 && (S.button[0] = !0, S.button[1] = !0)
                    }
                    function d() {
                        f(), h(), v(), y(), g(), b(), m(), x(), E(), I(), V(), N(), T(), k()
                    }
                    function m() {
                        var e = 100 * Math.random(), t = S.publicVar[0] / 3;
                        e < t && (S.energy -= parseInt(.5 * S.energy), w.creatText("hunger", "【失眠】精力-50%！"))
                    }
                    function f() {
                        S.hunger <= 0 && (S.health -= 2, w.creatText("hunger", "【饥饿】健康值降低2点！"))
                    }
                    function h() {
                        var e = 100 * Math.random(), t = S.itemNum2[5];
                        if (S.itemNum2[5] > 0 && e < 30) {
                            var n = 100 * Math.random();
                            if (n <= 20) return S.itemNum[3] += t, w.creatText("skill1", "【陷阱】获得「生肉」*" + t), !0;
                            if (n > 20 && n <= 40) return S.itemNum[5] += t, w.creatText("skill1", "【陷阱】获得「艾草」*" + t), !0;
                            if (n > 40 && n <= 60) return S.itemNum[0] += t, w.creatText("skill1", "【陷阱】获得「果子」*" + t), !0;
                            if (n > 60 && n <= 80) return S.itemNum[1] += t, w.creatText("skill1", "【陷阱】获得「木材」*" + t), !0;
                            if (n > 80) return S.itemNum[4] += t, w.creatText("skill1", "【陷阱】获得「亚麻」*" + t), !0
                        }
                    }
                    function v() {
                        if (R[10] > 0) {
                            var e = 100 * Math.random();
                            if (e < 40) {
                                var t = R[10];
                                _() && (t = 2 * t), S.health += t, w.creatText("skill2", "【自愈】健康值+" + t)
                            }
                        }
                    }
                    function y() {
                        var e = 100 * Math.random();
                        if (R[6] > 0 && e < 40) {
                            var t = R[6] + parseInt(S.randomEvent[6] / 10);
                            S.money += t, w.creatText("skill3", "【捡钱】获得" + (t / 10).toFixed(1) + "元")
                        }
                    }
                    function g() {
                        var e = S.itemNum2[13];
                        if (e > 0) {
                            var t = 1 * e;
                            S.money += t, w.creatText("getMoney", "【┑(=^ω^=)┑】获得" + (t / 10).toFixed(1) + "元")
                        }
                    }
                    function b() {
                        var e = 100 * Math.random();
                        S.skillLv[26] > 0 && e < 30 && (S.energy += parseInt(.3 * H.maxEnergy()), w.creatText("spirit", "【不屈的精神力】额外恢复30%精力！"))
                    }
                    function _() {
                        return 1 == S.ifFollow[0] && 1 == S.friendSkill1[4]
                    }
                    function x() {
                        1 == S.ifFollow[0] && 0 == S.publicVar[2] && (S.publicVar2[10] += 1, S.choice[5] -= 1, w.creatText("ifEat", "【不开森】晓月好感-1（哼！）")), S.publicVar[2] = 0
                    }
                    function C() {
                        if (9 == S.stayDay[2]) {
                            var t = e("scr_dataCopy");
                            t = JSON.parse(cc.sys.localStorage.getItem("userData")), cc.sys.localStorage.setItem("dataCopy", JSON.stringify(t))
                        }
                    }
                    function E() {
                        if (S.publicVar2[17] > 0) {
                            var e = 10 * Math.random() + 1;
                            S.publicVar2[18] += e
                        }
                    }
                    function I() {
                        if (S.publicVar2[17] > 0 && S.itemNum2[16] > 0) {
                            var e = S.itemNum2[16], t = 2 * e, n = parseInt(t * S.publicVar2[21] / 10), a = Math.max(parseInt(t - n + 7 - S.publicVar2[21] + 3), 0);
                            S.money += n, S.publicVar2[18] += t - n, S.itemNum2[16] = 0, S.publicVar[7] += a, w.creatText("sell", "【出售】漂亮石头" + e + "个，总售额" + (t / 10).toFixed(1) + "元，你分到" + (n / 10).toFixed(1) + "元！碧瑶好感+" + a)
                        }
                    }
                    function V() {
                        if (1 == S.ifFollow[1] && S.friendSkill[2] > 0) {
                            var e = 100 * Math.random(), t = Math.max(parseInt(S.publicVar[7] / 15 + 25), 25);
                            if (e < t) {
                                var n = parseInt(.02 * S.publicVar2[18]);
                                S.publicVar2[18] -= n, S.money += n, w.creatText("sell", "【爱心】碧瑶给了你" + (n / 10).toFixed(1) + "元零钱！")
                            }
                        }
                    }
                    function N() {
                        if (1 == S.ifFollow[1] && S.friendSkill[7]) {
                            var e = 100 * Math.random(), t = Math.max(parseInt(S.publicVar[7] / 10 + 20), 20);
                            e < t && (S.orderTimes[4] += 1, w.creatText("reduceSmoke", "【监督】烟瘾降低1%！"))
                        }
                    }
                    function T() {
                        if (S.publicVar3[5] > 0) {
                            var e = parseInt(.2 * S.publicVar3[5] + 1);
                            S.publicVar3[5] -= e, S.publicVar3[5] < 0 && (S.publicVar3[5] = 0), w.creatText("gameBuff", "【兴奋消退】玩游戏获得的属性加成效果消退" + e + "%，还剩下" + S.publicVar3[5] + "%")
                        }
                    }
                    function k() {
                        S.stayDay[3] > 3 && (S.publicVar3[7] += parseInt(15 * Math.random() + 5), S.publicVar3[8] += 1)
                    }
                    var S = e("scr_data"), H = e("scr_public"), R = S.skillLv, w = this;
                    t(), n(), H.autoEat(), a(), c(), o(), r(), s(), u(), d(), i(), C(), H.save()
                }, onLoad: function () {
                    function t() {
                        var e = ["Canvas/AttrShow", "Canvas/SkillShow", "Canvas/Determine"]; "Canvas/Determine"
                            == e[n] && (cc.find("Canvas/Determine").active = !0), cc.find(e[n]).runAction(cc.fadeIn(1)), n++
                    }
                    var n = 0, a = (e("scr_data"), 1);
                    this.restMain(), cc.find("Canvas/Day").runAction(cc.fadeIn(1)), this.schedule(t, a, 2), e("scr_public").save()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_dataCopy: "scr_dataCopy", scr_public: "scr_public" }], scr_shop2: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "83a81yV4XxNdIIu5OySpYvE", "scr_shop2"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function t() {
                        cc.find("Canvas/money").getComponent("cc.Label").string = "白色粉末：" + u.itemNum[11] + " / 金钱:" + (u.money / 10).toFixed(1), cc.find("Canvas/UI1/choice5/text").getComponent("cc.Label").string = "枪（需" + (10 + 10 * u.itemNum2[19]) + "个白色粉末）", cc.find("Canvas/UI1/choice7/text").getComponent("cc.Label").string = "出售所有漂亮石头（每个1毛，已有" + u.itemNum2[16] + "个）"
                    }
                    function n() {
                        f.on("touchstart", a, this), h.on("touchstart", c, this), v.on("touchstart", i, this), y.on("touchstart", o, this), g.on("touchstart", r, this), b.on("touchstart", s, this), _.on("touchstart", l, this)
                    }
                    function a() {
                        u.itemNum[11] >= 1 ? (u.itemNum[11] -= 1, u.money += 10, d.save(), p.playText("Canvas/notify", "获得1元！", 60), t()) : p.playText("Canvas/notify", "白色粉末不足！", 60)
                    }
                    function c() {
                        u.itemNum[11] >= 4 && 0 == u.publicVar2[29] ? (u.itemNum[11] -= 4, u.publicVar2[29] = 1, p.playText("Canvas/notify", "获得《少妇白洁》！请到看书界面使用。", 60), t()) : u.itemNum[11] < 4 ? p.playText("Canvas/notify", "白色粉末不足！", 60) : p.playText("Canvas/notify", "你已拥有此书！", 60)
                    }
                    function i() {
                        u.money >= 60 && 0 == u.publicVar2[23] ? (u.money -= 60, u.publicVar2[23] = 1, p.playText("Canvas/notify", "获得《搬砖，从入门到放弃》！请到看书界面使用。", 60), t()) : u.money < 60 ? p.playText("Canvas/notify", "金钱不足！", 60) : p.playText("Canvas/notify", "你已拥有此书！", 60)
                    }
                    function o() {
                        u.money >= 60 && 0 == u.publicVar2[26] ? (u.money -= 60, u.publicVar2[26] = 1, p.playText("Canvas/notify", "获得《中国居民膳食指南1997版》！请到看书界面使用。", 60), t()) : u.money < 60 ? p.playText("Canvas/notify", "金钱不足！", 60) : p.playText("Canvas/notify", "你已拥有此书！", 60)
                    }
                    function r() {
                        var e = 10 + 10 * u.itemNum2[19];
                        u.itemNum[11] >= e ? (u.itemNum[11] -= e, u.itemNum2[19] += 1, p.playText("Canvas/notify", "获得「枪」！", 60), t()) : p.playText("Canvas/notify", "白色粉末不足！", 60)
                    }
                    function s() {
                        u.money >= 5 ? (u.money -= 5, u.itemNum2[14] += 1, p.playText("Canvas/notify", "获得「子弹」*1", 60), t()) : p.playText("Canvas/notify", "钱不够！", 60)
                    }
                    function l() {
                        if (u.itemNum2[16] > 0) {
                            var e = u.itemNum2[16];
                            u.money += e, u.itemNum2[16] -= e, p.playText("Canvas/notify", "出售「漂亮石头」*" + e + "，获得" + (e / 10).toFixed(1) + "元！", 60), t()
                        } else p.playText("Canvas/notify", "你身上没有漂亮石头~", 60)
                    }
                    var u = e("scr_data"), p = e("scr_effect"), d = e("scr_public"), m = cc.find("Canvas/UI1"), f = m.getChildByName("choice1"), h = m.getChildByName("choice2"), v = m.getChildByName("choice3"), y = m.getChildByName("choice4"), g = m.getChildByName("choice5"), b = m.getChildByName("choice6"), _ = m.getChildByName("choice7");
                    t(), n()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_shop3: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "bddbc1AxUZNv63YXc4kCfkQ", "scr_shop3"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function t() {
                        I.getChildByName("back").on("touchstart", function () {
                            e("scr_public").save(), cc.director.loadScene("main")
                        }, this), _.r1 < R[0] ? N.on("touchstart", r, N) : N.on("touchstart", m, N), _.r2 < R[1] ? T.on("touchstart", s, T) : T.on("touchstart", m, T), _.r3 < R[2] ? k.on("touchstart", c, k) : k.on("touchstart", m, k), _.r4 < R[3] ? S.on("touchstart", a, S) : S.on("touchstart", m, S), x.publicVar3[7] > 800 ? H.on("touchstart", d, H) : _.r5 < R[4] ? H.on("touchstart", f, H) : H.on("touchstart", n, H), V.getChildByName("choice1").on("touchstart", i, this), V.getChildByName("choice2").on("touchstart", o, this), V.getChildByName("back").on("touchstart", function () {
                            y(), v()
                        }, this)
                    }
                    function n() {
                        if (_.cureTimes >= 3) C.playText("Canvas/notify", "“啊哈哈哈哈哈~有些累了...下次再来哈~”", 60);
                        else if (x.money >= 10) {
                            var e = Math.max(100 - x.publicVar3[8], 0), t = 100 * Math.random();
                            x.publicVar3[7] -= 10, _.cureTimes += 1, x.money -= 10, t < e ? (x.orderTimes[4] += 1, C.playText("Canvas/notify", "电疗成功！烟瘾减少1%，电疗店总资产+1元", 60)) : (x.health -= 1, C.playText("Canvas/notify", "电疗失败...健康减1点...电疗店总资产+1元", 60)), u()
                        } else C.playText("Canvas/notify", "没钱！", 60)
                    }
                    function a() {
                        if (_.gameTime2 - _.gameTime1 > 30) C.playText("Canvas/notify", "“小兄弟，没身份证的人只能临时上机两小时哦，我怕警察来查，请下次再玩吧~”", 60);
                        else if (20 == x.publicVar3[6]) x.money += 1, x.publicVar3[6] += 1, C.playText("Canvas/notify", "你玩游戏的热情让网吧老板很是感动，老板鼓励你坚持梦想，并奖励你0.1元，~", 60);
                        else if (50 == x.publicVar3[6]) x.money += 5, x.publicVar3[6] += 1, C.playText("Canvas/notify", "你成功晋级青铜段位，老板流出喜悦的泪水，并奖励你0.5元~", 60);
                        else if (90 == x.publicVar3[6]) x.hunger = E.maxHunger(), x.publicVar3[6] += 1, C.playText("Canvas/notify", "你成功晋级白银段位，老板高兴的请你吃了一顿麻辣烫，饥饿全恢复！", 60);
                        else if (140 == x.publicVar3[6]) x.money += 20, x.itemNum2[25] += 1, x.publicVar3[6] += 1, u(), C.playText("Canvas/notify", "你成功晋级黄金段位，老板奖励你2元钱，和一件个护身符~", 60);
                        else if (200 == x.publicVar3[6]) x.itemNum2[21] += 1, x.itemNum2[22] += 1, x.publicVar3[6] += 1, C.playText("Canvas/notify", "你成功晋级白金段位，老板赠送你她的贴身衣物，获得【女装】*1和【小裤裤】*1！", 60);
                        else if (300 == x.publicVar3[6]) x.hunger = E.maxHunger(), x.publicVar3[6] += 1, u(), C.playText("Canvas/notify", "你成功晋级砖石段位，老板兴奋的邀你去她房里睡一觉，精力全恢复！", 60);
                        else if (450 == x.publicVar3[6]) x.itemNum2[17] += 1, x.itemNum2[26] += 1, x.itemNum2[27] += 1, x.publicVar3[6] += 1, C.playText("Canvas/notify", "你成功晋级大师段位，老板赠送你一些收集品，获得【晓月手链】*1【幸运石】*1【放大镜】*1！", 60);
                        else if (700 == x.publicVar3[6]) x.role.att += 50, x.role.def += 25, x.role.maxHp += 250, x.publicVar3[6] += 1, E.save(), C.playText("Canvas/notify", "你成功晋级王者段位，老板授予你「王的男人」称号，攻击永久+50，防御永久+25，生命永久+250！", 60);
                        else if (x.money >= 1) {
                            var e = Math.min((40 + x.publicVar3[6] / 10).toFixed(1), 75), t = 100 * Math.random();
                            x.money -= 1, t < e ? (x.publicVar3[5] < 99 && (x.publicVar3[5] += 1), x.publicVar3[6] += 1, _.gameTime2 += 1, C.playText("Canvas/notify", "游戏胜利！炒开森~攻防血提高1%（临时效果，随天数缓慢衰减）。游戏技术+1", 60), u()) : (x.publicVar3[5] = 0, x.publicVar3[6] += 1, _.gameTime2 += 1, C.playText("Canvas/notify", "游戏失败！不开心~属性加成消失...游戏技术+1", 60), u())
                        } else C.playText("Canvas/notify", "没钱...", 60)
                    }
                    function c() {
                        h(), g()
                    }
                    function i() {
                        x.hunger > E.maxHunger() ? C.playText("Canvas/notify", "已经吃不下啦...", 60) : x.itemNum[3] >= 4 && x.itemNum[0] >= 5 ? (x.hunger += 350, x.maxHunger += 5, x.itemNum[3] -= 4, x.itemNum[0] -= 5, x.publicVar3[13] += 1, C.playText("Canvas/notify", "饥饿+350，最大饥饿值提高5点！", 60), u()) : C.playText("Canvas/notify", "食材不足~", 60)
                    }
                    function o() {
                        x.hunger > E.maxHunger() ? C.playText("Canvas/notify", "已经吃不下啦...", 60) : x.itemNum[0] >= 5 ? (x.hunger += 100, x.health += 1, x.itemNum[0] -= 5, C.playText("Canvas/notify", "饥饿+100，健康值+1！", 60), u()) : C.playText("Canvas/notify", "食材不足~", 60)
                    }
                    function r() {
                        var e = 100 * Math.random();
                        if (0 == _.makeMoneyRate) C.playText("Canvas/notify", "“今日已投资，请明日再来吧~”", 60);
                        else if (0 == x.money) C.playText("Canvas/notify", "“不好意思，请你出去~”", 60);
                        else if (x.money > 500) C.playText("Canvas/notify", "“不好意思，你已超过国家监管限定金额，请你去实体银行吧，我们只是网上的小银行~”", 60);
                        else if (e < _.makeMoneyRate) {
                            var t = parseInt(x.money * _.makeMoneyProfit / 100);
                            x.money += t, C.playText("Canvas/notify", "投资成功！金钱增加" + _.makeMoneyProfit + "%(+" + (t / 10).toFixed(1) + ")", 60), _.makeMoneyRate = 0, u()
                        } else {
                            var t = parseInt(x.money * _.makeMoneyProfit / 100);
                            x.money -= t, C.playText("Canvas/notify", "投资失败...金钱缩水" + _.makeMoneyProfit + "%(-" + (t / 10).toFixed(1) + ")", 60), _.makeMoneyRate = 0, u()
                        }
                    }
                    function s() {
                        if (_.itemDiscount >= 9999) C.playText("Canvas/notify", "商品已售罄~", 60);
                        else if (x.money >= _.finalPrice) {
                            var e = w[_.itemId][1], t = w[_.itemId][2];
                            x.money -= _.finalPrice, x.itemNum2[e] += t, C.playText("Canvas/notify", "获得【" + _.itemName + "】*" + t, 60), _.itemDiscount = 9999, u(), l()
                        } else C.playText("Canvas/notify", "金钱不足！", 60)
                    }
                    function l() {
                        _.itemDiscount >= 9999 ? T.getChildByName("text").getComponent("cc.Label").string = "二楼：晓风服饰（已售罄~）" : _.r2 < R[1] ? T.getChildByName("text").getComponent("cc.Label").string = "二楼：晓风服饰（" + _.itemName + "," + _.itemDiscount + "折," + (_.finalPrice / 10).toFixed(1) + "元）" : T.getChildByName("text").getComponent("cc.Label").string = "？？？？（放假中...）"
                    }
                    function u() {
                        _.r1 < R[0] ? N.getChildByName("text").getComponent("cc.Label").string = "一楼：晓风金融（赢钱概率" + _.makeMoneyRate + "%）" : N.getChildByName("text").getComponent("cc.Label").string = "？？？？（放假中...）", _.r4 < R[3] ? S.getChildByName("text").getComponent("cc.Label").string = "四楼：晓风网咖（属性+" + x.publicVar3[5] + "%,胜率" + Math.min((40 + x.publicVar3[6] / 10).toFixed(1), 75) + "%）" : S.getChildByName("text").getComponent("cc.Label").string = "？？？？（放假中...）", cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "饥饿 " + x.hunger + "/" + E.maxHunger(), cc.find("Canvas/money").getComponent("cc.Label").string = "金钱 " + (x.money / 10).toFixed(1), x.publicVar3[7] > 800 ? H.getChildByName("text").getComponent("cc.Label").string = "关门大吉！转行啦~" : _.r5 < R[4] ? H.getChildByName("text").getComponent("cc.Label").string = "？？？？（心情不好，外出旅游啦~）" : H.getChildByName("text").getComponent("cc.Label").string = "五楼：小风电疗（资产" + ((800 - x.publicVar3[7]) / 10).toFixed(1) + "元,成功率" + Math.max(100 - x.publicVar3[8], 0) + "%）", E.save()
                    }
                    function p() {
                        I.active = !0, V.active = !0, V.scale = 0, _.cureTimes = 0, _.gameTime1 = x.publicVar3[6], _.gameTime2 = x.publicVar3[6], _.r1 = 100 * Math.random(), _.r2 = 100 * Math.random(), _.r3 = 100 * Math.random(), _.r4 = 100 * Math.random(), _.r5 = 100 * Math.random(), _.makeMoneyRate = (50 * Math.random() + 25).toFixed(1), _.makeMoneyProfit = (50 * Math.random()).toFixed(1), _.r3 < R[2] && (k.getChildByName("text").getComponent("cc.Label").string = "三楼：晓风料理"), _.itemId = parseInt(5.99 * Math.random()), _.itemDiscount = parseInt(30 * Math.random() + 60), _.itemName = w[_.itemId][0], _.itemPrice = w[_.itemId][3], _.finalPrice = parseInt(_.itemPrice * _.itemDiscount / 100)
                    }
                    function d() {
                        C.playText("Canvas/notify", "由于经济不景气，公司倒闭，老板转行卖土鸡蛋去啦~", 60)
                    }
                    function m() {
                        C.playText("Canvas/notify", "“放假啦！哈哈哈哈哈！”", 60)
                    }
                    function f() {
                        C.playText("Canvas/notify", "“再为难~也不能耽误放假呀！哈哈哈哈哈！”", 60)
                    }
                    function h() {
                        I.runAction(cc.scaleTo(.3, 0))
                    }
                    function v() {
                        b(), I.runAction(cc.scaleTo(.3, 1))
                    }
                    function y() {
                        V.runAction(cc.scaleTo(.3, 0))
                    }
                    function g() {
                        b(), V.runAction(cc.scaleTo(.3, 1))
                    }
                    function b() {
                        cc.find("Canvas/notify").getComponent("cc.Label").string = ""
                    }
                    var _ = this, x = e("scr_data"), C = e("scr_effect"), E = e("scr_public"), I = cc.find("Canvas/UI1"), V = cc.find("Canvas/UI2"), N = I.getChildByName("choice1"), T = I.getChildByName("choice2"), k = I.getChildByName("choice3"), S = I.getChildByName("choice4"), H = I.getChildByName("choice5"), R = (I.getChildByName("choice6"), [70, 70, 70, 70, 50]), w = [["披风", 15, 1, 100], ["小裤裤", 21, 1, 20], ["晓月手链", 27, 1, 20], ["幸运石", 26, 1, 20], ["板砖", 20, 1, 20], ["滑稽裤", 24, 1, 20]];
                    p(), u(), t(), l()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_shop4: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "981fdTWKwRAN6F2FBk0OJHn", "scr_shop4"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function t() {
                        cc.find("Canvas/money").getComponent("cc.Label").string = "金钱：" + (r.money / 10).toFixed(1), cc.find("Canvas/UI1/choice2/text").getComponent("cc.Label").string = "出售伤药（每个1毛，已拥有" + r.itemNum2[1] + "）", cc.find("Canvas/UI1/choice3/text").getComponent("cc.Label").string = "出售烟（每个6毛，已拥有" + r.itemNum2[7] + "）", cc.find("Canvas/UI1/choice4/text").getComponent("cc.Label").string = v + "（活动价" + (h / 10).toFixed(1) + "元，限购！！！）"
                    }
                    function n() {
                        p.on("touchstart", a, this), d.on("touchstart", c, this), m.on("touchstart", i, this)
                    }
                    function a() {
                        if (r.itemNum2[1] > 0) {
                            var e = parseInt(.5 * r.itemNum2[1] + 1);
                            r.money += e, r.itemNum2[1] -= e, l.save(), s.playText("Canvas/notify", "出售【伤药】*" + e + "，获得" + e + "毛", 100), t()
                        } else s.playText("Canvas/notify", "道具不足！", 100)
                    }
                    function c() {
                        r.itemNum2[7] > 0 ? (r.money += 6, r.itemNum2[7] -= 1, l.save(), s.playText("Canvas/notify", "出售【烟】*1，获得6毛", 100), t()) : s.playText("Canvas/notify", "道具不足！", 100)
                    }
                    function i() {
                        1 == o.ifSellOut ? s.playText("Canvas/notify", "本次活动每人只能购买一次哦，下次再来吧~", 100) : r.money >= h ? (r.money -= h, r.itemNum2[y] += g, o.ifSellOut = 1, l.save(), s.playText("Canvas/notify", "获得【" + v + "】！", 100), t()) : s.playText("Canvas/notify", "余额不足...", 100)
                    }
                    var o = this, r = e("scr_data"), s = e("scr_effect"), l = e("scr_public"), u = cc.find("Canvas/UI1"), p = u.getChildByName("choice2"), d = u.getChildByName("choice3"), m = u.getChildByName("choice4"), f = [["放大镜*1", 17, 1, 50], ["熟肉*3", 0, 3, 12], ["晓月手链*1", 27, 1, 50], ["幸运石*1", 26, 1, 50], ["啤酒*1", 12, 1, 30], ["伤药*4", 1, 4, 12]];
                    o.itemId = parseInt(5.99 * Math.random()), o.itemDiscount = Math.random(), o.ifSellOut = 0;
                    var h = parseInt(f[o.itemId][3] * o.itemDiscount), v = f[o.itemId][0], y = f[o.itemId][1], g = f[o.itemId][2];
                    t(), n()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_shopButton: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "46243Z6bxNGuK5lVJQiKZD4", "scr_shopButton"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("shop")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_shopUI: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "ca1d33wMc1MzoV4yHqs7mr9", "scr_shopUI"), cc.Class({
                "extends": cc.Component, properties: { itemUI: { "default": null, type: cc.Prefab } }, itemContent: function a() {
                    var t = this;
                    this.data = e("scr_data");
                    var a = {
                        0: {
                            itemName: " 木材*10（拥有" + this.data.itemNum[1] + ")", needDes: "购买/出售：1元/0.5元", ifEnough: function (t) { var n = e("scr_data"); n.money >= 10 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () { var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 10, o = n.money, r = 10, s = 10; o >= i ? (n.money -= i, n.itemNum[1] += r, n.shopPoint += s, c.save(), a.playText("Canvas/notify", "获得【木材】*10！积分*" + s + "！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "钱不够！", 100) }, button2: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 10, o = n.itemNum[1], r = 5;
                                o >= i ? (n.money += r, n.itemNum[1] -= i, c.save(), a.playText("Canvas/notify", "失去【木材】*10，获得0.5元！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }, 1: {
                            itemName: " 亚麻*10（拥有" + this.data.itemNum[4] + ")", needDes: "购买/出售：1元/0.5元", ifEnough: function (t) { var n = e("scr_data"); n.money >= 10 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () { var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 10, o = n.money, r = 10, s = 10; o >= i ? (n.money -= i, n.itemNum[4] += r, n.shopPoint += s, c.save(), a.playText("Canvas/notify", "获得【亚麻】*10！积分*" + s + "！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "钱不够！", 100) }, button2: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 10, o = n.itemNum[4], r = 5;
                                o >= i ? (n.money += r, n.itemNum[4] -= i, c.save(), a.playText("Canvas/notify", "失去【亚麻】*10，获得0.5元！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }, 2: {
                            itemName: " 果子*5（拥有" + this.data.itemNum[0] + ")", needDes: "购买/出售：0.5元/0.2元", ifEnough: function (t) { var n = e("scr_data"); n.money >= 5 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () { var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 5, o = n.money, r = 5, s = 5; o >= i ? (n.money -= i, n.itemNum[0] += r, n.shopPoint += s, c.save(), a.playText("Canvas/notify", "获得【果子】*5！积分*" + s + "！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "钱不够！", 100) }, button2: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 5, o = n.itemNum[0], r = 2;
                                o >= i ? (n.money += r, n.itemNum[0] -= i, c.save(), a.playText("Canvas/notify", "失去【果子】*5，获得0.2元！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }, 3: {
                            itemName: " 易拉罐（拥有" + this.data.itemNum[2] + ")", needDes: "售价：每只1毛~", ifEnough: function (t) { var n = e("scr_data"); n.itemNum[2] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: void 0, button2: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = n.itemNum[2];
                                i > 0 ? (n.money += i, n.itemNum[2] -= i, n.shopPoint += i, c.save(), a.playText("Canvas/notify", "失去【易拉罐】*" + i + "，获得" + i + "毛钱，积分+" + i, 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }, 4: {
                            itemName: " 生肉*2（拥有" + this.data.itemNum[3] + ")", needDes: "购买/出售：0.4元/0.2元", ifEnough: function (t) { var n = e("scr_data"); n.money >= 4 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () { var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 4, o = n.money, r = 2, s = 4; o >= i ? (n.money -= i, n.itemNum[3] += r, n.shopPoint += s, c.save(), a.playText("Canvas/notify", "获得【生肉】*2！积分*" + s + "！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "钱不够！", 100) }, button2: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 2, o = n.itemNum[3], r = 2;
                                o >= i ? (n.money += r, n.itemNum[3] -= i, c.save(), a.playText("Canvas/notify", "失去【生肉】*2，获得0.2元！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }, 5: {
                            itemName: " 艾草*4（拥有" + this.data.itemNum[5] + ")", needDes: "购买/出售：0.4元/0.2元", ifEnough: function (t) { var n = e("scr_data"); n.money >= 4 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () { var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 4, o = n.money, r = 4, s = 4; o >= i ? (n.money -= i, n.itemNum[5] += r, n.shopPoint += s, c.save(), a.playText("Canvas/notify", "获得【艾草】*4！积分*" + s + "！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "钱不够！", 100) }, button2: function () {
                                var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 4, o = n.itemNum[5], r = 2;
                                o >= i ? (n.money += r, n.itemNum[5] -= i, c.save(), a.playText("Canvas/notify", "失去【艾草】*4，获得0.2元！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "道具不足！", 100)
                            }
                        }, 6: { itemName: " 匕首（当前等级" + this.data.itemNum2[8] + ")", needDes: "价格：" + (3.2 + .3 * this.data.itemNum2[8]).toFixed(1) + "元", ifEnough: function (t) { cc.find("Canvas/Page/view/content/page_2/" + t + "/button1/text").getComponent("cc.Label").string = "升级"; var n = e("scr_data"); n.money >= 32 + 3 * n.itemNum2[8] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () { var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 32 + 3 * n.itemNum2[8], o = n.money, r = 1, s = 32 + 3 * n.itemNum2[8]; o >= i ? (n.money -= i, n.itemNum2[8] += r, n.shopPoint += s, c.save(), a.playText("Canvas/notify", "匕首等级提高1级！积分*" + s + "！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "钱不够！", 100) }, button2: void 0 }, 7: { itemName: " 皮衣（当前等级" + this.data.itemNum2[9] + ")", needDes: "价格：" + (2 + .2 * this.data.itemNum2[9]).toFixed(1) + "元", ifEnough: function (t) { cc.find("Canvas/Page/view/content/page_2/" + t + "/button1/text").getComponent("cc.Label").string = "升级"; var n = e("scr_data"); n.money >= 20 + 2 * n.itemNum2[9] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () { var n = e("scr_data"), a = e("scr_effect"), c = e("scr_public"), i = 20 + 2 * n.itemNum2[9], o = n.money, r = 1, s = 20 + 2 * n.itemNum2[9]; o >= i ? (n.money -= i, n.itemNum2[9] += r, n.shopPoint += s, c.save(), a.playText("Canvas/notify", "皮衣等级提高1级！积分*" + s + "！", 100), t.delayCreatItemUI()) : a.playText("Canvas/notify", "钱不够！", 100) }, button2: void 0 }, 8: {
                            itemName: "  抽奖  ", needDes: "价格：100积分，随机获得一份奖励！", ifEnough: function (t) { cc.find("Canvas/Page/view/content/page_3/" + t + "/button1/text").getComponent("cc.Label").string = "抽奖"; var n = e("scr_data"); n.shopPoint >= 100 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(0, 255, 0)) }, button1: function () {
                                function n() {
                                    var t = "", n = 100 * Math.random(), a = e("scr_data");
                                    return n <= 60 && (a.money += 10, t = "1元钱！"), n > 60 && n <= 70 && (a.itemNum2[23] += 1, t = "【创可贴】*1！"), n > 70 && n <= 75 && (a.itemNum2[21] += 1, t = "【小裤裤】*1！"), n > 75 && n <= 80 && (a.itemNum2[20] += 1, t = "【板砖】*1！"), n > 80 && n <= 85 && (a.itemNum2[26] += 1, t = "【幸运石】*1！"), n > 85 && n <= 90 && (a.itemNum2[27] += 1, t = "【晓月手链】*1！"), n > 90 && n <= 100 && (a.itemNum2[24] += 1, t = "【滑稽裤】*1！"), t
                                } var a = e("scr_data"), c = e("scr_effect"), i = e("scr_public"), o = 100, r = a.shopPoint; if (r >= o) {
                                    a.shopPoint -= o;
                                    var s = n();
                                    i.save(), c.playText("Canvas/notify", "恭喜获得，" + s, 100), t.delayCreatItemUI()
                                } else c.playText("Canvas/notify", "积分不够！", 100)
                            }, button2: void 0
                        }
                    };
                    return a
                }, creatPrefab: function (e, t) {
                    var n = cc.instantiate(this.itemUI), a = this.itemContent()[e], c = a.button1, i = a.button2, o = "item" + e;
                    n.name = o, n.getChildByName("name").getComponent("cc.Label").string = a.itemName, n.getChildByName("need").getComponent("cc.Label").string = a.needDes, "undefined" != typeof c ? n.getChildByName("button1").getComponent("cc.Button").scheduleOnce(function () {
                        n.getChildByName("button1").on("touchstart", c, this)
                    }, .4) : n.getChildByName("button1").active = !1, "undefined" != typeof i ? n.getChildByName("button2").getComponent("cc.Button").scheduleOnce(function () {
                        n.getChildByName("button2").on("touchstart", i, this)
                    }, .6) : n.getChildByName("button2").active = !1, cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n), "undefined" != typeof a.ifEnough && a.ifEnough(o)
                }, creatItemUI1: function () {
                    this.initText(), cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
                    for (var e = 0; e <= 3; e++)this.creatPrefab(e, "page_1")
                }, creatItemUI2: function () {
                    this.initText(), cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
                    for (var e = 4; e <= 7; e++)this.creatPrefab(e, "page_2")
                }, creatItemUI3: function () {
                    this.initText(), cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
                    for (var e = 8; e <= 8; e++)this.creatPrefab(e, "page_3")
                }, initText: function () {
                    var t = e("scr_data");
                    cc.find("Canvas/money").getComponent("cc.Label").string = "金钱：" + (t.money / 10).toFixed(1) + "元", cc.find("Canvas/point").getComponent("cc.Label").string = "积分：" + t.shopPoint
                }, delayCreatItemUI: function () {
                    var e = this;
                    this.scheduleOnce(function () {
                        e.creatItemUI1(), e.creatItemUI2(), e.creatItemUI3()
                    }, .2)
                }, delayCreatItemUI1: function () {
                    this.scheduleOnce(this.creatItemUI1, .2)
                }, delayCreatItemUI2: function () {
                    this.scheduleOnce(this.creatItemUI2, .2)
                }, delayCreatItemUI3: function () {
                    this.scheduleOnce(this.creatItemUI3, .2)
                }, onLoad: function () {
                    this.creatItemUI1(), this.creatItemUI2(), this.creatItemUI3()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_skillButton: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "46028T60zdCgZQPViIBJA6V", "scr_skillButton"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("skill")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], scr_skillJudge2: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "fbb08mI2F9N/4eaXqX0Gf87", "scr_skillJudge2"), cc.Class({
                "extends": cc.Component, properties: {}, skillJugge: function a() {
                    var t = e("scr_data"), n = e("scr_public"), c = t.friendSkill, a = {
                        1: function () { 0 == c[1] && t.publicVar[7] >= 30 && (c[1] = 1) }, 2: function () { 0 == c[2] && t.publicVar[7] >= 60 && (c[2] = 1) }, 3: function () { 0 == c[3] && t.publicVar[7] >= 100 && (c[3] = 1) }, 4: function () { 0 == c[4] && t.publicVar[7] >= 160 && (c[4] = 1) }, 5: function () { 0 == c[5] && t.publicVar[7] >= 240 && (c[5] = 1) }, 6: function () { 0 == c[6] && t.publicVar[7] >= 340 && (c[6] = 1) }, 7: function () { 0 == c[7] && t.publicVar[7] >= 460 && (c[7] = 1) }, 8: function () {
                            0 == c[8] && t.publicVar[7] >= 600 && (c[8] = 1)
                        }
                    };
                    for (var i in a) a[i]();
                    n.save()
                }, onLoad: function () {
                    this.skillJugge()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_public: "scr_public" }], scr_skillJudge: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "daeebn9rLFFwagiEBrNgbsO", "scr_skillJudge"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    var t = e("scr_data"), n = e("scr_public"), a = t.skillLv, c = {
                        0: function () { t.hunger <= 0 ? a[0] = 1 : a[0] = 0 }, 1: function () { 0 == a[1] && t.winTimes >= 8 && (a[1] = 1) }, 2: function () { 0 == a[2] && t.orderTimes[5] >= 30 && (a[2] = 1) }, 3: function () { 0 == a[3] && t.orderTimes[0] >= 15 && (a[3] = 1) }, 5: function () { 0 == a[5] && t.winTimes >= 15 && (a[5] = 1) }, 6: function () { 0 == a[6] && t.randomEvent[6] >= 10 && (a[6] = 1) }, 7: function () { 0 == a[7] && t.orderTimes[2] >= 30 && (a[7] = 1) }, 8: function () { 0 == a[8] && t.figthExp[0] >= 20 && (a[8] = 1) }, 9: function () { 0 == a[9] && t.winTimes >= 20 && (a[9] = 1) }, 10: function () { 0 == a[10] && t.itemNum2[2] >= 5 && (a[10] = 1) }, 11: function () { 0 == a[11] && t.figthExp[1] >= 30 && (a[11] = 1) }, 12: function () { 0 == a[12] && t.orderTimes[5] >= 666 && (a[12] = 1) }, 13: function () { 0 == a[13] && t.orderTimes[5] >= 200 && t.orderTimes[2] >= 60 && (a[13] = 1) }, 14: function () { 0 == a[14] && t.winTimes >= 60 && (a[14] = 1) }, 15: function () { 0 == a[15] && t.figthExp[2] >= 40 && (a[15] = 1) }, 17: function () { 0 == a[17] && t.orderTimes[0] >= 99 && (a[17] = 1) }, 19: function () { 0 == a[19] && t.publicVar3[13] >= 4 && (a[19] = 1) }, 21: function () { 0 == a[21] && t.itemNum2[6] >= 10 && (a[21] = 1) }, 23: function () { 0 == a[23] && t.publicVar2[1] >= 233 && (a[23] = 1) }, 24: function () { 0 == a[24] && t.publicVar3[12] >= 79 && (a[24] = 1) }, 25: function () { 0 == a[25] && t.itemNum2[3] >= 15 && t.itemNum2[4] >= 15 && (a[25] = 1) }, 26: function () {
                            0 == a[26] && t.kills[2] >= 40 && (a[26] = 1)
                        }
                    };
                    for (var i in c) c[i]();
                    n.save()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_public: "scr_public" }], scr_skillUI: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "ae252WOSz5CF6dAaVPNVzC8", "scr_skillUI"), cc.Class({
                "extends": cc.Component, properties: {}, creatText: function (e, t, n) {
                    var a = new cc.Node(t);
                    a.addComponent(cc.Label);
                    a.parent = e, a.setPosition(0, 0), a.color = new cc.Color(115, 115, 115), a.getComponent(cc.Label).overflow = 3, a.setContentSize(630, 300), a.getComponent(cc.Label).string = n, a.getComponent(cc.Label).lineHeight = 50, a.getComponent(cc.Label).fontSize = 32
                }, onLoad: function () {
                    var t = e("scr_data"), n = (t.figthExp, 3 * t.orderTimes[1] - t.orderTimes[4]);
                    1 == t.publicVar[1] && (n = t.orderTimes[1] - t.orderTimes[4]);
                    var a = {
                        0: "【饥饿】当饥饿值低于0时激活。饥饿状态下，前进/探索有几率减少健康值，且睡觉时必定减少健康！（另外：饥饿时系统会自动使用食物，直到用光为止哦^_^）"
                        , 1: "【精力强化1】精力上限+10，战斗胜利8次后激活（"
                            + t.winTimes + "/8）。", 2: "【生命强化1】最大生命值+50，吃「果子」30次后激活("
                                + t.orderTimes[5] + "/30）。", 3: "【恢复1】前进/探索时，生命恢复量提高8点。使用「伤药」15次后激活（"
                                    + t.orderTimes[0] + "/15）。", 4: "【烟瘾】攻击/防御减为零！每天有"
                                        + n + "%概率激活，效果持续1天。（抽烟次数越多激活概率越高，每次增加3%）", 5: "【平衡架势】造成"
                                            + (t.figthExp[0] / 5 + 100).toFixed(1) + "%伤害，承受" + (100 - t.figthExp[0] / 5).toFixed(1) + "%伤害。效果随熟练度提升而提升（" + t.figthExp[0] + "/150）。战斗胜利15次(" + t.winTimes + "/15)后开启。", 6: "【捡钱】每天40%概率额外捡到1毛钱，扶老奶奶10次激活！此特性可升级，每扶10次涨1毛哈~(^_?)☆！（"
                                                + t.randomEvent[6] + "/10）。", 7: "【精力强化2】精力上限+20，吃「熟肉」30次后激活（"
                                                    + t.orderTimes[2] + "/30）。", 8: "【防御强化1】防御增加10点，平衡架势熟练度达20后激活（"
                                                        + t.figthExp[0] + "/20）。", 9: "【拼命架势】可切换到拼命架势。攻击时，造成"
                                                            + (t.figthExp[1] / 2 + 132).toFixed(1) + "%伤害，每次攻击损失8%最大生命值。效果随熟练度而提升（" + t.figthExp[1] + "/150）。战斗胜利" + t.winTimes + "/20次后激活。注意1：一场战斗中，使用最多的架势将获得1点熟练度", 10: "【自愈1】睡觉时40%几率恢复1点健康值，帐篷达到5级激活。"
                        , 11: "【攻击强化1】攻击增加10点，拼命架势熟练度达30激活（"
                            + t.figthExp[1] + "/30）。", 12: "【精力强化3】精力上限+30，吃果子666次后激活，吃草更健康哦（"
                                + t.orderTimes[5] + "/666）。", 13: "【大胃王】饥饿上限+50，吃（"
                                    + t.orderTimes[5] + "/200）次「果子」和（" + t.orderTimes[2] + "/60）次「熟肉」后激活。", 14: "【猥琐架势】可切换到猥琐架势。受击时，承受"
                                        + (70 - t.figthExp[2] / 6).toFixed(1) + "%的伤害，且恢复" + parseInt(t.figthExp[2] + 10) + "点生命，但造成伤害减也少30%。效果随熟练度而提升（" + t.figthExp[2] + "/150）。战斗胜利" + t.winTimes + "/60次后激活。注意2：逃跑时系统将自动切换为猥琐架势！", 15: "【生命强化2】最大生命值+100，猥琐架势熟练度达40激活（"
                                            + t.figthExp[2] + "/40）。", 16: "【防御强化2】防御+20，第三次击败山脉中「山顶巨人」后激活。"
                        , 17: "【恢复2】前进/探索时，生命恢复量提高36点，使用「伤药」99次后激活（"
                            + t.orderTimes[0] + "/99）。", 18: "【攻击强化2】攻击+20，击败挑战副本中「女剑士」后激活。"
                        , 19: "【生命强化3】最大生命值+150。在省城市中心的晓风料理店食用4次「巨无霸」套餐后激活！（"
                            + t.publicVar3[13] + "/4）", 20: "【防御强化3】防御+30。击败省城郊外的「杀.破.狼」4次后激活！"
                        , 21: "【恢复强化】前进/探索时，生命恢复效果翻倍。「驱蚊工具」等级达到10级后激活（"
                            + t.itemNum2[6] + "/10）。你目前前进/探索回恢复量为" + (4 + 8 * t.skillLv[3] + 36 * t.skillLv[17] + 2 * t.itemNum2[23]) * (1 + t.skillLv[21]) + "（激活后此数值将会翻倍，创可贴恢复效果也将翻倍！）。", 22: "【攻击强化3】攻击+30，击败挑战副本中「双枪老太婆」后激活。"
                        , 23: "【非酋逆袭】如果前进/探索时没发现道具，则必定获得1毛钱！没发现道具次数达233次后激活（"
                            + t.publicVar2[1] + "/233）。", 24: "【圣斗士】战斗失败后，"
                                + Math.min(Math.max(parseInt(t.publicVar3[12] / 5), 20), 40).toFixed(1) + "%几率满血复活！战斗失败79次后激活（" + t.publicVar3[12] + "/79）",
                        25: "【霸气】狂拽炫酷吊炸天！攻击时，10%几率无视目标防御，且恢复自身3%生命。木棍、麻布衣达到15级时激活"
                        , 26: "【不屈的精神力】睡觉时30%几率额外再恢复30%精力！击败「草带男孩」40次后激活！（"
                            + t.kills[2] + "/40）"
                    }, c = e("scr_data").skillLv, i = cc.find("Canvas/Scroll/view/content"), o = parseInt(1 + t.day / 3), r = Object.keys(a).length; "undefined"
                        == typeof r && (r = 99);
                    for (var s in a) {
                        var l = r - s - 1;
                        l > o - 1 || (this.creatText(i, "skill" + l, a[l]), c[l] > 0 && (i.getChildByName("skill" + l).color = new cc.Color(0, 255, 0)))
                    }
                    var u = cc.find("Canvas/Button_loadAchieve"), p = cc.find("Canvas/Button_system");
                    u.on("touchstart", function () {
                        cc.director.loadScene("achieve")
                    }, u), p.on("touchstart", function () {
                        cc.director.loadScene("system")
                    }, p)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data" }], scr_startChoice: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "abb1fsZ7zZIh7RCgg95JM2L", "scr_startChoice"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function t() {
                        m.opacity = 0, f.opacity = 0
                    }
                    function n() {
                        b.playText("Canvas/text1", "请选择一种初始道具套餐...", 80), h.schedule(a, 2, 1)
                    }
                    function a() {
                        var e = ["Canvas/Determine", "Canvas/text2"];
                        cc.find(e[_]).runAction(cc.fadeIn(2)), _++
                    }
                    function c() {
                        v.itemNum[0] += 20, v.itemNum2[1] += 20, v.money += 30, d()
                    }
                    function i() {
                        v.itemNum2[20] += 3, d()
                    }
                    function o() {
                        v.itemNum2[24] += 13, d()
                    }
                    function r() {
                        v.itemNum2[13] += 1, v.money += 20, d()
                    }
                    function s() {
                        v.itemNum2[17] += 6, d()
                    }
                    function l() {
                        v.itemNum2[27] += 20, v.publicVar[1] = -1, d()
                    }
                    function u() {
                        y.gameData[1] > 0 ? (v.publicVar[1] = 1, d()) : b.playText("Canvas/text1", "修罗模式需先通关游戏", 80)
                    }
                    function p() {
                        b.playText("Canvas/text1", "该模式还在奋力开发中，敬请期待哦←_←", 80)
                    }
                    function d() {
                        cc.find("Canvas/Determine").active = !1, cc.find("Canvas/text1").active = !1, cc.find("Canvas/text2").active = !1, g.save(), cc.director.loadScene("open")
                    }
                    var m = cc.find("Canvas/Determine"), f = cc.find("Canvas/text2"), h = this, v = e("scr_data"), y = e("scr_data2"), g = e("scr_public"), b = e("scr_effect"), _ = 0;
                    m.getChildByName("choice1").on("touchstart", c, this), m.getChildByName("choice2").on("touchstart", i, this), m.getChildByName("choice3").on("touchstart", o, this), m.getChildByName("choice4").on("touchstart", r, this), m.getChildByName("choice5").on("touchstart", s, this), m.getChildByName("choice6").on("touchstart", l, this), m.getChildByName("choice7").on("touchstart", u, this), m.getChildByName("choice8").on("touchstart", p, this), t(), n()
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_effect: "scr_effect", scr_public: "scr_public" }], scr_startUI: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "cea75di7zpJiqfvO6EeKLF9", "scr_startUI"), cc.Class({
                "extends": cc.Component, properties: {}, supportButton: function () {
                    cc.director.loadScene("support")
                }, messageButton: function () {
                    cc.director.loadScene("message")
                }, controlButton: function () {
                    JSON.parse(cc.sys.localStorage.getItem("userData")) || (cc.find("Canvas/button/button_continue").active = !1)
                }, onLoad: function () {
                    this.controlButton()
                }
            }), cc._RFpop()
        }, {}], scr_system: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "00817ZNI7hJb4XVsFxczkla", "scr_system"), cc.Class({
                "extends": cc.Component, properties: {}, onLoad: function () {
                    function t() {
                        cc.find("Canvas/text/speed").getComponent("cc.Label").string = "你目前剧情（部分）播放速度为" + a[i.publicVar[6] || 2]
                    }
                    function n() {
                        i.publicVar[6] += 1, i.publicVar[6] > 2 && (i.publicVar[6] = 1), o.playText("Canvas/text/speed", "你目前剧情播放速度为" + a[i.publicVar[6]], 60)
                    }
                    var a = ["一般", "快", "一般"], c = cc.find("Canvas/button/speed"), i = e("scr_data"), o = e("scr_effect");
                    t(), c.on("touchstart", n, c)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_effect: "scr_effect" }], scr_weixin: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "30448HDiXRBAKQpqrA00msY", "scr_weixin"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    cc.director.loadScene("support2")
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, {}], testAll: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "90bfc8sWA1FKba1y8235I0Y", "testAll"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    this.changeData()
                }, changeData: function () {
                    var t = e("scr_data"), n = e("scr_public");
                    e("scr_data2");
                    t.day = 179, t.ifFollow[0] = 0, t.publicVar[7] = 999, t.publicVar3[3] = 0, n.save(), n.save2(), n.init()
                }, changeData2: function () {
                    var t = e("scr_data"), n = e("scr_public");
                    t.itemNum2[3] = 30, t.itemNum2[4] = 30, t.itemNum2[8] = 15, t.itemNum2[9] = 15, t.itemNum2[10] = 6, t.itemNum2[11] = 6, t.itemNum2[14] = 999, t.itemNum2[19] = 2, t.itemNum2[20] = 500, t.itemNum2[21] = 200, t.itemNum2[22] = 200, t.ifFollow[0] = 1, t.choice[5] = 999, t.skillLv[5] = 1, t.skillLv[9] = 1, t.skillLv[14] = 1, t.skillLv[25] = 1, t.figthExp[0] = 150, t.figthExp[1] = 150, t.figthExp[2] = 150, t.role.hp = n.role.maxHp()
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data", scr_data2: "scr_data2", scr_public: "scr_public" }], test: [function (e, t, n) {
            "use strict";
            cc._RFpush(t, "8d2adDidEdDNoDEfhV+1NKI", "test"), cc.Class({
                "extends": cc.Component, properties: {}, callBack: function () {
                    JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData"), cc.director.loadScene("end", function () {
                        e("scr_data").day = 168
                    })
                }, onLoad: function () {
                    this.node.on("touchstart", this.callBack, this)
                }
            }), cc._RFpop()
        }, { scr_data: "scr_data" }]
    }, {}, ["scr_eatButton", "scr_makeButton", "scr_shopButton", "scr_skillButton", "scr_backMainUI", "scr_diaryDetermine", "scr_eventDetermine", "scr_restDetermine", "scr_backStartUI", "scr_backSupport", "scr_continueButton", "scr_initGame", "scr_newGame", "scr_notice", "scr_notice2", "scr_open", "scr_startChoice", "scr_startUI", "scr_weixin", "scr_achieve", "scr_eatUI", "scr_eventData", "scr_makeUI", "scr_shop2", "scr_shop3", "scr_shop4", "scr_shopUI", "scr_skillJudge", "scr_skillUI", "scr_data", "scr_data2", "scr_dataCopy", "scr_diary", "scr_event", "scr_mainUIEvent", "scr_plot", "scr_rest", "scr_enemy", "scr_explore", "scr_fight", "scr_fightState", "scr_forwardButton", "scr_friendSkillJudge1", "scr_friendSkillUI1", "scr_friendSkillUI2", "scr_friendUI1", "scr_skillJudge2", "scr_effect", "scr_public", "scr_home", "scr_mainUIinit", "scr_readConfession", "scr_end", "scr_initData", "scr_over", "scr_over2", "scr_over2_1", "scr_system", "scr_BGM", "scr_logo", "scr_quitGame", "test", "testAll", "scr_liveModeMain"]);