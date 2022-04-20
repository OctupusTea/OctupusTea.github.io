// ==UserScript==
// @name         Bejeweled Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bejeweled theme for Jstris
// @author       Octupus Tea
// @match        https://*.jstris.jezevec10.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Constant values that can be altered for further customisation
    // theme stash
    const repo = "https://octupustea.github.io/jstris-customisation/bejeweled-theme/";
    // background image url
    const background_image = "https://i.imgur.com/x0fjol7.jpg";
    // skin url
    const skin_image = repo + "skin.png";
    // set to `true` to use different ghost texture from transparent skin
    const use_ghost = false;
    // ghost skin url, effective only when `use_ghost == true`
    const ghost_image = "";

    // Block skin and ghost skin customisation
    loadSkin(skin_image);
    if (use_ghost) {
        loadGhostSkin(ghost_image, 48)
    }

    // Background customisation
    document.head.getElementsByTagName("style")[0].innerHTML = "";
    document.getElementById("BG_only").style.background = "rgba(0, 0, 0, 0.6) url('"+ background_image + "')";
    document.getElementById("BG_only").style.backgroundBlendMode = "darken";
    document.getElementById("BG_only").style.backgroundSize = "cover";
    document.getElementById("app").style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    document.getElementById("app").style.height = "auto auto";

    // SFX customisation
    function CustomSFXset() {
        this.volume = 0.5;
        // b2b bonus sound
        this.b2b = {url:repo + "sfx/b2b.ogg", abs:1};
        // combo sound (in a single sound file), starts from 0 to `cnt - 1` combo
        // each sound last for `duration` milliseconds and there are `spacing` milliseconds between sounds
        this.comboTones = {url:repo + "sfx/combo.ogg", abs:1, duration:1500, spacing:500, cnt:13};
        // topout sound
        this.died = {url:repo + "sfx/died.ogg", abs:1};
        // go sound (`go` for singleplayer game and `golive` for live game)
        this.go = {url:repo + "sfx/go.ogg", abs:1};
        this.golive = {url:repo + "sfx/golive.ogg", abs:1};
        // hold sound
        this.hold = {url:repo + "sfx/hold.ogg", abs:1};
        // block landing sound
        this.land = {url:repo + "sfx/land.ogg", abs:1};
        // No idea what's this for - Octupus Tea
        this.linefall = null;
        // block locking sound, also plays when harddrop
        this.lock = {url:repo + "sfx/lock.ogg", abs:1};
        // block moving sound
        this.move = null;
        // ready sound before go
        this.ready = {url:repo + "sfx/ready.ogg", abs:1};
        // block rotating sound
        this.rotate = {url:repo + "sfx/rotate.ogg", abs:1};
        // lineclear sound
        this.scoring = [
            // [0]: SOFT_DROP (Doesn't play in my test whatsoever - Octupus Tea)
            null,
            // [1]: HARD_DROP (Doesn't play in my test whatsoever - Octupus Tea)
            null,
            // [2]: CLEAR1
            {url:repo + "sfx/score_clearbasic.ogg", abs:1},
            // [3]: CLEAR2
            {url:repo + "sfx/score_clearbasic.ogg", abs:1},
            // [4]: CLEAR3
            {url:repo + "sfx/score_clearbasic.ogg", abs:1},
            // [5]: CLEAR4
            {url:repo + "sfx/score_cleargreat.ogg", abs:1},
            // [6]: TSPIN_MINI
            {url:repo + "sfx/score_spin.ogg", abs:1},
            // [7]: TSPIN
            {url:repo + "sfx/score_spin.ogg", abs:1},
            // [8]: TSPIN_MINI_SINGLE
            {url:repo + "sfx/score_spinbasic.ogg", abs:1},
            // [9]: TSPIN_SINGLE
            {url:repo + "sfx/score_spinbasic.ogg", abs:1},
            // [10]: TSPIN_DOUBLE
            {url:repo + "sfx/score_spingreat.ogg", abs:1},
            // [11]: TSPIN_TRIPLE
            {url:repo + "sfx/score_spingreater.ogg", abs:1},
            // [12]: PERFECT_CLEAR
            {url:repo + "sfx/score_pc.ogg", abs:1},
            // [13]: COMBO (Doesn't play in my test whatsoever - Octupus Tea)
            null,
            // [14]: CLEAR5
            {url:repo + "sfx/score_cleargreater.ogg", abs:1}
        ];
    };
    CustomSFXset.prototype = new BaseSFXset;
    loadSFX(new CustomSFXset);
})();