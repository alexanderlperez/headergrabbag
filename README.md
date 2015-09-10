# Header Grab Bag

I spent a bit of time putting these together, but since the project they'd be used on is now defunct, huzzah! Let's share! 

- MIT Licensed
- 10+ navigation headers included as plain HTML and CSS
- Based on Bootstrap and Font-Awesome
- All JS is written in straightforward jQuery
- Configured from LESS variables (build scripts included)
- Compatible with Superfish jQuery menu plugin

### Included Header Preset Styles

- Transparent Overlay
- Transparent Overlay with Contact Information
- Transparent Overlay with Social Icons
- Transparent Overlay with Social Icons and Dark Fixed Header
- Light Background Color and Semi-Opaque Fixed Header
- Light Background Color with Social Icons
- Light Background Color with Contact Information
- Light Background Color with Menu Background Hovers (half-height, un-bordered)
- Light Background Color with Menu Background Hovers (full-height, bordered)
- Dark Background Color with Social Icons
- Dark Background Color with Menu Background Hovers (full-height, un-bordered)

### Usage

If you're looking to get up and running as soon as possible, use one of the demos by taking what's in the HTML's `<header>` tag and incorporating it into your own markup. Then include the relevant header CSS in `includes/css`.

Customizing

Before you start, make sure you have LESS installed. Try running

`lessc -v`

and if it's not installed, run: 

`npm install -g less`

#### Edit the header.less of your choice

Take a look at the demos and use those as a base of what you'd like to customize. Go to the relevant header file (ex. demo7.html uses includes/less/header-7.less) and modify the values set in the variables. Make sure the urls to the logos are correct in the header tag.

#### Build the header with the LESS compiler

All the preconfigured headers are in includes/less. In the project's top level directory, run lessc on the appropriate header file:

`lessc includes/less/header-#.less PATH_TO_YOUR_PROJECT_CSS_FOLDER/header.css`

This will create a standalone header.css for you to use.

#### Include the resulting CSS file, along with adding the header code in your HTML

`<link>` the header.css in your page, and include the relevant `<header>` in your page. The header HTML is located in the project's root directory.

#### Apply font-family styles to header elements

Modify these styles to match your font stack and add them to your site's CSS:

``` css
.nav-menu-list a {
font-family: <your font stack>
}

.post-header-info-title,
.post-header-info-content a {
font-family: <your font stack>
}
```
                       
Enjoy!

## About the Author

This was put together for the community by @lintuxvi . Check him out on Github @alexanderlperez
