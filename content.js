let isLoop = false;

var checkExist = setInterval(function() {
    let target = document.querySelector('#meta-contents #subscribe-button');
    if (target) {
        let content = '<button id="loop-button" class="style-scope ytd-video-secondary-info-renderer">Loop</button>';
        let child = document.createElement('div');
        child.innerHTML = content;
        child = child.firstChild;
        target.insertAdjacentElement('beforebegin', child);
        document.getElementById('loop-button').addEventListener('click', function(){
            let loopBtn = document.getElementsByClassName('html5-main-video')[0];
            if (loopBtn) {
                if (isLoop==false) {
                    loopBtn.setAttribute('loop', true);
                    this.innerText = "Unloop";
                    isLoop = true;
                }
                else {
                    loopBtn.removeAttribute('loop');
                    this.innerText = "Loop";
                    isLoop = false;
                }
            }
        });
        clearInterval(checkExist);
    }
 }, 100); // check every 100ms
