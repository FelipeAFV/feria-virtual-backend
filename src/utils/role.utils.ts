import { Profile } from "../model/entity/Profile";
import { Representative } from "../model/entity/Representative";
import { Student } from "../model/entity/Student";
import { Profesor } from "../model/entity/Profesor";
import { UserRole } from "../model/enums/user-role";
import { Role } from "../model/interface/role";

export const roleGenerator = (profile: Profile, roleData: any): Role | undefined => {
    const { role } = profile;

    let userRole: Role | undefined;

    switch (role) {
        case UserRole.ALUMNO:
            // const student: Student = roleData;
            const student: Student = { id: 1, school: roleData.school, grade: roleData.grade, profile: profile};
            userRole = student;
            break;
        case UserRole.APODERADO:
            const representative: Representative = { id: 1, childNumber: roleData.childNumber, profile: profile};
            userRole = representative;
            break;
        case UserRole.PROFESOR:
            const professor: Profesor = {id: 1, school: roleData.school, subject: roleData.subject, profile: profile};
            userRole = professor;
            break;
    
        
    }

    return userRole;
};
