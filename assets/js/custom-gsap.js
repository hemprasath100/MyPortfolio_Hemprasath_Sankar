/***************************************************
==================== JS INDEX ======================
****************************************************

01. Smooth Scroll Js
02. Char SplitText Js
03. Text Invart Js
04. Button Hover Js
05. Banner Title
06. Footer Title
07. Portfolio Panel Js
08. Image Cliping Effect
09. Hover Reveal
10. Tesimonial Two Shape Effect
11. Portfolio Three Effect


****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. Smooth Scroll Js
  function smoothSctoll() {
    $(document).on("click", 'a[href^="#"]:not([href="#"]):not([href="#0"])', function (event) {
      var hash = this.getAttribute("href");
      if (!hash || hash.length <= 1) return;
      try {
        var target = $(hash);
        if (target.length) {
          event.preventDefault();
          if (window.smoother && typeof window.smoother.scrollTo === "function") {
            window.smoother.scrollTo(target[0], true, "top 80px");
          } else {
            var targetTop = target.offset().top - 80;
            $("html, body").stop().animate(
              {
                scrollTop: targetTop,
              },
              800,
            );
          }
        }
      } catch (err) {
        // Fallback for non-standard selector
      }
    });
  }
  smoothSctoll();
  if ($("#smooth-wrapper").length && $("#smooth-content").length && !window.location.search.includes("nosmooth=1")) {
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollSmoother,
      ScrollToPlugin,
    );
    gsap.config({
      nullTargetWarn: false,
    });
    let smoother = ScrollSmoother.create({
      smoothTouch: 0.2,
      smooth: 4,
      effects: true,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
    window.smoother = smoother;
  }

  ////////////////////////////////////////////////////
  // 02. Char SplitText Js
  if ($(window).width() > 576 && $(".tw-char-animation").length > 0) {
    let char_come = gsap.utils.toArray(".tw-char-animation");
    char_come.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });
      const itemSplitted = new SplitText(splitTextLine, {
        type: "chars, words",
      });
      gsap.set(splitTextLine, {
        perspective: 300,
      });
      itemSplitted.split({
        type: "chars, words",
      });
      tl.from(itemSplitted.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }

  ////////////////////////////////////////////////////
  // 03. Text Invart Js
  if ($(".tw-itm-title tw-itm-anim").length) {
    let staggerAmount = 0.03,
      translateXValue = 20,
      delayValue = 0.1,
      easeType = "power2.out",
      animatedTextElements = document.querySelectorAll(
        ".tw-itm-title tw-itm-anim",
      );

    animatedTextElements.forEach((element) => {
      let animationSplitText = new SplitText(element, { type: "chars, words" });

      ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        onEnter: () => {
          gsap.from(animationSplitText.chars, {
            duration: 1,
            delay: delayValue,
            x: translateXValue,
            autoAlpha: 0,
            stagger: staggerAmount,
            ease: easeType,
          });
        },
      });
    });
  }
  if ($(".tw-sub-tilte").length) {
    var agtsub = $(".tw-sub-tilte");
    if (agtsub.length == 0) return;
    gsap.registerPlugin(SplitText);
    agtsub.each(function (index, el) {
      el.split = new SplitText(el, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      if ($(el).hasClass("tw-sub-anim")) {
        gsap.set(el.split.chars, {
          opacity: 0,
          x: "7",
        });
      }
      el.anim = gsap.to(el.split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          markers: false,
          scrub: 1,
        },
        x: "0",
        y: "0",
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
      });
    });
  }
  if ($(".tw-itm-title").length) {
    var txtheading = $(".tw-itm-title");
    if (txtheading.length == 0) return;
    gsap.registerPlugin(SplitText);
    txtheading.each(function (index, el) {
      el.split = new SplitText(el, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      if ($(el).hasClass("tw-itm-anim")) {
        gsap.set(el.split.chars, {
          opacity: 0.3,
          x: "-7",
        });
      }
      el.anim = gsap.to(el.split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          end: "top 60%",
          markers: false,
          scrub: 1,
        },
        x: "0",
        y: "0",
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. Button Hover Js
  $(".tw-hover-btn").on("mouseenter", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-hover-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  $(".tw-hover-btn").on("mouseout", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-hover-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  $(".tw-hover-btn").on("mouseenter", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  $(".tw-hover-btn").on("mouseout", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });
  var hoverBtns = gsap.utils.toArray(".tw-hover-btn-wrapper");
  const hoverBtnItem = gsap.utils.toArray(".tw-hover-btn-item");
  hoverBtns.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, hoverBtnItem[i], 60);
    }
    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
      gsap.to(target, 1, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(hoverBtnItem[i], 1, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });

  ////////////////////////////////////////////////////
  // 05. Banner Title
  const mm = gsap.matchMedia();
  mm.add(
    {
      desktop: "(max-width: 1920px)",
      desktop_one: "(min-width: 1700px) and (max-width: 1800px)",
      desktop_two: "((min-width: 1600px) and (max-width: 1699px))",
      desktop_three: "((min-width: 1400px) and (max-width: 1599px)",
      desktop_four: "((min-width: 1200px) and (max-width: 1399px))",
      desktop_five: "((min-width: 992px) and (max-width: 1199px))",
      desktop_six: "((min-width: 768px) and (max-width: 991px))",
      desktop_seven: "((min-width: 576px) and (max-width: 767px))",
      desktop_eight: "((min-width: 425px) and (max-width: 575px))",
      desktop_nine: "((min-width: 375px) and (max-width: 424px))",
    },
    (context) => {
      const {
        desktop,
        desktop_one,
        desktop_two,
        desktop_three,
        desktop_four,
        desktop_five,
        desktop_six,
        desktop_seven,
        desktop_eight,
        desktop_nine,
      } = context.conditions;
      if (document.querySelector(".banner-area")) {
        const isDarkMode = document.body.classList.contains("dark");
        const bigtextColor = isDarkMode ? "#FFFFFF" : "#FF5101";
        let scaleVal, yVal, xVal;

        if (desktop) {
          scaleVal = 0.095;
          yVal = "39.5%";
          xVal = "-11.5%";
        }

        if (desktop_one) {
          scaleVal = 0.105;
          yVal = "41.5%";
          xVal = "-11.5%";
        }

        if (desktop_two) {
          scaleVal = 0.11;
          yVal = "44%";
          xVal = "-11%";
        }

        if (desktop_three) {
          scaleVal = 0.125;
          yVal = "51%";
          xVal = "-10%";
        }

        if (desktop_four) {
          scaleVal = 0.105;
          yVal = "55%";
          xVal = "-11%";
        }

        if (desktop_five) {
          scaleVal = 0.125;
          yVal = "66%";
          xVal = "-44%";
        }

        if (desktop_six) {
          scaleVal = 0.165;
          yVal = "71%";
          xVal = "-42%";
        }

        if (desktop_seven) {
          scaleVal = 0.225;
          yVal = "98%";
          xVal = "-39%";
        }

        if (desktop_eight) {
          scaleVal = 0.285;
          yVal = "119%";
          xVal = "-36%";
        }

        if (desktop_nine) {
          scaleVal = 0.305;
          yVal = "136%";
          xVal = "-35%";
        }
        const ab2 = gsap.timeline({
          duration: 5,
          scrollTrigger: {
            trigger: ".banner-area",
            scrub: 2,
            start: "top 100%",
            end: "bottom 0%",
          },
        });
        ab2.to(".big-text-wrapper .big-text", {
          scale: scaleVal,
          color: bigtextColor,
          duration: 2,
          y: yVal,
          x: xVal,
          transformOrigin: "bottom center",
        });
      }
    },
  );

  ////////////////////////////////////////////////////
  // 06. Footer Title
  if ($(".animated-title").length > 0) {
    let cta = gsap.timeline({
      repeat: -1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".animated-title",
        start: "bottom 100%-=50px",
      },
    });
    gsap.set(".animated-title", {
      opacity: 0,
    });
    gsap.to(".animated-title", {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".animated-title",
        start: "bottom 100%-=50px",
        once: true,
      },
    });
    let mySplitText = new SplitText(".animated-title", { type: "words,chars" });
    let chars = mySplitText.chars;
    let endGradient = chroma.scale([
      "#ffff",
      "#ffff",
      "#ffff",
      "#ffff",
      "#ffff",
    ]);
    cta.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: "power1.out",
      stagger: 0.04,
      transformOrigin: "center bottom",
    });
    cta.to(
      chars,
      {
        yPercent: -10,
        ease: "elastic",
        stagger: 0.03,
        duration: 0.8,
      },
      0.5,
    );
    cta.to(
      chars,
      {
        scaleY: 1,
        ease: "elastic.out",
        stagger: 0.03,
        duration: 1.5,
      },
      0.5,
    );
    cta.to(
      chars,
      {
        color: (i, el, arr) => {
          return endGradient(i / arr.length).hex();
        },
        ease: "power1.out",
        stagger: 0.03,
        duration: 0.3,
      },
      0.5,
    );
    cta.to(
      chars,
      {
        yPercent: 0,
        ease: "back",
        stagger: 0.03,
        duration: 0.8,
      },
      0.7,
    );
    cta.to(chars, {
      color: "#ffff",
      duration: 1.4,
      stagger: 0.05,
    });
  }

  ////////////////////////////////////////////////////
  // 07. Portfolio Panel Js
  let otherSections = document.querySelectorAll(".portfolio-panel");
  gsap.set(otherSections, {
    scale: 1,
  });
  otherSections.forEach((section) => {
    gsap.to(section, {
      scale: 0.8,
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "top 20%",
        end: "bottom 100%",
        endTrigger: ".portfolio-panel-area",
        pinSpacing: false,
        markers: false,
      },
    });
  });

  ///////////////////////
  // 08. Image Cliping Effect
  document.addEventListener("DOMContentLoaded", () => {
    const initialClipPaths = [
      "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
      "polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
      "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
      "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
      "polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
      "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
      "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)",
    ];
    const finalClipPaths = [
      "polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
      "polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
      "polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
      "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
      "polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
      "polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
      "polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
      "polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)",
    ];
    // Create mask divs for each wrapper
    document.querySelectorAll(".tw-clip-anim").forEach((wrapper) => {
      const img = wrapper.querySelector(".tw-anim-img[data-animate='true']");
      if (!img) return;
      const url = img.src;
      // Remove old masks if any (reuse safe)
      wrapper.querySelectorAll(".mask").forEach((m) => m.remove());
      for (let i = 0; i < 9; i++) {
        const mask = document.createElement("div");
        mask.className = `mask mask-${i + 1}`;
        Object.assign(mask.style, {
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: "0",
        });
        wrapper.appendChild(mask);
      }
    });
    // Animate masks
    gsap.utils.toArray(".tw-clip-anim").forEach((wrapper) => {
      const masks = wrapper.querySelectorAll(".mask");
      if (!masks.length) return;
      gsap.set(masks, { clipPath: (i) => initialClipPaths[i] });
      const order = [
        [".mask-1"],
        [".mask-2", ".mask-4"],
        [".mask-3", ".mask-5", ".mask-7"],
        [".mask-6", ".mask-8"],
        [".mask-9"],
      ];
      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrapper, start: "top 75%" },
      });
      order.forEach((targets, i) => {
        const validTargets = targets
          .map((c) => wrapper.querySelector(c))
          .filter((el) => el); // filter out nulls

        if (validTargets.length) {
          tl.to(
            validTargets,
            {
              clipPath: (j, el) =>
                finalClipPaths[Array.from(masks).indexOf(el)],
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
            },
            i * 0.125,
          );
        }
      });
    });
  });

  ///////////////////////
  // 09. Hover Reveal
  const hoverItem = document.querySelectorAll(".hover__reveal-item");
  function moveImage(e, item) {
    const bg = item.querySelector(".hover__reveal-bg");
    if (!bg) return;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    bg.style.transform = `translate(${x}px, ${y}px)`;
  }
  hoverItem.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      moveImage(e, item);
    });
  });

  ///////////////////////
  // 10. Tesimonial Two child (2) Effect
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    // only run on 1200px and above
    "(min-width: 1199px)": function () {
      gsap.fromTo(
        ".testimonial-two-main .testimonial-wrapper:nth-child(2)",
        {
          y: 300,
        },
        {
          y: 0,
          ease: "power9.out",
          scrollTrigger: {
            trigger: ".testimonial-two-main",
            start: "top 80%",
            end: "top 40%",
            scrub: 5.5, // рџ‘€ add smooth transition delay
            markers: false,
          },
        },
      );
    },
    // below 1199px в†’ do nothing (animation OFF)
    "(max-width: 1198px)": function () {
      // optional cleanup if needed
    },
  });

  ///////////////////////
  // 10. Tesimonial Two Shape Effect
  let nn = gsap.matchMedia();
  nn.add("(min-width: 1199px)", () => {
    gsap.fromTo(
      ".testimonial-two-shape",
      { y: "0%" },
      {
        y: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".testimonial-two-shape",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  });

  ////////////////////////////////////////////////////
  // Helper for interactive movable background word (projects & publications)
  function setupMovableBackgroundWord({
    sectionSelector,
    shapeSelector,
    titleSelector,
    cursorAmplitude = 80,
    floatAmplitude = 24,
  }) {
    const section = document.querySelector(sectionSelector);
    const shape = document.querySelector(shapeSelector);
    const title = document.querySelector(titleSelector);
    if (!section || !title || !shape) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // 1. Entrance reveal animation when visiting section
    gsap.fromTo(
      shape,
      {
        opacity: 0,
        scale: 0.94,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 2. Parallax vertical glide as user scrolls through the section
    gsap.fromTo(
      shape,
      { y: -45 },
      {
        y: 45,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );

    // 3. Up/down movements: ambient floating on visit + interactive cursor tracking
    let isInView = false;
    let isHovered = false;
    let currentCursorY = 0;
    let targetCursorY = 0;
    let floatTime = Math.random() * 10;

    // Track when user visits/scrolls the section into view
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        trigger: section,
        start: "top 95%",
        end: "bottom 5%",
        onEnter: () => {
          isInView = true;
        },
        onLeave: () => {
          isInView = false;
        },
        onEnterBack: () => {
          isInView = true;
        },
        onLeaveBack: () => {
          isInView = false;
        },
      });
    } else {
      isInView = true;
    }

    // Cursor position calculation relative to visible part of section
    function handleCursorMove(clientY) {
      isHovered = true;
      const rect = section.getBoundingClientRect();
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(window.innerHeight, rect.bottom);
      const visibleHeight = Math.max(200, visibleBottom - visibleTop);
      const visibleCenter = (visibleTop + visibleBottom) / 2;
      const normY = Math.max(-1, Math.min(1, (clientY - visibleCenter) / (visibleHeight / 2)));
      targetCursorY = normY * cursorAmplitude;
    }

    section.addEventListener("mousemove", (e) => {
      handleCursorMove(e.clientY);
    });

    section.addEventListener("mouseleave", () => {
      isHovered = false;
      targetCursorY = 0;
    });

    // Touch support for touch devices
    section.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches && e.touches[0]) {
          handleCursorMove(e.touches[0].clientY);
        }
      },
      { passive: true }
    );

    section.addEventListener("touchend", () => {
      isHovered = false;
      targetCursorY = 0;
    });

    // Unified 60fps/120fps render loop via GSAP ticker
    gsap.ticker.add(() => {
      if (!isInView && !isHovered) return;

      // Smooth damping interpolation toward target cursor Y
      currentCursorY += (targetCursorY - currentCursorY) * 0.085;

      // Continuous ambient floating oscillation when section is visited/in view
      floatTime += 0.026;
      const ambientFloatY = Math.sin(floatTime) * floatAmplitude;

      // Combine cursor offset and ambient floating
      const totalY = currentCursorY + ambientFloatY;

      gsap.set(title, {
        y: totalY,
        force3D: true,
      });
    });
  }

  ///////////////////////
  // 11. Specialized Interactive Motion for Projects Background Word
  // Spans full vertical range from top down across all project cards (matching user's red line)
  function setupProjectsInteractiveWord() {
    const section = document.querySelector("#projects");
    const shape = document.querySelector(".portfolio-three-shape");
    const title = document.querySelector(".portfolio-three-shape-title");
    if (!section || !shape || !title) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Reset initial shape transform
    gsap.set(shape, { y: 0 });

    // Entrance reveal animation when visiting section
    gsap.fromTo(
      shape,
      {
        opacity: 0,
        scale: 0.94,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Dynamic travel span matching the vertical extent of the red line (top heading down to bottom project cards)
    function calculateTravelSpan() {
      const wrapper = section.querySelector(".portfolio-three-wrapper");
      if (wrapper) {
        const shapeRect = shape.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        const span = (wrapperRect.bottom - shapeRect.top) - (title.offsetHeight * 0.35);
        return Math.max(500, Math.min(span, 1400));
      }
      return 950;
    }

    let travelSpan = calculateTravelSpan();
    window.addEventListener("resize", () => {
      travelSpan = calculateTravelSpan();
    });

    // Parallax vertical progress as user scrolls through the section
    let scrollProgress = 0;
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress = self.progress;
        },
      });
    }

    // Up/down interactive cursor tracking + smooth ambient floating
    let isInView = false;
    let isHovered = false;
    let currentCursorOffset = 0;
    let targetCursorOffset = 0;
    let floatTime = Math.random() * 10;

    // Track section visibility
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        trigger: section,
        start: "top 95%",
        end: "bottom 5%",
        onEnter: () => { isInView = true; },
        onLeave: () => { isInView = false; },
        onEnterBack: () => { isInView = true; },
        onLeaveBack: () => { isInView = false; },
      });
    } else {
      isInView = true;
    }

    // Map pointer position along the red line:
    // Top of section -> pulls word up to top
    // Bottom of projects/section -> pushes word down across the cards
    function handlePointerMove(clientY) {
      isHovered = true;
      const rect = section.getBoundingClientRect();
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(window.innerHeight, rect.bottom);
      const visibleHeight = Math.max(200, visibleBottom - visibleTop);
      const visibleCenter = (visibleTop + visibleBottom) / 2;
      const normY = Math.max(-1, Math.min(1, (clientY - visibleCenter) / (visibleHeight / 2)));
      // Responsive amplitude across the travel span
      targetCursorOffset = normY * (travelSpan * 0.45);
    }

    section.addEventListener("mousemove", (e) => {
      handlePointerMove(e.clientY);
    });

    section.addEventListener("mouseleave", () => {
      isHovered = false;
      targetCursorOffset = 0;
    });

    // Touch support for mobile/touch screens
    section.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches && e.touches[0]) {
          handlePointerMove(e.touches[0].clientY);
        }
      },
      { passive: true }
    );

    section.addEventListener("touchend", () => {
      isHovered = false;
      targetCursorOffset = 0;
    });

    // Unified 60fps/120fps render loop via GSAP ticker
    gsap.ticker.add(() => {
      if (!isInView && !isHovered) return;

      // Smooth damping interpolation toward target cursor offset
      currentCursorOffset += (targetCursorOffset - currentCursorOffset) * 0.075;

      // Continuous ambient floating oscillation when section is visited/in view
      floatTime += 0.022;
      const ambientFloatY = Math.sin(floatTime) * 36;

      // Base vertical position driven by scroll parallax
      const baseScrollY = scrollProgress * (travelSpan * 0.65);

      // Total vertical displacement
      const rawY = baseScrollY + currentCursorOffset + ambientFloatY;

      // Strict clamping between 0 (top of red line) and travelSpan (bottom of projects cards)
      const finalY = Math.max(0, Math.min(travelSpan, rawY));

      gsap.set(title, {
        y: finalY,
        force3D: true,
      });
    });
  }

  if ($(".portfolio-three-shape").length > 0) {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setupProjectsInteractiveWord();

      // Directional project entrances: left projects from left, right from right on desktop; vertical rise on mobile
      const isDesktop = window.innerWidth >= 992;
      document.querySelectorAll(".portfolio-three-item").forEach((item, idx) => {
        const isLeft = idx % 2 === 0;
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isDesktop ? (isLeft ? -45 : 45) : 0,
            y: 30,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            delay: isDesktop ? (idx % 2) * 0.12 : 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }

  ///////////////////////
  // 12. Specialized Interactive Motion for Publications Background Word
  // Spans full vertical range from top heading down across the cards (matching user's orange line)
  function setupPublicationsInteractiveWord() {
    const section = document.querySelector("#publications");
    const shape = document.querySelector(".publications-shape");
    const title = document.querySelector(".publications-shape-title");
    if (!section || !shape || !title) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Reset initial shape transform
    gsap.set(shape, { y: 0 });

    // Entrance reveal animation when visiting section
    gsap.fromTo(
      shape,
      {
        opacity: 0,
        scale: 0.94,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Dynamic travel span matching the vertical extent of the orange line (top heading to cards bottom)
    function calculateTravelSpan() {
      const cardsEl = section.querySelector(".testimonial-three-slider") || section.querySelector(".swiper-wrapper");
      if (cardsEl) {
        const shapeRect = shape.getBoundingClientRect();
        const cardsRect = cardsEl.getBoundingClientRect();
        const span = (cardsRect.bottom - shapeRect.top) - (title.offsetHeight * 0.38);
        return Math.max(340, Math.min(span, 580));
      }
      return 480;
    }

    let travelSpan = calculateTravelSpan();
    window.addEventListener("resize", () => {
      travelSpan = calculateTravelSpan();
    });

    // Parallax vertical progress as user scrolls through the section
    let scrollProgress = 0;
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress = self.progress;
        },
      });
    }

    // Up/down interactive cursor tracking + smooth ambient floating
    let isInView = false;
    let isHovered = false;
    let currentCursorOffset = 0;
    let targetCursorOffset = 0;
    let floatTime = Math.random() * 10;

    // Track section visibility
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        trigger: section,
        start: "top 95%",
        end: "bottom 5%",
        onEnter: () => { isInView = true; },
        onLeave: () => { isInView = false; },
        onEnterBack: () => { isInView = true; },
        onLeaveBack: () => { isInView = false; },
      });
    } else {
      isInView = true;
    }

    // Map pointer position along the orange line:
    // Top of section -> pulls word up to top (near heading)
    // Bottom of cards/section -> pushes word down across the cards
    function handlePointerMove(clientY) {
      isHovered = true;
      const rect = section.getBoundingClientRect();
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(window.innerHeight, rect.bottom);
      const visibleHeight = Math.max(200, visibleBottom - visibleTop);
      const visibleCenter = (visibleTop + visibleBottom) / 2;
      const normY = Math.max(-1, Math.min(1, (clientY - visibleCenter) / (visibleHeight / 2)));
      // Full responsive amplitude across the travel span
      targetCursorOffset = normY * (travelSpan * 0.55);
    }

    section.addEventListener("mousemove", (e) => {
      handlePointerMove(e.clientY);
    });

    section.addEventListener("mouseleave", () => {
      isHovered = false;
      targetCursorOffset = 0;
    });

    // Touch support for mobile/touch screens
    section.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches && e.touches[0]) {
          handlePointerMove(e.touches[0].clientY);
        }
      },
      { passive: true }
    );

    section.addEventListener("touchend", () => {
      isHovered = false;
      targetCursorOffset = 0;
    });

    // Unified 60fps/120fps render loop via GSAP ticker
    gsap.ticker.add(() => {
      if (!isInView && !isHovered) return;

      // Smooth damping interpolation toward target cursor offset
      currentCursorOffset += (targetCursorOffset - currentCursorOffset) * 0.075;

      // Continuous ambient floating oscillation when section is visited/in view
      floatTime += 0.024;
      const ambientFloatY = Math.sin(floatTime) * 32;

      // Base vertical position driven by scroll parallax
      const baseScrollY = scrollProgress * (travelSpan * 0.65);

      // Total vertical displacement
      const rawY = baseScrollY + currentCursorOffset + ambientFloatY;

      // Strict clamping between 0 (top of orange line) and travelSpan (bottom of cards)
      const finalY = Math.max(0, Math.min(travelSpan, rawY));

      gsap.set(title, {
        y: finalY,
        force3D: true,
      });
    });
  }

  if ($(".publications-shape").length > 0) {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setupPublicationsInteractiveWord();

      // Sequential cards reveal
      document.querySelectorAll(".testimonial-three-wrapper").forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: idx * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }

  ///////////////////////
  // 13. Academic Journey Progressive Timeline & Reveal Animations
  if ($("#education").length > 0) {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timelineProgress = document.querySelector(".academic-timeline-progress");
      if (timelineProgress) {
        gsap.fromTo(
          timelineProgress,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#education",
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      document.querySelectorAll("#education .education-card-box").forEach((box, idx) => {
        gsap.fromTo(
          box,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: idx * 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }

  ////////////////////////////////////////////////////
  // 13. Internship Experience Section Premium Motion & Interactive Lighting
  (function () {
    const expSection = document.querySelector("#experience");
    const cards = document.querySelectorAll(".exp-card");
    if (!expSection || !cards.length) return;

    // 1. Interactive Mouse Spotlight & Active Card Switching
    cards.forEach((card) => {
      // Mouse move dynamic radial spotlight
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });

      // Mouse enter highlights card as active
      card.addEventListener("mouseenter", () => {
        cards.forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");
      });

      // Click sets card as active
      card.addEventListener("click", () => {
        cards.forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");
      });
    });

    // Reset default active to first card if user leaves entire experience section
    expSection.addEventListener("mouseleave", () => {
      cards.forEach((c, idx) => {
        if (idx === 0) c.classList.add("is-active");
        else c.classList.remove("is-active");
      });
    });

    // Accessibility check: immediately reveal if reduced motion requested
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // 2. GSAP ScrollTrigger Stagger Entrance Animations
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      // Header entrance
      gsap.fromTo(
        ".exp-header-row",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: expSection,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Subtitle accent bar expansion
      gsap.fromTo(
        ".exp-accent-bar",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: expSection,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Timeline track vertical drawing
      gsap.fromTo(
        ".exp-timeline-track",
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1.1,
          delay: 0.25,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: expSection,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Staggered cards reveal
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: expSection,
            start: "top 90%",
            once: true,
          },
          onComplete: () => {
            // Spring pulse on nodes
            document.querySelectorAll(".exp-node-dot").forEach((dot) => {
              gsap.fromTo(
                dot,
                { scale: 1.5 },
                { scale: 1, duration: 0.5, ease: "back.out(2)" }
              );
            });
          },
        }
      );
    }
  })();

})(jQuery);
