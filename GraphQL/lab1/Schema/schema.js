const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const ProductModel = require("../Models/product");

const ProductType = new GraphQLObjectType({
  name: "ProductType",
  description: "Product Type",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
  }),
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const OrderModel = require("../Models/order");

const OrderType = new GraphQLObjectType({
  name: "OrderType",
  description: "Order Type",
  fields: () => ({
    _id: { type: GraphQLString },
    totalPrice: { type: GraphQLInt },
    items: {
      type: new GraphQLList(ProductType),
      resolve: async (parent, args) => {
        let items = parent.items;
        let products = await ProductModel.find({ _id: { $in: items } });
        return products;
      },
    },
  }),
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "GET Requests",
  fields: () => ({
    products: {
      type: new GraphQLList(ProductType),
      description: "Get All products",
      resolve: () => {
        return ProductModel.find({});
      },
    },
    product: {
      type: ProductType,
      description: "Get Product by id",
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        let proID = args.id;
        let foundProduct = await ProductModel.findById(proID);
        return foundProduct;
      },
    },
    orders: {
      type: new GraphQLList(OrderType),
      description: "Get Orders",
      resolve: () => {
        return OrderModel.find({});
      },
    },
    order: {
      type: OrderType,
      description: "Get Order by id",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        let ordID = args.id;
        let foundOrder = await OrderModel.findById(ordID);
        return foundOrder;
      },
    },
  }),
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const mutationQuery = new GraphQLObjectType({
  name: "MutationQueries",
  description: "Mutate Products & Orders",
  fields: () => ({
    AddProduct: {
      type: ProductType,
      description: "Add Product",
      args: {
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        let nPro = new ProductModel(args);
        await nPro.save();
        return nPro;
      },
    },

    UpdateProduct: {
      type: ProductType,
      description: "Update Product",
      args: {
        ExistId: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        let ExistID = args.ExistId;
        return ProductModel.findOneAndUpdate(
          { _id: ExistID },
          { name: args.name, price: args.price }
        );
      },
    },

    DeleteProduct: {
      type: ProductType,
      description: "Delete Product ",
      args: {
        ExistId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        let ExistID = args.ExistId;
        return ProductModel.findOneAndDelete({ _id: ExistID });
      },
    },

    AddOrder: {
      type: OrderType,
      description: "Add Order",
      args: {
        totalPrice: { type: new GraphQLNonNull(GraphQLInt) },
        items: { type: new GraphQLList(GraphQLInt) },
      },
      resolve: async (parent, args) => {
        let nOrder = new OrderModel(args);
        await nOrder.save();
        return nOrder;
      },
    },

    UpdateOrder: {
      type: OrderType,
      description: "Update Order",
      args: {
        ExistId: { type: new GraphQLNonNull(GraphQLString) },
        totalPrice: { type: GraphQLInt },
        items: { type: new GraphQLList(GraphQLInt) },
      },
      resolve: (parent, args) => {
        let ExistID = args.ExistId;
        return OrderModel.findOneAndUpdate(
          { _id: ExistID },
          { totalPrice: args.totalPrice, items: args.items }
        );
      },
    },

    DeleteOrder: {
      type: OrderType,
      description: "Delete Order",
      args: {
        ExistId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        let ExistID = args.ExistId;
        return OrderModel.findOneAndDelete({ _id: ExistID });
      },
    },
  }),
});

const ourSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: mutationQuery,
});

module.exports = ourSchema;
