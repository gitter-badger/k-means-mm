// Some global variables
var svg;
var data;
var centroids;
var drop_centroid;
var kmeans_init;
var totalOutliers;
var EXCL;
var lookForOutliers;

function restart() {
    /* Reset global variables */
    data = [];
    centroids = [];
    drop_centroid = true;
    kmeans_init = "none";
    totalOutliers = 0; // the total amount of outliers the algorithm should return
    EXCL = 0; // error of clustering the set X using as centers the k-point set C 
    lookForOutliers = true;

    setup();

    svg.append("g")
    .attr("class", "own_region")
    .attr("opacity", 0.5);

    choose_init_method(function() {
        kmeans_init = choice;

        choose_data(function(){
            data = choice();
            draw(data);
            centroids = get_centroids();            
        });
    });


    $(document).ready(function(){
        $('#outlierCount').html(totalOutliers);
        $('#kCount').html(0);
        $('#xCount').html(0);
        $('#totalError').html(EXCL);

        if(lookForOutliers) {
            $('#totalErrorLabel').html('E(X, C, L)');
            $('#outlierRow').show();            
        } else {
            $('#totalErrorLabel').html('E(X, C)');            
            $('#outlierRow').hide();
        }
    });
}


