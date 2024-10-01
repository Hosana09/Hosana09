import User from '../entities/user.entity'

interface CreateUserDTO{
    name: string,
    email: string
    password: string
}

export const createUser = async (data: CreateUserDTO) => {
    return User.create({data})
}

export const findAllUsers = async () => {
    return User.findMany()
}

export const findUserByEmail = async (email: string) => {
    return User.findFirst({where: {email}})
}