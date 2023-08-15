// Import the necessary modules and libraries
const assert = require('chai').assert;
const { JSDOM } = require('jsdom');
const React = require('react');
const { mount } = require('enzyme');
const Home = require('..components/Home');

// Simulate a DOM environment using JSDOM
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;