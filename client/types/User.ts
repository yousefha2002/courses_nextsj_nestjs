import { userRole } from "@/utils/enums/userRole"

export type User = {
    id: number
    name: string
    email: string
    role: userRole.instructor | userRole.student,
    image:string,
    bio:string
}