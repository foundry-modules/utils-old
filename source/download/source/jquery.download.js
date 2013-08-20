$.download = function(src) {
    return $("<iframe>").hide().appendTo("body").bind("load", function(){$(this).remove()}).attr("src", src);
};