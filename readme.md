![Neptuno CSS Logo](logo.png "Neptuno - The CSS Library")
# Neptuno - The CSS Library

A set of UI components created with pure CSS, we always use components in our projects, I think this is the perfect tool for persons who loves simplicity.

[![license](https://img.shields.io/github/license/adrianolupossa/neptuno.svg)](./LICENSE.md)
[![GitHub contributors](https://img.shields.io/github/contributors/adrianolupossa/neptuno.svg)](https://github.com/adrianolupossa/neptuno/graphs/contributors)

[View the project](https://adrianolupossa.github.io/neptuno)

## Install

Install via link or
[download the zip](https://adrianolupossa.github.io/neptuno/build/Neptunocss.zip)

```HTML
<link rel="stylesheet" href="https://adrianolupossa.github.io/neptuno/dist/css/neptuno.min.css" /> 
```

## Components

* [Carousel](https://adrianolupossa.github.io/neptuno/dist/docs/carousel.html "Carousel or Lightbox")
* [Dropdown](https://adrianolupossa.github.io/neptuno/dist/docs/buttons.html#dropdown "Dropdown")
* [Modal](https://adrianolupossa.github.io/neptuno/dist/docs/modal.html "Modal")
* [Tabs](https://adrianolupossa.github.io/neptuno/dist/docs/tabs.html "Tab")
* [Tooltip](https://adrianolupossa.github.io/neptuno/dist/docs/buttons.html#tooltip "Tooltip")
* [Buttons](https://adrianolupossa.github.io/neptuno/dist/docs/buttons.html "Buttons")
* [Cards](https://adrianolupossa.github.io/neptuno/dist/docs/cards.html#cards "Cards")
* [Progressbar](https://adrianolupossa.github.io/neptuno/dist/docs/preloaders.html "Progressbar")
* [Alerts](https://adrianolupossa.github.io/neptuno/dist/docs/alerts.html "Alerts")
* [Tables](https://adrianolupossa.github.io/neptuno/dist/docs/tables.html "Tables")
* [Colors](https://adrianolupossa.github.io/neptuno/dist/docs/colors.html "Colors")
* [Flex Classes](https://adrianolupossa.github.io/neptuno/dist/docs/helpers.html "FlexClasses")


## Browser Support

Chrome | Firefox | Internet Explorer | Opera | Safari | Edge |
|---|---|---|---|---|---|
Android | Yes | Yes | N/A | Untested | N/A | N/A |
iOS | No | N/A | N/A | Untested | Yes |N/A |
Mac OS X | Yes | Yes | N/A | Untested |Yes |N/A |
Windows   | Yes | Yes | Yes (9+) | Untested | Yes | Yes |

| |Internet Explorer   |
|---|---|
| Carousel |9+ * |
| Dropdown |9+ * |
| Modal |9+ * |
| Tab | 9+ * |
| Tooltip | 8+ * ** |

\* [CSS3 transitions](http://caniuse.com/#search=css%20transition) are not supported in IE8 and below.

## Contributing

For [Issues](https://github.com/adrianolupossa/neptuno/issues), pull requests and coding standards.

The CSS should be modified using the [Stylus](https://learnboost.github.io/stylus/) preprocessor.

### Getting Started

```bash

# 1. Fork this repository and clone it into the current directory
git clone https://github.com/<your-username>/neptuno.git

# 2. Navigate to the newly cloned directory
cd neptuno

# 3. Install the dependencies
npm install

```

### Development

```bash

# For start the server, watching your .styl files changes and compile CSS
gulp

```

### Pull Requests

```bash

# Compress zip files
gulp build

# Open your Pull Request

```

## License

[MIT License](https://adrianolupossa.github.io/neptuno/LICENSE.md) © Adriano Lupossa
