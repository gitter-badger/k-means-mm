// Functions for generating data

// Returns vanilla data with 3 circular normals
function threenorm(n) {

    var rnorm = d3.random.normal(1,2); // set mean to 2 and and standard deviation to 2
    var data = new Array();    

    for(var i = 0; i < n; i++){
        var j = Math.floor(Math.random() * 3);
        if(j % 3 == 0){
            mux = -6;
            muy = -6;
        }
        else if(j % 3 == 1){
            mux = 6;
            muy = -6;
        }
        else {
            mux = 0;
            muy = 6;
        }
        data[i] = {id: i,x: rnorm() + mux, y: rnorm() + muy, cluster: 0, distanceToCentroid: 0, isOutlier: false};
    }

    return data;
}

function predefinedPoints(n) {

    var predefinedData = new Array();
        
    predefinedData[0] = {id: 0, x: 11.612469136945073,y:-4.853033660855646 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[1] = {id: 1, x: -3.7265735421811685,y:8.211724540219132 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[2] = {id: 2, x: 8.383639416295253,y:-5.412383876805773 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[3] = {id: 3, x: 11.891663578976225,y:-7.858250067398222 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[4] = {id: 4, x: 7.454793235068358,y:-5.092992012347391 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[5] = {id: 5, x: -5.1853535653991125,y:-3.5745497679728473 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[6] = {id: 6, x: 8.460430749577329,y:-4.961253398362878 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[7] = {id: 7, x: -1.4880594943062997,y:1.5943437213462168 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[8] = {id: 8, x: 8.765884391432412,y:-5.412049964116788 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[9] = {id: 9, x: -4.624234589341285,y:-1.806630026788314 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[10] = {id: 10, x: 6.527682369391556,y:-3.4587710843745603 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[11] = {id: 11, x: -0.7232920108862855,y:8.357685497495549 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[12] = {id: 12, x: -2.181052393215572,y:3.8730416968712786 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[13] = {id: 13, x: 3.4024570950302238,y:-6.217247966515568 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[14] = {id: 14, x: 0.7466328372358777,y:7.0576738859217185 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[15] = {id: 15, x: 7.496320949569551,y:-4.063341870608294 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[16] = {id: 16, x: 2.5473182481988106,y:6.637322460178446 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[17] = {id: 17, x: 1.6458599500258217,y:8.054490518259984 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[18] = {id: 18, x: 9.319775501816626,y:-5.47697001763186 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[19] = {id: 19, x: 8.047338524512787,y:-6.405318326234326 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[20] = {id: 20, x: 6.597238280681527,y:-2.624806609081174 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[21] = {id: 21, x: 1.218769795000117,y:4.005464638988018 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[22] = {id: 22, x: -2.6471618441963387,y:-6.950860027350867 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[23] = {id: 23, x: 5.77171072412086,y:-5.228282329053808 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[24] = {id: 24, x: -6.450790004935879,y:-4.907026676656638 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[25] = {id: 25, x: -3.6451285611212643,y:-4.633256952725622 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[26] = {id: 26, x: -4.285988283966368,y:-3.8538055625136924 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[27] = {id: 27, x: -3.453578086579016,y:-7.8023149861784376 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[28] = {id: 28, x: 2.558041224437077,y:7.898790333689085 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
    predefinedData[29] = {id: 29, x: -6.86706548659506,y:-1.9308440333849841 , cluster: 0, distanceToCentroid: 0, isOutlier: false};
        

    return predefinedData;    
}

function printData() {
    for(var i = 0; i < data.length; i++) {
        console.log(data[i].x + ','+ data[i].y);
    }
}

// Uniformly
function uniform(n) {
    
    var data = new Array(n);

    for(var i = 0; i < n; i++) {
        data[i] = {id: i,x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, cluster: 0, distanceToCentroid: 0, isOutlier: false};
    }

    return data;
}

// Returns a smiley face :)
function smiley(n) {
    var data = new Array(n);

    var i = 0;
    while(i < n) {
        var x = Math.random() * 20 - 10;
        var y = Math.random() * 20 - 10;

        // Smiley params
        var a = 6;
        var b = 8;
        var d = 4;
        var c = 0.15;
        var C = (c - a / (b*b));

        // The border
        if(x*x + y*y < 100 && x*x + y*y > 81) {
            data[i] = {id: i,x: x, y: y, cluster: 0, distanceToCentroid: 0, isOutlier: false};
            i += 1;
        }
        // Left eye
        else if((x+4)*(x+4) + (y-4)*(y-4) < 1) {
            data[i] = {id: i,x: x, y: y, cluster: 0, distanceToCentroid: 0, isOutlier: false};
            i += 1;
        }
        // Right eye
        else if((x-4)*(x-4) + (y-4)*(y-4) < 1) {
            data[i] = {id: i,x: x, y: y, cluster: 0, distanceToCentroid: 0, isOutlier: false};
            i += 1;
        }
        // Smile
        else if((x > -b && x < b) && (y > c*x*x - a) && (y < C*x*x - d)) {
            data[i] = {id: i,x: x, y: y, cluster: 0, distanceToCentroid: 0, isOutlier: false};
            i += 1;
        }
    }
    return data;
}

// returns a smiley face with 10% pimples
function pimples(n) {
    var face = smiley(n - Math.floor(n * 0.1));
    var pimples = uniform(Math.floor(n * 0.1));

    // Not shuffled, though...
    var res = face.concat(pimples);
    return res;
}

// Packed circles
function circle_pack(n) {
    var r = 3;
    var R = r * 1.05; // a little extra space
    var root3 = Math.sqrt(3);

    var circles = [
    {x: -2*R, y: 0},
    {x: 0, y: 0},
    {x: 2*R, y: 0},
    {x: -R, y: root3*R},
    {x: R, y: root3*R},
    {x: -R, y: -root3*R},
    {x: R, y: -root3*R}];

    var data = new Array(n);
    var i = 0;
    while(i < n) {
        var x = Math.random() * 20 - 10;
        var y = Math.random() * 20 - 10;
        for(var j = 0; j < circles.length; j++) {
            if(Math.sqrt(Math.pow((x - circles[j].x), 2) + Math.pow((y - circles[j].y), 2)) < r) {
                data[i] = {id: i,x: x, y: y, cluster: 0, distanceToCentroid: 0, isOutlier: false};
                i += 1;
            }
        }
    }

    return data;
}

// Varying density
function density_bars(n) {
    var data = new Array(n);
    for(var i = 0; i < n; i++) {
        var u = Math.floor(8 * Math.random());
        var y = Math.random() * 8 - 4;
        var x;
        if(u == 0) {
            x = Math.random() * 20 / 3 - 10;
        }
        else if(u  <= 6) {
            x = Math.random() * 20 / 3 - 10 + 20 / 3;
        }
        else {
            x = Math.random() * 20 / 3 - 10 + 40 / 3;
        }
        data[i] = {id: i,x: x, y: y, cluster: 0, distanceToCentroid: 0, isOutlier: false};
    }
    return data;
}

// DBSCAN Rings
function dbscan_rings() {
    var centers = new Array(0);
    var rings = new Array(0);

    idCounter = 0;

    var rows = 6;
    var cols = 5;
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            var MinPoints = row;
            var eps = 1.25 - col * 0.25;

            var x0 = -15 + (30 / (rows + 1)) * (row + 1);
            var y0 = -12 + (24 / (cols + 1)) * (col + 1);

            centers.push({id:idCounter, x: x0, y: y0, cluster: 0, distanceToCentroid: 0, isOutlier: false});
            idCounter++;
            for (var i = 0; i < MinPoints; i++) {
                var x = x0 + eps * Math.sin(2 * Math.PI * i / MinPoints);
                var y = y0 + eps * Math.cos(2 * Math.PI * i / MinPoints);
                rings.push({id:idCounter,x: x, y: y, cluster: 0, distanceToCentroid: 0, isOutlier: false});
                idCounter++;
            }
        }
    }

    return {centers: centers, rings: rings};
}

function dbscan_all() {
    var res = dbscan_rings();
    return res.centers.concat(res.rings);
}
