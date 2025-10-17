function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function solveCaptcha(imageUrl) {
    // Simulate solving captcha by returning a fixed text after a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Solved Captcha Text');
        }, 15000);
    });
}

window.onload = async function() {
    const urlParam = getUrlParameter('url');
    const captchaImage = document.getElementById('captcha-image');
    const solvedTextElement = document.getElementById('solved-text');

    if (urlParam) {
        captchaImage.src = urlParam;
    }

    const solvedText = await solveCaptcha(captchaImage.src);
    solvedTextElement.textContent = solvedText;
};
