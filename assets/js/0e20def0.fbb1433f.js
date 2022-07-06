"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Filters and Conditions",l={unversionedId:"filters-and-conditions/index",id:"filters-and-conditions/index",title:"Filters and Conditions",description:"DynamoDB supports Filter and Condition expressions. Filter Expressions are used to limit data returned by query and scan operations. Condition Expressions are used for data manipulation operations (put, update, delete and batchWrite), allowing you to specify a condition to determine which items should be modified.",source:"@site/docs/filters-and-conditions/index.md",sourceDirName:"filters-and-conditions",slug:"/filters-and-conditions/",permalink:"/dynamodb-toolbox/docs/filters-and-conditions/",draft:!1,editUrl:"https://github.com/jeremydaly/dynamodb-toolbox/tree/main/docs/docs/filters-and-conditions/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Entity Methods",permalink:"/dynamodb-toolbox/docs/entity/methods"},next:{title:"Projection Expressions",permalink:"/dynamodb-toolbox/docs/projection-expressions/"}},d={},p=[{value:"Expression Builder",id:"expression-builder",level:2},{value:"Complex Filters and Conditions",id:"complex-filters-and-conditions",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filters-and-conditions"},"Filters and Conditions"),(0,r.kt)("p",null,"DynamoDB supports ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.FilterExpression"},(0,r.kt)("strong",{parentName:"a"},"Filter"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html"},(0,r.kt)("strong",{parentName:"a"},"Condition"))," expressions. ",(0,r.kt)("strong",{parentName:"p"},"Filter Expressions")," are used to limit data returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scan")," operations. ",(0,r.kt)("strong",{parentName:"p"},"Condition Expressions")," are used for data manipulation operations (",(0,r.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"batchWrite"),"), allowing you to specify a condition to determine which items should be modified."),(0,r.kt)("h2",{id:"expression-builder"},"Expression Builder"),(0,r.kt)("p",null,"The DynamoDB Toolbox provides an ",(0,r.kt)("strong",{parentName:"p"},"Expression Builder")," that allows you to generate complex filters and conditions based on your Entity definitions. Any method that requires ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"conditions")," accepts an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," of ",(0,r.kt)("em",{parentName:"p"},"conditions"),", or a single ",(0,r.kt)("em",{parentName:"p"},"condition"),". ",(0,r.kt)("em",{parentName:"p"},"Condition")," objects support the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attr"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the attribute to filter on. If an ",(0,r.kt)("inlineCode",{parentName:"td"},"entity")," property is provided (or inherited from the calling operation), aliases can be used. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"attr")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"size")," must be provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies which attribute's calculated size to filter on (see ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions"},"Operators and Functions")," for more information). If an ",(0,r.kt)("inlineCode",{parentName:"td"},"entity")," property is provided (or inherited from the calling operation), aliases can be used. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"attr")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"size")," must be provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eq"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value to ",(0,r.kt)("em",{parentName:"td"},"equal")," attribute or size of attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ne"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value to ",(0,r.kt)("em",{parentName:"td"},"not equal")," attribute or size of attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lt"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value for attribute or size to be ",(0,r.kt)("em",{parentName:"td"},"less than"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lte"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value for attribute or size to be ",(0,r.kt)("em",{parentName:"td"},"less than or equal to"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gt"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value for attribute or size to be ",(0,r.kt)("em",{parentName:"td"},"greater than"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gte"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value for attribute or size to be ",(0,r.kt)("em",{parentName:"td"},"greater than or equal to"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"between"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies values for attribute or size to be ",(0,r.kt)("em",{parentName:"td"},"between"),". E.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"[18,49]"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beginsWith"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value for the attribute to ",(0,r.kt)("em",{parentName:"td"},"begin with"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies and ",(0,r.kt)("inlineCode",{parentName:"td"},"array")," of values that the attribute or size must match one value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contains"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies value that must be contained within a string or Set. (see ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions"},"Operators and Functions")," for more information)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exists"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks whether or not the attribute exists for an item. A value of ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," uses the ",(0,r.kt)("inlineCode",{parentName:"td"},"attribute_exists()")," function and a value of ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," uses the ",(0,r.kt)("inlineCode",{parentName:"td"},"attribute_not_exists()")," function (see ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions"},"Operators and Functions")," for more information)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A value that compares the attribute's type. Value must be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"S"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"N"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"NS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"BS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"BOOL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"NULL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"L"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"M")," (see ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions"},"Operators and Functions")," for more information)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"or"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes the logical evaluation to ",(0,r.kt)("inlineCode",{parentName:"td"},"OR")," (by default it's ",(0,r.kt)("inlineCode",{parentName:"td"},"AND"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"negate"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds ",(0,r.kt)("inlineCode",{parentName:"td"},"NOT")," to the condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entity"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The entity this attribute applies to. If supplied (or inherited from the calling operation), ",(0,r.kt)("inlineCode",{parentName:"td"},"attr")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"size")," properties can use the entity's aliases to reference attributes.")))),(0,r.kt)("p",null,"*"," Comparison values should equal the type of the attribute you are comparing against. If you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property, the value should be a ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("h2",{id:"complex-filters-and-conditions"},"Complex Filters and Conditions"),(0,r.kt)("p",null,"In order to create complex filters and conditions, the DynamoDB Toolbox allows you to nest and combine filters by using nested ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),"s. Array brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"]"),") act as parentheses when constructing your condition. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," in the first condition within an array will change the logical evaluation for group of conditions."),(0,r.kt)("p",null,"Condition where ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," is between 18 and 54 ",(0,r.kt)("strong",{parentName:"p"},"AND")," ",(0,r.kt)("inlineCode",{parentName:"p"},"region"),' equals "US":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"MyTable.query(\n  // ...,\n  {\n    filters: [\n      { attr: 'age', between: [18, 54] },\n      { attr: 'region', eq: 'US' }\n    ]\n  }\n)\n")),(0,r.kt)("p",null,"Condition where ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," is between 18 and 54 ",(0,r.kt)("strong",{parentName:"p"},"AND")," ",(0,r.kt)("inlineCode",{parentName:"p"},"region"),' equals "US" ',(0,r.kt)("strong",{parentName:"p"},"OR"),' "EU":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"MyTable.query(\n  // ...,\n  {\n    filters: [\n      { attr: 'age', between: [18, 54] },\n      [\n        { attr: 'region', eq: 'US' },\n        { or: true, attr: 'region', eq: 'EU' }\n      ]\n    ]\n  }\n)\n")),(0,r.kt)("p",null,"Condition where ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," is greater than 21 ",(0,r.kt)("strong",{parentName:"p"},"OR")," ((",(0,r.kt)("inlineCode",{parentName:"p"},"region"),' equals "US" ',(0,r.kt)("strong",{parentName:"p"},"AND")," ",(0,r.kt)("inlineCode",{parentName:"p"},"interests")," size is greater than 10) ",(0,r.kt)("strong",{parentName:"p"},"AND")," ",(0,r.kt)("inlineCode",{parentName:"p"},"interests")," contain ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamodb"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"serverless"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"MyTable.query(\n  // ...,\n  {\n    filters: [\n      { attr: 'age', gt: 21 },\n      [\n        [\n          { or: true, attr: 'region', eq: 'US' },\n          { size: 'interests', gt: 10 }\n        ],\n        [\n          { attr: 'interests', contains: 'nodejs' },\n          { or: true, attr: 'interests', contains: 'dynamodb' },\n          { or: true, attr: 'interests', contains: 'serverless' }\n        ]\n      ]\n    ]\n  }\n)\n")))}m.isMDXComponent=!0}}]);