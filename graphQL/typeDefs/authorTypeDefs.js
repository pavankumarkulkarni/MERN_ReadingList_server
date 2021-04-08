const authorTypeDefs = `

type Author{
  id:ID
  name:String!
  age:Int
  books:[Book]
}
type Query{
  Author(id:String!):Author
  Authors:[Author!]!
}

type Mutation{
  addAuthor(name:String, age:Int):Author
}
`;

module.exports = authorTypeDefs;
