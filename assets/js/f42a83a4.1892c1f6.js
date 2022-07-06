"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,b=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Table"},o="Table",l={unversionedId:"table/index",id:"table/index",title:"Table",description:"A Table represents a one-to-one mappings to your DynamoDB table. They contain information about your table's name, primary keys, indexes, and more. They are also used to organize and coordinate operations between entities. Tables support a number of methods that allow you to interact with your entities including performing queries, scans, batch gets and batch writes.",source:"@site/docs/table/index.md",sourceDirName:"table",slug:"/table/",permalink:"/dynamodb-toolbox/docs/table/",draft:!1,editUrl:"https://github.com/jeremydaly/dynamodb-toolbox/tree/main/docs/docs/table/index.md",tags:[],version:"current",frontMatter:{title:"Table"},sidebar:"docsSidebar",previous:{title:"Quick Start",permalink:"/dynamodb-toolbox/docs/introduction/quick-start"},next:{title:"Table Properties",permalink:"/dynamodb-toolbox/docs/table/properties"}},p={},s=[{value:"Defining a Table",id:"defining-a-table",level:2},{value:"Specifying Table Definitions",id:"specifying-table-definitions",level:2},{value:"Table Attributes",id:"table-attributes",level:2},{value:"Table Indexes",id:"table-indexes",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table"},"Table"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Table")," represents a one-to-one mappings to your DynamoDB table. They contain information about your table's name, primary keys, indexes, and more. They are also used to organize and coordinate operations between ",(0,r.kt)("strong",{parentName:"p"},"entities"),". Tables support a number of methods that allow you to interact with your entities including performing ",(0,r.kt)("strong",{parentName:"p"},"queries"),", ",(0,r.kt)("strong",{parentName:"p"},"scans"),", ",(0,r.kt)("strong",{parentName:"p"},"batch gets")," and ",(0,r.kt)("strong",{parentName:"p"},"batch writes"),"."),(0,r.kt)("h2",{id:"defining-a-table"},"Defining a Table"),(0,r.kt)("p",null,"To define a new table, import it into your script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table } from 'dynamodb-toolbox'\n\nconst MyTable = new Table({\n  ... // Table definition\n})\n")),(0,r.kt)("h2",{id:"specifying-table-definitions"},"Specifying Table Definitions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Table")," takes a single parameter of type ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," that accepts the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your DynamoDB table (this will be used as the ",(0,r.kt)("inlineCode",{parentName:"td"},"TableName")," property)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alias"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'An optional alias to reference your table when using "batch" features')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name of your table's partitionKey")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name of your table's sortKey")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityField"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables or overrides entity tracking field name (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"_et"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attributes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Complex type that optionally specifies the name and type of each attributes (see below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indexes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Complex type that optionally specifies the name keys of your secondary indexes (see below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoExecute"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables automatic execution of the DocumentClient method (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoParse"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables automatic parsing of returned data when ",(0,r.kt)("inlineCode",{parentName:"td"},"autoExecute")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeNullAttributes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Removes null attributes instead of setting them to ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DocumentClient"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"DocumentClient")),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"A valid instance of the AWS ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html"},"DocumentClient"))))),(0,r.kt)("p",null,"*"," ",(0,r.kt)("em",{parentName:"p"},"A Table can be instantiated without a DocumentClient, but most methods require it before execution")),(0,r.kt)("h2",{id:"table-attributes"},"Table Attributes"),(0,r.kt)("p",null,"The Table ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," property is an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," that specifies the ",(0,r.kt)("em",{parentName:"p"},"names")," and ",(0,r.kt)("em",{parentName:"p"},"types")," of attributes associated with your DynamoDB table. This is an optional input that allows you to control attribute types. If an ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," object contains an attribute with the same name, but a different type, an error will be thrown. Each key in the object represents the ",(0,r.kt)("strong",{parentName:"p"},"attribute name")," and the value represents its DynamoDB ",(0,r.kt)("strong",{parentName:"p"},"type"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyTable = new Table({\n  attributes: {\n    pk: 'string',\n    sk: 'number',\n    attr1: 'list',\n    attr2: 'map',\n    attr3: 'boolean'\n    // ...\n  }\n})\n")),(0,r.kt)("p",null,"Valid DynamoDB types are: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"binary"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),"."),(0,r.kt)("h2",{id:"table-indexes"},"Table Indexes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"indexes")," property is an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," that specifies the ",(0,r.kt)("em",{parentName:"p"},"names")," and ",(0,r.kt)("em",{parentName:"p"},"keys")," of the secondary indexes on your DynamoDB table. Each key represents the ",(0,r.kt)("strong",{parentName:"p"},"index name")," and its value must contain an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"partitionKey")," AND/OR a ",(0,r.kt)("inlineCode",{parentName:"p"},"sortKey"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"partitionKey"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"sortKey"),"s require a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," that references an table attribute. If you use the same ",(0,r.kt)("inlineCode",{parentName:"p"},"partitionKey")," as the table's ",(0,r.kt)("inlineCode",{parentName:"p"},"partitionKey"),", or you only specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"sortKey"),", the library will recognize them as Local Secondary Indexes (LSIs). Otherwise, they will be Global Secondary Indexes (GSIs)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyTable = new Table({\n  indexes: {\n    GSI1: { partitionKey: 'GSI1pk', sortKey: 'GSI1sk' },\n    GSI2: { partitionKey: 'test' },\n    LSI1: { partitionKey: 'pk', sortKey: 'other_sk' },\n    LSI2: { sortKey: 'data' }\n    // ...\n  }\n})\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," The ",(0,r.kt)("strong",{parentName:"p"},"index name")," must match the index name on your table as it will be used in queries and other operations. The index must include the table's ",(0,r.kt)("inlineCode",{parentName:"p"},"entityField")," attribute for automatic parsing of returned data."))}m.isMDXComponent=!0}}]);