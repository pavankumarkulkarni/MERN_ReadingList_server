const bookTypeDefs = `
type Book{
  id:ID
  title:String!
  author:Author
  genre:String
}

extend type Query{
  Book(id:String!):Book
  Books(author:String):[Book!]!
}

extend type Mutation{
  addBook(title:String!, authorID:String!, genre:String!):Book
  removeBook(id:String):Book
}
`;

module.exports = bookTypeDefs;
