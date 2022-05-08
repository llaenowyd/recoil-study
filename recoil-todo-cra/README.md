# TODO: Learn Recoil

This application is initialized using [Create
React App](https://create-react-app.dev/).

It uses [Recoil](https://recoiljs.org/) for state
management.

It uses [twin](https://github.com/ben-rogerson/twin.macro), [Tailwind CSS](https://tailwindcss.com/) and
[Styled Components](https://styled-components.com/) for styling.

<video width="320" height="240" controls>
  <source src="doc/color-scheme-sync.mp4" type="video/mp4">
</video>

Following the techniques documented in [
How to Sync Your React App with the System
Color Scheme [Glad Chinda, 2020]
](https://blog.bitsrc.io/how-to-sync-your-react-app-with-the-system-color-scheme-78c0ad00074b) and [
[Advanced] Theming with CSS Variables
[Ben Rogerson, 2021]
](https://github.com/ben-rogerson/twin.macro/blob/master/docs/advanced-theming.md), a method is demonstrated for implementing the common
dark / light mode theme that is well organized and
performant, and that tracks the device setting optionally,
or permits override within the application. When the
option to track device settings is enabled, and the device setting is changed, the application stays in sync,
updating without user refresh.

### Usage Instructions

1. `$ yarn` to install package dependencies
2. `$ yarn start`
