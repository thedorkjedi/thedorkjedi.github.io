window.PreLoadAllImages = function() {
    var images = new Array();
    var numberofimages = 0, loadedimages = 0;
    function preload() {
        numberofimages = preload.arguments.length;
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
            images[i].onload = () => {
                loadedimages++;
                if(loadedimages == numberofimages){
                    console.info('loaded');
                    document.body.classList.remove('hidden');
                } else {
                    console.info('error');
                }
            }
        }
    }

    preload(
        'img/bg-init.png',
        'img/initial-guard.png',
        'img/krusty-inner.png',
        'img/krusty-inner-og.png',
        'img/krusty-kitchen.png',
        'img/not-invited.png',
        'img/sqdwrd.png',
    );
}

window.notInvited = function(){
    var initText = document.querySelectorAll('.invite-init')[0];
    var form = document.querySelectorAll('.change-line-height')[0];
    var ptrck = document.querySelectorAll('.ptrck-init')[0];
    initText.classList.add('hidden');
    form.classList.add('hidden');
    ptrck.classList.add('hidden');

    var show = document.querySelectorAll('.not-invited')[0];
    var ptrckNot = document.querySelectorAll('.ptrck-not')[0];
    show.classList.remove('hidden');
    ptrckNot.classList.remove('hidden');
};

window.checkInvite = function() {
    var textInput = document.getElementById('invite-name');
    var lastName = (textInput.value).replace(/\s/g, '').replace(/\//g, '').replace(/"/g,'').replace(/\\/g,'').toLowerCase();
    var mList = (atob(masterList)).split('*');
    var invitedList = mList.map((e) => {
        return atob(e);
    });

    var isInvited = function(lt) {
        document.body.classList.add('invited-bg');

        var ptrck = document.querySelectorAll('.ptrck-init')[0];
        var screen = document.querySelectorAll('.screen')[0];
        var invtd = document.querySelectorAll('.invited-screen')[0];
        var invtee = document.getElementById('name-invitee');

        ptrck.classList.add('hidden');
        screen.classList.add('hidden');

        invtd.classList.remove('hidden');

        invtee.innerHTML =  lt.charAt(0).toUpperCase() + lt.slice(1);;
    };

    if(lastName.length > 0) {                
        var check = (invitedList.filter((e) => {
            return e === lastName;
        })).length > 0 ? true : false;

        if(check) {
            isInvited(lastName);
        } else {
            notInvited();
        }
    }
};

window.keypress = function(inp) {
    if(inp?.value?.length > 0 && event?.keyCode === 13) {
        checkInvite();
    }
}

window.incrementSpeech = function() {
    var secIteration = document.getElementById('speech-second-iteration');
    var speechList = [{
        'speech': '.second-initial',
        'confirm': '.confirm-first',
    }, {
        'speech': '.second-dresscode',
        'confirm': '.sec-confirm',
    },{
        'speech': '.second-dresscode-gallery',
        'confirm': '.third-confirm',
    },{
        'speech': '.second-time',
        'confirm': '.fourth-confirm',
    },{
        'speech': '.second-last',
        'confirm': '.fifth-confirm',
    },];

    if(parseInt(secIteration.value) < 4) {
        var dialogs = document.querySelectorAll('.second-speech-dialog');
        var confirms = document.querySelectorAll('.second-speech-confirm');

        for(var i = 0; i < speechList.length; i ++){
            dialogs[i].classList.add('hidden');
            confirms[i].classList.add('hidden')
        }

        var currVal = parseInt(secIteration.value) + 1;
        
        dialogs[currVal].classList.remove('hidden');
        confirms[currVal].classList.remove('hidden');

        secIteration.value = currVal;
    } else {
        showLastPage();
    }
}

window.showLastPage = function() {
    document.body.classList.add('kitchen-bg');
    var invtdscr = document.querySelectorAll('.invited-screen')[0],
        lastscr = document.querySelectorAll('.last-screen')[0];

    invtdscr.classList.add('hidden');
    lastscr.classList.remove('hidden');

};


PreLoadAllImages();