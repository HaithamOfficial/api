! function (n) {
    function t(t, c) {
        var S = n.extend({}, n.fn.countdowntimer.defaults, c),
            t = t;
        t.addClass("style");
        var m = "",
            M = "",
            h = "",
            v = "";
        if (m = S.size, M = S.borderColor, h = S.fontColor, v = S.backgroundColor, void 0 != c.regexpMatchFormat && void 0 != c.regexpReplaceWith && void 0 == c.timeSeparator && (window["regexpMatchFormat_" + t.attr("id")] = c.regexpMatchFormat, window["regexpReplaceWith_" + t.attr("id")] = c.regexpReplaceWith), void 0 != c.borderColor || void 0 != c.fontColor || void 0 != c.backgroundColor) {
            var g = {
                background: v,
                color: h,
                "border-color": M
            };
            t.css(g)
        } else t.addClass("colorDefinition");
        if (void 0 != c.size) switch (m) {
        case "xl":
            t.addClass("size_xl");
            break;
        case "lg":
            t.addClass("size_lg");
            break;
        case "md":
            t.addClass("size_md");
            break;
        case "sm":
            t.addClass("size_sm");
            break;
        case "xs":
            t.addClass("size_xs")
        } else "sm" == m && t.addClass("size_sm");
        if (void 0 != c.startDate || void 0 != c.dateAndTime || void 0 != c.currentTime || void 0 == c.hours && void 0 == c.minutes && void 0 == c.seconds)
            if (void 0 != c.startDate && void 0 != c.dateAndTime && void 0 == c.currentTime) {
                startDate = "", endDate = "", timer_startDate = "", window["startDate" + t.attr("id")] = new Date(S.startDate), window["endDate" + t.attr("id")] = new Date(S.dateAndTime);
                var p = "withStart";
                a(t, S, p), window["timer_startDate" + t.attr("id")] = setInterval(function () {
                    a(t, S, p)
                }, 1e3 * S.tickInterval)
            } else if (void 0 == c.startDate && void 0 != c.dateAndTime && void 0 == c.currentTime) {
            startTime = "", dateTime = "", timer_givenDate = "";
            var I = S.startDate.getHours() < 10 ? "0" + S.startDate.getHours() : S.startDate.getHours(),
                f = S.startDate.getMinutes() < 10 ? "0" + S.startDate.getMinutes() : S.startDate.getMinutes(),
                k = S.startDate.getSeconds() < 10 ? "0" + S.startDate.getSeconds() : S.startDate.getSeconds(),
                D = S.startDate.getMonth() + 1 < 10 ? "0" + (S.startDate.getMonth() + 1) : S.startDate.getMonth() + 1,
                T = S.startDate.getDate() < 10 ? "0" + S.startDate.getDate() : S.startDate.getDate(),
                x = S.startDate.getFullYear();
            window["startTime" + t.attr("id")] = new Date(x + "/" + D + "/" + T + " " + I + ":" + f + ":" + k), window["dateTime" + t.attr("id")] = new Date(S.dateAndTime);
            var p = "withnoStart";
            a(t, S, p), window["timer_givenDate" + t.attr("id")] = setInterval(function () {
                a(t, S, p)
            }, 1e3 * S.tickInterval)
        } else void 0 != c.currentTime ? (currentTime = "", timer_currentDate = "", window["currentTime" + t.attr("id")] = S.currentTime, _(t, S), window["timer_currentDate" + t.attr("id")] = setInterval(function () {
            _(t, S)
        }, 1e3 * S.tickInterval)) : (countSeconds = "", timer_secondsTimer = "", window["countSeconds" + t.attr("id")] = S.seconds, window["timer_secondsTimer" + t.attr("id")] = setInterval(function () {
            u(t)
        }, 1e3));
        else void 0 != c.hours && void 0 == c.minutes && void 0 == c.seconds ? (hours_H = "", minutes_H = "", seconds_H = "", timer_H = "", window["hours_H" + t.attr("id")] = S.hours, window["minutes_H" + t.attr("id")] = S.minutes, window["seconds_H" + t.attr("id")] = S.seconds, void 0 != c.pauseButton && l(t, "H", S, e), void 0 != c.stopButton && H(t, "H", S, e), e(t, S), window["timer_H" + t.attr("id")] = setInterval(function () {
            e(t, S)
        }, 1e3 * S.tickInterval)) : void 0 == c.hours && void 0 != c.minutes && void 0 == c.seconds ? (hours_M = "", minutes_M = "", seconds_M = "", timer_M = "", window["hours_M" + t.attr("id")] = S.hours, window["minutes_M" + t.attr("id")] = S.minutes, window["seconds_M" + t.attr("id")] = S.seconds, void 0 != c.pauseButton && l(t, "M", S, o), void 0 != c.stopButton && H(t, "M", S, o), o(t, S), window["timer_M" + t.attr("id")] = setInterval(function () {
            o(t, S)
        }, 1e3 * S.tickInterval)) : void 0 == c.hours && void 0 == c.minutes && void 0 != c.seconds ? (hours_S = "", minutes_S = "", seconds_S = "", timer_S = "", window["hours_S" + t.attr("id")] = S.hours, window["minutes_S" + t.attr("id")] = S.minutes, window["seconds_S" + t.attr("id")] = S.seconds, void 0 != c.pauseButton && l(t, "S", S, i), void 0 != c.stopButton && H(t, "S", S, i), i(t, S), window["timer_S" + t.attr("id")] = setInterval(function () {
            i(t, S)
        }, 1e3 * S.tickInterval)) : void 0 != c.hours && void 0 != c.minutes && void 0 == c.seconds ? (hours_HM = "", minutes_HM = "", seconds_HM = "", timer_HM = "", window["hours_HM" + t.attr("id")] = S.hours, window["minutes_HM" + t.attr("id")] = S.minutes, window["seconds_HM" + t.attr("id")] = S.seconds, void 0 != c.pauseButton && l(t, "HM", S, w), void 0 != c.stopButton && H(t, "HM", S, w), w(t, S), window["timer_HM" + t.attr("id")] = setInterval(function () {
            w(t, S)
        }, 1e3 * S.tickInterval)) : void 0 == c.hours && void 0 != c.minutes && void 0 != c.seconds ? (hours_MS = "", minutes_MS = "", seconds_MS = "", timer_MS = "", window["hours_MS" + t.attr("id")] = S.hours, window["minutes_MS" + t.attr("id")] = S.minutes, window["seconds_MS" + t.attr("id")] = S.seconds, void 0 != c.pauseButton && l(t, "MS", S, d), void 0 != c.stopButton && H(t, "MS", S, d), d(t, S), window["timer_MS" + t.attr("id")] = setInterval(function () {
            d(t, S)
        }, 1e3 * S.tickInterval)) : void 0 != c.hours && void 0 == c.minutes && void 0 != c.seconds ? (hours_HS = "", minutes_HS = "", seconds_HS = "", timer_HS = "", window["hours_HS" + t.attr("id")] = S.hours, window["minutes_HS" + t.attr("id")] = S.minutes, window["seconds_HS" + t.attr("id")] = S.seconds, void 0 != c.pauseButton && l(t, "HS", S, s), void 0 != c.stopButton && H(t, "HS", S, s), s(t, S), window["timer_HS" + t.attr("id")] = setInterval(function () {
            s(t, S)
        }, 1e3 * S.tickInterval)) : void 0 != c.hours && void 0 != c.minutes && void 0 != c.seconds && (hours_HMS = "", minutes_HMS = "", seconds_HMS = "", timer_HMS = "", window["hours_HMS" + t.attr("id")] = S.hours, window["minutes_HMS" + t.attr("id")] = S.minutes, window["seconds_HMS" + t.attr("id")] = S.seconds, void 0 != c.pauseButton && l(t, "HMS", S, r), void 0 != c.stopButton && H(t, "HMS", S, r), r(t, S), window["timer_HMS" + t.attr("id")] = setInterval(function () {
            r(t, S)
        }, 1e3 * S.tickInterval))
    }

    function e(n, t) {
        var e = n.attr("id");
        window["minutes_H" + e] == t.minutes && window["seconds_H" + e] == t.seconds && window["hours_H" + e] == t.hours ? (window["hours_H" + e].toString().length < 2 && (window["hours_H" + e] = "0" + window["hours_H" + e]), S(n, window["hours_H" + e] + t.timeSeparator + "00" + t.timeSeparator + "00"), window["seconds_H" + e] = 60 - t.tickInterval, window["minutes_H" + e] = 59, 0 != window["hours_H" + e] ? window["hours_H" + e]-- : (delete window["hours_H" + e], delete window["minutes_H" + e], delete window["seconds_H" + e], clearInterval(window["timer_H" + e]), c(n, t))) : (window["hours_H" + e].toString().length < 2 && (window["hours_H" + e] = "0" + window["hours_H" + e]), window["minutes_H" + e].toString().length < 2 && (window["minutes_H" + e] = "0" + window["minutes_H" + e]), window["seconds_H" + e].toString().length < 2 && (window["seconds_H" + e] = "0" + window["seconds_H" + e]), S(n, window["hours_H" + e] + t.timeSeparator + window["minutes_H" + e] + t.timeSeparator + window["seconds_H" + e]), window["seconds_H" + e] -= t.tickInterval, 0 != window["minutes_H" + e] && window["seconds_H" + e] < 0 && (window["minutes_H" + e]--, window["seconds_H" + e] = 60 - t.tickInterval), 0 == window["minutes_H" + e] && window["seconds_H" + e] < 0 && 0 != window["hours_H" + e] && (window["hours_H" + e]--, window["minutes_H" + e] = 59, window["seconds_H" + e] = 60 - t.tickInterval), 0 == window["minutes_H" + e] && window["seconds_H" + e] < 0 && 0 == window["hours_H" + e] && (delete window["hours_H" + e], delete window["minutes_H" + e], delete window["seconds_H" + e], clearInterval(window["timer_H" + e]), c(n, t))), e = null
    }

    function o(n, t) {
        var e = n.attr("id");
        window["minutes_M" + e] == t.minutes && window["seconds_M" + e] == t.seconds ? (window["minutes_M" + e].toString().length < 2 && (window["minutes_M" + e] = "0" + window["minutes_M" + e]), S(n, window["minutes_M" + e] + t.timeSeparator + "00"), window["seconds_M" + e] = 60 - t.tickInterval, 0 != window["minutes_M" + e] ? window["minutes_M" + e]-- : (delete window["hours_M" + e], delete window["minutes_M" + e], delete window["seconds_M" + e], clearInterval(window["timer_M" + e]), c(n, t))) : (window["minutes_M" + e].toString().length < 2 && (window["minutes_M" + e] = "0" + window["minutes_M" + e]), window["seconds_M" + e].toString().length < 2 && (window["seconds_M" + e] = "0" + window["seconds_M" + e]), S(n, window["minutes_M" + e] + t.timeSeparator + window["seconds_M" + e]), window["seconds_M" + e] -= t.tickInterval, 0 != window["minutes_M" + e] && window["seconds_M" + e] < 0 && (window["minutes_M" + e]--, window["seconds_M" + e] = 60 - t.tickInterval), 0 == window["minutes_M" + e] && window["seconds_M" + e] < 0 && (delete window["hours_M" + e], delete window["minutes_M" + e], delete window["seconds_M" + e], clearInterval(window["timer_M" + e]), c(n, t))), e = null
    }

    function i(n, t) {
        var e = n.attr("id");
        window["seconds_S" + e].toString().length < 2 && (window["seconds_S" + e] = "0" + window["seconds_S" + e]), S(n, window["seconds_S" + e] + " sec"), window["seconds_S" + e] -= t.tickInterval, window["seconds_S" + e] < 0 && (delete window["hours_S" + e], delete window["minutes_S" + e], delete window["seconds_S" + e], clearInterval(window["timer_S" + e]), c(n, t)), e = null
    }

    function w(n, t) {
        var e = n.attr("id");
        window["minutes_HM" + e] == t.minutes && window["hours_HM" + e] == t.hours ? (window["hours_HM" + e].toString().length < 2 && (window["hours_HM" + e] = "0" + window["hours_HM" + e]), window["minutes_HM" + e].toString().length < 2 && (window["minutes_HM" + e] = "0" + window["minutes_HM" + e]), S(n, window["hours_HM" + e] + t.timeSeparator + window["minutes_HM" + e] + t.timeSeparator + "00"), 0 != window["hours_HM" + e] && 0 == window["minutes_HM" + e] ? (window["hours_HM" + e]--, window["minutes_HM" + e] = 59, window["seconds_HM" + e] = 60 - t.tickInterval) : 0 == window["hours_HM" + e] && 0 != window["minutes_HM" + e] ? (window["seconds_HM" + e] = 60 - t.tickInterval, window["minutes_HM" + e]--) : (window["seconds_HM" + e] = 60 - t.tickInterval, window["minutes_HM" + e]--), 0 == window["hours_HM" + e] && 0 == window["minutes_HM" + e] && 60 == window["seconds_HM" + e] && (delete window["hours_HM" + e], delete window["minutes_HM" + e], delete window["seconds_HM" + e], clearInterval(window["timer_HM" + e]), c(n, t))) : (window["hours_HM" + e].toString().length < 2 && (window["hours_HM" + e] = "0" + window["hours_HM" + e]), window["minutes_HM" + e].toString().length < 2 && (window["minutes_HM" + e] = "0" + window["minutes_HM" + e]), window["seconds_HM" + e].toString().length < 2 && (window["seconds_HM" + e] = "0" + window["seconds_HM" + e]), S(n, window["hours_HM" + e] + t.timeSeparator + window["minutes_HM" + e] + t.timeSeparator + window["seconds_HM" + e]), window["seconds_HM" + e] -= t.tickInterval, 0 != window["minutes_HM" + e] && window["seconds_HM" + e] < 0 && (window["minutes_HM" + e]--, window["seconds_HM" + e] = 60 - t.tickInterval), 0 == window["minutes_HM" + e] && window["seconds_HM" + e] < 0 && 0 != window["hours_HM" + e] && (window["hours_HM" + e]--, window["minutes_HM" + e] = 59, window["seconds_HM" + e] = 60 - t.tickInterval), 0 == window["minutes_HM" + e] && window["seconds_HM" + e] < 0 && 0 == window["hours_HM" + e] && (delete window["hours_HM" + e], delete window["minutes_HM" + e], delete window["seconds_HM" + e], clearInterval(window["timer_HM" + e]), c(n, t))), e = null
    }

    function d(n, t) {
        var e = n.attr("id");
        window["minutes_MS" + e] == t.minutes && window["seconds_MS" + e] == t.seconds ? (window["minutes_MS" + e].toString().length < 2 && (window["minutes_MS" + e] = "0" + window["minutes_MS" + e]), window["seconds_MS" + e].toString().length < 2 && (window["seconds_MS" + e] = "0" + window["seconds_MS" + e]), S(n, window["minutes_MS" + e] + t.timeSeparator + window["seconds_MS" + e]), 0 != window["minutes_MS" + e] && 0 == window["seconds_MS" + e] ? (window["minutes_MS" + e]--, window["seconds_MS" + e] = 60 - t.tickInterval) : 0 == window["minutes_MS" + e] && 0 == window["seconds_MS" + e] ? (delete window["hours_MS" + e], delete window["minutes_MS" + e], delete window["seconds_MS" + e], clearInterval(window["timer_MS" + e]), c(n, t)) : window["seconds_MS" + e] -= t.tickInterval) : (window["minutes_MS" + e].toString().length < 2 && (window["minutes_MS" + e] = "0" + window["minutes_MS" + e]), window["seconds_MS" + e].toString().length < 2 && (window["seconds_MS" + e] = "0" + window["seconds_MS" + e]), S(n, window["minutes_MS" + e] + t.timeSeparator + window["seconds_MS" + e]), window["seconds_MS" + e] -= t.tickInterval, 0 != window["minutes_MS" + e] && window["seconds_MS" + e] < 0 && (window["minutes_MS" + e]--, window["seconds_MS" + e] = 60 - t.tickInterval), 0 == window["minutes_MS" + e] && window["seconds_MS" + e] < 0 && (delete window["hours_MS" + e], delete window["minutes_MS" + e], delete window["seconds_MS" + e], clearInterval(window["timer_MS" + e]), c(n, t))), e = null
    }

    function s(n, t) {
        var e = n.attr("id");
        window["seconds_HS" + e] == t.seconds && window["hours_HS" + e] == t.hours ? (window["hours_HS" + e].toString().length < 2 && (window["hours_HS" + e] = "0" + window["hours_HS" + e]), window["seconds_HS" + e].toString().length < 2 && (window["seconds_HS" + e] = "0" + window["seconds_HS" + e]), S(n, window["hours_HS" + e] + t.timeSeparator + "00" + t.timeSeparator + window["seconds_HS" + e]), 0 == window["hours_HS" + e] && 0 == window["seconds_HS" + e] ? (delete window["hours_HS" + e], delete window["minutes_HS" + e], delete window["seconds_HS" + e], clearInterval(window["timer_HS" + e]), c(n, t)) : 0 != window["hours_HS" + e] && 0 == window["seconds_HS" + e] ? (window["hours_HS" + e]--, window["minutes_HS" + e] = 59, window["seconds_HS" + e] = 60 - t.tickInterval) : window["seconds_HS" + e] -= t.tickInterval) : (window["hours_HS" + e].toString().length < 2 && (window["hours_HS" + e] = "0" + window["hours_HS" + e]), window["minutes_HS" + e].toString().length < 2 && (window["minutes_HS" + e] = "0" + window["minutes_HS" + e]), window["seconds_HS" + e].toString().length < 2 && (window["seconds_HS" + e] = "0" + window["seconds_HS" + e]), S(n, window["hours_HS" + e] + t.timeSeparator + window["minutes_HS" + e] + t.timeSeparator + window["seconds_HS" + e]), window["seconds_HS" + e] -= t.tickInterval, 0 != window["minutes_HS" + e] && window["seconds_HS" + e] < 0 && (window["minutes_HS" + e]--, window["seconds_HS" + e] = 60 - t.tickInterval), 0 == window["minutes_HS" + e] && window["seconds_HS" + e] < 0 && 0 != window["hours_HS" + e] && (window["hours_HS" + e]--, window["minutes_HS" + e] = 59, window["seconds_HS" + e] = 60 - t.tickInterval), 0 == window["minutes_HS" + e] && window["seconds_HS" + e] < 0 && 0 == window["hours_HS" + e] && (delete window["hours_HS" + e], delete window["minutes_HS" + e], delete window["seconds_HS" + e], clearInterval(window["timer_HS" + e]), c(n, t))), e = null
    }

    function r(n, t) {
        var e = n.attr("id");
        window["minutes_HMS" + e] == t.minutes && window["seconds_HMS" + e] == t.seconds && window["hours_HMS" + e] == t.hours ? (window["hours_HMS" + e].toString().length < 2 && (window["hours_HMS" + e] = "0" + window["hours_HMS" + e]), window["minutes_HMS" + e].toString().length < 2 && (window["minutes_HMS" + e] = "0" + window["minutes_HMS" + e]), window["seconds_HMS" + e].toString().length < 2 && (window["seconds_HMS" + e] = "0" + window["seconds_HMS" + e]), S(n, window["hours_HMS" + e] + t.timeSeparator + window["minutes_HMS" + e] + t.timeSeparator + window["seconds_HMS" + e]), 0 == window["hours_HMS" + e] && 0 == window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e] ? (delete window["hours_HMS" + e], delete window["minutes_HMS" + e], delete window["seconds_HMS" + e], clearInterval(window["timer_HMS" + e]), c(n, t)) : 0 != window["hours_HMS" + e] && 0 == window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e] ? (window["hours_HMS" + e]--, window["minutes_HMS" + e] = 59, window["seconds_HMS" + e] = 60 - t.tickInterval) : 0 == window["hours_HMS" + e] && 0 != window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e] ? (window["minutes_HMS" + e]--, window["seconds_HMS" + e] = 60 - t.tickInterval) : 0 != window["hours_HMS" + e] && 0 != window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e] ? (window["minutes_HMS" + e]--, window["seconds_HMS" + e] = 60 - t.tickInterval) : window["seconds_HMS" + e] -= t.tickInterval) : (window["hours_HMS" + e].toString().length < 2 && (window["hours_HMS" + e] = "0" + window["hours_HMS" + e]), window["minutes_HMS" + e].toString().length < 2 && (window["minutes_HMS" + e] = "0" + window["minutes_HMS" + e]), window["seconds_HMS" + e].toString().length < 2 && (window["seconds_HMS" + e] = "0" + window["seconds_HMS" + e]), S(n, window["hours_HMS" + e] + t.timeSeparator + window["minutes_HMS" + e] + t.timeSeparator + window["seconds_HMS" + e]), window["seconds_HMS" + e] -= t.tickInterval, 0 != window["minutes_HMS" + e] && window["seconds_HMS" + e] < 0 && (window["minutes_HMS" + e]--, window["seconds_HMS" + e] = 60 - t.tickInterval), 0 == window["minutes_HMS" + e] && window["seconds_HMS" + e] < 0 && 0 != window["hours_HMS" + e] && (window["hours_HMS" + e]--, window["minutes_HMS" + e] = 59, window["seconds_HMS" + e] = 60 - t.tickInterval), 0 == window["minutes_HMS" + e] && window["seconds_HMS" + e] < 0 && 0 == window["hours_HMS" + e] && (delete window["hours_HMS" + e], delete window["minutes_HMS" + e], delete window["seconds_HMS" + e], clearInterval(window["timer_HMS" + e]), c(n, t))), e = null
    }

    function a(n, t, e) {
        var o = n.attr("id"),
            i = "withnoStart" == e ? window["dateTime" + o] : window["endDate" + o],
            w = "withnoStart" == e ? window["startTime" + o] : window["startDate" + o],
            d = Math.floor((i - w) / 864e5),
            s = Math.floor((i - w) % 864e5 / 36e5),
            r = Math.floor((i - w) % 864e5 / 6e4) % 60,
            a = Math.floor((i - w) % 864e5 / 1e3) % 60 % 60;
        i - w > 0 ? (d.toString().length < 2 && (d = "0" + d), s.toString().length < 2 && (s = "0" + s), r.toString().length < 2 && (r = "0" + r), a.toString().length < 2 && (a = "0" + a), S(n, d + t.timeSeparator + s + t.timeSeparator + r + t.timeSeparator + a), "withnoStart" == e ? window["startTime" + o].setSeconds(window["startTime" + o].getSeconds() + t.tickInterval) : window["startDate" + o].setSeconds(window["startDate" + o].getSeconds() + t.tickInterval)) : (S(n, "00" + t.timeSeparator + "00" + t.timeSeparator + "00" + t.timeSeparator + "00"), "withnoStart" == e ? (delete window["dateTime" + o], delete window["startTime" + o], clearInterval(window["timer_givenDate" + o])) : "withStart" == e && (delete window["startDate" + o], delete window["endDate" + o], clearInterval(window["timer_startDate" + o])), c(n, t)), o = null
    }

    function _(n, t) {
        if (1 == window["currentTime" + n.attr("id")]) {
            var e = new Date,
                o = e.getHours(),
                i = e.getMinutes(),
                w = e.getSeconds();
            o.toString().length < 2 && (o = "0" + o), i.toString().length < 2 && (i = "0" + i), w.toString().length < 2 && (w = "0" + w), S(n, o + t.timeSeparator + i + t.timeSeparator + w)
        } else alert("Set Current Time option.")
    }

    function u(n) {
        var t = n.attr("id");
        window["countSeconds" + t].toString().length < 2 && (window["countSeconds" + t] = "0" + window["countSeconds" + t]), S(n, window["countSeconds" + t] + " sec"), window["countSeconds" + t]--, -1 == window["countSeconds" + t] && (delete window["countSeconds" + t], clearInterval(window["timer_secondsTimer" + t])), t = null
    }

    function c(t, e) {
        null != e.timeUp && 1 == n.isFunction(e.timeUp) && e.timeUp.apply(t, []), null != e.expiryUrl && (window.location = e.expiryUrl)
    }

    function S(n, t) {
        var e = t;
        if ("undefined" != typeof window["regexpMatchFormat_" + n.attr("id")] && "undefined" != typeof window["regexpReplaceWith_" + n.attr("id")]) {
            var o = new RegExp(window["regexpMatchFormat_" + n.attr("id")]);
            e = t.replace(o, window["regexpReplaceWith_" + n.attr("id")])
        }
        n.html(e)
    }

    function l(t, e, o, i) {
        n("#" + o.pauseButton).click(function () {
            "resume" != n(this).val() ? (n("#" + o.pauseButton).val("resume").text("Resume"), clearInterval(window["timer_" + e + t.attr("id")])) : "resume" == n(this).val() && (n("#" + o.pauseButton).val("pause").text("Pause"), window["timer_" + e + t.attr("id")] = setInterval(function () {
                i(t, o)
            }, 1e3 * o.tickInterval))
        })
    }

    function H(t, e, o, i) {
        n("#" + o.stopButton).click(function () {
            "start" != n(this).val() ? (n("#" + o.stopButton).val("start").text("Start"), clearInterval(window["timer_" + e + t.attr("id")]), window["hours_" + e + t.attr("id")] = o.hours, window["minutes_" + e + t.attr("id")] = o.minutes, window["seconds_" + e + t.attr("id")] = o.seconds, i(t, o)) : "start" == n(this).val() && (n("#" + o.stopButton).val("stop").text("Stop"), window["timer_" + e + t.attr("id")] = setInterval(function () {
                i(t, o)
            }, 1e3 * o.tickInterval))
        })
    }
    n.fn.countdowntimer = function (e) {
        return this.each(function () {
            t(n(this), e)
        })
    }, n.fn.countdowntimer.defaults = {
        hours: 0,
        minutes: 0,
        seconds: 60,
        startDate: new Date,
        dateAndTime: new Date("0000/00/00 00:00:00"),
        currentTime: !1,
        size: "sm",
        borderColor: "#F0068E",
        fontColor: "#FFFFFF",
        backgroundColor: "#000000",
        timeSeparator: ":",
        tickInterval: 1,
        timeUp: null,
        expiryUrl: null,
        regexpMatchFormat: null,
        regexpReplaceWith: null,
        pauseButton: null,
        stopButton: null
    }
}(jQuery);

function shwotom() {
    jQuery("#Tomorrow").addClass("acti").siblings().removeClass("acti"), jQuery(".titleG").html("3735769880916304873"), jQuery("a#tom").addClass("active").siblings().removeClass("active");
}

function shwotod() {
    jQuery("#Today").addClass("acti").siblings().removeClass("acti"), jQuery(".titleG").html("3735769880916304873"), jQuery("a#tod").addClass("active").siblings().removeClass("active");
}

function shwoyas() {
    jQuery("#yesterday").addClass("acti").siblings().removeClass("acti"), jQuery(".titleG").html("3735769880916304873"), jQuery("a#yas").addClass("active").siblings().removeClass("active");
}


jQuery(document).ready(function () {
    jQuery("a.AlbaSposrTable .date").each(function () {
        var t = jQuery(this),
            a = t.data("start"),
            e = t.data("gameends"),
            r = moment(a, "YYYY-MM-DD HH:mm"),
            n = moment(e, "YYYY-MM-DD HH:mm"),
            s = moment.utc().format("YYYY-MM-DD HH:mm"),
            m = r.subtract(2, "hours").diff(s, "minutes"),
            o = n.subtract(2, "hours").diff(s, "minutes");
        switch (!0) {
        case 30 < m:
            var i = moment.utc(a).subtract(2, "hours").toDate();
            t.parent().find(".fc_time").text(moment(i).format("LT").replace("PM", "PM").replace("AM", "AM")), i = moment(i).format("YYYY-MM-DD HH:mm"), t.parent().parent().parent().parent().find(".hoverG div").html(" لم تبدأ  Ø§Ù„Ù…Ø¨Ø§Ø±Ø§Ø© Ø¨Ø¹Ø¯"), t.parent().parent().parent().parent().find(".AlbaTableTime span.bouton").html(" لم تبدأ "), t.parent().parent().parent().parent().addClass("notstarted"), t.countdowntimer({
                dateAndTime: i
            });
            break;
        case 0 < m:
            i = moment.utc(a).subtract(2, "hours").toDate(), t.parent().find(".fc_time").text(moment(i).format("LT").replace("PM", "PM").replace("AM", "AM")), i = moment(i).format("YYYY-MM-DD HH:mm"), t.parent().parent().parent().parent().find(".AlbaTableTime span.bouton").html(" ØªØ¨Ø¯Ø£ Ù‚Ø±ÙŠØ¨Ø§ "), t.parent().parent().parent().parent().addClass("started"), t.parent().parent().parent().parent().find(".hoverG div").html("ØªØ¨Ø¯Ø£ Ø§Ù„Ù…Ø¨Ø§Ø±Ø§Ø© Ù‚Ø±ÙŠØ¨Ø§"), i = moment.utc(a).subtract(2, "hours").toDate(), i = moment(i).format("YYYY-MM-DD HH:mm"), t.countdowntimer({
                dateAndTime: i
            });
            break;
        case 0 < o:
            i = moment.utc(a).subtract(2, "hours").toDate(), t.parent().find(".fc_time").text(moment(i).format("LT").replace("PM", "PM").replace("AM", "AM")), i = moment(i).format("YYYY-MM-DD HH:mm"), t.parent().parent().parent().parent().find(".AlbaTableTime span.bouton").html("Ø¬Ø§Ø±ÙŠØ© Ø§Ù„Ø§Ù†"), t.parent().parent().parent().parent().addClass("runing"), t.parent().parent().parent().parent().find(".hoverG div").html("Ø´Ø§Ù‡Ø¯ Ø§Ù„Ù…Ø¨Ø§Ø±Ø© Ø§Ù„Ø§Ù†");
            break;
        default:
            t.parent().parent().parent().parent().find(".AlbaTableTime span.bouton").html("Ø§Ù†ØªÙ‡Øª"), t.parent().parent().parent().parent().find(".hoverG div").html("Ø§Ù†ØªÙ‡Øª Ø§Ù„Ù…Ø¨Ø§Ø±Ø§Ø©"), t.parent().parent().parent().parent().addClass("endded")
        }
    })
});
if (jQuery(window).width() < 500) {
    jQuery(".competition_slide .cover").click(function () {
        var single_slide = jQuery(this).parent();
        var slide_header = single_slide.children(".cover");
        var slide_action = single_slide.children(".action");
        slide_action.toggle();
        single_slide.toggleClass("opened");
    });
}


jQuery(".server-name a").click(function () {
    jQuery(".server-name a").removeClass("active");
    jQuery(this).addClass("active");
});
