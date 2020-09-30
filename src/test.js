treeModel.treeDataModel.walk(function (node) {
    if (node.model.id === nodeId) {

        var nodeDescArray = [];

        node.walk(function (node) {
            nodeDescArray.push(node);
        });

        nodeDescArray.shift();

        var isChecked = node.model.checked;
        console.log('ichecked?', isChecked);

        /////////////////////////
        for (var b = 0; b < nodeDescArray.length; b++) {
            console.log('øøøøøøøøøø');
            console.log(nodeDescArray[b]);
            console.log('øøøøøøøøøø');
            // CHECK IF DESC HAS CHILDREN, IF TRUE SET ALL CHILDREN ACCORDING TO WHETHER DESC CHECKED IS TRUE OR FALSE
            var descDesc = [];

            // CHECK IF CHILDNODE IS CHECKED AND SET RESULT TO VARIABLE
            var childNodeChecked = nodeDescArray[b].model.checked
            console.log('IS CHECKED?333', nodeDescArray[b]);
            console.log(childNodeChecked);

            console.log('-----------------------');
            nodeDescArray[b].walk(function (node) {
                descDesc.push(node);
                //console.log(node);
            });
            // REMOVE SELF FROM ARRAY
            //descDesc.shift();

            for (var d = 0; d < descDesc.length; d++) {
                descDesc[d].model.checked = isChecked;
                console.log('.....');
                console.log(descDesc[d]);
                console.log('.....');
            }


            console.log('////////////');
            console.log(descDesc);
            console.log('////////////');
            console.log('-----------------------');


        }
        /////////////////////////
    }
});






// GET ROOT
var root = treeModel.treeDataModel.first(function (node) {
    return node.model.id === 1;
});

// GET ROOT CHILDREN
var rootChildren = root.children;

// FOR EACH ROOT CHILD
console.log('/////////////////');
for (var i = 0; i < rootChildren.length; i++) {
    var childNode = rootChildren[i];

    //console.log(rootChildren[i]);

    // GET ALL CHILDNODE DESCENDANTS INCLUDING SELF
    var childNodeDesc = [];

    //console.log('CHILDNODE WALK');
    childNode.walk(function (node) {
        childNodeDesc.push(node);
        //console.log(node);
    });
    //console.log('CHILDNODE WALK END');

    // GET SPECIFICALLY THE NODE CHECKED ON GET DESCENDANTS 
    console.log('hejhejhejhejhej');
    console.log(nodeId);
    console.log('hejhejhejhejhej');




    /*
    for (var b = 0; b < childNodeDesc.length; b++) {
        console.log('øøøøøøøøøø');
        console.log(childNodeDesc[b]);
        console.log('øøøøøøøøøø');
        // CHECK IF DESC HAS CHILDREN, IF TRUE SET ALL CHILDREN ACCORDING TO WHETHER DESC CHECKED IS TRUE OR FALSE
        if (childNodeDesc[b].hasChildren()) {
            var descDesc = [];

            // CHECK IF CHILDNODE IS CHECKED AND SET RESULT TO VARIABLE
            var childNodeChecked = childNodeDesc[b].model.checked
            console.log('IS CHECKED?333', childNodeDesc[b]);
            console.log(childNodeChecked);

            console.log('-----------------------');
            childNodeDesc[b].walk(function (node) {
                descDesc.push(node);
                //console.log(node);
            });
            // REMOVE SELF FROM ARRAY
            descDesc.shift();

            for (var d = 0; d < descDesc.length; d++) {
                descDesc[d].model.checked = childNodeChecked;
                console.log('.....');
                console.log(descDesc[d]);
                console.log('.....');
            }


            console.log('////////////');
            console.log(descDesc);
            console.log('////////////');
            console.log('-----------------------');

        }
    }
    */

    // REVERSE DESCENDANTS TO GET CHILDREN FIRST
    childNodeDesc.reverse();




    // FOR EACH DESCENDANT REVERSED
    console.log('8888888888888888');
    for (var x = 0; x < childNodeDesc.length; x++) {
        console.log('FOREACH');
        console.log(childNodeDesc[x]);
        //console.log('HAS CHILDREN?');
        //console.log(childNodeDesc[x].hasChildren());




        // GET DESC PARENT TO GET PARENTS CHILDREN AND SET AS DESC SIBLINGS
        var descParent = childNodeDesc[x].parent;

        var descSiblings = descParent.children;
        var descSiblingsLen = descSiblings.length;
        //console.log(childNodeDesc[x]);
        //console.log(descSiblingsLen);

        // ARRAY TO HOLD ALL SIBLINGS WHERE CHECKED IS TRUE
        var checkedSiblings = [];

        // FOR EACH SIBLINGS CHECK IF CHECKED IF TRUE THEN ADD TO ARRAY
        for (var y = 0; y < descSiblings.length; y++) {
            var sibling = descSiblings[y];
            if (sibling.model.checked === true) {
                checkedSiblings.push(sibling);
            }
        }

        var checkedSiblingsLen = checkedSiblings.length;

        // HVIS ALLE SIBLINGS CHECKED ER TRUE SÅ OPDATER PARENT TIL CHECKED TRUE, HVIS IKKE SÅ SÆT PARENT TIL FALSE
        if (descSiblingsLen == checkedSiblingsLen) {
            descParent.model.checked = true;
            //console.log('DESCPARENT ER DONE', descParent);
        } else {
            //console.log('DESCPARENT ER IKKE DONE', descParent);
            descParent.model.checked = false;
        };

        //console.log('Checked Siblings', checkedSiblings);







        //console.log(childNodeDesc[x].model.checked);
        //childNodeDesc[x].model.checked = false;
    }
    //console.log('xxxxxxxxxxxxxx');
    //console.log(treeModel);
    //console.log('xxxxxxxxxxxxxxx');
    //console.log(childNodeDesc);


}
console.log('/////////////////');



console.log('root children', rootChildren);


treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;

this.setState({ tree: treeModel });