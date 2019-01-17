# Master repository for Jekyll static sites

*Requires a pull request for all submissions to 'master' branch - this is a precaution to avoid issues with deleting/messing up the purpose of the repository.*

## Built on Jekyll 3.8.5, Ruby 2.5.6
### Due to issues with precompiling Bootstrap 4 and being able to override the variables, just create CSS/Sass from Flexbox and best practices.

[CloudCannon site url] (https://polite-pea.cloudvent.net)

## Style sheets
**_main.scss** *(main.css by Jekyll default)* contains variables, fonts and import order of other stylesheets.

###Import order and simple description of each sheet:
1. _base.scss *HTML elements starting point font sizes*
2. _mixins.scss *SASS mixins used throughout sites*
3. _responsive.scss *.col, .row and other Flexbox basic elements to use*
4. _buttons.scss *all button related styles and variations*
5. _navbar.scss *navbar and nav related styles*
6. _footer.scss *all footer related styles that differ from navbar and navs*
7. _circles.scss *circle elements and overlays*
8. _posts.scss *all styles related to post previews, layouts and post-specific content*
9. _pages.scss *common page elements that are used throughout sites (hero, gallery, common heading styles, etc)*
10. _video.scss *video-related styling and CSS rules*
11. _custom.scss *individual site specific styling that probably won't be used across all sites (this file should be blank/wiped with each new site)*

## Javascript files
Imports are split between **_includes/head.html** and **_layouts/default.hmtl**

###External libraries and scripts:
1. jQuery
2. Font Awesome
3. Lightbox (if needed)
4. Google Analytics
5. Google Maps
6. reCaptcha (if site has a form)
7. Isotope (Masonry variant)

###Current list with description of each custom .js file:
1. navbar.js *navbar toggle for mobile screen*
2. video.js *responsive sizing for embedding iframes from Vimeo and YouTube*