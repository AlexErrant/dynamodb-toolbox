# DynamoDB Toolbox - v0.2 (WIP: Not Production Ready)

[![Build Status](https://travis-ci.org/jeremydaly/dynamodb-toolbox.svg?branch=v0.2)](https://travis-ci.org/jeremydaly/dynamodb-toolbox)
[![npm](https://img.shields.io/npm/v/dynamodb-toolbox.svg)](https://www.npmjs.com/package/dynamodb-toolbox)
[![npm](https://img.shields.io/npm/l/dynamodb-toolbox.svg)](https://www.npmjs.com/package/dynamodb-toolbox)
[![Coverage Status](https://coveralls.io/repos/github/jeremydaly/dynamodb-toolbox/badge.svg?branch=v0.2)](https://coveralls.io/github/jeremydaly/dynamodb-toolbox?branch=master)

![dynamodb-toolbox](https://user-images.githubusercontent.com/2053544/69847647-b7910780-1245-11ea-8403-a35a0158f3aa.png)

## DOCUMENTATION IS BEING UPDATED FOR v0.2
**Please note that names and references are subject to change.**

### **NOTE:** This project is in BETA. Please submit [issues/feedback](https://github.com/jeremydaly/dynamodb-toolbox/issues) or feel free to contact me on Twitter [@jeremy_daly](https://twitter.com/jeremy_daly).

The **DynamoDB Toolbox** is a simple set of tools for working with [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) and the [DocumentClient](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html). It lets you define your data models (with typings and aliases) and map them to your DynamoDB table. You can then **generate parameters** to `put`, `get`, `delete`, and `update` data by passing in a JavaScript object. The DynamoDB Toolbox will map aliases, validate and coerce types, and even write complex `UpdateExpression`s for you. 😉

### This is *NOT* an ORM (at least I hope it's not)
There are several really good Object-Relational Mapping tools (ORMs) out there for DynamoDB. There's the [Amazon DynamoDB DataMapper For JavaScript](https://github.com/awslabs/dynamodb-data-mapper-js), [@Awspilot's DynamoDB](https://awspilot.dev/) project, [@baseprime's dynamodb](https://github.com/baseprime/dynamodb) package, and many more.

If you like working with ORMs, that's great, and you should definitely give these projects a look. But personally, I really dislike ORMs (especially ones for relational databases). I typically find them cumbersome and likely to generate terribly inefficient queries (you know who you are). So this project is not an ORM, or at least it's not trying to be. You still need to use the DocumentClient directly, handle transactions and failures, and deal with things like `ConditionExpression`s, `ProjectionExpressions`, and `ConsistentRead`s. But this library will (hopefully) make the vast majority of your DynamoDB interactions super simple, and maybe even a little bit fun! 😎

## Features
- **Table Schemas and DynamoDB Typings:** Define your data models using a simple JavaScript object structure, assign DynamoDB data types, and optionally set defaults.
- **Magic UpdateExpressions:** Writing complex `UpdateExpression` strings is a major pain, especially if the input data changes the underlying clauses or requires dynamic (or nested) attributes. This library handles everything from simple `SET` clauses, to complex `list` and `set` manipulations, to defaulting values with smartly applied `if_not_exists()` to avoid overwriting data.
- **Bidirectional Aliasing:** When building single table data models, you can define multiple schemas that map to the same table. Each schema can reuse fields (like `pk`,`sk`, and `data`) and map them to different aliases depending on the item type. Your data is automatically mapped correctly when reading and writing data.
- **Composite Key Generation and Field Mapping:** Doing some fancy data modeling with composite keys? Like setting your `sortKey` to `[country]#[region]#[state]#[county]#[city]#[neighborhood]` model hierarchies? DynamoDB Toolbox lets you map data to these composite keys which will both autogenerate the value *and* parse them into fields for you.
- **Type Coercion and Validation:** Automatically coerce values to strings, numbers and booleans to ensure consistent data types in your DynamoDB tables. Validate `list`, `map`, and `set` types against your data. Oh yeah, and `set`s are automatically handled for you. 😉
- [ ] **Query Builder**
- [ ] **Scan**
- [ ] **Expression Builder**
- [ ] **Projection Builder**
- [ ] **Secondary Index Support**
- [ ] **Batch Operations**


## Installation and Basic Usage

Install the DynamoDB Toolbox with npm:
```
npm i dynamodb-toolbox
```

Require or import `Table` and `Entity` from `dynamodb-toolbox`:

```javascript
const { Table, Entity } = require('dynamodb-toolbox')
```

Create a Table:

```javascript
// Require AWS SDK and instantiate DocumentClient
const DynamoDB = require('aws-sdk/clients/dynamodb')
const DocumentClient = new DynamoDB.DocumentClient()

// Instantiate a table
const MyTable = new Table({
  // Specify table name (used by DynamoDB)
  name: 'my-table',

  // Define partition and sort keys
  partitionKey: 'pk',
  sortKey: 'sk',

  // Add the DocumentClient
  DocumentClient
})
```

Create an Entity:
- [ ] Better examples?
 
```javascript
const Customer = new Entity({
  // Specify entity name
  name: 'Customer',

  // Define attributes
  schema: {
    id: { partitionKey: true }, // flag as partitionKey
    sk: { hidden: true, sortKey: true }, // flag as sortKey and mark hidden
    name: { map: 'data' }, // map 'name' to table attribute 'data'
    co: { alias: 'company' }, // alias table attribute 'co' to 'company'
    age: { type: 'number' }, // set the attribute type
    status: ['sk',0], // composite key mapping
    date_added: ['sk',1] // composite key mapping
  },

  // Assign it to our table
  table: MyTable
})
```

Put an item:

```javascript

// Create my item (using table attribute names or aliases)
let item = {
  id: 123,
  name: 'Jane Smith',
  company: 'ACME',
  age: 35,
  status: 'active',
  date_added: '2020-04-24'
}

// Use the 'put' method of Customer
let result = await Customer.put(item)
```

The item will be saved to DynamoDB like this:

```javascript
{
  "pk": 123,
  "sk": "active#2020-04-24",
  "data": "Jane Smith",
  "co": "ACME",
  "age": 35
}
```

You can then get the data:

```javascript
// Specify my item
let item = {
  id: 123,
  status: 'active',
  date_added: '2019-04-24'
}

// Use the 'get' method of Customer
let response = await Customer.get(item)
```

This will return the object mapped to your aliases and composite key mappings:

```javascript
{
  id: 123,
  name: 'Jane Smith',
  company: 'ACME',
  age: 35,
  status: 'active',
  date_added: '2020-04-24'
}
```

## Tables

**Tables** represent one-to-one mappings to your DynamoDB tables. Then contain information about your table's name, primary keys, indexes, and more. They are also used organize and coordinate operations between **entities**. Tables support a number of methods that allow you to interact with your entities including performing **queries**, **scans**, **batch gets** and **batch writes**.

To define a new table, import it into your script:

```javascript
const { Table } = require('dynamodb-toolbox')
```

Then create a new `Table` instance by passing in a valid `Table` definition.

```javascript
const MyTable = new Table({
  ... table definition...
})
```

### Specifying Table Definitions

`Table` takes a single parameter of type `object` that accepts the following properties:

| Property | Type | Required | Description |
| -------- | :--: | :--: | ----------- |
name | `string` | yes | The name of your DynamoDB table (this will be used as the `TableName` property) |
alias | `string` | no | An optional alias to reference your table when using "batch" features |
partitionKey | `string` | yes | The attribute name of your table's partitionKey |
sortKey | `string` | no | The attribute name of your table's sortKey |
entityField | `boolean` or `string` | no | Disables or overrides entity tracking field name (default: `_ty`) |
attributes | `object` | no | Complex type that optionally specifies the name and type of each attributes (see below) |
indexes | `object` | no | Complex type that optionally specifies the name keys of your secondary indexes (see below) |
autoExecute | `boolean` | no | Enables automatic execution of the DocumentClient method (default: `true`) |
autoParse | `boolean` | no | Enables automatic parsing of returned data when `autoExecute` is `true` (default: `true`) |
DocumentClient | `DocumentClient` | * | A valid instance of the AWS [DocumentClient](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html) |

\* *A Table can be instantiated without a DocumentClient, but most methods require it before execution*

### Table Attributes

The Table `attributes` property is an `object` that specifies the *names* and *types* of attributes associated with your DynamoDB table. This is an optional input that allows you to control attribute types. If an `Entity` object contains an attribute with the same name, but a different type, an error will be thrown. Each key in the object represents the **attribute name** and the value represents its DynamoDB **type**.

```javascript
attributes: {
  pk: 'string',
  sk: 'number',
  attr1: 'list',
  attr2: 'map',
  attr3: 'boolean',
  ...
}
```

Valid DynamoDB types are: `string`, `boolean`, `number`, `list`, `map`, `binary`, or `set`.

### Table Indexes

The `indexes` property is an `object` that specifies the *names* and *keys* of the secondary indexes on your DynamoDB table. Each key represents the **index name** and its value must contain an object with a `partitionKey` AND/OR a `sortKey`. `partitionKey`s and `sortKey`s require a value of type `string` that references an table attribute. If you use the same `partitionKey` as the table's `partitionKey`, or you only specify a `sortKey`, the library will recognize them as Local Secondary Indexes (LSIs). Otherwise, they will be Global Secondary Indexes (GSIs).

```javascript
indexes: {
  GSI1: { partitionKey: 'GSI1pk', sortKey: 'GSI1sk' },
  GSI2: { partitionKey: 'test' },
  LSI1: { partitionKey: 'pk', sortKey: 'other_sk' },
  LSI2: { sortKey: 'data' }
}
```

**NOTE:** The **index name** must match the index name on your table as it will be used in queries and other operations.

## Entities

An **Entity** represent a well-defined schema for a DynamoDB item. An Entity can represent things like a *User*, an *Order*, an *Invoice Line Item*, a *Configuration Object*, or whatever else you want. Each `Entity` defined with the DynamoDB Toolbox must be attached to a `Table`. An `Entity` defines its own attributes, but can share these attributes with other entities on the same table (either explicitly or coincidentally). Entities must flag an attribute as a `partitionKey` and if enabled on the table, a `sortKey` as well. 

Note tha a `Table` can have multiple Entities, but an `Entity` can only have one `Table`.

To define a new entity, import it into your script:

```javascript
const { Entity } = require('dynamodb-toolbox')
```

Then create a new `Entity` instance by passing in a valid `Entity` definition.

```javascript
const MyEntity = new Table({
  ... entity definition...
})
```

### Specifying Entity Definitions

`Entity` takes a single parameter of type `object` that accepts the following properties:

| Property | Type | Required | Description |
| -------- | :--: | :--: | ----------- |
name | `string` | yes | The name of your entity (must be unique to its associated `Table`)
timestamps | `boolean` | no | Automatically add and manage *created* and *modified* attributes  |
created | `string` | no | Override default *created* attribute name (default: `_ct`) |
modified | `string` | no | Override default *modified* attribute name (default: `_md`) |
createdAlias | `string` | no | Override default *created* alias name (default: `created`) |
modifiedAlias | `string` | no | Override default *modified* alias name (default: `modified`) |
typeAlias | `string` | no | Override default *entity type* alias name (default: `type`) |
attributes | `object` | yes | Complex type that specifies the schema for the entity (see below) |
autoExecute | `boolean` | no | Enables automatic execution of the DocumentClient method (default: *inherited from Table*) |
autoParse | `boolean` | no | Enables automatic parsing of returned data when `autoExecute` evaluates to `true` (default: *inherited from Table*) |
table | `Table` | * | A valid `Table` instance |

\* *An Entity can be instantiated without a `table`, but most methods require one before execution*

### Attributes

The `attributes` property is an `object` that represents the attribute names, types, and other properties related to each attribute. Each key in the object represents the **attribute name** and the value represents its properties. The value can be a `string` that represents the DynamoDB type, an `object` that allows for additional configurations, or an `array` that maps to composite keys.

#### Using a `string`

Attributes can be defined using only a `string` value that corresponds to a DynamoDB type.

```javascript
schema: {
  attr1: 'string',
  attr2: 'number',
  attr3: 'list',
  attr4: 'map',
  ...
}
```

Valid types are: `string`, `boolean`, `number`, `list`, `map`, `binary`, or `set`.

#### Using an `object`

For more control over an attribute's behavior, you can specify an object as the attribute's value. Some options are specific to certain types. The following properties and options are available, all of which are optional:

| Property | Type | For Types | Description |
| -------- | :--: | :--: | ----------- |
| type  | `String` | all | The DynamoDB type for this attribute. Valid values are `string`, `boolean`, `number`, `list`, `map`, `binary`, or `set`. Defaults to `string`. |
| coerce  | `boolean` | `string`, `boolean`, `number`, `list` | Coerce values to the specified type. Enabled by default on `string`, `boolean`, and `number`. If enabled on `list` types, the interpreter will try to split a string by commas. |
| default  | *same as* `type` or `function` | all | Specifies a default value (if none provided) when using `put` or `update`. This also supports functions for creating custom default. See more below.  |
| onUpdate  | `boolean` | all | Forces `default` values to be passed on every `update`. |
| hidden  | `boolean` | all | Hides attribute from returned JavaScript object when auto-parsing is enabled or when using the `parse` method. |
| required  | `boolean` or "always" | all | Specifies whether an attribute is required. A value of `true` requires the attribute for all `put` operations. A `string` value of "always" requires the attribute for `put` *and* `update` operations. |
| alias  | `string` | all | Adds a bidirectional alias to the attribute. All input methods can use either the attribute name or the alias when passing in data. Auto-parsing and the `parse` method will map attributes to their alias. |
| map  | `string` | all | The inverse of the `alias` option, allowing you to specify your alias as the key and map it to an attribute name. |
| setType  | `string` | `set` | Specifies the type for `set` attributes. Allowed values are `string`,`number`,`binary` |
| partitionKey  | `boolean` or `string` | all | Flags an attribute as the 'partitionKey' for this Entity. If set to `true`, it will be mapped to the Table's `partitionKey`. If set to the name of an **index** defined on the Table, it will be mapped to the secondary index's `partitionKey` |
| sortKey  | `boolean` or `string` | all | Flags an attribute as the 'sortKey' for this Entity. If set to `true`, it will be mapped to the Table's `sortKey`. If set to the name of an **index** defined on the Table, it will be mapped to the secondary index's `sortKey` |

**NOTE:** One attribute *must* be set as the `partitionKey`. If the table defines a `sortKey`, one attribute *must* be set as the `sortKey`. Assignment of secondary indexes is optional. If an attribute is used across multiple indexes, an `array` can be used to specify multiple values.

Example:

```javascript
attributes: {
  user_id: { partitionKey: true },
  sk: { type: 'number', hidden: true, sortKey: true },
  data: { coerce: false, required: true, alias: 'name' },
  departments: { type: 'set', setType: 'string', map: 'dept' },
  ...
}
```

#### Using an `array` for composite keys
- [ ] This needs some work

Composite keys in DynamoDB are incredibly useful for creating hierarchies, one-to-many relationships, and other powerful querying capabilities (see [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html)). The DynamoDB Toolbox lets you easily work with composite keys in a number of ways. In many cases, there is no need to store the data in the same record twice if you are already combining it into a single attribute. By using composite key mappings, you can store data together in a single field, but still be able to structure input data *and* parse the output into separate attributes.

The basic syntax is to specify an `array` with the mapped attribute name as the first element, and the index in the composite key as the second element. For example:

```javascript
attributes: {
  user_id: { partitionKey: true  },
  sk: { hidden: true, sortKey: true },
  status: ['sk',0],
  date: ['sk',1],
  ...
}
```

This maps the `status` and `date` attributes to the `sk` attribute. If a `status` and `date` are supplied, they will be combined into the `sk` attribute as `[status]#[date]`. When the data is retrieved, the `parse` method will automatically split the `sk` attribute and return the values with `status` and `date` keys. By default, the values of composite keys are not stored as separate attributes, but that can be changed by adding in an option configuration as the third array element.

**Passing in a configuration**
Composite key mappings are `string`s by default, but can be overridden by specifying either `string`,`number`, or `boolean` as the third element in the array. Composite keys are automatically coerced into `string`s, so only the aforementioned types are allowed. You can also pass in a configuration `object` as the third element. This uses the same configuration properties as above. In addition to these properties, you can also specify a `boolean` property of `save`. This will write the value to the mapped composite key, but also add a separate attribute that stores the value.

```javascript
attributes: {
  user_id: { partitionKey: true  },
  sk: { hidden: true, sortKey: true },
  status: ['sk',0, { type: 'boolean', save: true, default: true }],
  date: ['sk',1, { required: true }],
  ...
}
```

#### Customize defaults with a `function`

In simple situations, defaults can be static values. However, for advanced use cases, you can specify an anonymous function to dynamically calculate the value. The function takes a single argument that contains an object of the inputed data (including aliases). This opens up a number of really powerful use cases:

**Generate the current date and time:**

```javascript
attributes: {
  user_id: { partitionKey: true },
  created: { default: () => new Date().toISOString() },
  ...
}
```

**Generate a custom composite key:**

```javascript
attributes: {
  user_id: { partitionKey: true  },
  sk: { sortKey: true, default: (data) => `sort-${data.status}|${data.date_added}` },
  status: 'boolean',
  date_added: 'string'
  ...
}
```

**Create conditional defaults:**

```javascript
attributes: {
  user_id: { partitionKey: true  },
  sk: { 
    sortKey: true,
    default: (data) => {
      if (data.status && data.date_added) {
        return data.date_added
      } else {
        return null // field will not be defaulted
      }
    }
  },
  status: 'boolean',
  date_added: 'string'
  ...
}
```

## Table Properties

### get/set `DocumentClient`
- [ ] Document get `DocumentClient`

### get/set `entities`
- [ ] Document get/set `entities`

### get/set `autoExecute`
- [ ] Document get/set `autoExecute`

### get/set `autoParse`
- [ ] Document get/set `autoParse`


## Table Methods

### query(partitionKey, options [,parameters])

> The Query operation finds items based on primary key values. You can query any table or secondary index that has a composite primary key (a partition key and a sort key).

The `query` method is a wrapper for the [DynamoDB Query API](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html). The DynamoDB Toolbox `query` method supports all **Query** API operations. The `query` method returns a `Promise` and you must use `await` or `.then()` to retrieve the results. An alternative, synchronous method named `queryParams` can be used, but will only retrieve the generated parameters.

The `query()` method accepts three arguments. The first argument is used to specify the `partitionKey` you wish to query against (KeyConditionExpression). The value must match the type of your table's partition key.

The second argument is an `options` object that specifies the details of your query. The following options are all optional (corresponding Query API references in parentheses):

| Option | Type | Description |
| -------- | :--: | ----------- |
| index | `string` | Name of secondary index to query. If not specified, the query executes on the primary index. (IndexName) |
| limit | `number` | The maximum number of items to retrieve per query. (Limit) |
| reverse | `boolean` | Reverse the order or returned items. (ScanIndexForward) |
| consistent | `boolean` | Enable a consistent read of the items (ConsistentRead) |
| capacity | `string` | Return the amount of consumed capacity. One of either `none`, `total`, or `indexes` (ReturnConsumedCapacity) |
| select | `string` | The attributes to be returned in the result.One of either `string` | `all_attributes`, `all_projected_attributes`, `specific_attributes`, or `count` (Select) |
| eq | same as `sortKey` | Specifies `sortKey` condition to be *equal* to supplied value. (KeyConditionExpression) |
| lt | same as `sortKey` | Specifies `sortKey` condition to be *less than* supplied value. (KeyConditionExpression) |
| lte | same as `sortKey` | Specifies `sortKey` condition to be *less than or equal to* supplied value. (KeyConditionExpression) |
| gt | same as `sortKey` | Specifies `sortKey` condition to be *greater than* supplied value. (KeyConditionExpression) |
| gte | same as `sortKey` | Specifies `sortKey` condition to be *greater than or equal to* supplied value. (KeyConditionExpression) |
| between | `array` | Specifies `sortKey` condition to be *between* the supplied values. Array should have two values matching the `sortKey` type. (KeyConditionExpression) |
| beginsWith | same as `sortKey` | Specifies `sortKey` condition to *begin with* the supplied values. (KeyConditionExpression) |
| filters | `array` or `object` | A complex `object` or `array` of objects that specifies the query's filter condition. See [Filters and Conditions](#filters-and-conditions). (FilterExpression) |
| attributes | `array` or `object` | An `array` or array of complex `objects` that specify which attributes should be returned. See [Projection Expression](#projection-expression) below (ProjectionExpression) |
| startKey | `object` | An object that contains the `partitionKey` and `sortKey` of the first item that this operation will evaluate. (ExclusiveStartKey) |
| entity | `string` | The name of a table Entity to evaluate `filters` and `attributes` against. |
autoExecute | `boolean` | Enables/disables automatic execution of the DocumentClient method (default: *inherited from Entity*) |
autoParse | `boolean` | Enables/disables automatic parsing of returned data when `autoExecute` evaluates to `true` (default: *inherited from Entity*) |

### Scan
- [ ] Document `scan` method

### BatchGet
- [ ] Document `batchGet` method

### BatchWrite
- [ ] Document `batchWrite` method

### Parse
- [ ] Document `parse` method

### Get
- [ ] Document `get` method

### Delete
- [ ] Document `delete` method

### Put
- [ ] Document `put` method

### Update
- [ ] Document `update` method



## Entity Properties

### get/set `table`
- [ ] Document get/set `table`

### get `DocumentClient`
- [ ] Document get `DocumentClient`

### get/set `autoExecute`
- [ ] Document get/set `autoExecute`

### get/set `autoParse`
- [ ] Document get/set `autoParse`

### get `partitionKey`
- [ ] Document get `partitionKey`

### get `sortKey`
- [ ] Document get `sortKey`


## Entity Methods

### attribute
- [ ] Document `attribute` method

### Parse
- [ ] Document `parse` method

### Get
- [ ] Document `get` method

### Delete
- [ ] Document `delete` method

### Put
- [ ] Document `put` method

### Update
- [ ] Document `update` method

### Query
- [ ] Document `query` method

### Scan
- [ ] Document `scan` method


## Filters and Conditions

DynamoDB supports [**Filter**](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.FilterExpression) and [**Condition**](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html) expressions. **Filter Expressions** are used to limit data returned by `query` and `scan` operations. **Condition Expressions** are used for data manipulation operations (`put`, `update`, `delete` and `batchWrite`), allowing you to specify a condition to determine which items should be modified.

The DynamoDB Toolbox provides an **Expression Builder** that allows you to generate complex filters and conditions based on your Entity definitions. Any method that requires `filters` or `conditions` accepts an `array` of *conditions*, or a single *condition*. *Condition* objects support the following properties:

| Properties | Type | Description |
| -------- | :--: | ----------- |
| attr | `string` | Specifies the attribute to filter on. If an `entity` property is provided (or inherited from the calling operation), aliases can be used. Either `attr` or `size` must be provided. |
| size | `string` | Specifies which attribute's calculated size to filter on (see [Operators and Functions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions) for more information). If an `entity` property is provided (or inherited from the calling operation), aliases can be used. Either `attr` or `size` must be provided. |
| eq | * | Specifies value to *equal* attribute or size of attribute. |
| ne | * | Specifies value to *not equal* attribute or size of attribute. |
| lt | * | Specifies value for attribute or size to be *less than*. |
| lte | * | Specifies value for attribute or size to be *less than or equal to*. |
| gt | * | Specifies value for attribute or size to be *greater than*. |
| gte | * | Specifies value for attribute or size to be *greater than or equal to*. |
| between | `array` | Specifies values for attribute or size to be *between*. E.g. `[18,49]`. |
| beginsWith | * | Specifies value for the attribute to *begin with* |
| in | `array` | Specifies and `array` of values that the attribute or size must match one value. |
| contains | `string` | Specifies value that must be contained within a string or Set. (see [Operators and Functions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions) for more information) |
| exists | `boolean` | Checks whether or not the attribute exists for an item. A value of `true` uses the `attribute_exists()` function and a value of `false` uses the `attribute_not_exists()` function (see [Operators and Functions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions) for more information) |
| type | `string` | A value that compares the attribute's type. Value must be one of `S`,`SS`, `N`, `NS`, `B`, `BS`, `BOOL`, `NULL`, `L`, or `M` (see [Operators and Functions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Functions) for more information) |
| or | `boolean` | Changes the logical evaluation to `OR` (by default it's `AND`) |
| negate | `boolean` | Adds `NOT` to the condition. |
| entity | `string` | The entity this attribute applies to. If supplied (or inherited from the calling operation), `attr` and `size` properties can use the entity's aliases to reference attributes. |

\* Comparison values should equal the type of the attribute you are comparing against. If you are using the `size` property, the value should be a `number`.

### Complex Filters and Conditions

In order to create complex filters and conditions, the DynamoDB Toolbox allows you to nest and combine filters by using nested `array`s. Array brackets (`[` and `]`) act as parentheses when constructing your condition. Using `or` in the first condition within an array will change the logical evaluation for group of conditions.

Condition where `age` is between 18 and 54 **AND** `region` equals "US":
```javascript 
filters: [
  { attr: 'age', between: [18,54]},
  { attr: 'region', eq: 'US' }
]
```

Condition where `age` is between 18 and 54 **AND** `region` equals "US" **OR** "EU":
```javascript 
filters: [
  { attr: 'age', between: [18,54]},
  [
    { attr: 'region', eq: 'US' },
    { or: true, attr: 'region', eq: 'EU' }
  ]
]
```

Condition where `age` is greater than 21  **OR** ((`region` equals "US" **AND** `interests` size is greater than 10) **AND** `interests` contain `nodejs`, `dynamodb`, or `serverless`):
```javascript 
filters: [
  { attr: 'age', gt: 21},
  [
    [
      { or: true, attr: 'region', eq: 'US' },
      { size: 'interests', gt: 10 }
    ],
    [
      { attr: 'interests', contains: 'nodejs' }
      { or: true, attr: 'interests', contains: 'dynamodb' }
      { or: true, attr: 'interests', contains: 'serverless' }
    ]
  ]
]
```

## Projection Expressions

DynamoDB supports [Projection Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ProjectionExpressions.html) that allow you to selectively return attributes when using the `get`, `query` or `scan` operations.  

The DynamoDB Toolbox provides a **Projection Builder** that allows you to generate `ProjectionExpression`s that automatically generates `ExpressionAttributeNames` as placeholders to avoid reservered word collisions. The libary allows you to work with both table attribute names and Entity aliases to specify projections.

Read operations that provide an `attributes` property accept an `array` of attribute names and/or objects that specify the Entity as the key with an array of attributes and aliases.

Retrieve the `pk`,`sk`,`name` and `created` attributes for all items:

```javascript
attributes: [ 'pk', 'sk', 'name', 'created' ]
```

Retrieve the `user_id`,`status`, and `created` attributes for the `User` entity:

```javascript
attributes: [{ User: [ 'user_id', 'status', 'created' ] }]
```

Retrieve the `pk`, `sk`, and `type` attributes for all items, the `user_id` for the `User` entity, and the `status` and `created` attributes for the the `Order` entity:

```javascript
attributes: [
  'pk', 'sk', 'type',
  { User: [ 'user_id' ] },
  { Order: [ 'status', 'created' ] }
]
```

When using the `get` method of an entity, the "entity" is assumed for the attributes. This lets you specify attributes and aliases without needing to use the object reference.

**NOTE:** When specifying entities in `query` and `scan` operations, it's possible that shared attributes will retrieve data for other matching entity types. However, the library attempts to return only the attributes specified for each entity when parsing the response.

## Additional References

- [DocumentClient SDK Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html)
- [Best Practices for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [DynamoDB, explained.](https://www.dynamodbguide.com/)
- [The DynamoDB Book](https://www.dynamodbbook.com/)

## Contributions and Feedback
Contributions, ideas and bug reports are welcome and greatly appreciated. Please add [issues](https://github.com/jeremydaly/dynamodb-toolbox/issues) for suggestions and bug reports or create a pull request. You can also contact me on Twitter: [@jeremy_daly](https://twitter.com/jeremy_daly).
