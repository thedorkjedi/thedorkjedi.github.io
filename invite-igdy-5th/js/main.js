window.AddRemoveClasses = function(arrObj) {
    arrObj.map(function(e) {
        var dom = e.dom,
            cls = e.cls,
            func = e.func === "add" ? "add" : "remove";

        dom.classList[func](cls);
    });
}

window.getFirstEL = function(dom) {
    return document.querySelectorAll(dom)[0];
}

window.focusSubmit = function() {
    var submit = document.querySelectorAll('.submit');
    for(var i = 0; i < submit.length; i++) {
        submit[i].focus();
    }
}

window.trackProgress = function(prog){
    window.progNum = prog | 0;

    var progress = function(prog) {
        return prog + 1;
    }

    return progress(prog);
}

window.PreLoadAllImages = function() {
    var [images, numberofimages, loadedimages] = [[], 0, 0],
        preload = function () {
            var [numberofimages, rand] = [
                    preload.arguments.length,
                    ['wait a minute', 'wait some more', 'i guess wait again', 'a little bit more', 'yes, just wait', 'hang on you sod']
                ];

            for (i = 0; i < preload.arguments.length; i++) {
                images[i] = new Image();
                images[i].src = preload.arguments[i];
                images[i].onload = () => {
                    loadedimages++;
                    if(loadedimages == numberofimages){
                        console.info('YES!');
                        AddRemoveClasses([{ dom: document.body, cls: 'hidden', func: 'remove' }])
                    } else {
                        console.info(rand[(Math.floor(Math.random() * 5) + 1)]);
                    }
                }
            }
        }

    preload(
        'img/bg-init.png',
        'img/initial-guard.png',
        'img/krusty-inner.png',
        'img/krusty-kitchen.png',
        'img/not-invited.png',
        'img/sqdwrd.png',
        'img/spbob.png',
        'img/angry.gif',
    );
}

window.focusInput = function(){
    document.getElementById('invite-name').focus();
}

window.notInvited = function(){
    var [initText, form, ptrck] = [
            getFirstEL('.invite-init'),
            getFirstEL('.change-line-height'),
            getFirstEL('.ptrck-init')
    ];

    AddRemoveClasses([{
        dom: initText,
        cls: 'hidden',
        func: 'add'
    }, {
        dom: form,
        cls: 'hidden',
        func: 'add'
    }, {
        dom: ptrck,
        cls: 'hidden',
        func: 'add'
    }]);

    var [show, ptrckNot] = [
            getFirstEL('.not-invited'),
            getFirstEL('.ptrck-not')
        ];

    AddRemoveClasses([{
        dom: show,
        cls: 'hidden',
        func: 'remove'
    }, {
        dom: ptrckNot,
        cls: 'hidden',
        func: 'remove'
    }]);
};

window.generateIvt = function(name){
    var invite = "data:image/png;base64," + ivt;
    var tag = document.querySelectorAll('.e-vite')[0];

    tag.setAttribute('href', invite);
    tag.setAttribute('download', name + "-invite");
};

window.inviteTries = 0;
window.checkInvite = function() {
    var textInput = document.getElementById('invite-name'),
        lastName = (textInput.value).replace(/\s/g, '').replace(/\//g, '').replace(/"/g,'').replace(/\\/g,'').toLowerCase(),
        mList = (atob(masterList)).split('*'),
        invitedList = mList.map((e) => {
            return atob(e);
        });

    var isInvited = function(lt) {
        AddRemoveClasses([{
            dom: document.body,
            cls: 'invited-bg',
            func: 'add'
        }]);

        var [ptrck, screen, invtd, invtee] = [
            getFirstEL('.ptrck-init'),
            getFirstEL('.screen'),
            getFirstEL('.invited-screen'),
            document.getElementById('name-invitee')
        ];

        AddRemoveClasses([{
            dom: ptrck,
            cls: 'hidden',
            func: 'add'
        }, {
            dom: screen,
            cls: 'hidden',
            func: 'add'
        }, {
            dom: invtd,
            cls: 'hidden',
            func: 'remove'
        }]);

        invtee.innerHTML =  lt.charAt(0).toUpperCase() + lt.slice(1);
        generateIvt(lt);
    };

    if(lastName.length > 0) {                
        var check = (invitedList.filter((e) => {
            return e === lastName;
        })).length > 0 ? true : false;

        if(check) { 
            isInvited(lastName);
            trackProgress(1);
            focusSubmit();
        } else { 
            notInvited(); 
        }
    } else {
        if(inviteTries > 3) {
            document.body.classList.add('angry-patrick');
        }
    }

    inviteTries = inviteTries+1;
};

window.keypress = function(inp) {
    if(inp?.value?.length > 0 && window.event?.keyCode === 13) {
        if(typeof(progNum) === 'undefined') {
            checkInvite();
        } else {
            switch(progNum) {
                case 1: incrementSpeech(); break;
                case 2: incrementLast(); break;
            }
        }
    }
}

window.incrementSpeech = function() {
    var secIteration = document.getElementById('speech-second-iteration'),
        speechList = [{
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
        }];

    if(parseInt(secIteration.value) < 4) {
        var [dialogs, confirms] = [
                document.querySelectorAll('.second-speech-dialog'),
                document.querySelectorAll('.second-speech-confirm')
            ];

        for(var i = 0; i < speechList.length; i ++){
            AddRemoveClasses([{
                dom: dialogs[i],
                cls: 'hidden',
                func: 'add'
            }, {
                dom: confirms[i],
                cls: 'hidden',
                func: 'add'
            }]);
        }

        var currVal = parseInt(secIteration.value) + 1;

        AddRemoveClasses([{
            dom: dialogs[currVal],
            cls: 'hidden',
            func: 'remove'
        }, {
            dom: confirms[currVal],
            cls: 'hidden',
            func: 'remove'
        }]);
        
        secIteration.value = currVal;
    } else {
        showLastPage();
        trackProgress(2);
    }
}

window.showLastPage = function() {
    AddRemoveClasses([{
        dom: document.body,
        cls: 'kitchen-bg',
        func: 'add'
    }]);

    var [invtdscr, lastscr] = [
        getFirstEL('.invited-screen'), 
        getFirstEL('.last-screen')
    ];

    AddRemoveClasses([{
        dom: invtdscr,
        cls: 'hidden',
        func: 'add'
    }, {
        dom: lastscr,
        cls: 'hidden',
        func: 'remove'
    }]);

    focusSubmit();
    trackProgress(3);
};


window.downloadCtr = 0;
window.downloadOnce = function() {
    if(downloadCtr > 0){
        var tag = document.querySelectorAll('.e-vite')[0];
        tag.removeAttribute('href');
        tag.removeAttribute('download');
    } else {
        downloadCtr = downloadCtr + 1;
    }
}

window.incrementLast = function() {
    var [lastscrns, progress, lastconfirms] = [
        document.querySelectorAll('.last-spb'),
        document.getElementById('last-prog'),
        document.querySelectorAll('.last-confirm')
    ];

    progress.value = progress.value < 3 ? parseInt(progress.value) + 1 : progress.value;

    var hideScreens = function(currDialog, progVal) {
        for(var i=0; i < lastscrns.length; i++) {
            AddRemoveClasses([{
                dom: lastscrns[i],
                cls: 'hidden',
                func: 'add'
            }]);

            if(lastconfirms[i]?.hasChildNodes()){
                AddRemoveClasses([{
                    dom: lastconfirms[i],
                    cls: 'hidden',
                    func: 'add'
                }]);
            }
        }

        for(var j=0; j<document.querySelectorAll('.ls-'+ currDialog).length; j++) { 
            AddRemoveClasses([{
                dom: document.querySelectorAll('.ls-' + currDialog)[j],
                cls: 'hidden',
                func: 'remove'
            }])
        };

        AddRemoveClasses([{
            dom: document.querySelectorAll('.last-confirm')[progVal],
            cls: 'hidden',
            func: 'remove',
        }]);
    }

    switch(parseInt(progress.value)) {
        case 1: 
            hideScreens('two', progress.value);

            break;
        case 2: 
            hideScreens('three', progress.value);

            AddRemoveClasses([{
                dom: document.querySelectorAll('.last-screen .submit')[0],
                cls: 'hidden',
                func: 'add',
            }]);

            break;
    }
}


PreLoadAllImages();