# NPM - Node Package Manager

## Introduction

"npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways."

With npm it is easy to install, share and distribute code, and manage dependencies in your projects. Npm is usually installed together with node.js

## Installation

To see if you have npm installed, open a command prompt or bash window and type: `npm -v`

If npm is installed, you should get a response with the version number of npm. If you are you have a version lower than 5, you can use npm to update itself: `npm install -g npm` 

If npm is not installed, you can go to [nodejs.org/](https://nodejs.org/) for instructions on how to install node and npm on your platform.

The documentation for npm and online repository search can be found at [www.npmjs.com](https://www.npmjs.com)

## Basic usage

### package.json
Managing locally installed npm packages in projects is best done by using a *package.json* file. To create a package.json for your project, navigate to the project directory, and type: `npm init`

This will start a guide that will ask you to specify a lot of settings for your project. Optionally, you can use `npm init -y` to generate a package.json with values extracted from the current directory.

### Installing dependencies
Npm packages can be installed as one of two types of dependencies:
1. "devDepencies" - typically packages for development, testing and build operations.
2. "dependencies" - packages required by your application in production.

To install a dependency, you do `npm install <package-name>` with either the `--save` or `--save-dev` flag.
This will install the package and add its name and version to *package.json*

If you have a package.json with packages added, you can run `npm install` to install all the listed packages.

If you wish to uninstall a package you can run `npm uninstall <package-name>`, and with the `--save` or `--save-dev` flag to remove it from package.json.