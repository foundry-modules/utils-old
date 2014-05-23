$.deletes = function(obj, props) {
    $.each(props, function(i, prop){
        delete obj[prop];
    });
};
