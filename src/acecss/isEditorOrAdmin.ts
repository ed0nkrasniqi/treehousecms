import type { User } from '../payload-types';
import type { Access , FieldAccess } from 'payload/types';

export const isEditorOrAdmin: Access = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.role?.includes('admin') || user?.role?.includes('editor'))
  }
  
  export const isEditorOrAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
    req: { user },
  }) => {
    // Return true or false based on if the user has an admin role
    return Boolean(user?.role?.includes('admin')|| user?.role?.includes('editor'))
  }