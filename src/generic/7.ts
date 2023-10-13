/*
 You have a UserRole enumeration that is used to classify users in your application.
  You want to create a RoleDescription object that maps each user role to its description.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

export {};
