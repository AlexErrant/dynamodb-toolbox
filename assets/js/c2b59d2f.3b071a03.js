"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Entity"},l="Entity",o={unversionedId:"entity/index",id:"entity/index",title:"Entity",description:"An Entity represent a well-defined schema for a DynamoDB item. An Entity can represent things like a User, an Order, an Invoice Line Item, a Configuration Object, or whatever else you want. Each Entity defined with the DynamoDB Toolbox must be attached to a Table. An Entity defines its own attributes, but can share these attributes with other entities on the same table (either explicitly or coincidentally). Entities must flag an attribute as a partitionKey and if enabled on the table, a sortKey as well.",source:"@site/docs/entity/index.md",sourceDirName:"entity",slug:"/entity/",permalink:"/dynamodb-toolbox/docs/entity/",draft:!1,editUrl:"https://github.com/jeremydaly/dynamodb-toolbox/tree/main/docs/docs/entity/index.md",tags:[],version:"current",frontMatter:{title:"Entity"},sidebar:"docsSidebar",previous:{title:"Table Methods",permalink:"/dynamodb-toolbox/docs/table/methods"},next:{title:"Entity Properties",permalink:"/dynamodb-toolbox/docs/entity/properties"}},d={},p=[{value:"Defining an Entity",id:"defining-an-entity",level:2},{value:"Specifying Entity Definitions",id:"specifying-entity-definitions",level:2},{value:"Entity Attributes",id:"entity-attributes",level:2},{value:"Using a <code>string</code>",id:"using-a-string",level:3},{value:"Using an <code>object</code>",id:"using-an-object",level:3},{value:"Using an <code>array</code> for composite keys",id:"using-an-array-for-composite-keys",level:3},{value:"Customize defaults with a <code>function</code>",id:"customize-defaults-with-a-function",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entity"},"Entity"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"Entity")," represent a well-defined schema for a DynamoDB item. An Entity can represent things like a ",(0,r.kt)("em",{parentName:"p"},"User"),", an ",(0,r.kt)("em",{parentName:"p"},"Order"),", an ",(0,r.kt)("em",{parentName:"p"},"Invoice Line Item"),", a ",(0,r.kt)("em",{parentName:"p"},"Configuration Object"),", or whatever else you want. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," defined with the DynamoDB Toolbox must be attached to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),". An ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," defines its own attributes, but can share these attributes with other entities on the same table (either explicitly or coincidentally). Entities must flag an attribute as a ",(0,r.kt)("inlineCode",{parentName:"p"},"partitionKey")," and if enabled on the table, a ",(0,r.kt)("inlineCode",{parentName:"p"},"sortKey")," as well."),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," can have multiple Entities, but an ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," can only have one ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),"."),(0,r.kt)("h2",{id:"defining-an-entity"},"Defining an Entity"),(0,r.kt)("p",null,"To define a new entity, import it into your script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from 'dynamodb-toolbox'\n\nconst MyEntity = new Entity({\n  ...entityDefinition\n  // In Typescript, the \"as const\" statement is needed for type inference\n} as const)\n")),(0,r.kt)("h2",{id:"specifying-entity-definitions"},"Specifying Entity Definitions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," takes a single parameter of type ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," that accepts the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your entity (must be unique to its associated ",(0,r.kt)("inlineCode",{parentName:"td"},"Table"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamps"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically add and manage ",(0,r.kt)("em",{parentName:"td"},"created")," and ",(0,r.kt)("em",{parentName:"td"},"modified")," attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default ",(0,r.kt)("em",{parentName:"td"},"created")," attribute name (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"_ct"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modified"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default ",(0,r.kt)("em",{parentName:"td"},"modified")," attribute name (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"_md"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createdAlias"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default ",(0,r.kt)("em",{parentName:"td"},"created")," alias name (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"created"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modifiedAlias"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default ",(0,r.kt)("em",{parentName:"td"},"modified")," alias name (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"modified"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typeAlias"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Override default ",(0,r.kt)("em",{parentName:"td"},"entity type")," alias name (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"entity"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attributes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Complex type that specifies the schema for the entity (see below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoExecute"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables automatic execution of the DocumentClient method (default: ",(0,r.kt)("em",{parentName:"td"},"inherited from Table"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoParse"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables automatic parsing of returned data when ",(0,r.kt)("inlineCode",{parentName:"td"},"autoExecute")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," (default: ",(0,r.kt)("em",{parentName:"td"},"inherited from Table"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Table")),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"A valid ",(0,r.kt)("inlineCode",{parentName:"td"},"Table")," instance")))),(0,r.kt)("p",null,"*"," ",(0,r.kt)("em",{parentName:"p"},"An Entity can be instantiated without a ",(0,r.kt)("inlineCode",{parentName:"em"},"table"),", but most methods require one before execution")),(0,r.kt)("h2",{id:"entity-attributes"},"Entity Attributes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," property is an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," that represents the attribute names, types, and other properties related to each attribute. Each key in the object represents the ",(0,r.kt)("strong",{parentName:"p"},"attribute name")," and the value represents its properties. The value can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," that represents the DynamoDB type, an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," that allows for additional configurations, or an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," that maps to composite keys."),(0,r.kt)("h3",{id:"using-a-string"},"Using a ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,"Attributes can be defined using only a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," value that corresponds to a DynamoDB type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyEntity = new Entity({\n  attributes: {\n    attr1: 'string',\n    attr2: 'number',\n    attr3: 'list',\n    attr4: 'map'\n    // ...\n  }\n} as const)\n")),(0,r.kt)("p",null,"Valid types are: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"binary"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),"."),(0,r.kt)("h3",{id:"using-an-object"},"Using an ",(0,r.kt)("inlineCode",{parentName:"h3"},"object")),(0,r.kt)("p",null,"For more control over an attribute's behavior, you can specify an object as the attribute's value. Some options are specific to certain types. The following properties and options are available, all of which are optional:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"For Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"The DynamoDB type for this attribute. Valid values are ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"binary"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coerce"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},"Coerce values to the specified type. Enabled by default on ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),". If enabled on ",(0,r.kt)("inlineCode",{parentName:"td"},"list")," types, the interpreter will try to split a string by commas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"same as")," ",(0,r.kt)("inlineCode",{parentName:"td"},"type")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a default value (if none provided) when using ",(0,r.kt)("inlineCode",{parentName:"td"},"get"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"put"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"update")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"delete")," methods. This also supports functions for creating custom default. See more below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dependsOn"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"array")," of ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"s"),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a dependency graph for default values. For example, if the attribute uses a default value that requires another attribute's default value, this will ensure dependent attributes' default values are calculated first.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Forces ",(0,r.kt)("inlineCode",{parentName:"td"},"default")," values to be passed on every ",(0,r.kt)("inlineCode",{parentName:"td"},"update"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"save"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies whether this attribute should be saved to the table. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Hides attribute from returned JS object when auto-parsing is enabled or when using the ",(0,r.kt)("inlineCode",{parentName:"td"},"parse")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"),' or "always"'),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies whether an attribute is required. A value of ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," requires the attribute for all ",(0,r.kt)("inlineCode",{parentName:"td"},"put")," operations. A ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),' value of "always" requires the attribute for ',(0,r.kt)("inlineCode",{parentName:"td"},"put")," ",(0,r.kt)("em",{parentName:"td"},"and")," ",(0,r.kt)("inlineCode",{parentName:"td"},"update")," operations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alias"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a bidirectional alias to the attribute. All input methods can use either the attribute name or the alias when passing in data. Auto-parsing and the ",(0,r.kt)("inlineCode",{parentName:"td"},"parse")," method will map attributes to their alias.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"The inverse of the ",(0,r.kt)("inlineCode",{parentName:"td"},"alias")," option, allowing you to specify your alias as the key and map it to an attribute name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setType"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"set")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the type for ",(0,r.kt)("inlineCode",{parentName:"td"},"set")," attributes. Allowed values are ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),",",(0,r.kt)("inlineCode",{parentName:"td"},"number"),",",(0,r.kt)("inlineCode",{parentName:"td"},"binary"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"composite keys")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the delimiter to use if this attribute stores a composite key (see ",(0,r.kt)("a",{parentName:"td",href:"#using-an-array-for-composite-keys"},"Using an ",(0,r.kt)("inlineCode",{parentName:"a"},"array")," for composite keys"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prefix"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A prefix to be added to an attribute when saved to DynamoDB. This prefix will be removed when parsing the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suffix"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A suffix to be added to an attribute when saved to DynamoDB. This suffix will be removed when parsing the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transform"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that transforms the input before sending to DynamoDB. This accepts two arguments, the value passed and an object containing the data from other attributes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Flags an attribute as the 'partitionKey' for this Entity. If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it will be mapped to the Table's ",(0,r.kt)("inlineCode",{parentName:"td"},"partitionKey"),". If set to the name of an ",(0,r.kt)("strong",{parentName:"td"},"index")," defined on the Table, it will be mapped to the secondary index's ",(0,r.kt)("inlineCode",{parentName:"td"},"partitionKey"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"Flags an attribute as the 'sortKey' for this Entity. If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", it will be mapped to the Table's ",(0,r.kt)("inlineCode",{parentName:"td"},"sortKey"),". If set to the name of an ",(0,r.kt)("strong",{parentName:"td"},"index")," defined on the Table, it will be mapped to the secondary index's ",(0,r.kt)("inlineCode",{parentName:"td"},"sortKey"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," One attribute ",(0,r.kt)("em",{parentName:"p"},"must")," be set as the ",(0,r.kt)("inlineCode",{parentName:"p"},"partitionKey"),". If the table defines a ",(0,r.kt)("inlineCode",{parentName:"p"},"sortKey"),", one attribute ",(0,r.kt)("em",{parentName:"p"},"must")," be set as the ",(0,r.kt)("inlineCode",{parentName:"p"},"sortKey"),". Assignment of secondary indexes is optional. If an attribute is used across multiple indexes, an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," can be used to specify multiple values."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyEntity = new Entity({\n  attributes: {\n    user_id: { partitionKey: true },\n    sk: { type: 'number', hidden: true, sortKey: true },\n    data: { coerce: false, required: true, alias: 'name' },\n    departments: { type: 'set', setType: 'string', map: 'dept' }\n    // ...\n  }\n} as const)\n")),(0,r.kt)("h3",{id:"using-an-array-for-composite-keys"},"Using an ",(0,r.kt)("inlineCode",{parentName:"h3"},"array")," for composite keys"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecation Notice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please note that this feature will likely be deprecated in a future release."),(0,r.kt)("p",{parentName:"div"},"This data modeling technique is no longer advised since storing these values as separate attributes provides greater flexibility. You can still generate composite keys by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," Entity methods."))),(0,r.kt)("p",null,"Composite keys in DynamoDB are incredibly useful for creating hierarchies, one-to-many relationships, and other powerful querying capabilities (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html"},"here"),"). The DynamoDB Toolbox lets you easily work with composite keys in a number of ways. In some cases, there is no need to store the data in the same record twice if you are already combining it into a single attribute. By using composite key mappings, you can store data together in a single field, but still be able to structure input data ",(0,r.kt)("em",{parentName:"p"},"and")," parse the output into separate attributes."),(0,r.kt)("p",null,"The basic syntax is to specify an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," with the mapped attribute name as the first element, and the index in the composite key as the second element. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyEntity = new Entity({\n  attributes: {\n    user_id: { partitionKey: true },\n    sk: { hidden: true, sortKey: true },\n    status: ['sk', 0],\n    date: ['sk', 1]\n    // ...\n  }\n} as const)\n")),(0,r.kt)("p",null,"This maps the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," attributes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sk")," attribute. If a ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," are supplied, they will be combined into the ",(0,r.kt)("inlineCode",{parentName:"p"},"sk")," attribute as ",(0,r.kt)("inlineCode",{parentName:"p"},"[status]#[date]"),". When the data is retrieved, the ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," method will automatically split the ",(0,r.kt)("inlineCode",{parentName:"p"},"sk")," attribute and return the values with ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," keys. By default, the values of composite keys are stored as separate attributes, but that can be changed by adding in an option configuration as the third array element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Passing in a configuration"),"\nComposite key mappings are ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"s by default, but can be overridden by specifying either ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),",",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," as the third element in the array. Composite keys are automatically coerced into ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"s, so only the aforementioned types are allowed. You can also pass in a configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," as the third element. This uses the same configuration properties as above. In addition to these properties, you can also specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"save"),". This will write the value to the mapped composite key, but also add a separate attribute that stores the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyEntity = new Entity({\n  attributes: {\n    user_id: { partitionKey: true },\n    sk: { hidden: true, sortKey: true },\n    status: ['sk', 0, { type: 'boolean', save: false, default: true }],\n    date: ['sk', 1, { required: true }]\n    // ...\n  }\n} as const)\n")),(0,r.kt)("h3",{id:"customize-defaults-with-a-function"},"Customize defaults with a ",(0,r.kt)("inlineCode",{parentName:"h3"},"function")),(0,r.kt)("p",null,"In simple situations, defaults can be static values. However, for advanced use cases, you can specify an anonymous function to dynamically calculate the value. The function takes a single argument that contains an object of the inputed data (including aliases). Sadly, in TS, type inference cannot be used here as this would create a circular dependency."),(0,r.kt)("p",null,"This opens up a number of really powerful use cases:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate the current date and time:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyEntity = new Entity({\n  attributes: {\n    user_id: { partitionKey: true },\n    created: { default: () => new Date().toISOString() }\n    // ...\n  }\n} as const)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate a custom composite key:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyEntity = new Entity({\n  attributes: {\n    user_id: { partitionKey: true },\n    sk: {\n      sortKey: true,\n      default: (data: { status: boolean; date_added: string }) =>\n        `sort-${data.status}|${data.date_added}`\n    },\n    status: 'boolean',\n    date_added: 'string'\n    // ...\n  }\n} as const)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create conditional defaults:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyEntity = new Entity({\n  attributes: {\n    user_id: { partitionKey: true },\n    sk: {\n      sortKey: true,\n      default: (data: { status: boolean; date_added: string }) => {\n        if (data.status && data.date_added) {\n          return data.date_added\n        } else {\n          return null // field will not be defaulted\n        }\n      }\n    },\n    status: 'boolean',\n    date_added: 'string'\n    // ...\n  }\n} as const)\n")))}m.isMDXComponent=!0}}]);