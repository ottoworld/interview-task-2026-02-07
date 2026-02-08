# Interview Task February 2026

## Links

View the commit history [on Github](https://github.com/ottoworld/interview-task-2026-02-07/commits/main/)

## Setup

- `npm install`
- `npm run storybook` to run the Storybook on <http://localhost:6006/>
- `npm run start` to run the App on <http://localhost:4200/>

## Features

All the mandatory requirements (see docs/Front End Developer Test Assets instructions.pdf) have been completed, as well as:

- A Storybook story for the Task component with multiple examples, documentation, and customisable controls to access all variants.
- Theme-level CSS variables in `src/styles.css` are used throughout.
  - Five point `--size-` scale keeps spacing consistent.
  - Enables a dark-mode theme, activated automatically when user machine prefers dark.
- Responsive page layout and task spacing at all screen sizes.
- The task component can be used on a button or link parent and has hover, focus, and click styles.
- Any number of tasks can quickly be created from data, as demonstrated in the app.
- Axe DevTools (a11y) scan: 0 issues found.
- Fully keyboard navigable, and tested with NVDA screen reader.
