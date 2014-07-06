$(function() {
  // data
  var dataset = [78, 22];
  var W = 300;
  var H = 300;
  var pie = d3.layout.pie();
  var color = d3.scale.category20c();

  // append svg
  var svg = d3.select('body')
  .append('svg')
  .attr({
    'width': W,
    'height': H
  });

  // create g
  var arcs = svg.selectAll('.arc')
  .data(pie(dataset))
  .enter()
  .append('g')
  .classed('arc', true)
  .attr({
    'transform': 'translate(' + W/2 + ', '+ H/2 + ')'
  });
  // create pie chart
  var arc = d3.svg.arc()
            .innerRadius(W/2)
            .outerRadius(0);
  arcs.append('path')
  .attr('d', arc)
  .attr('fill', function(d, i) {
    return color(i);
  });
});
