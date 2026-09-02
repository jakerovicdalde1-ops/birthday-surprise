/* =====================================================
   SECRET CODE
===================================================== */

const SECRET_CODE = "0905";


/* =====================================================
   ELEMENTS
===================================================== */

const lockScreen =
    document.getElementById("lockScreen");

const transitionScreen =
    document.getElementById("transitionScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const passwordInput =
    document.getElementById("passwordInput");

const unlockButton =
    document.getElementById("unlockButton");

const errorMessage =
    document.getElementById("errorMessage");

const transitionText =
    document.getElementById("transitionText");

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

const birthdayPhase =
    document.getElementById("birthdayPhase");

const letterPhase =
    document.getElementById("letterPhase");

const celebratePhase =
    document.getElementById("celebratePhase");

const galleryPhase =
    document.getElementById("galleryPhase");

const endingPhase =
    document.getElementById("endingPhase");

const continueToLetter =
    document.getElementById("continueToLetter");

const openLetter =
    document.getElementById("openLetter");

const continueToCelebrate =
    document.getElementById("continueToCelebrate");

const celebrateButton =
    document.getElementById("celebrateButton");

const continueToGallery =
    document.getElementById("continueToGallery");

const continueToEnding =
    document.getElementById("continueToEnding");

const envelope =
    document.getElementById("envelope");

const typedLetter =
    document.getElementById("typedLetter");


/* =====================================================
   HELPER
===================================================== */

function sleep(ms) {

    return new Promise(
        resolve => setTimeout(resolve, ms)
    );

}


/* =====================================================
   PHASE SWITCHING
===================================================== */

function showPhase(phase) {

    birthdayPhase.classList.add(
        "hidden"
    );

    letterPhase.classList.add(
        "hidden"
    );

    celebratePhase.classList.add(
        "hidden"
    );

    galleryPhase.classList.add(
        "hidden"
    );

    endingPhase.classList.add(
        "hidden"
    );


    phase.classList.remove(
        "hidden"
    );
}


/* =====================================================
   BACKGROUND EFFECTS
===================================================== */

function createBackgroundEffects() {

    const stars =
        document.getElementById(
            "stars"
        );

    const particles =
        document.getElementById(
            "particles"
        );

    const hearts =
        document.getElementById(
            "hearts"
        );


    for (let i = 0; i < 80; i++) {

        const star =
            document.createElement(
                "div"
            );

        star.className =
            "star";


        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.animationDelay =
            `${Math.random() * 3}s`;


        stars.appendChild(
            star
        );
    }


    const particleTypes = [
        "✨",
        "✦",
        "⋆",
        "♡"
    ];


    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement(
                "div"
            );

        particle.className =
            "particle";


        particle.textContent =
            particleTypes[
                Math.floor(
                    Math.random() *
                    particleTypes.length
                )
            ];


        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${5 + Math.random() * 5}s`;

        particle.style.animationDelay =
            `${Math.random() * 7}s`;


        particles.appendChild(
            particle
        );
    }


    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement(
                "div"
            );

        heart.className =
            "heart-particle";


        heart.textContent =
            Math.random() > .5
                ? "💕"
                : "❤️";


        heart.style.left =
            `${Math.random() * 100}%`;

        heart.style.animationDuration =
            `${6 + Math.random() * 5}s`;

        heart.style.animationDelay =
            `${Math.random() * 7}s`;


        hearts.appendChild(
            heart
        );
    }
}


/* =====================================================
   MUSIC
===================================================== */

birthdayMusic.volume = 0.55;


async function startMusic() {

    try {

         birthdayMusic.play();

        musicButton.textContent =
            "🎵 Music is playing";

    } catch (error) {

        console.log(
            "Music could not start automatically.",
            error
        );

        musicButton.textContent =
            "🎵 Play music";
    }
}


musicButton.addEventListener(
    "click",
    async () => {

        if (
            birthdayMusic.paused
        ) {

            try {

                await birthdayMusic.play();

                musicButton.textContent =
                    "🎵 Music is playing";

            } catch (error) {

                console.log(error);

            }

        } else {

            birthdayMusic.pause();

            musicButton.textContent =
                "🎵 Music is paused";
        }

    }
);


/* =====================================================
   UNLOCK
===================================================== */

unlockButton.addEventListener(
    "click",
    unlockSurprise
);


passwordInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            unlockSurprise();

        }

    }
);


async function unlockSurprise() {

    const enteredCode =
        passwordInput.value.trim();


    if (
        enteredCode !==
        SECRET_CODE
    ) {

        errorMessage.textContent =
            "Hmm... that's not the secret code. 🤭❤️";


        passwordInput.value = "";

        passwordInput.focus();

        return;
    }


    errorMessage.textContent =
        "";

    unlockButton.disabled =
        true;

    passwordInput.disabled =
        true;


    lockScreen.classList.add(
        "hidden"
    );

    transitionScreen.classList.remove(
        "hidden"
    );


    /*
     * Start music during a real
     * user interaction.
     */

    await startMusic();


    const messages = [

        "Unlocking your surprise... 💕",

        "Just a little something for you... ✨",

        "Almost there... 🥺",

        "Happy Birthday! ❤️"

    ];


    for (
        const message
        of messages
    ) {

        transitionText.textContent =
            message;

        await sleep(850);

    }


    transitionScreen.classList.add(
        "hidden"
    );

    birthdayScreen.classList.remove(
        "hidden"
    );


    createBackgroundEffects();
}


/* =====================================================
   BIRTHDAY → LETTER
===================================================== */

continueToLetter.addEventListener(
    "click",
    () => {

        showPhase(
            letterPhase
        );

    }
);


/* =====================================================
   LETTER CONTENT
===================================================== */

const letterParagraphs = [

    "Happy Birthday! 🎉🥳",

    "I hope this day brings you lots of happiness, love, and beautiful moments that you'll remember.",

    "I also hope that you're surrounded by people who genuinely care about you and appreciate you for who you are. May this year bring you new experiences, unforgettable memories, unexpected blessings, and plenty of reasons to smile.",

    "As you start another year of your life, I hope you continue to grow, learn, and become the person you want to be. May you achieve the goals you've been working for, overcome whatever challenges come your way, and always have the strength to keep moving forward.",

    "I'm really glad that I got the chance to know you, and I hope this new chapter brings you closer to everything you've been wishing for.",

    "I hope you never forget how special and important you are to the people around you. No matter what happens, I hope you continue to believe in yourself and keep chasing the things that make you happy.",

    "Enjoy your special day, eat lots of good food, have fun, gala well and make the most of it! 🎂🎈 May this year be one of your best yet. ❤️ More gala to come 🤗 Take care of yourself, and most importantly, don't forget to smile. ❤️",

    "Once again, happy birthday. 🫶"

];


let letterIsTyping =
    false;


/* =====================================================
   OPEN LETTER
===================================================== */

openLetter.addEventListener(
    "click",
    async () => {

        if (
            letterIsTyping
        ) {

            return;

        }


        if (
            envelope.classList.contains(
                "flap-open"
            )
        ) {

            return;

        }


        openLetter.disabled =
            true;


        /*
         * =========================================
         * STEP 1
         * OPEN FLAP
         * =========================================
         */

        envelope.classList.add(
            "flap-open"
        );


        /*
         * Let the flap animation
         * completely play.
         */

        await sleep(1400);


        /*
         * =========================================
         * STEP 2
         * SLIDE LETTER OUT
         * =========================================
         */

        envelope.classList.add(
            "letter-rising"
        );


        /*
         * Wait until paper has
         * visibly risen.
         */

        await sleep(1800);


        /*
         * =========================================
         * STEP 3
         * TYPE MESSAGE
         * =========================================
         */

        await typeLetter();


        openLetter.classList.add(
            "hidden"
        );

    }
);


/* =====================================================
   TYPE LETTER
===================================================== */

async function typeLetter() {

    if (
        letterIsTyping
    ) {

        return;

    }


    letterIsTyping =
        true;


    typedLetter.innerHTML =
        "";


    /*
     * SLOW TYPING
     *
     * 45 milliseconds per character.
     */

    const TYPING_SPEED =
        45;


    for (
        let i = 0;
        i < letterParagraphs.length;
        i++
    ) {

        const paragraph =
            document.createElement(
                "p"
            );


        paragraph.className =
            "typing-paragraph";


        const cursor =
            document.createElement(
                "span"
            );


        cursor.className =
            "typing-cursor";


        paragraph.appendChild(
            cursor
        );


        typedLetter.appendChild(
            paragraph
        );


        /*
         * TYPE ONE CHARACTER AT A TIME
         */

        for (
            const character
            of letterParagraphs[i]
        ) {

            cursor.insertAdjacentText(
                "beforebegin",
                character
            );


            /*
             * IMPORTANT:
             * Scroll the actual letter container.
             */

            const letterContent =
                document.querySelector(
                    ".letter-content"
                );


            if (
                letterContent
            ) {

                letterContent.scrollTop =
                    letterContent.scrollHeight;

            }


            await sleep(
                TYPING_SPEED
            );

        }


        cursor.remove();


        const letterContent =
            document.querySelector(
                ".letter-content"
            );


        if (
            letterContent
        ) {

            letterContent.scrollTop =
                letterContent.scrollHeight;

        }


        /*
         * Pause between paragraphs.
         */

        await sleep(650);

    }


    /*
     * SIGNATURE
     */

    const signature =
        document.createElement(
            "p"
        );


    signature.className =
        "signature";


    signature.textContent =
        "— Rov ❤️";


    typedLetter.appendChild(
        signature
    );


    const letterContent =
        document.querySelector(
            ".letter-content"
        );


    if (
        letterContent
    ) {

        letterContent.scrollTop =
            letterContent.scrollHeight;

    }


    await sleep(800);


    letterIsTyping =
        false;


    continueToCelebrate.classList.remove(
        "hidden"
    );
}


/* =====================================================
   LETTER → CELEBRATION
===================================================== */

continueToCelebrate.addEventListener(
    "click",
    () => {

        showPhase(
            celebratePhase
        );

    }
);


/* =====================================================
   CELEBRATION
===================================================== */

let celebrationStarted =
    false;


celebrateButton.addEventListener(
    "click",
    createCelebration
);


function createCelebration() {

    if (
        celebrationStarted
    ) {

        return;

    }


    celebrationStarted =
        true;


    const overlay =
        document.createElement(
            "div"
        );


    overlay.className =
        "celebration-overlay";


    const message =
        document.createElement(
            "div"
        );


    message.className =
        "celebration-message";


    message.innerHTML =
        "Happy Birthday! ❤️";


    overlay.appendChild(
        message
    );


    const flowerTypes = [

        "🌸",
        "🌷",
        "🌹",
        "🌺",
        "🌼",
        "💐",
        "🌻"

    ];


    for (
        let i = 0;
        i < 85;
        i++
    ) {

        const flower =
            document.createElement(
                "div"
            );


        flower.className =
            "celebration-flower";


        flower.textContent =
            flowerTypes[
                Math.floor(
                    Math.random() *
                    flowerTypes.length
                )
            ];


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            250 +
            Math.random() *
            600;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        const rotation =
            (Math.random() - .5) *
            900;


        flower.style.setProperty(
            "--x",
            `${x}px`
        );


        flower.style.setProperty(
            "--y",
            `${y}px`
        );


        flower.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );


        flower.style.setProperty(
            "--delay",
            `${Math.random() * .7}s`
        );


        flower.style.fontSize =
            `${20 + Math.random() * 24}px`;


        overlay.appendChild(
            flower
        );

    }


    document.body.appendChild(
        overlay
    );


    setTimeout(
        () => {

            overlay.classList.add(
                "fade-out"
            );

        },
        3000
    );


    setTimeout(
        () => {

            overlay.remove();


            continueToGallery.classList.remove(
                "hidden"
            );


            celebrationStarted =
                false;

        },
        3800
    );
}


/* =====================================================
   CELEBRATION → GALLERY
===================================================== */

continueToGallery.addEventListener(
    "click",
    () => {

        showPhase(
            galleryPhase
        );


        startGallery();

    }
);


/* =====================================================
   GALLERY
===================================================== */

const galleryPhotoSources = [

    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photos4.jpg",
    "images/photos5.jpg",
    "images/photos6.jpg",
    "images/photos7.jpg",
    "images/photos8.jpg",
    "images/photos9.jpg",
    "images/photos10.jpg"

];


const galleryWords = [

    "beautiful ✨",
    "memories 💕",
    "special 🌷",
    "Best Smile ❤️"

];


/* =====================================================
   GALLERY SPEED
===================================================== */

/*
 * ONE PHOTO:
 *
 * 5 seconds → center
 * 5 seconds → stay
 * 5 seconds → return
 *
 * Then next photo.
 */

const MOVE_TO_CENTER_DURATION =
    5000;


const CENTER_HOLD_DURATION =
    5000;


const RETURN_TO_ORBIT_DURATION =
    5000;


/* =====================================================
   GALLERY ELEMENTS
===================================================== */

const hologramOrbit =
    document.getElementById(
        "hologramOrbit"
    );


const incomingWord =
    document.getElementById(
        "incomingWord"
    );


/* =====================================================
   GALLERY STATE
===================================================== */

let galleryStarted =
    false;


let galleryAnimationFrame =
    null;


let galleryAngle =
    0;


let galleryActiveIndex =
    0;


let galleryStage =
    "moving-to-center";


let galleryStageStart =
    null;


let galleryLastTime =
    null;


/* =====================================================
   CREATE PHOTOS
===================================================== */

function createGalleryPhotos() {

    hologramOrbit.innerHTML =
        "";


    galleryPhotoSources.forEach(
        (source, index) => {

            const image =
                document.createElement(
                    "img"
                );


            image.className =
                "orbit-photo";


            image.src =
                source;


            image.alt =
                `Memory ${index + 1}`;


            image.dataset.index =
                index;


            hologramOrbit.appendChild(
                image
            );

        }
    );
}


/* =====================================================
   ORBIT TRANSFORM
===================================================== */

function getOrbitTransform(
    index,
    angle
) {

    const total =
        galleryPhotoSources.length;


    const theta =
        angle +
        (
            index /
            total
        ) *
        Math.PI *
        2;


    const radiusX =
        300;


    const radiusY =
        185;


    const x =
        Math.cos(theta) *
        radiusX;


    const y =
        Math.sin(theta) *
        radiusY;


    const z =
        Math.sin(theta) *
        170;


    const depth =
        (z + 170) /
        340;


    const scale =
        .72 +
        depth *
        .28;


    const opacity =
        .48 +
        depth *
        .52;


    const rotateY =
        Math.sin(theta) *
        18;


    const rotateZ =
        Math.cos(theta) *
        4;


    return {

        x,
        y,
        z,
        scale,
        opacity,
        rotateY,
        rotateZ

    };
}


/* =====================================================
   CENTER TRANSFORM
===================================================== */

function getCenterTransform() {

    return {

        x: 0,

        y: 0,

        z: 190,

        scale: 1.55,

        opacity: 1,

        rotateY: 0,

        rotateZ: 0

    };
}


/* =====================================================
   APPLY TRANSFORM
===================================================== */

function applyPhotoTransform(
    image,
    transform
) {

    image.style.transform = `
        translate3d(
            ${transform.x}px,
            ${transform.y}px,
            ${transform.z}px
        )
        scale(${transform.scale})
        rotateY(${transform.rotateY}deg)
        rotateZ(${transform.rotateZ}deg)
    `;


    image.style.opacity =
        transform.opacity;


    image.style.zIndex =
        Math.round(
            transform.z + 300
        );
}


/* =====================================================
   SMOOTH TRANSITION
===================================================== */

function smoothStep(t) {

    return (
        t *
        t *
        (3 - 2 * t)
    );

}


/* =====================================================
   RENDER INITIAL ORBIT
===================================================== */

function renderGalleryOrbit() {

    const photos =
        document.querySelectorAll(
            ".orbit-photo"
        );


    photos.forEach(
        (image, index) => {

            const transform =
                getOrbitTransform(
                    index,
                    galleryAngle
                );


            applyPhotoTransform(
                image,
                transform
            );

        }
    );
}


/* =====================================================
   INTERPOLATE
===================================================== */

function interpolateTransform(
    from,
    to,
    progress
) {

    return {

        x:
            from.x +
            (
                to.x -
                from.x
            ) *
            progress,


        y:
            from.y +
            (
                to.y -
                from.y
            ) *
            progress,


        z:
            from.z +
            (
                to.z -
                from.z
            ) *
            progress,


        scale:
            from.scale +
            (
                to.scale -
                from.scale
            ) *
            progress,


        opacity:
            from.opacity +
            (
                to.opacity -
                from.opacity
            ) *
            progress,


        rotateY:
            from.rotateY +
            (
                to.rotateY -
                from.rotateY
            ) *
            progress,


        rotateZ:
            from.rotateZ +
            (
                to.rotateZ -
                from.rotateZ
            ) *
            progress

    };
}


/* =====================================================
   SHOW GALLERY WORD
===================================================== */

function showGalleryWord(index) {

    const word =
        galleryWords[
            index %
            galleryWords.length
        ];


    incomingWord.textContent =
        word;


    incomingWord.style.opacity =
        "1";


    incomingWord.style.transform =
        "translateX(-50%) scale(1.08)";


    setTimeout(
        () => {

            incomingWord.style.opacity =
                "0";


            incomingWord.style.transform =
                "translateX(-50%) scale(.8)";

        },
        CENTER_HOLD_DURATION - 800
    );
}


/* =====================================================
   GALLERY ANIMATION
===================================================== */

function animateGallery(
    timestamp
) {

    if (
        !galleryStarted
    ) {

        return;

    }


    if (
        galleryStageStart === null
    ) {

        galleryStageStart =
            timestamp;

    }


    if (
        galleryLastTime === null
    ) {

        galleryLastTime =
            timestamp;

    }


    const delta =
        timestamp -
        galleryLastTime;


    galleryLastTime =
        timestamp;


    /*
     * VERY SLOW CONTINUOUS ORBIT.
     */

    galleryAngle +=
        delta *
        0.00008;


    const photos =
        document.querySelectorAll(
            ".orbit-photo"
        );


    const orbitTransforms =
        Array.from(
            photos
        ).map(
            (_, index) =>
                getOrbitTransform(
                    index,
                    galleryAngle
                )
        );


    const centerTransform =
        getCenterTransform();


    /* =================================================
       MOVE TO CENTER
    ================================================= */

    if (
        galleryStage ===
        "moving-to-center"
    ) {

        const elapsed =
            timestamp -
            galleryStageStart;


        let progress =
            Math.min(
                elapsed /
                MOVE_TO_CENTER_DURATION,
                1
            );


        progress =
            smoothStep(
                progress
            );


        photos.forEach(
            (image, index) => {

                if (
                    index ===
                    galleryActiveIndex
                ) {

                    const transform =
                        interpolateTransform(
                            orbitTransforms[index],
                            centerTransform,
                            progress
                        );


                    applyPhotoTransform(
                        image,
                        transform
                    );

                } else {

                    applyPhotoTransform(
                        image,
                        orbitTransforms[index]
                    );

                }

            }
        );


        /*
         * Fully reached center.
         */

        if (
            progress >= 1
        ) {

            galleryStage =
                "holding";


            galleryStageStart =
                timestamp;


            showGalleryWord(
                galleryActiveIndex
            );

        }

    }


    /* =================================================
       HOLD AT CENTER
    ================================================= */

    else if (
        galleryStage ===
        "holding"
    ) {

        photos.forEach(
            (image, index) => {

                if (
                    index ===
                    galleryActiveIndex
                ) {

                    applyPhotoTransform(
                        image,
                        centerTransform
                    );

                } else {

                    applyPhotoTransform(
                        image,
                        orbitTransforms[index]
                    );

                }

            }
        );


        const elapsed =
            timestamp -
            galleryStageStart;


        /*
         * Keep the photo large.
         */

        if (
            elapsed >=
            CENTER_HOLD_DURATION
        ) {

            galleryStage =
                "returning";


            galleryStageStart =
                timestamp;

        }

    }


    /* =================================================
       RETURN TO ORBIT
    ================================================= */

    else if (
        galleryStage ===
        "returning"
    ) {

        const elapsed =
            timestamp -
            galleryStageStart;


        let progress =
            Math.min(
                elapsed /
                RETURN_TO_ORBIT_DURATION,
                1
            );


        progress =
            smoothStep(
                progress
            );


        photos.forEach(
            (image, index) => {

                if (
                    index ===
                    galleryActiveIndex
                ) {

                    const transform =
                        interpolateTransform(
                            centerTransform,
                            orbitTransforms[index],
                            progress
                        );


                    applyPhotoTransform(
                        image,
                        transform
                    );

                } else {

                    applyPhotoTransform(
                        image,
                        orbitTransforms[index]
                    );

                }

            }
        );


        /*
         * Completely returned.
         *
         * NOW switch to next photo.
         */

        if (
            progress >= 1
        ) {

            galleryActiveIndex =
                (
                    galleryActiveIndex +
                    1
                ) %
                galleryPhotoSources.length;


            galleryStage =
                "moving-to-center";


            galleryStageStart =
                timestamp;

        }

    }


    galleryAnimationFrame =
        requestAnimationFrame(
            animateGallery
        );
}


/* =====================================================
   START GALLERY
===================================================== */

function startGallery() {

    if (
        galleryStarted
    ) {

        return;

    }


    galleryStarted =
        true;


    galleryAngle =
        0;


    galleryActiveIndex =
        0;


    galleryStage =
        "moving-to-center";


    galleryStageStart =
        null;


    galleryLastTime =
        null;


    createGalleryPhotos();


    renderGalleryOrbit();


    galleryAnimationFrame =
        requestAnimationFrame(
            animateGallery
        );
}


/* =====================================================
   GALLERY → ENDING
===================================================== */

continueToEnding.addEventListener(
    "click",
    () => {

        if (
            galleryAnimationFrame
        ) {

            cancelAnimationFrame(
                galleryAnimationFrame
            );


            galleryAnimationFrame =
                null;

        }


        showPhase(
            endingPhase
        );

    }
);
