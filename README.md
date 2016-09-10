# How to get started
- Install node.js
- Run `npm install` in the project folder
- Run `gulp` to host a web server with livereload

# Tasks
The `default` task will transpile and/or copy the necessary files to the build folder. The various tasks have been split up into their own files to increase maintainability and scalability.

- `clean` - removes the build folder
- `connect` - hosts a web server with live reload
- `copy` - copies the files that do not need any pre-processing directly into the build folder
- `sass` - pre-processes sass files into css
- `scripts` - transpiles the es2015 code into an application bundle
- `vendors` - concatenates static vendor files (polyfills) and browserifies angular 2 imports
- `watch` - Sets up watches to trigger livereload
- `index` - simply a facade that exports all the tasks in the folder

#Configuration
The file paths used in the various tasks can be configured through config.json
