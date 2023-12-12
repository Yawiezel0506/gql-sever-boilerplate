import productService from "./services";
import { Product as p, Product } from "../../interfaces/products";

export const productResolvers = {
  Query: {
    getAllProducts: async (_: any, { input } : { input?: Product }) => {
        const filters = input ? input : {};
      
        const products = await productService.getAllProducts(filters);
        if (products === "products not found") {
          throw new Error("Something went wrong!");
        }
        
        return products;
      },

      getProductById: async (_: any, { id } : { id: string }) => {
        const productId = id
      
        const product = await productService.getProductById(Number(productId));
        if (!product) {
          throw new Error("Something went wrong!");
        }

        return product;
      }

    },

    Mutation: {
      updateOrInsert: async (_: any, { input } : { input: p | p[] }) => {
        const body = input ? input : [];

        const product = await productService.updateOrInsert(body);
        if (!product) {
          throw new Error("Something went wrong!");
        }

        return product;
      }
    }
  }

