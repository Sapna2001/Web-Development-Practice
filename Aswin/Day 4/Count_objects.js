function getCount(objects) {
    return objects.filter(function(o){return o.x==o.y}).length
}