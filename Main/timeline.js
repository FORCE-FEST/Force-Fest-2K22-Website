 
     "use strict";

     function qs(selector, all = false) {
       return all ? document.querySelectorAll(selector) : document.querySelector(selector);
     }
     
     const sections = qs('.section_time', true);
     const timeline = qs('.timeline_main');
     const timeline_2 = qs('.timeline_main_2');
     const line = qs('.line');
     const line_2 = qs('.line_2');
     line.style.bottom = `calc(100% - 20px)`;
     line_2.style.bottom = `calc(100% - 20px)`;
     let prevScrollY = window.scrollY;
     let prevScrollY_2 = window.scrollY;
     let up, down;
     let up_2, down_2;
     let full = false;
     let full_2 = false;
     let set = 0;
     let set_2 = 0;
     const targetY = window.innerHeight * .8;
     const targetY_2 = window.innerHeight * .8;
     
     function scrollHandler() {
       const {
       scrollY
       } = window;
       const {
        scrollY_2
        } = window;
       up = scrollY < prevScrollY;
       down = !up;
       up_2 = scrollY_2 < prevScrollY_2;
       down_2 = !up_2;
       const timelineRect = timeline.getBoundingClientRect();
       const timelineRect_2 = timeline_2.getBoundingClientRect();
       const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
       const lineRect_2 = line_2.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

     
       const dist = targetY - timelineRect.top;
       const dist_2 = targetY_2 - timelineRect_2.top;
       console.log(dist);
       console.log(dist_2);
     
       if (down && !full) {
       set = Math.max(set, dist);
       line.style.bottom = `calc(100% - ${set}px)`;
       }

       if (down && !full_2) {
        set_2 = Math.max(set_2, dist_2);
        line_2.style.bottom = `calc(100% - ${set_2}px)`;
        }
     
       if (dist > timeline.offsetHeight + 50 && !full) {
       full = true;
       line.style.bottom = `-50px`;
       }
       if (dist_2 > timeline_2.offsetHeight + 50 && !full_2) {
        full_2 = true;
        line_2.style.bottom = `-50px`;
        }
     
       sections.forEach(item => {
       // console.log(item);
       const rect = item.getBoundingClientRect(); //     console.log(rect);
     
       if (rect.top + item.offsetHeight / 5 < targetY) {
         item.classList.add('show-me');
       }
       }); // console.log(up, down);
     
       prevScrollY = window.scrollY;
       prevScrollY_2 = window.scrollY;

     }
     
     scrollHandler();
     line.style.display = 'block';
     line_2.style.display = 'block';
     window.addEventListener('scroll', scrollHandler);





     
     