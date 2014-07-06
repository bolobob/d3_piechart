$(function() {
  // data
  var dataset = [78, 22];
  var W = 300;
  var H = 300;
  var pie = d3.layout.pie();

  // append svg
  var svg = d3.select('body')
  .append('svg')
  .attr({
    'width': W,
    'height': H
  });

  // create pie chart
  var arcs = svg.selectAll('.arc')
  .data(pie(dataset))
  .enter()
  .append('g')
  .classed('arc', true)
  .attr({
    'transform': 'translate(' + W/2 + ', '+ H/2 + ')'
  });
});
