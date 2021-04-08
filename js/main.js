var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
if (!isiOS) {
    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint }, false)
        window.addEventListener('resize', function () { // on window resize
            var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
            fish.style.left = -100 + scrollamount + '%' // set position of fish in percentage (starts at -100%) }, false)
        };

        function switchStyle() {
            if (document.getElementById('styleSwitch').checked) {
                document.getElementById('gallery').classList.add("custom");
                document.getElementById('exampleModal').classList.add("custom");
            } else {
                document.getElementById('gallery').classList.remove("custom");
                document.getElementById('exampleModal').classList.remove("custom");
            }
        }