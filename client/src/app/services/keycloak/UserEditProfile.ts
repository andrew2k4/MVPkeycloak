export interface UserEditProfile{
  email: string | undefined,
  firstname: string | undefined,
  lastname: string | undefined,
  credentials : [
    {
    type : "password",
    value: string | undefined,
    temporary: false
  }
]
}

