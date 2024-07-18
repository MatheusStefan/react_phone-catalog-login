import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProductServices {
  async getAllProducts() {
    const allData = await prisma.product.findMany({include: {description: true}});

    return allData;
  }
}

export default ProductServices;
