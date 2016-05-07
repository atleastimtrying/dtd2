module.exports = function(item1, item2){
  let xs = item1.x - item2.x;
  xs = xs * xs;
  let ys = item1.y - item2.y;
  ys = ys * ys;
  let range = item1.r + item2.r;
  let dist = Math.sqrt(xs + ys);
  return(dist < range);
};
