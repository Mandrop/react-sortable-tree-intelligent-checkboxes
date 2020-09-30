import 'react-sortable-tree/style.css';

import React, { Component } from 'react';
//import axios from 'axios';
import SortableTree, { addNodeUnderParent, removeNodeAtPath, changeNodeAtPath/*, map*/ } from 'react-sortable-tree';

import TreeModel from 'tree-model';
// In your own app, you would need to use import styles once in the app
// import 'react-sortable-tree/styles.css';

const firstNames = [
    'Abraham',
    'Adam',
    'Agnar',
    'Albert',
    'Albin',
    'Albrecht',
    'Alexander',
    'Alfred',
    'Alvar',
    'Ander',
    'Andrea',
    'Arthur',
    'Axel',
    'Bengt',
    'Bernhard',
    'Carl',
    'Daniel',
    'Einar',
    'Elmer',
    'Eric',
    'Erik',
    'Gerhard',
    'Gunnar',
    'Gustaf',
    'Harald',
    'Herbert',
    'Herman',
    'Johan',
    'John',
    'Karl',
    'Leif',
    'Leonard',
    'Martin',
    'Matt',
    'Mikael',
    'Nikla',
    'Norman',
    'Oliver',
    'Olof',
    'Olvir',
    'Otto',
    'Patrik',
    'Peter',
    'Petter',
    'Robert',
    'Rupert',
    'Sigurd',
    'Simon',
];




//console.log(tree.parse(root).model.model);

/*
const treeModel = new TreeModel();

const treeData = treeModel.parse({
    id: 1,
    children: [
        {
            title: 'IT Manager',
            id: 2,
            checked: false
        },
        {
            title: 'Regional Manager',
            id: 3,
            expanded: true,
            checked: true,
            children: [{ title: 'Branch Manager', checked: false, id: 4 }]
        },
    ]
});
*/


export default class Tree extends Component {

    constructor(props) {
        super(props);



        //console.log(treeModel.parse(treeData).model.model.children);



        this.state = {
            //treeData: tree.parse(root).model.model.children,
            tree: {
                treeModel: new TreeModel(),
                get treeDataModel() {
                    return this.treeModel.parse({
                        id: 1,
                        children: [
                            {
                                title: 'IT Manager',
                                id: 2,
                                checked: false
                            },
                            {
                                title: 'Regional Manager',
                                id: 3,
                                expanded: true,
                                checked: true,
                                children: [{ title: 'Branch Manager', checked: true, id: 4 }]
                            },
                        ]
                    })
                },
                get treeData() {
                    return this.treeModel.parse(this.treeDataModel).model.model.children
                }
            },


            /*
            treeModel: new TreeModel(),
            treeDataModel: this.state.treeModel.parse({
                id: 1,
                children: [
                    {
                        title: 'IT Manager',
                        id: 2,
                        checked: false
                    },
                    {
                        title: 'Regional Manager',
                        id: 3,
                        expanded: true,
                        checked: true,
                        children: [{ title: 'Branch Manager', checked: false, id: 4 }]
                    },
                ]
            }),
            treeData: this.state.treeModel.parse(this.state.treeDataModel).model.model.children
            */
            /*
            treeData: [
                { title: 'IT Manager', checked: false, id: 1 },
                {
                    title: 'Regional Manager',
                    id: 2,
                    expanded: true,
                    checked: true,
                    subtitle: "subtitles goes here",
                    children: [{ title: 'Branch Manager', checked: false, id: 3 }],
                },
            ]*/
            /*
             treeData: [
                 {
                     value: '/app',
                     title: 'app',
                     children: [
                         {
                             value: '/app/Http',
                             title: 'Http',
                             children: [
                                 {
                                     value: '/app/Http/Controllers',
                                     title: 'Controllers',
                                     children: [{
                                         value: '/app/Http/Controllers/WelcomeController.js',
                                         title: 'WelcomeController.js',
                                     }],
                                 },
                                 {
                                     value: '/app/Http/routes.js',
                                     title: 'routes.js',
                                 },
                             ],
                         },
                         {
                             value: '/app/Providers',
                             title: 'Providers',
                             children: [{
                                 value: '/app/Providers/EventServiceProvider.js',
                                 title: 'EventServiceProvider.js',
                             }],
                         },
                     ],
                 },
                 {
                     value: '/config',
                     title: 'config',
                     children: [
                         {
                             value: '/config/app.js',
                             title: 'app.js',
                         },
                         {
                             value: '/config/database.js',
                             title: 'database.js',
                         },
                     ],
                 },
                 {
                     value: '/public',
                     title: 'public',
                     children: [
                         {
                             value: '/public/assets/',
                             title: 'assets',
                             children: [{
                                 value: '/public/assets/style.css',
                                 title: 'style.css',
                             }],
                         },
                         {
                             value: '/public/index.html',
                             title: 'index.html',
                         },
                     ],
                 },
                 {
                     value: '/.env',
                     title: '.env',
                 },
                 {
                     value: '/.gitignore',
                     title: '.gitignore',
                 },
                 {
                     value: '/README.md',
                     title: 'README.md',
                 },
             ]*/
        };
    }

    /*
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/goals/')
            .then(res => {
                //const arr = [];
                //arr.push(res.data[0].goal);
                const data = res.data[0].goal;
                this.setState({ treeData: data });
            });
    }
    */

    /*
    componentDidUpdate() {
        const treeDataObject = { goal: this.state.treeData };
        console.log('PUTTING DATA!!!');
        console.log(treeDataObject);
        axios.put('http://127.0.0.1:8000/api/goals/3/', treeDataObject)
            .catch(err => console.log(err));
    }*/

    componentDidUpdate() {
        /*
        console.log('sfdsfadsfadsfsdafdsaf');
        console.log(this.state.treeDataModel.model.children);
        console.log(this.state.treeData);
        var i = 0;
        this.state.treeDataModel.walk(function (node) {
            i = i + 1;
            console.log(node);
        });
        i = i - 1;
        console.log(i);
        */
    }


    /*
        postData = () => {
            /*
            console.log('POSTING DATA!!!');
            console.log(this.state.treeData);
            const treeDataObject = { goal: this.state.treeData };
            console.log(treeDataObject);
            axios.put('http://127.0.0.1:8000/api/goals/3/', treeDataObject)
                .catch(err => console.log(err));
            */
    /*};*/



    render() {
        var treeModel = { ...this.state.tree };
        //console.log('........');
        treeModel.treeDataModel.walk({ strategy: 'post' }, function (node) {
            //console.log(node);
        });
        //console.log('........');
        //console.log('rendering this.state');
        //console.log(this.state);
        //console.log('this.state end');
        //console.log(this.state.treeData);
        const getNodeKey = ({ treeIndex }) => treeIndex;
        const getRandomName = () =>
            firstNames[Math.floor(Math.random() * firstNames.length)];
        return (
            <div>
                <div style={{ height: 400 }}>
                    <SortableTree
                        treeData={this.state.tree.treeDataModel.model.children}
                        onChange={treeData => {

                            var treeModel = { ...this.state.tree };

                            treeModel.treeDataModel = treeModel.treeModel.parse({ id: 1, children: treeData });
                            treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;


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

                                childNode.walk(function (node) {
                                    childNodeDesc.push(node);
                                });

                                // REVERSE DESCENDANTS TO GET CHILDREN FIRST
                                childNodeDesc.reverse();


                                // FOR EACH DESCENDANT REVERSED
                                for (var x = 0; x < childNodeDesc.length; x++) {
                                    // GET DESC PARENT TO GET PARENTS CHILDREN AND SET AS DESC SIBLINGS
                                    var descParent = childNodeDesc[x].parent;

                                    var descSiblings = descParent.children;
                                    var descSiblingsLen = descSiblings.length;

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
                                    } else {
                                        descParent.model.checked = false;
                                    };

                                }


                            }

                            treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;

                            this.setState({ tree: treeModel });
                        }
                        }

                        generateNodeProps={({ node, path }) => ({
                            subtitle: (
                                <p>{node.subtitle}</p>
                            ),
                            className: 'customNodeClassName',
                            title: (
                                <input
                                    style={{ fontSize: '1.1rem' }}
                                    value={node.title}
                                    onChange={event => {

                                        const title = event.target.value;

                                        const newData = ({
                                            treeData: changeNodeAtPath({
                                                treeData: this.state.tree.treeData,
                                                path,
                                                getNodeKey,
                                                newNode: { ...node, title },

                                            }),
                                        });


                                        var treeModel = { ...this.state.tree };


                                        treeModel.treeDataModel = treeModel.treeModel.parse({ id: 1, children: newData.treeData });
                                        treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;

                                        this.setState({ tree: treeModel });


                                    }}
                                />
                            ),

                            buttons: [
                                <input checked={node.checked}
                                    onChange={() => {
                                        console.log('checking!')
                                        //console.log(node.id);

                                        var treeModel = { ...this.state.tree };

                                        const nodeId = node.id;


                                        // FIND THE NODE AND CHECK/UNCHECK
                                        treeModel.treeDataModel.walk(function (node) {
                                            if (node.model.id === nodeId) {
                                                console.log('found', node);
                                                if (node.model.checked === false) {
                                                    node.model.checked = true;
                                                } else {
                                                    node.model.checked = false;
                                                }
                                            }
                                        });



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

                                    }}

                                    type='checkbox' value='pik'></input>,

                                <button
                                    onClick={() => {
                                        const newData = addNodeUnderParent({
                                            treeData: this.state.tree.treeData,
                                            parentKey: path[path.length - 1],
                                            expandParent: true,
                                            getNodeKey,
                                            newNode: {
                                                title: `${getRandomName()} ${node.title.split(' ')[0]
                                                    }sson`,
                                                checked: false,
                                                id: null
                                            },
                                            addAsFirstChild: this.state.tree.treeData.addAsFirstChild,
                                        }).treeData;

                                        console.log('$$$$$$$');
                                        console.log(node);





                                        console.log('///////');
                                        console.log(newData);
                                        console.log('///////');


                                        var treeModel = { ...this.state.tree };

                                        treeModel.treeDataModel = treeModel.treeModel.parse({ id: 1, children: newData });
                                        treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;


                                        /* GIVE EACH CHILD UNIQUE ID */
                                        var children = 0;

                                        treeModel.treeDataModel.all( /* predicate */).forEach(function (node) {
                                            children = children + 1;
                                        });


                                        // LAV LISTE MED UNIKKE NUMRE PÅ LÆNGDE MED CHILDREN

                                        var newIdList = [];

                                        for (var x = 1; x <= children; x++) {
                                            newIdList.push(x);
                                        };

                                        console.log('abe');

                                        var nodeId;

                                        // GIV HVER CHILD DET FØRSTE NUMMER FRA LISTEN SOM ID, SLET DEREFTER NUMMERET FRA LISTEN OG GENTAG INDTIL DER IKKE ER FLERE TILBAGE
                                        treeModel.treeDataModel.walk(function (node) {
                                            if (node.model.id === null) {
                                                console.log('FOUND', node.model.title);
                                                nodeId = newIdList[0];
                                            }
                                            node.model.id = newIdList[0];

                                            newIdList.shift();
                                        });

                                        treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;

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

                                    }
                                    }
                                >
                                    Add Child
                </button>,
                                <button
                                    onClick={() => {




                                        const newData = ({
                                            treeData: removeNodeAtPath({
                                                treeData: this.state.tree.treeData,
                                                path,
                                                getNodeKey,
                                            }),
                                        });

                                        console.log('--------*---**');
                                        console.log(newData.treeData);
                                        console.log('--------*---**');

                                        var treeModel = { ...this.state.tree };


                                        treeModel.treeDataModel = treeModel.treeModel.parse({ id: 1, children: newData.treeData });
                                        treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;

                                        /* GIVE EACH CHILD UNIQUE ID */
                                        var children = 0;

                                        treeModel.treeDataModel.all( /* predicate */).forEach(function (node) {
                                            children = children + 1;
                                        });


                                        // LAV LISTE MED UNIKKE NUMRE PÅ LÆNGDE MED CHILDREN

                                        var newIdList = [];

                                        for (var x = 1; x <= children; x++) {
                                            newIdList.push(x);
                                        };

                                        // GIV HVER CHILD DET FØRSTE NUMMER FRA LISTEN SOM ID, SLET DEREFTER NUMMERET FRA LISTEN OG GENTAG INDTIL DER IKKE ER FLERE TILBAGE
                                        treeModel.treeDataModel.walk(function (node) {
                                            node.model.id = newIdList[0];
                                            newIdList.shift();
                                        });

                                        treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;



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
                                            //console.log(nodeId);
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
                                    }
                                    }
                                >
                                    Remove
                </button>,
                            ],
                        })}
                    />
                </div>

                <button
                    onClick={() => {

                        const newTree = {
                            treeData: this.state.tree.treeData.concat({
                                title: `${getRandomName()} ${getRandomName()}sson`,
                                checked: false,
                                id: 1
                            }),

                        };

                        console.log('bbbbbbbbbbbb');
                        console.log(newTree.treeData);
                        console.log('bbbbbbbbbbbb');

                        var treeModel = { ...this.state.tree };


                        treeModel.treeDataModel = treeModel.treeModel.parse({ id: 1, children: newTree.treeData });
                        treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;

                        /* GIVE EACH CHILD UNIQUE ID */
                        var children = 0;

                        treeModel.treeDataModel.all( /* predicate */).forEach(function (node) {
                            children = children + 1;
                        });


                        // LAV LISTE MED UNIKKE NUMRE PÅ LÆNGDE MED CHILDREN

                        var newIdList = [];

                        for (var x = 1; x <= children; x++) {
                            newIdList.push(x);
                        };

                        // GIV HVER CHILD DET FØRSTE NUMMER FRA LISTEN SOM ID, SLET DEREFTER NUMMERET FRA LISTEN OG GENTAG INDTIL DER IKKE ER FLERE TILBAGE
                        treeModel.treeDataModel.walk(function (node) {
                            node.model.id = newIdList[0];
                            newIdList.shift();
                        });

                        treeModel.treeData = treeModel.treeModel.parse(treeModel.treeDataModel).model.model.children;

                        this.setState({ tree: treeModel });
                    }
                    }
                >
                    Add more
        </button>
                <br />
                <label htmlFor="addAsFirstChild">
                    Add new nodes at start
          <input
                        name="addAsFirstChild"
                        type="checkbox"
                        checked={this.state.addAsFirstChild}
                        onChange={() => {
                            this.setState(state => ({
                                addAsFirstChild: !state.addAsFirstChild,
                            }))
                        }
                        }
                    />
                </label>
            </div >
        );
    }
}

