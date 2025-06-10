import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


async function insertUser(firstName:string,lastName:string,email:string,password:string){
    const response = await prisma.user.create({
        data: {
            email,
            firstName,
            lastName,
            password,
        },
        select:{
            id: true,
            lastName:true,
        }
    })
    console.log(response);
    
}

insertUser("ah","shorif","shorif10@gmail.com","4839580")

