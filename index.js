require('enhanced-markmap/view.mindmap.css');

var markmap = require('enhanced-markmap/view.mindmap');
var parse = require('enhanced-markmap/parse.markdown');
var transform = require('enhanced-markmap/transform.headings');

var markdown = require('raw!./README.md');

var data = parse(markdown);

var m = markmap('svg#mindmap', transform(data), {
  preset : 'colorful',
  textIndent: 40,
  autoFit: false,
  zoomTranslate: [100, 200],
  zoomScale: 0.5,
  depth: 4,
  scale: [0.5,1]
});

document.getElementById('J_expand').onclick = function() {
  m.expand();
};