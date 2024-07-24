function toggleTheme() {
    const SunImg = document.getElementById('SunImg');
    const MoonImg = document.getElementById('MoonImg');
    const main = document.getElementById('main');
    const SCButton = document.getElementById('SCButton');
    const BDButton = document.getElementById('BDButton');

    // /////////////////
    if (MoonImg.style.display === 'none') {
        MoonImg.style.display = 'block';
    } else {
        MoonImg.style.display = 'none';
    }

    if (SunImg.style.display === 'block') {
        SunImg.style.display = 'none';
    } else {
        SunImg.style.display = 'block';
    }

    // /////////////////

    if (main.classList.contains('mainD')) {
        main.classList.remove('mainD');
        main.classList.add('mainL');
    } else {
        main.classList.remove('mainL');
        main.classList.add('mainD');
    }

    // /////////////////

    if (SCButton.classList.contains('SCButtonD')) {
        SCButton.classList.remove('SCButtonD');
        SCButton.classList.add('SCButtonL');
    } else {
        SCButton.classList.remove('SCButtonL');
        SCButton.classList.add('SCButtonD');
    }

    // /////////////////

    if (BDButton.classList.contains('BDButtonD')) {
        BDButton.classList.remove('BDButtonD');
        BDButton.classList.add('BDButtonL');
    } else {
        BDButton.classList.remove('BDButtonL');
        BDButton.classList.add('BDButtonD');
    }

    
    // /////////////////
    if (SCButton.classList.contains('activeB1D')) {
        SCButton.classList.add('activeB1L');
        SCButton.classList.remove('activeB1D');
    } else if (SCButton.classList.contains('activeB1L')) {
        SCButton.classList.add('activeB1D');
        SCButton.classList.remove('activeB1L');
    }

    // /////////////////

    if (BDButton.classList.contains('activeB2D')) {
        BDButton.classList.add('activeB2L');
        BDButton.classList.remove('activeB2D');
    } else if (BDButton.classList.contains('activeB2L')) {
        BDButton.classList.add('activeB2D');
        BDButton.classList.remove('activeB2L');
    }

}

function ShowSCcart() {
    const SCCART = document.getElementById('SCCART');
    const BDCART = document.getElementById('BDCART');

    if (SCCART.classList.contains('SCCARTH')) {
        SCCART.classList.remove('SCCARTH');
        SCCART.classList.add('SCCARTS');
        BDCART.classList.remove('BDCARTS');
        BDCART.classList.add('BDCARTH');
    }

    const BDButton = document.getElementById('BDButton');
    const SCButton = document.getElementById('SCButton');

    if (BDButton.classList.contains('activeB2D')) {
        BDButton.classList.remove('activeB2D');
        SCButton.classList.add('activeB1D');
    } else if (BDButton.classList.contains('activeB2L')) {
        BDButton.classList.remove('activeB2L');
        SCButton.classList.add('activeB1L');
    }
}

function ShowBDcart() {
    const SCCART = document.getElementById('SCCART');
    const BDCART = document.getElementById('BDCART');
    const BDButton = document.getElementById('BDButton');
    const SCButton = document.getElementById('SCButton');

    if (SCButton.classList.contains('activeB1D')) {
        SCButton.classList.remove('activeB1D');
        BDButton.classList.add('activeB2D');
    } else if (SCButton.classList.contains('activeB1L')) {
        SCButton.classList.remove('activeB1L');
        BDButton.classList.add('activeB2L');
    }

    if (BDCART.classList.contains('BDCARTH')) {
        BDCART.classList.remove('BDCARTH');
        BDCART.classList.add('BDCARTS');
        SCCART.classList.remove('SCCARTS');
        SCCART.classList.add('SCCARTH');
    }

}


// function toggleTheme() {

// }