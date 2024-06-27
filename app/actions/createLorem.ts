"use server";

import { createschema } from "@/components/Createform";
import prisma from "@/lib/db";
import { z } from "zod";

export const createLorem1 = async (values: z.infer<typeof createschema>) => {
    console.log(values)

     const createlorem1 = await prisma.lorem.create({
        data: {
            name: values.name,
            isCompleted: false,
        }
    })


}

export const deleteLorem1 = async (id: string) => {


     const deletelorems = await prisma.lorem.delete({
        where:{
            id: id,
        },
    })


}
export const getLorem1 = async () => {

    return await prisma.lorem.findMany();


};