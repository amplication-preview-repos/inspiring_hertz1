/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MenuItem as PrismaMenuItem } from "@prisma/client";

export class MenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MenuItemCountArgs, "select">): Promise<number> {
    return this.prisma.menuItem.count(args);
  }

  async menuItems(
    args: Prisma.MenuItemFindManyArgs
  ): Promise<PrismaMenuItem[]> {
    return this.prisma.menuItem.findMany(args);
  }
  async menuItem(
    args: Prisma.MenuItemFindUniqueArgs
  ): Promise<PrismaMenuItem | null> {
    return this.prisma.menuItem.findUnique(args);
  }
  async createMenuItem(
    args: Prisma.MenuItemCreateArgs
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.create(args);
  }
  async updateMenuItem(
    args: Prisma.MenuItemUpdateArgs
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.update(args);
  }
  async deleteMenuItem(
    args: Prisma.MenuItemDeleteArgs
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.delete(args);
  }
}
