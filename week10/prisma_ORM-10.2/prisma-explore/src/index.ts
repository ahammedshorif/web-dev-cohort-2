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

// insertUser("ah","shorif","shorif10@gmail.com","4839580")


async function updateUser(email:string,{firstName,lastName}:any){
    const res= await prisma.user.update({
        where: {email:email},
        data:{
            firstName,
            lastName,
        },
        select:{
            id:true,
        }
    })
    console.log(res);
    
}

updateUser("shorif10@gmail.com",{firstName:"shorif",lastName:"ahammed"});

